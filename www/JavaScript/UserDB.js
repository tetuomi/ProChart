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
                document.location.href = "record.html";
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
        var missmatch = true;
        // データの取得(降順)
        User.order("createDate",true)
            .equalTo("name",name) // 同じ名前を引っ張る
            .fetchAll()
            .then(function(results){
                console.log("success get");
                for(i = 0;i < results.length;i++){
                    obj = results[i];
                    if(password == obj.get("password")){
                        document.location.href = "record.html";
                        missmatch = false;
                    }
                }
                if(missmatch) document.getElementById("badman").innerHTML = "ダメだニャん";
            })
            .catch(function(err){
                console.log("err");
            });
    }
};
