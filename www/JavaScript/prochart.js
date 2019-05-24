function pon(text){
    alert(text);
};
function log(text){
    console.log(text);
};


function appear(){
    var div=document.getElementById("record");
    div.setAttribute("style","display:inline");
};

function createInput(TARGET, POSITION){
    var target = document.getElementById(TARGET);
    var textBox = document.createElement('input');
    var resisterBox = document.createElement('input');
  
    textBox.type = "text";
    resisterBox.type = "button";
    resisterBox.id = "resisterBox";
    resisterBox.value = "完了";
    
    target.insertAdjacentElement(POSITION, resisterBox);
    target.insertAdjacentElement(POSITION, textBox);
    
    console.log("create form");
};
