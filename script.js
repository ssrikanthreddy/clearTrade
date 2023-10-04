  var chart1, chart2, chart3;
  var dataArray = [0, 0, 0, 0, 0]; // Initialize with default values
  document.addEventListener('DOMContentLoaded', function() {
      // Code inside this block will run when the DOM is fully loaded

      //Graph space START
      // Initialize the first chart (Graph 1)
      var ctx1 = document.getElementById('g1').getContext('2d');
      chart1 = new Chart(ctx1, {
          type: 'line',
          data: {
              labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
              datasets: [{
                  label: 'Data',
                  data: [10, 20, 30, 40, 50],
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });

      // Initialize the second chart (Graph 2)
      var ctx2 = document.getElementById('g2').getContext('2d');
      chart2 = new Chart(ctx2, {
          type: 'pie',
          data: {
              labels: ['Label A', 'Label B', 'Label C', 'Label D', 'Label E'],
              datasets: [{
                  label: 'Data',
                  data: [5, 10, 15, 20, 25],
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  borderColor: 'rgba(54, 162, 235, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });

        // Initialize the third chart (Graph 3)
      var ctx3 = document.getElementById('g3').getContext('2d');
      chart3 = new Chart(ctx3, {
          type: 'bar',
          data: {
              labels: ['Label X', 'Label Y', 'Label Z'],
              datasets: [{
                  label: 'Data',
                  data: [8, 16, 24],
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
    //Graph Space end

      console.log("Loaded OK");

      //Make vars for each input field
      var supply1 = document.getElementById("supplier1");
      var supply2 = document.getElementById("supplier2");
      var retail1 = document.getElementById("retail1");
      var retail2 = document.getElementById("retail2");
      var customer1 = document.getElementById("customer1");

      //Add even listeners to each field var
      supply1.addEventListener("input", update1);
      supply2.addEventListener("input", update1);
      retail1.addEventListener("input", update2);
      retail2.addEventListener("input", update2);
      customer1.addEventListener("input", update3);

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
      document.getElementById(cityName).style.display = "flex";
      evt.currentTarget.className += " active";
  } 

  function updateData(){
    dataArray[0] = document.getElementById("supplier1").value;
    dataArray[1] = document.getElementById("supplier2").value;
    dataArray[2] = document.getElementById("retail1").value;
    dataArray[3] = document.getElementById("retail2").value;
    dataArray[4] = document.getElementById("customer1").value;
  }


  function update1() {
    updateData();
    var profit = [];

    //Profit 1
    var making = dataArray[0];
    var selling = dataArray[1];
    var margin1 = (selling-making)*100/making;

    //Profit 2
    making = dataArray[2];
    selling = dataArray[3];
    var margin2 = (selling-making)*100/making;

    //Profit 3
    making = dataArray[4];
    selling = making*0.75;
    var margin3 = (selling-making)*100/making;
    
    // Update the chart data and re-render
    chart1.data.datasets[0].data = [margin1, margin2];
    chart1.update();
  }
  
  function update2() {
    updateData();
    
    // Update the chart data and re-render
    chart2.data.datasets[0].data = dataArray;
    chart2.update();
  }
  
  function update3() {
    updateData();
  
    // Update the chart data and re-render
    chart3.data.datasets[0].data = dataArray;
    chart3.update();
  }