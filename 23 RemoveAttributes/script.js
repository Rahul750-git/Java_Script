function f1(){
    let a = document.querySelector('a');
    a.removeAttribute('href')
    document.writeln(a.hasAttribute('href'));

}