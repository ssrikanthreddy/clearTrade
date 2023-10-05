    var chart1, chart2, chart3;
    var values = [];
    var dataArray = [0, 0, 0, 0, 0]; // Initialize with default values

    //Make vars for each input field
    var supply1 = document.getElementById("supplier1");
    var supply2 = document.getElementById("supplier2");

    var importer1 = document.getElementById("importer1");
    var imoprter2 = document.getElementById("importer2");
    var imoprter3 = document.getElementById("importer3");

    var retail1 = document.getElementById("retail1");
    var retail2 = document.getElementById("retail2");

    var customer1 = document.getElementById("customer1");


    // Add event listeners to each input field
    supply1.addEventListener("input", function() {
        update1();
        update2();
        update3();
    });

    supply2.addEventListener("input", function() {
        update1();
        update2();
        update3();
    });

    importer1.addEventListener("input", function() {
        update1();
        update2();
        update3();
    });

    imoprter2.addEventListener("input", function() {
        update1();
        update2();
        update3();
    });

    imoprter3.addEventListener("input", function(){
        update1();
        update2();
        update3();
    });

    retail1.addEventListener("input", function() {
        update1();
        update2();
        update3();
    });

    retail2.addEventListener("input", function() {
        update1();
        update2();
        update3();
    });

    customer1.addEventListener("input", function() {
        update1();
        update2();
        update3();
    });

    // Get all the input elements
    var inputFields = document.querySelectorAll('.input-field');

  //Main function
  document.addEventListener('DOMContentLoaded', function() {
      // Code inside this block will run when the DOM is fully loaded

      //Load Graphs
      graph1()
      graph2()
      graph3()

      console.log("Loaded OK");

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
    // Loop through the input fields
    for (var i = 0; i < inputFields.length; i++)
    {
        // Push the value of each input field into the array
        dataArray[i] = (inputFields[i].value);
        console.log(inputFields[i].value);
    }
  }


  function update1() {
    updateData();

    //Profit 1 : Supplier
    var making = dataArray[0];
    var selling = dataArray[1];
    var margin1 = (selling-making)*100/making;

    //Profit 2 : Importer
    making = dataArray[2] + dataArray[3];
    selling = dataArray[4];
    var margin2 = (selling-making)*100/making;

    //Profit 3 : Retailer
    making = dataArray[5];
    selling = dataArray[6]
    var margin3 = (selling-making)*100/making;
    
    // Update the chart data and re-render
    chart1.data.datasets[0].data = [margin1, margin2, margin3];
    chart1.update();
  }
  

  function update2() {
    updateData();

    var total = 0;
    for (var i = 0; i < dataArray.length; i++){
        total += dataArray[i];
    }

    //totals each
    values[0] = (dataArray[0] + dataArray[1])*100/total;
    values[1] = (dataArray[2] + dataArray[3] + dataArray[4])*100/total;
    values[2] = (dataArray[5] + dataArray[6])*100/total;
    values[3] = dataArray[7]*100/total;

    // Update the chart data and re-render
    chart2.data.datasets[0].data = [values];
    chart2.update();
  }
  

  function update3() {
    updateData();

    var factors = [0.4, 0.3, 0.2, 0.1];
    var risk = [];

    risk[0] = factors[0]*(values[0]);
    risk[1] = factors[1]*(values[1]);
    risk[2] = factors[2]*(values[2]);
    risk[3] = factors[3]*(values[3]);

    // Update the chart data and re-render
    chart3.data.datasets[0].data = [risk];
    chart3.update();
  }

  function graph1(){

    var ctx1 = document.getElementById('g1').getContext('2d');
      chart1 = new Chart(ctx1, {
          type: 'line',
          data: {
              labels: ['Supplier', 'Importer', 'Retailer'],
              datasets: [{
                  label: 'Data',
                  data: [10, 40, 15],
                  backgroundColor: 'rgba(255,,1, 1.7)',
                  borderColor: 'rgba(255,,1, 1.7)',
                  borderWidth: 1
              }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '40%',
            layout: {
                padding: {
                    bottom: 70 // Adjust the value to offset the chart to the top
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
      });
  }

  function graph2(){

    var ctx2 = document.getElementById('g2').getContext('2d');
    chart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Supplier', 'Importer', 'Retailer', 'Customer'],
            datasets: [{
                label: 'Data',
                data: [5, 10, 15, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            radius: '80%',
            cutout: '40%',
            layout: {
                padding: {
                    bottom: 240 // Adjust the value to offset the chart to the top
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
        
    });
  }

  function graph3(){

    var ctx3 = document.getElementById('g3').getContext('2d');
    chart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Supplier', 'Importer', 'Retailer', 'Customer'],
            datasets: [{
                label: 'Data',
                data: [8, 16, 24, 12],
                backgroundColor: 'rgba(75, 192, 200, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            layout: {
                padding: {
                    bottom: 70
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            responsive: true,
            maintainAspectRatio: true,
            barPercentage: 1, // Adjust as needed
            categoryPercentage: 0.5 // Adjust as needed
        }
    });
  }