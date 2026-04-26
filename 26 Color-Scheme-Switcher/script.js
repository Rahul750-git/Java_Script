$(document).ready(function () {
  $(".button").click(function (e) {
    if (e.target.id === "gray") {
      $("body").css('background-color','gray');
    }
    else if(e.target.id === 'white'){
        $('body').css('background-color','brown');
    }
    else if(e.target.id === 'blue'){
        $('body').css('background-color','blue');
    }
    else if(e.target.id === 'yellow'){
        $('body').css('background-color','yellow');
    }
  });
});
