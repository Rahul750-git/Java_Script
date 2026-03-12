alert("Nested if");
function f5(){
    const uid ="Rahul";
    const passward = "Rahul@123";
    if (uid=="Rahul") {
        if(passward=="Rahul@123"){
            document.writeln("Login Successfully");
        }else{
            document.writeln("Wrong Passward");
        }
    }else{
        document.writeln("Invaild User Id")
    }

}