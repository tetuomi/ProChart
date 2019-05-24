function LangDB(){    
};

LangDB.prototype = {
    save: function() {
        var Lang = ncmb.DataStore("Lang");
        
        // 保存先クラスのインスタンスを生成
        var lang = new Lang();
        var langName = document.getElementById("NewLangName").value;
       // var password = document.getElementById("Newpassword").value;
        
        lang.set("name",langName)
            .save()
            .then(function(results){
                // 保存に成功した場合の処理
                console.log("success restore lang")
            })
            .catch(function(err){
                // 保存に失敗した場合の処理
                console.log("err");
            });
    },
    
    show: function() {
        var Lang = ncmb.DataStore("Lang");
        var obj;
        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        // データの取得(降順)
        Lang.order("createDate",true)
            .fetchAll()
            .then(function(results){
                console.log("success get langs");
                for(i = 0; i < results.length; i++){
                    obj = results[i];
                    

                }
              
            })
            .catch(function(err){
                alert("err");
            });
    }
};

