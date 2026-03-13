alert("Object");
function f5(){
    // let student = [
    //     {name:"Rahul", age:22},
    //     {name:"Rakesh", age:24},
    //     {name:"Shyam", age:25}
    // ];    
    //     student.filter((a,b) =>
    //          a.age - b.age);
    //     document.writeln("After ascending sorting: " + student);

    //       student.sort((a, b) => a.name.localeCompare(b.name));  
    //      document.writeln("After alphabetically sorting:", student); 
    

    const students = [  
    { name: "Yashraj", age: 24 },  
    { name: "Thomas", age: 22 },  
    { name: "Kate", age: 23 },  
  ];  
    
  students.sort((a, b) => a.age - b.age);  
  console.log("After ascending sorting:", students);  
    
  students.sort((a, b) => a.name.localeCompare(b.name));  
  console.log("After alphabetically sorting:", students);  
}