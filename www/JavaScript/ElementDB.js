function ElementDB() {
    this.init();
};

ElementDB.prototype = {
    init: function() {
        var Element = ncmb.DataStore("Element");
        Element.order("Lname",true)
               .fetchAll()
               .then(function(results){
                   console.log("success lang get");
                   var buff = results[0].get("Lname");
                   var box = document.getElementById("language");
                   
                   box.innerHTML += "<option value='" + results[0].get("Lname") + "'>" +
                       results[0].get("Lname") + "</option>";
                   var Lname;
                   for(i = 1;i < results.length;i++){
                       Lname = results[i].get("Lname"); 
                       if(Lname != buff){
                           box.innerHTML += "<option value='" + Lname + "'>" +
                               Lname + "</option>";
                           buff =  Lname
                       }
                   }
               })
               .catch(function(err){
                   console.log("lang get err");
               });
    },
    
    save: function() {
        var Element = ncmb.DataStore("Element");
        var element = new Element();

        element.set("element","cout")
               .set("Lname","C++")
               .set("Uname","auh")
               .save()
               .then(function(results){
                   console.log("success set");
               })
            .catch(function(err){
                console.log("set_data err");
            });
    },

    show_ele: function() {
       
    } 
};
