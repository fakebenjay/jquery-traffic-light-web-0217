var x;
var a;

function changeColors() {
    x = 1;
    setInterval(change, 500);
}

function change() {
    if (x === 1) {
        color = "green";
        x = 2;
    }
    else {
        color = "";
        x = 1;
    }

    if (a === 'stop') {
      clearInterval(x)
    }

    $('#bottom-light').css("background", color);
}

$(document).ready(function() {

   /* code for button 1  -- Turn the light Red */
   $('#button1').click(
     function() {
       a = 'stop'
       $('#top-light').css("background", "red");
       $('#middle-light').css("background", "");
       $('#bottom-light').css("background", "");
       $('#middle-light').html("");
       $('#bottom-light').html("");
     }
   );

   /* code for button 2 --- Say STOP */
   $('#button2').click(
     function() {
       a = 'stop'
       $('#top-light').html("<p> STOP </p>");
       $('#middle-light').css("background", "");
       $('#bottom-light').css("background", "");
       $('#middle-light').html("");
       $('#bottom-light').html("");
     }
   );

   /* code for button 3 -- Turn the light Yellow */
   $('#button3').click(
     function() {
       a = 'stop'
       $('#middle-light').css("background", "yellow");
       $('#top-light').css("background", "");
       $('#bottom-light').css("background", "");
       $('#top-light').html("");
       $('#bottom-light').html("");
     }
   );

   /* code for button 4 -- Say whoa hey now */
   $('#button4').click(
     function() {
       a = 'stop'
       $('#middle-light').html("<p> whoa hey now </p>");
       $('#top-light').css("background", "");
       $('#bottom-light').css("background", "");
       $('#top-light').html("");
       $('#bottom-light').html("");
     }
   );

   /* code for button 5 -- Turn the light Green */
   $('#button5').click(
     function() {
       a = 'stop'
       $('#bottom-light').css("background", "green");
       $('#top-light').css("background", "");
       $('#middle-light').css("background", "");
       $('#top-light').html("");
       $('#middle-light').html("");
     }
   );

   /* code for button 6 -- Say GO! */
   $('#button6').click(
     function() {
       $('#bottom-light').html("<p> GO! </p>");
       $('#top-light').css("background", "");
       $('#middle-light').css("background", "");
       $('#top-light').html("");
       $('#middle-light').html("");
     }
   );

   /* code for button 7 -- Make Green Light Blink -- Extension!! */
   $('#button7').click(
     function() {
       a = 'stop'
       $('#bottom-light').css("background", "");
       $('#top-light').css("background", "");
       $('#middle-light').css("background", "");
       $('#top-light').html("");
       $('#middle-light').html("");
       a = 'theWordsIPutHereDontMatter'
       changeColors();
     }
   );

});
