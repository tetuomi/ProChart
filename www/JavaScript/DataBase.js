function DataBase(){
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
                var array = results;
                return array;
            })
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
    },
};
