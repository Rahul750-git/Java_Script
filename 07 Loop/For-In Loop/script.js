alert("For in loop");
function f5() {
  const items = { Apple: 2, Banana: 12, Orange: 5 };
  for (const fruit in items) {
    document.writeln(fruit);
  }
}
