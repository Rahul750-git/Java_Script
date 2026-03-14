alert("Object");
function f5() {
  let st = {
    name: "Ram",
    age: 35,
    phone: 9577568697,
  };
  for (const key in st) {
    document.writeln(
      key + ":" + st[key]+"<br>"
    );
  }
}
