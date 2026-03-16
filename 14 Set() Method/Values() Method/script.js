alert("has()");
function f2(){
var set = new Set();  
set.add("jQuery");  
set.add("AngularJS");  
set.add("Bootstrap");  
var itr=set.values();  
document.writeln(itr.next().value+"<br>");  
document.writeln(itr.next().value+"<br>");  
document.writeln(itr.next().value);  
}