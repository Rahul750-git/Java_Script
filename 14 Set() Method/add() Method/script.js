alert("add()");
function f2(){
    let s = new Set();
    s.add("Shyam");
    s.add("Mohan");
    s.add("Sohan");
    var set = new Set();  
set.add("jQuery");  
set.add("AngularJS");  
set.add("Bootstrap");  
var itr=set.entries();  
for(let elements of itr)  
  {  
document.writeln(elements+"<br>");  
  }  
}