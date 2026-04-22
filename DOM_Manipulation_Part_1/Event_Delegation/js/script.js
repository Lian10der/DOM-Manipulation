// DOM Manipulation

// Event Delegation

// It allows users to append a SINGLE event listener 
// to a parent element that adds it to all of its
// present AND future descendants that match a selector.

document.querySelector('#sports').addEventListener
('click', function(e){

    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target 

    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Soccer';
newSport.setAttribute('id', 'soccer');

sports.appendChild(newSport)
