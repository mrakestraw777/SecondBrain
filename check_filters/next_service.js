function get_previous_service()
{
    const my_services = document.querySelectorAll("input")
    // console.log(my_services[0].value)
    // console.log(my_services[3].value)
    return my_services;
}

function next_service_paragraphs()
{
    const next_services = document.querySelectorAll("next_service")
    // console.log(my_services[0].value)
    // console.log(my_services[3].value)
    return next_services;
}
const next_services = next_service_paragraphs;

const my_services = get_previous_service();

// function next_service()
// {   
//     const previous_mileage = parseInt(my_services[3].value);
//     const next_mileage = 12_500;
//     const next_air = document.getElementById('next_air');
//     next_air.appendChild(document.createTextNode(`Check ${my_services[0].value.toUpperCase()} after ${previous_mileage + next_mileage}`));
// }

function next_service()
{
    clearNextServiceDiv()
    for(let x=0 ; x < my_services.length ; x++)
        {
            const previous_mileage = parseInt(my_services[3].value);
            const next_mileage = 12_500;
            if(my_services[x].value != false && my_services[x].classList.contains('part'))
                {
                    let current_service = my_services[x].value.toUpperCase()
                    addParagraphToNextService(`⃣  ${current_service} at ${(next_mileage + previous_mileage).toLocaleString('en-US')}`)
                }
        }
}



function addParagraphToNextService(text) {
    
    // Get a reference to the div element with id "next_service"
    const nextServiceDiv = document.getElementById("next_service");
  
    // Check if the element exists before proceeding
    if (nextServiceDiv) {
      // Create a new paragraph element
      const newParagraph = document.createElement("p");
  
      // Set the content of the paragraph (text you want to display)
      newParagraph.textContent = text;
  
      // Append the paragraph element to the div
      nextServiceDiv.appendChild(newParagraph);
    } else {
      console.error("Div element with id 'next_service' not found!");
    }
    copyParagraphsFromNextService()
  }
  
  // Example usage: add a paragraph with the text "This is the new service information"
//   addParagraphToNextService("This is the new service information");

function copyParagraphsFromNextService() {
    
    // Get a reference to the div element with id "next_service"
    const nextServiceDiv = document.getElementById("next_service");
  
    // Check if the element exists before proceeding
    if (!nextServiceDiv) {
      console.error("Div element with id 'next_service' not found!");
      return;
    }
  
    // Create a string to store all paragraph content
    let allParagraphText = "";
  
    // Loop through all child elements of the div
    for (const child of nextServiceDiv.children) {
      // Check if the child element is a paragraph
      if (child.tagName.toLowerCase() === "p") {
        // Append paragraph text with a newline for separation
        allParagraphText += child.textContent + "\n";
      }
    }
  
    // Check if any paragraphs were found
    if (!allParagraphText) {
      console.error("No paragraph elements found inside the div!");
      return;
    }
  
    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(allParagraphText)
      .then(() => {
        console.log("Paragraphs copied successfully!");
      })
      .catch((err) => {
        console.error("Failed to copy paragraphs:", err);
      });
  }
  

//   function clearNextServiceDiv() {
//     const nextServiceDiv = document.getElementById("next_service");
//     if (nextServiceDiv) {
//       // Clear content using innerHTML
//       nextServiceDiv.innerHTML = "";
//     } else {
//       console.warn("Div with id 'next_service' not found.");
//     }
//   }


  
  function createDropdownElement() {
    // Container element for dropdown and input
    const containerElement = document.createElement("div");
    containerElement.classList.add("service-item"); // Add a class for styling
  
    // Create the select element
    const selectElement = document.createElement("select");
  
    // Create the option elements
    const optionTexts = [
      "Air Filter",
      "Cabin Filter",
      "Oil",
      "Rotors & Pads",
      "Transmission",
      "Wipers"
    ];
    const optionValues = [
      "air_filter",
      "cabin_filter",
      "oil",
      "rotors_pads",
      "transmission",
      "wipers"
    ];
  
    for (let i = 0; i < optionTexts.length; i++) {
      const optionElement = document.createElement("option");
      optionElement.text = optionTexts[i];
      optionElement.value = optionValues[i];
  
      // Create input field
      let inputElement;
      if (optionTexts[i] === "Wipers") {
        // Date input for wipers
        inputElement = document.createElement("input");
        inputElement.type = "date";
        inputElement.placeholder = "Last Replaced Date";
      } else {
        // Number input for others
        inputElement = document.createElement("input");
        inputElement.type = "number";
        inputElement.placeholder = "Mileage";
      }
      inputElement.classList.add("mileage-input"); // Add a class for styling
  
      // Append option and input to container
      containerElement.appendChild(optionElement);
      containerElement.appendChild(inputElement);
    }
  
    // Get the target div element
    const previousServiceDiv = document.getElementById("previous_service");
  
    // Append the container element to the div (if found)
    if (previousServiceDiv) {
      previousServiceDiv.appendChild(containerElement);
    } else {
      console.warn("Div with id 'previous_service' not found.");
    }
  
    return containerElement; // Return the container element
  }
  
  
  


//   function createDropdownElement() {
//     // Create the select element
//     const selectElement = document.createElement("select");
  
//     // Create the option elements
//     const partsOption = document.createElement("option");
//     partsOption.text = "Parts";
//     partsOption.value = "parts";
  
//     const serviceOption = document.createElement("option");
//     serviceOption.text = "Service";
//     serviceOption.value = "service";
  
//     // Add options to the select element
//     selectElement.appendChild(partsOption);
//     selectElement.appendChild(serviceOption);
  
//     // Get the target div element
//     const previousServiceDiv = document.getElementById("previous_service");
  
//     // Append the select element to the div (if found)
//     if (previousServiceDiv) {
//       previousServiceDiv.appendChild(selectElement);
//     } else {
//       console.warn("Div with id 'previous_service' not found.");
//     }
//   }

function createServiceItem() {
    // Container element for dropdown and input
    const serviceItem = document.createElement("div");
    serviceItem.classList.add("service-item"); // Add class for styling
  
    // Create the select element
    const selectElement = document.createElement("select");
  
    // Option elements
    const options = ["Air Filter", "Cabin Filter", "ROT4", "Transmission"];
    for (const optionText of options) {
      const optionElement = document.createElement("option");
      optionElement.text = optionText;
      optionElement.value = optionText.toLowerCase(); // Lowercase value for clarity
      selectElement.appendChild(optionElement);
    }
  
    // Mileage input
    const mileageInput = document.createElement("input");
    mileageInput.type = "number";
    mileageInput.placeholder = "Mileage";
    mileageInput.classList.add("mileage-input"); // Add class for styling
  
    // Append elements to container
    serviceItem.appendChild(selectElement);
    serviceItem.appendChild(mileageInput);
  
    return serviceItem;
  }
  
  // Get the target container element
  const serviceContainer = document.getElementById("service-container");
  
  // Create and add multiple service items
  const numServiceItems = 4; // Change this to desired number of items
  for (let i = 0; i < numServiceItems; i++) {
    const serviceItem = createServiceItem();
    serviceContainer.appendChild(serviceItem);
  }
  
  

