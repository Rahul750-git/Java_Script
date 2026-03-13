alert("findLastIndex()");
function f4(){
    let arr = ["Rahul","Shyam","Mohan","Rakesh"];
    let result = arr.findLastIndex((arr) => arr.startsWith("R"));
    document.writeln(result);
}