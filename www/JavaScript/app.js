function UserDB(){    
};

UserDB.prototype = {
    save: function() {
        var User = ncmb.DataStore("User");
        // 保存先クラスのインスタンスを生成
        var user = new User();
        var name = document.getElementById("Newname").value;
        var password = document.getElementById("Newpassword").value;
        
        user.set("name",name)
            .set("password",password)
            .save()
            .then(function(results){
                // 保存に成功した場合の処理
                console.log("success restore")
            })
            .catch(function(err){
                // 保存に失敗した場合の処理
                console.log("err");
            });
    },
    
    check: function() {
        var User = ncmb.DataStore("User");
        var obj;
        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        // データの取得(降順)
        User.order("createDate",true)
            .fetchAll()
            .then(function(results){
                alert("success get");
                obj = results[0];
                if(name == obj.get("name") && password == obj.get("password")) document.location.href = "firstpage.html";
                else document.getElementById("badman").innerHTML = "ダメだニャん";
            })
            .catch(function(err){
                alert("err");
            });
    }
};

function appear(){
    var div=document.getElementById("record");
    div.setAttribute("style","display:inline");
}
