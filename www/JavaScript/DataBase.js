function DataBase(){
    this.pickLanguage();
};

DataBase.prototype = {
    init: function() {
        
    },
    
    pick: function(fieldName,targetName){
        var Data = ncmb.DataStore("Data");
        Data.order(fieldName,false)
            .equalTo(filedName,targetName)
            .fetchAll()
            .then(function(results){


                
            })
            .catch(function(err){
                alert("err");
            });
    },
    pickLanguage: function() {
        var Data = ncmb.DataStore("Data");
        var obj = [];
        Data.order("Language",false)
            .fetchAll()
            .then(function(results){
                var sorted = [];
                var k = 1;
                var buff = results[0].get("Language");
                sorted[0] = buff;
                
                for(i = 1; i < results.length; i++){
                     
                    if(results[i].get("Language") != buff){
                        sorted[k] = results[i].get("Language");
                        k++;
                        buff = results[i].get("Language");   
                    }
                }

                for(i = 0; i < sorted.length; i++){
                    var target = document.getElementById("defaultOption")
                    var option = document.createElement('option');
                    option.label = sorted[i];
                    option.class = "dbOptions";
                    target.insertAdjacentElement("afterend", option);
                }
                
            })
            .catch(function(err){
                alert("err");
            });
        
    },

    extract: function(array,fieldName) {
        return array.get(fieldName);
    },    

    save: function(user,language,element) {
        var Data = ncmb.DataStore("Data");
        var data = new Data();

        data.set("User",user)
            .set("Language",language)
            .set("Element",element)
            .save()
            .then(function(results){
                alert("saved");
            })
            .catch(function(err){
                alert("save err");
            });
    }
    
};
