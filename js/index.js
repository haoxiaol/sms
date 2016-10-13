/**
 * Created by linshen on 2016/10/11.
 * 这是首页js
 */

//加载数据
function load(key) {
    query(key,function (result) {
        var rows = result.rows;
        $(".tb1 tbody").children(":not(:first)").remove();
        for(var i=0;i<rows.length;i++){
            var val = rows[i];
            var newTr = $("tr:hidden").clone().removeClass("hi");
            newTr.find("input").val(val.id);
            newTr.find("td").eq(1).text(val.name);
            newTr.find("td").eq(2).text(val.gender);
            newTr.find("td").eq(3).text(val.age);
            newTr.find("td").eq(4).text(val.address);
            $(".tb1 tbody").append(newTr);
        }
    })
}
function dele() {
   $('#bt1').on("click",function () {
        var a = $("input[type='checkbox']")
        for(var i=0;i<a.length;i++){
            if($(a[i]).prop("checked")){
                var key = a[i].value;
                    del(key, function () {

                    });
            }
        }
       load(null);
    });
}
// function change() {
//     $('#bt2').on("click",function () {
//         var a = $("input[type='checkbox']")
//         for(var i=0;i<a.length;i++){
//             if($(a[i]).prop("checked")){
//                 console.log($(a[i]));
//                 var key = a[i].value;
//                 transform(key, function () {
//                 });
//             }
//         }
//         load(null);
//     });
// }
$(function () {
    load(null);
    dele();
});

