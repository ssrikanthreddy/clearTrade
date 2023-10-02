document.addEventListener('DOMContentLoaded', function() {
    // Code inside this block will run when the DOM is fully loaded
    var londonButton = document.querySelector(".tablinks.def:nth-child(1)");
        londonButton.click();
    var londonButton2 = document.querySelector(".tablinks.def2:nth-child(1)");
        londonButton2.click();

    // Example: Adding an event listener to a button
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
        alert('Button clicked!');
    });

    // Example: Fetching data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

    // Example: Manipulating the DOM
    const myElement = document.getElementById('myElement');
    myElement.innerHTML = 'New content';
    myElement.style.color = 'red';

    // Example: Creating and appending elements
    const newElement = document.createElement('div');
    newElement.textContent = 'Newly created element';
    document.body.appendChild(newElement);

    // Example: Working with local storage
    localStorage.setItem('myKey', 'myValue');
    const storedValue = localStorage.getItem('myKey');
    console.log('Stored value:', storedValue);

    // Example: Handling form submissions
    const myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(myForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        console.log('Form data:', formObject);
    });

    
});

function openTab(evt, cityName, group) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(group);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName(group);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }