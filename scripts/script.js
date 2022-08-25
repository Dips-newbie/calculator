var click = false;
var j = 1;
var list = "";
var first = 1;


function trackClick(id,flag){
    var click = false;
    //console.log(flag);
    const button = document.getElementById(id);
    if(flag == 1){
    var set = button.setAttribute("name","1");
    var order = button.setAttribute("order",j);
    document.getElementById("input").innerHTML += document.getElementById(id).value; // display input from user
    }else{var set = button.getAttribute("name");}
     j++;
    if(document.getElementById(id).name == 1){click = true ;/*console.log(click);*/}
    if(document.getElementById(id).name == 0){click = false ;/*console.log(click);*/}
   return click;

}



function dlt(){

   // console.log(document.getElementById("input").innerHTML);

   var inputLength = document.getElementById("input").innerHTML;
   var input = inputLength.substring(0, inputLength.length - 1);
   var inputt = inputLength.substring(inputLength.length - 1, inputLength.length + 1);

   //before delete ,remove all attribute from the input tag

   var myDivs = document.querySelectorAll('div#number_operator > div > input');
   //console.log(my_tag);
   var count = myDivs.length;
   for(var i = 0; i < count; i++){
    if(inputt == myDivs[i].value){ var removeattribute_id = myDivs[i].id;}
    }
    const attributeId = document.getElementById(removeattribute_id);
    attributeId.removeAttribute("name");
    attributeId.removeAttribute("order");



   document.getElementById("input").innerHTML = input;

}

function userEntered(num_op){

    var ar =[];

    for(var i =1;i<33;i=i+2){
        const elementId = num_op[i].id;
        const element = document.getElementById(elementId);
        
        var node_id = element.childNodes[0].id;
        //console.log(node_id);
    
        var click = trackClick(node_id,0);
        var order = document.getElementById(node_id).getAttribute("order");
    
        //console.log(order);
        if(click){
            var value = element.childNodes[0].value; 
            ar[order]=element.childNodes[0].value;
                    //console.log(order+" "+value);

        }
        
    }
            //console.log(ar);

    return ar;

}


function operator(){

    var k = 0;
    var arr = [];
    var firstNo = "";
    var operator = "";
    var secondNo = "";
    var secondNum = "";

  const num_op = document.querySelectorAll("#number_operator")[0].childNodes;

   //console.log(num_op);


  var ar = userEntered(num_op);
 
  //console.log(ar);


 for (let a = 1; a < ar.length; a++) {
     if(!isNaN(ar[a]) && (secondNo == "")){   firstNo+=""+ar[a];}
     if((ar[a] == '+') || (ar[a] == '-') || (ar[a] == '*') || (ar[a] == '÷')) { operator = ar[a]; secondNo = 1;}
     if((!isNaN(ar[a])) && (secondNo == 1)) { secondNum+=""+ar[a];}
  }
  
 calculate(firstNo,secondNum,operator);
   //console.log(firstNo+secondNum+operator);
}


function calculate(firstNo,secondNum,operator){
   // console.log(firstNo+secondNum+operator);
switch(operator){
case '+':
     var result = Number(firstNo) + Number(secondNum);
     document.getElementById('output').innerHTML = result;
     break;
case '-':
    var result = Number(firstNo) - Number(secondNum);
    document.getElementById('output').innerHTML = result;
    break;
case '*':
    var result = Number(firstNo) * Number(secondNum);
    document.getElementById('output').innerHTML = result;
    break;
case '÷':     
    var result = Number(firstNo) / Number(secondNum);
    document.getElementById('output').innerHTML = result;
    break;
}


}

function clearAll(){

    window.location.reload();

    document.getElementById('output').innerHTML = "";
    document.getElementById('input').innerHTML = "";

}