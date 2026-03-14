alert("nested-object");
function f5() {
  let st = {
    name: "Ram",
    age: 35,
    phone: {
      office: 273784849,
      home: 2563727233,
    },
  };
  document.writeln("name : " + st.name + "<br>" + "age : " + st.age + "<br>");
  document.writeln(
    "office : " + st.phone.office + "<br>" + "home : " + st.phone.home,
  );
  document.writeln(st.address?.temp)
}
