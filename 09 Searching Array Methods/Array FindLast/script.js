alert("findLast()");
function f4(){
    let arr = ["Rahul","Shyam","Mohan","Rakesh"];
    let result = arr.findLast((arr) => arr.startsWith("R"));
    document.writeln(result);
}