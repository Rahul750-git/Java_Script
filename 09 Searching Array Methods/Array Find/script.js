alert("find()");
function f4(){
    let arr = ["Rahul","Shyam","Mohan","Rakesh"];
    let result = arr.find((arr) => arr.startsWith("S"));
    document.writeln(result);
}