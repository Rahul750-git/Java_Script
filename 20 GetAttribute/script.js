alert("getAttribute");
function f1() {
  let img = document.querySelector("img");

  let src = img.getAttribute("src");
  let alt = img.getAttribute("alt");
  document.writeln(src+"<br>");
  document.writeln(alt);
}
