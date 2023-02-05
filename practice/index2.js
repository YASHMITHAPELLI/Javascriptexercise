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
