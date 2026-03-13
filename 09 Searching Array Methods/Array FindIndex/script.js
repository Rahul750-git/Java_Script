alert("findIndex()");
function f4(){
    let arr = ["Rahul","Shyam","Mohan","Rakesh"];
    let result = arr.findIndex((arr) => arr.startsWith("S"));
    document.writeln(result);
}