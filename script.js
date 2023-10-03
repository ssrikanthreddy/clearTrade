document.addEventListener('DOMContentLoaded', function() {
    // Code inside this block will run when the DOM is fully loaded
    var londonButton = document.querySelector(".tablinks.def:nth-child(1)");
        londonButton.click();
    var londonButton2 = document.querySelector(".tablinks.def2:nth-child(1)");
        londonButton2.click();
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