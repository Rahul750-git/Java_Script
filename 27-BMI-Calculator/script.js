$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    let height = $("#height").val();
    let weight = $("#weight").val();
    let result = $("#result")

    if(height === "" || isNaN(height)||height < 0 ){
       result.html("Please give a Valid Height") 
    }
     else if(weight === "" || isNaN(weight)||weight < 0 ){
       result.html("Please give a Valid Weight") 
    }
    else{
     let bmi =  (weight / ((height*height)/10000)).toFixed(2) 
     result.html(`<span>BMI:-  ${bmi}</span>`)
    }
  });
});
