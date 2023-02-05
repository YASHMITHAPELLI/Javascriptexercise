// function bodyload(){
//     // reffering methods

//     // window.document.images[0].src="Screenshot (9).png";
//     // window.document.forms[0].elements[1].value="REGISTER";
//     //hello.src="Screenshot (9).png";
//     // const x= document.getElementsByTagName("img");
//     // const x= document.getElementsByClassName("para")
//     // const x= document.getElementsByName("pay")

//     // alert("Total no of payment method in page: "+x.length)

// }
// function deleteclick()
// {
//     const x =confirm("record will be deleted");
//     msg=document.getElementById("msg");
//     // (x==true)?alert("record deleted"):alert("action canceled");
//     if(x==true){
//         msg.innerText="record deleted";

//     }
//     else{
//         msg.innerHTML="<font color='red'>action canceled</font>";

//     }
// } function Create(){
//     var name=prompt("folder name:","New_folder");
//     var msg=document.getElementById("msg");
//     (name==null)?document.write("Action canceled"):msg.innerHTML+="folder created :"+name+ "<br>"
// }
function register()
{
    var ID =document.getElementById("txtid").value;
    var Name =document.getElementById("txtname").value;
    var Price =document.getElementById("txtprice").value;
    var Mfd =document.getElementById("txtmfd").value;
    var yes =document.getElementById("optyes");
    var no =document.getElementById("optno");
    if(yes.checked)
    stock=yes.value;
    if(no.checked)
    stock=no.value; 
    var city =document.getElementById("listcity").value;

    document.getElementById("aa").innerText=ID;
    
    document.getElementById("bb").innerText=Name;
    
    document.getElementById("cc").innerText=Price;
    
    document.getElementById("dd").innerText=Mfd;
    
    document.getElementById("ee").innerText=stock;
    
    document.getElementById("ff").innerText=city;
    // var ID =document.getElementById().value;
    // var ID =document.getElementById().value;

}


