let text =document.getElementById('text');
function btnClick(value){
    text.value +=value;
}

function result(){
    let result =eval(text.value)
    text.value=result;
}
function allClear(){
    text.value ="";
   
   
}