let text =document.getElementById('text');
function btnClick(value) {
    if (['+', '-', '*', '/', '%'].includes(value) && ['+', '-', '*', '/', '%'].includes(text.value.slice(-1))) {

        return;
    }
    if (".".includes(value) && '.'.includes(text.value.slice(-1))){
        return
    }
    text.value += value;

}

function result(){
    let result =eval(text.value)
    text.value=result;
}
function allClear(){
    text.value ="";
   
   
}
