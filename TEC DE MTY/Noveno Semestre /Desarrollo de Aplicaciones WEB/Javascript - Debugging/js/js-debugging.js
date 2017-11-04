

function askUserName() {
    return prompt('What is your name?');
}


/* Add current date and time in the main page
and a time-sensitive greeting*/

function dateTime() {
    var name;
    var now = new Date();
    var hour = now.getHours();

    name = prompt('What is your name?');


    // Determine if it's morning
    if(hour < 12)
        document.getElementById('date-time').innerHTML += 'Good morning';
    // Determine if it's afternoon
    if(hour >= 12) {
        hour = hour -12;
        if(hour < 6)
            document.getElementById('date-time').innerHTML += 'Good Afternoon';
        if(hour >= 6)
            document.getElementById('date-time').innerHTML += 'Good Evening ';
    }
        document.getElementById('date-time').innerHTML += name + '<br>' +'&nbsp;' + now ;
}

/* User change background color*/
function changeBackground() {
    var color = prompt('Choose a color:');
    document.body.style.background = color;
}

/* Show in a window the name of my career advisor when button is pressed*/
function nameAdvisor() {
  return alert('Angeles Constantino');
}

/* Change color on mouseOver and mouseOut events*/
function mouseOver() {
    document.getElementById('main-title-experience').style.color = 'pink';
}

function mouseOut() {
    document.getElementById('main-title-experience').style.color = 'white';
}

var list = document.getElementsByClassName('list-experiences');}

window.onload = function() {
    dateTime()
}
