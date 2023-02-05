function verifypass(){
    var pass=document.getElementById("txtpass").value;
    var msg=document.getElementById("msg");
    var grade=document.getElementById("grade");
    function showgrade(min,max,value,low,high){
        grade.min=min;
        grade.max=max;
        grade.value=value;
        grade.low=low;
        grade.high=high;

    }
     var regexp=/(?=*[A-Z])\w{4,15}/;
     if(pass.match(regexp)){
        msg.innerHTML="STRONG PASSWORD";
        showgrade(1,100,100,0,0);
     }
     else{
        if(pass.length<4){
            msg.innerHTML="POOR PASSWORD";
            showgrade(1,100,100,60,80);}
            else{
                msg.innerHTML="WEAK PASSWORD";
                showgrade(1,100,100,40,80);
            }
     }
}