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

function delete_results()
{
    // This will delete any outputs for new results to be printed without being added to 
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
  
  



