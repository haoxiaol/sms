/**
 * Created by linshen on 2016/10/11.
 * 处理添加页面的相关js
 */
$(function () {

    $("#addForm").off();
    $("#addForm").submit(function () {
        var id = $(this).find("[name='id']").val();
        var name= $(this).find("[name='name']").val();
        var age= $(this).find("[name='age']").val();
        var gender= $(this).find("[name='gender']").val();
        var address= $(this).find("[name='address']").val();
        var student = new Student(id,name,gender,age,address);
        save(student,function () {
            alert("保存成功！");
            $("#addForm")[0].reset();
        })
    });

});