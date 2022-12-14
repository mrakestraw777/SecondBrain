/* This is my code as it was still working as of 11-17-2022 */

/* This const selects all hashtags in the HTML
DOC so that a later forEach loop can place a
"click" evenListener on them for further
manipulation*/

const myHashTagItems = document.querySelectorAll("li");
// const secondBrainNoteOrLink = JSON.stringify(document.querySelectorAll("#secondBrainNote"));
var colorForSelectedTags = "rgb(205, 205, 205)";
var currentDate = new Date;

for (i = 0; i < myHashTagItems.length; i++) {
    myHashTagItems[i].classList.add("hashTagItem");
    console.log(myHashTagItems[i])
  }


var coll = document.querySelectorAll("li");


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display == "block" && !content.classList.contains("hashTagItem")) {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* This function selectedHashTag has the sole purpose
of altering the color of an element in the HTML Doc
upon a click by the user. */
function selectedNumber(input)
{
    console.log("Div has been clicked");
    console.log(input.innerHTML)
    console.log(input.target)
    if(input.style.backgroundColor != colorForSelectedTags)
    {
        input.style.backgroundColor = colorForSelectedTags;
        
    }
    else
    {
        input.style.backgroundColor = 'white';
    }
    
}

myHashTagItems.forEach(placeHolderForCurrentDivInLoop => {
    placeHolderForCurrentDivInLoop.classList.add("hashTagItem", "collapsible")
})

myHashTagItems.forEach(placeHolderForCurrentDivInLoop => {
    placeHolderForCurrentDivInLoop.addEventListener("click",  e => {
        
        selectedNumber(placeHolderForCurrentDivInLoop)
        
        
    } )
})


/* This funtion */
function getSelectedHashTags()
{

    const secondBrainNoteOrLink = document.getElementById('secondBrainNote').value;
    console.log(secondBrainNoteOrLink);

    let textifiedText = JSON.stringify(secondBrainNoteOrLink);

    if(textifiedText == "")
    {
        let hashTagList = [`Explanatory Note:  `]
        myHashTagItems.forEach(e => {
            if(e.style.backgroundColor == colorForSelectedTags)
            {
                hashTagList.push(`\n #${e.innerHTML} `);
            }
        });
        hashTagList.push(`
    
        ${currentDate}`);

        console.log(hashTagList)

        navigator.clipboard.writeText(hashTagList);
    } else
    {
        let hashTagList = [`${textifiedText}\nExplanatory Note:  `];
        myHashTagItems.forEach(e => {
            if(e.style.backgroundColor == colorForSelectedTags)
            {
                hashTagList.push(`\n #${e.innerHTML} `);
            }
        });
        hashTagList.push(`
    
        ${currentDate}`);

        console.log(hashTagList)

        navigator.clipboard.writeText(hashTagList);
    }
    
    myHashTagItems.forEach(e => {
        if(e.style.backgroundColor == colorForSelectedTags)
        {
            e.style.backgroundColor = 'white';
        }
    })

    

    /* hashTagList.push(`
    
    ${currentDate}`);

    console.log(hashTagList)

    navigator.clipboard.writeText(hashTagList); */
    
} /* getSelectedHashTags() END */

/* Just adding a comment so that I can commit to GitHub again to test */

