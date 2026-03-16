alert("clear()");
function f2(){
    let s = new Set();
    s.add("Shyam");
    s.add("Mohan");
    s.add("Sohan");
    
        document.writeln("Size before invoking clear() method : "+s.size+"<br>")
    
        s.clear();
    document.writeln("Size before invoking clear() method : "+s.size)
}