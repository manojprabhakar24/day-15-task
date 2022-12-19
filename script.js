let output=document.getElementById("inputtext");
let calculate=(number)=>{
    output.value+=number;
}
let result=()=>{
    try{
        output.value=eval(output.value)
    }
    catch(err){
        alert("Invalid Input")

    }
}
function clr(){
    output.value="";

}
function del(){
    output.value=output.value.slice(0,-1);
}