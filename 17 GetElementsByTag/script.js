alert("GetElementsByTag");
function f1(){
    let arr = document.getElementsByTagName('p');
    arr[0].innerHTML="this is a p tag";
    arr[1].innerHTML="this is a p1 tag";
    arr[2].innerHTML="this is a p2 tag";
}