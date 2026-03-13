alert("Splice() Method");
function f4() {
  let arr = ["Yashraj", "Thomas", "Kate", "Shyam"];
  let cont=arr.splice(1, 1,"Raja");
  document.writeln("Remove element : "+cont+"<br>");
  document.writeln("Update Array is : "+arr);
}