/**
 * Created by linshen on 2016/10/11.
 * 用于处理与数据库相关的代码
 */
//获取数据库
function getDB() {
    var  db = window.openDatabase("sms","1.0","student manager system database",3*1024*1024);
    return db;
}
//创建学生表
(function () {
    var db =getDB();
    //事务
    db.transaction(function (transaction) {
        //执行穿件表
        transaction.executeSql("CREATE TABLE IF NOT EXISTS tbl_student(id INTEGER,name TEXT,gender TEXT,age INTEGER,address TEXT)");
    });
})();

function Student(id,name,gender,age,address) {
    this.name=name;
    this.id=id;
    this.gender=gender;
    this.age=age;
    this.address=address;
}
//添加

function save(student,handler) {
    if (student instanceof Student){
        var db =getDB();
        db.transaction(function (transaction) {
            var sql ="insert into tbl_student VALUES(?,?,?,?,?)";
            transaction.executeSql(sql,[
                student.id,
                student.name,
                student.gender,
                student.age,
                student.address
            ],function () {
                handler.call(this);
            });

        })
    }else{
        alert("数据格式不合法");
    }

}

//查询所有
function query(key,handler) {
    var db =getDB();
    db.transaction(function (transaction) {
        var sql ="select * from tbl_student WHERE 1=1";
        if(key){
            sql +=" and name="+key;
        }
        transaction.executeSql(sql,[],function (transaction,result) {
            handler(result);
        })
    })
}

function del(key,handler) {
    var db= getDB();
    db.transaction(function (transaction) {
        var sql ="delete from tbl_student WHERE ";
        sql +=" rowid="+2;
        transaction.executeSql(sql,[],function (transaction,result) {
           handler(result);
            alert("删除成功！");
        })
    })
}


// function transform(key,handler) {
//     var db= getDB();
//     console.log(key);
//     db.transaction(function (transaction) {
//         var sql ="update tbl_student set name='王五五' WHERE ";
//         sql +=" id="+key;
//         transaction.executeSql(sql,[],function (transaction,result) {
//             handler(result);
//             // alert("修改成功！");
//         })
//     })
// }
