<template>
  <div id="rulers">
    <div id="ruler_corner"></div>
    <div id="ruler_x">
      <div id="ruler_x_cursor"></div>
      <div :style="'width:'+width+'px;'">
        <canvas height="15" :width="width"></canvas>
      </div>
    </div>
    <div id="ruler_y">
      <div id="ruler_y_cursor"></div>
      <div :style="'height:'+height+'px;'">
        <canvas width="15" :height="height"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"ruler-com",
    data(){
        return{
            width:0,
            height:0
        }
    },
    methods:{
    //  updateRulers(scanvas, zoom) {
    //     let zoom = zoom||1;//缩放的倍数
    //     let scanvas = $("#svgcanvas");
    //     let limit = 30000;

    //     var c_elem = svgCanvas.getContentElem();

    //     var units = getTypeMap();
    //     var unit = units[curConfig.baseUnit]; // 1 = 1px

    //     for (var d = 0; d < 2; d++) {
    //       var is_x = (d === 0);
    //       var dim = is_x ? 'x' : 'y';
    //       var lentype = is_x ? 'width' : 'height';
    //       var content_d = c_elem.getAttribute(dim) - 0;

    //       var $hcanv_orig = $('#ruler_' + dim + ' canvas:first');

    //       // Bit of a hack to fully clear the canvas in Safari & IE9
    //       var $hcanv = $hcanv_orig.clone();
    //       $hcanv_orig.replaceWith($hcanv);

    //       var hcanv = $hcanv[0];

    //       // Set the canvas size to the width of the container
    //       var ruler_len = scanvas[lentype]() * 2;
    //       var total_len = ruler_len;
    //       hcanv.parentNode.style[lentype] = total_len + 'px';

    //       var canv_count = 1;
    //       var ctx_num = 0;
    //       var ctx_arr;
    //       var ctx = hcanv.getContext("2d");

    //       ctx.fillStyle = "rgb(200,0,0)";
    //       ctx.fillRect(0, 0, hcanv.width, hcanv.height);

    //       // Remove any existing canvasses
    //       $hcanv.siblings().remove();

    //       // Create multiple canvases when necessary (due to browser limits)
    //       if (ruler_len >= limit) {
    //         var num = parseInt(ruler_len / limit) + 1;
    //         ctx_arr = Array(num);
    //         ctx_arr[0] = ctx;
    //         for (var i = 1; i < num; i++) {
    //           hcanv[lentype] = limit;
    //           var copy = hcanv.cloneNode(true);
    //           hcanv.parentNode.appendChild(copy);
    //           ctx_arr[i] = copy.getContext('2d');
    //         }

    //         copy[lentype] = ruler_len % limit;

    //         // set copy width to last
    //         ruler_len = limit;
    //       }

    //       hcanv[lentype] = ruler_len;

    //       var u_multi = unit * zoom;

    //       // Calculate the main number interval
    //       var raw_m = 50 / u_multi;
    //       var multi = 1;
    //       for (var i = 0; i < r_intervals.length; i++) {
    //         var num = r_intervals[i];
    //         multi = num;
    //         if (raw_m <= num) {
    //           break;
    //         }
    //       }

    //       var big_int = multi * u_multi;
    //       ctx.font = "normal 9px 'Lucida Grande', sans-serif";
    //       ctx.fillStyle = "#777";

    //       var ruler_d = ((content_d / u_multi) % multi) * u_multi;
    //       var label_pos = ruler_d - big_int;
    //       for (; ruler_d < total_len; ruler_d += big_int) {
    //         label_pos += big_int;
    //         var real_d = ruler_d - content_d;

    //         var cur_d = Math.round(ruler_d) + .5;
    //         if (is_x) {
    //           ctx.moveTo(cur_d, 15);
    //           ctx.lineTo(cur_d, 0);
    //         } else {
    //           ctx.moveTo(15, cur_d);
    //           ctx.lineTo(0, cur_d);
    //         }

    //         var num = (label_pos - content_d) / u_multi;
    //         var label;
    //         if (multi >= 1) {
    //           label = Math.round(num);
    //         } else {
    //           var decs = (multi + '').split('.')[1].length;
    //           label = num.toFixed(decs) - 0;
    //         }

    //         // Do anything special for negative numbers?
    //         //            var is_neg = label < 0;
    //         //            real_d2 = Math.abs(real_d2);

    //         // Change 1000s to Ks
    //         if (label !== 0 && label !== 1000 && label % 1000 === 0) {
    //           label = (label / 1000) + 'K';
    //         }

    //         if (is_x) {
    //           ctx.fillText(label, ruler_d + 2, 8);
    //           ctx.fillStyle = "#777";
    //         } else {
    //           var str = (label + '').split('');
    //           for (var i = 0; i < str.length; i++) {
    //             ctx.fillText(str[i], 1, (ruler_d + 9) + i * 9);
    //             ctx.fillStyle = "#777";
    //           }
    //         }

    //         var part = big_int / 10;
    //         for (var i = 1; i < 10; i++) {
    //           var sub_d = Math.round(ruler_d + part * i) + .5;
    //           if (ctx_arr && sub_d > ruler_len) {
    //             ctx_num++;
    //             ctx.stroke();
    //             if (ctx_num >= ctx_arr.length) {
    //               i = 10;
    //               ruler_d = total_len;
    //               continue;
    //             }
    //             ctx = ctx_arr[ctx_num];
    //             ruler_d -= limit;
    //             sub_d = Math.round(ruler_d + part * i) + .5;
    //           }

    //           var line_num = (i % 2) ? 12 : 10;
    //           if (is_x) {
    //             ctx.moveTo(sub_d, 15);
    //             ctx.lineTo(sub_d, line_num);
    //           } else {
    //             ctx.moveTo(15, sub_d);
    //             ctx.lineTo(line_num, sub_d);
    //           }
    //         }
    //       }
    //       ctx.strokeStyle = "#666";
    //       ctx.stroke();
    //     }
    //   }
    },
    mounted(){
        this.height=window.screen.height;
        this.width=window.screen.width;
    }
};
</script>
<style scoped>
#rulers > div {
  position: absolute;
  background: #d0d0d0;
  z-index: 1;
  overflow: hidden;
  -webkit-font-smoothing: none;
}

#rulers #ruler_corner {
  top: 0px;
  left: 0px;
  width: 15px;
  height: 15px;
  border: solid #444 1px;
  z-index: 2;
}

#ruler_x {
  height: 15px;
  top: 0px;
  left: 15px;
  right: 0;
  border-top: solid #444 1px;
  border-right: solid #444 1px;
}

#ruler_x_cursor {
  height: 15px;
  border-right: dotted #999 1px;
  position: absolute;
  background: #2f2f2c;
}

#ruler_y_cursor {
  width: 15px;
  border-top: dotted #999 1px;
  position: absolute;
  background: #2f2f2c;
}

#rulers.moved #ruler_corner,
#rulers.moved #ruler_x {
  top: 101px;
}

#ruler_y {
  width: 15px;
  top: 15px;
  left: 0;
  bottom: 0;
  border-left: solid #444 1px;
  border-bottom: solid #444 1px;
}

 #rulers.moved #ruler_y {
  top: 116px;
} 

#ruler_x canvas:first-child {
  margin-left: -16px;
} 

/* #ruler_x canvas {
  float: left;
} */

#ruler_y canvas {
  margin-top: -1px;
}

#ruler_x > div,
#ruler_y > div {
  overflow: hidden;
}
</style>