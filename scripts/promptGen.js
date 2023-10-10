
function generatePrompt(){
    console.log("prompt gen called");
    // Get all the input fields
    var inputFields = document.querySelectorAll('.input-field');

    // Create an object to store the input values
    var inputData = {};
    
    // Loop through the input fields and check if they are filled
    var allFieldsFilled = true;
    inputFields.forEach(function(input) {
        inputData[input.id] = input.value;
        if (input.value.trim() === '') {
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled)
    {
        var prompt = 'empty';
    }
    else
    {
         // Print the input values to the console
        var prompt = JSON.stringify(`Summerize the financial situation of this supply 
        using the given information, numbers in rupees(money) and also find out 
        who's getting exploiting and who's is 
        the exploiter and if someone's profit margin 
        is too high: Supplier manufacturing cost is  ${inputData['supplier1']}
        and the supplier sells to importer at ${inputData['supplier2']},
        importer buys from supplier at${inputData['importer1']},
        importer pays ${inputData['importer2']} for transporting,
        importer sells from to retailer for ${inputData['importer3']},
        retailer buys from importer for${inputData['retail1']},
        retailer sells to customer for ${inputData['retail2']},
        customer buys from retailer for ${inputData['customer1']}.
        Ignore formatting and escape characters. Reply within 3 lines.`);
    }

    return prompt;

};

export default generatePrompt;