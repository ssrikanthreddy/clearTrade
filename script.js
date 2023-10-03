  document.addEventListener('DOMContentLoaded', function() {
      // Code inside this block will run when the DOM is fully loaded

      console.log("Loaded OK");

      //Make vars for each input field
      var supply1 = document.getElementById("supplier1");
      var supply2 = document.getElementById("supplier2");
      var retail1 = document.getElementById("retail1");
      var retail2 = document.getElementById("retail2");
      var customer1 = document.getElementById("customer1");

      //Add even listeners to each field var
      supply1.addEventListener("input", displayValues);
      supply2.addEventListener("input", displayValues);
      retail1.addEventListener("input", displayValues);
      retail2.addEventListener("input", displayValues);
      customer1.addEventListener("input", displayValues);

      //Open tab by default
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
        tablinks[i].className = tablinks[i].className.replace("active", "");
      }
    
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
  } 

  function displayValues(){
    console.log("Called");
    //get values of an element with id
    var supply1 = document.getElementById("supplier1").value;
    var supply2 = document.getElementById("supplier2").value;
    var retail1 = document.getElementById("retail1").value;
    var retail2 = document.getElementById("retail2").value;
    var customer1 = document.getElementById("customer1").value;

    //get element by id and output values
    document.getElementById("graph1").innerHTML = `Production Cost: ${supply1} <BR> Selling Price: ${supply2}`;
    document.getElementById("graph1").innerHTML.style.display = 'block';
    document.getElementById("graph2").innerHTML = `Purchase Cost: ${retail1} <BR> Selling Price: ${retail2}`;
    document.getElementById("graph2").innerHTML.style.display = 'block';
    document.getElementById("graph3").innerHTML = `Buying Price: ${customer1}`;
    document.getElementById("graph3").innerHTML.style.display = 'block';

  }