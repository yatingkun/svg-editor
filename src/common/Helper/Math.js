class Methods {
    constructor() { }
    static getStartPosition(dom, evt) {
        let rootSctm = dom.getScreenCTM().inverse();//获得背景svg的矩阵系
        const pt = Methods.transformPoint(evt.pageX, evt.pageY, rootSctm);//算出鼠标点击的地方相对于背景图的x,y
        return pt;
    }
    static transformPoint(x, y, m) {
        return { x: m.a * x + m.c * y + m.e, y: m.b * x + m.d * y + m.f };
    }
    /**生成一个长度为5的随机字符串 id的生成规则需要改*/
    static getUniqueId() {
        var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
            a = t.length,
            n = "";
        for (let i = 0; i < 5; i++) n += t.charAt(Math.floor(Math.random() * a));
        return n;
    }
    static checkMethods(vue, type) {
        let result = true;
        const methodsName = ["initPosition", "abledDelete", "mouseMove"]
        methodsName.forEach(methodName => {
            if (!vue[methodName]) {
                result = false;
                console.log(`${type}.vue组件失效,${methodName}()尚未实现`);
            }
        });
        return result;
    }
    /**
* Check if two rectangles (BBoxes objects) intersect each other.
* @function getIntersectionList
* @param {SVGRect}rect - 鼠标选中空白区域拖动时产生的矩形
* @param {SVGRect}svgcontent - 画布区域（id为svgcontent的svg）
* @param {Element[]}curBBoxes - 画布中可见的svg元素
* @returns {Element[]}
*/
    static getIntersectionList = function (rect, svgcontent, curBBoxes) {
        if (!rect) {
            return null;
        }

        let rubberBBox;
        rubberBBox = svgcontent.createSVGRect();
        rubberBBox.x = rect.x;
        rubberBBox.y = rect.y;
        rubberBBox.width = rect.width;
        rubberBBox.height = rect.height;

        let resultList = null;
        if (!resultList || typeof resultList.item !== 'function') {
            resultList = [];

            let i = curBBoxes.length;
            while (i--) {
                if (!rubberBBox.width) {
                    continue;
                }
                if (Methods.rectsIntersect(rubberBBox, curBBoxes[i].bbox)) {
                    resultList.push(curBBoxes[i]);
                }
            }
        }
        return resultList;
    };
    /**
 * 检查两个元素是否相交
 * @function module:math.rectsIntersect
 * @param {SVGRect} r1 - The first BBox-like object
 * @param {SVGRect} r2 - The second BBox-like object
 * @returns {boolean} True if rectangles intersect
 */
    static rectsIntersect = function (r1, r2) {
        return r2.x < (r1.x + r1.width) &&
            (r2.x + r2.width) > r1.x &&
            r2.y < (r1.y + r1.height) &&
            (r2.y + r2.height) > r1.y;
    };
}
export default Methods;