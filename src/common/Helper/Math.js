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
    static checkMethods(vue,type) {
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
}
export default Methods;