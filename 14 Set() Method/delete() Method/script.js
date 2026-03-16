alert("delete()");
function f2(){
    let s = new Set();
    s.add("Shyam");
    s.add("Mohan");
    s.add("Sohan");
    document.writeln("Before invoke for delete() method: "+"<br>");
     for (const ele of s) {
        document.writeln("Elements : "+ele+"<br>")
    }
     document.writeln("After invoke for delete() method: "+"<br>");
    s.delete("Sohan");
     for (const ele of s) {
        document.writeln("Elements : "+ele+"<br>")
    }
}