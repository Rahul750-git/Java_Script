alert("entries()");
function f2() {
  var set = new Set();
  set.add("jQuery");
  set.add("AngularJS");
  set.add("Bootstrap");
  var itr = set.entries();
  for (let elements of itr) {
    document.writeln(elements + "<br>");
  }
}
