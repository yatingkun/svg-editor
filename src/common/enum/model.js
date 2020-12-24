const Model=Object.freeze({
    none:Symbol("none"),//初始状态
    painting:Symbol("painting"),//表示鼠标处于画图状态
    select:Symbol("select"),//表示元素选中状态
    resizing:Symbol("resizing"),//表示拖拽住选中框改变图形尺寸
});
export default Model;