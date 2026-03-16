alert("getMonth()");
function f2(){
    let day = new Date();
    let month =["Jun","feb","march","apr","may","june","jul","aug","sep","oct","nov","dec"];

    document.writeln(month[day.getMonth()]);
}