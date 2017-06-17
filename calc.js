$(function(){
  
  $("#calculate").on("click", function(){
    
   var calc = $("#calcs").val();
   if(calc === "")
     {
       alert("Please don't leave the field empty!");
      return false;
     }
    else
      {
        var calcArr = calc.split("");
        var numsArr = [];
        for (var i = 0; i <= calcArr.length; i+=2) {
          if(isNaN(calcArr[i])) {
            alert("Please only use numbers.");
            return false;
          }
          else {
          numsArr.push(parseInt(calcArr[i]));
          }
        }
        var sum = add(numsArr);
        $("#sum").text("Answer is " + sum);
      }
    
  });
  
  
});


function add (numbers) {
var sum = numbers.reduce(function(a,b){
  return a + b;
}, 0);
 return sum;
}