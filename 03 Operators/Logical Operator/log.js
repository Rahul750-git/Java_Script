alert("Logical Operator");
function f1() {
  let a = 10;
  let b = 12;
  let c = 15;
   alert("AND Operater");
  if (a > b && b < c) {
    document.writeln(true);
  } else document.writeln(false);

}
function f2() {
  let a = 10;
  let b = 12;
  let c = 15;
  alert("OR Operater");
  if (a > b || b < c) {
    document.writeln(true);
  } else document.writeln(false);
}
function f3() {
  let a = 10;
  let b = 12;
  let c = 15;
   alert("NOT Operater");
  if (!(a > b || b < c)) {
    document.writeln(true);
  } else document.writeln(false);
}
