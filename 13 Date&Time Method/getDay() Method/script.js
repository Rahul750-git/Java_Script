alert("getDay()");
function f2(){
    let day = new Date();
    let days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

    document.writeln("Today Day is :"+days[day.getDay()]);
}