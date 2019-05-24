function LangDB(){
};

LangDB.prototype = {
    save: function() {
        var Lang = ncmb.DataStore("Lang");
        
        // 保存先クラスのインスタンスを生成
        var lang = new Lang();
        var langName = document.getElementById("NewLangName").value;
        
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
        var optionValue = document.getElementById('language').value;
        var Lang = ncmb.DataStore("Lang");
        var obj = [];
        var target = document.getElementById("defaultOption")
        // データの取得(降順)
        Lang.order("createDate",true)
            .fetchAll()
            .then(function(results){
                console.log("success get langs");
                for(i = 0; i < results.length; i++){
                    obj[i] = results[i];
                    var option = document.createElement('option');
                    option.label = obj[i].get('name');
                    target.insertAdjacentElement("afterend", option);
                }
                
            })
            .catch(function(err){
                alert("err");
            });
    },
    judge: function(){
        var optionValue = document.getElementById("language").value;

        if(optionValue == "other"){
            genTextBox('language', 'afterend');
        }

    }
};

