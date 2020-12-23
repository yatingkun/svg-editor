const Model=Object.freeze({
    none:Symbol("none"),//初始状态
    painting:Symbol("painting"),//表示鼠标处于画图状态
    select:Symbol("select"),//表示选中状态
   
});
export default Model;