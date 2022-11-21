///<reference path="../typings/jquery/jquery.d.ts" />

/**
 * 這是相加的功能   //(函式說明區)
 * 
 * @param {Number} a 數值 1    //(個別參數說明)
 * @param {Number} b 數值 2    //(numbert參數型別)
 * @returns {Number} 相加後的數值      //(回傳說明)
 */
function add(a, b) {
    return a + b;
}
//Jquery-dco-read 
$(document).ready(function () {

});
//**======test5====== */
// 動態載入html -MANIPULATION


$(document).ready(function () {
    $('h1').click(function () {
        $('body').html('<p>這是新增</p>');
   
    });
});

/**======test4====== */
// $(document).ready(function () {
//     $('h1').click(function () {
//         // $('p').addClass('orange');
//         $('p').toggleClass('orange');
//     });
// });


/**======test3====== */
// $(document).ready(function () {
//     // 元素选择器-tag
//     $('h1').click(function(){
//         // $('p').hide();
//         // $('p').toggle();
//         // $('p').slideToggle(2000);
//         $('p').fadeToggle(5000);
//         $('div').hide();
//     });
// });


/**======test2====== */
// $(document).ready(function () {
//     // 元素选择器-tag
//     $('h1').hide();
//     // .calss选择器-class
//     $('.title').hide();
//     //#id 选择器 -id
//     $('#tid').text('ID change');
// });
