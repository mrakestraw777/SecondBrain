const metaArray = [
    'META',
        ['Sharing',
            ["Shared", 
            "Not_Shared",],
        ],
        ['Progress',
            [
                'Not_Started',
                'In_Progress',
                'Finished',
            ],
        ],
        ['Linked',],
        ['Resources',],
        ['To_Do',],
] /* END OF META ARRAY */



const arrayToUL = (arr) => {
    const ul = document.createElement("ul");
    ul.append(
      ...arr.map((value) => {
        if (Array.isArray(value)) return arrayToUL(value);
        const li = document.createElement("li");
        li.classList.add("hashTagItem", "collapsible");
        li.textContent = value;
        return li;
      })
    );
    return ul;
  };

  
  const hashTagArray = [
      "Personal", 
        ['Uyen', dateArray,
            ['Memories',], 
            [metaArray,],
          ],/* end of uyen */
        ['General_Interest',], 
        ['Brings_Happiness',], 
        ['Shopping',], 
        metaArray,
      
      "Project", metaArray, 
  
      "ARCHIVE",
  ]; /* END OF HASHTAG ARRAY */

  document.getElementById('arrayDiv').appendChild(arrayToUL(metaArray));
  
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


  
/* adds a single click event to all LIs gather by the coll array */
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
    /* console.log("Div has been clicked");
    console.log(input.innerHTML)
    console.log(input.target) */
    if(input.style.backgroundColor != colorForSelectedTags)
    {
        input.style.backgroundColor = colorForSelectedTags;
        
    }
    else
    {
        input.style.backgroundColor = 'white';
    }
    
}


/* Adds classes .hashTagItem and .collapsible to all LIs */
myHashTagItems.forEach(placeHolderForCurrentDivInLoop => {
    placeHolderForCurrentDivInLoop.classList.add("hashTagItem", "collapsible")
})

/* Places a DBL CLICK event on all LIs */
myHashTagItems.forEach(placeHolderForCurrentDivInLoop => {
    placeHolderForCurrentDivInLoop.addEventListener("dblclick",  e => {
        
        selectedNumber(placeHolderForCurrentDivInLoop)
        
        
    } )
})


/* This funtion */
function getSelectedHashTags()
{

    const secondBrainNoteOrLink = document.getElementById('secondBrainNote').value;
    console.log(secondBrainNoteOrLink);

    let textifiedText = JSON.stringify(secondBrainNoteOrLink);
    console.log(`This is the textified TextArea:  ${textifiedText.length}`)

    if(textifiedText.length <= 2)
    {
        let hashTagList = []; /* [`Explanatory Note:  `] */
        myHashTagItems.forEach(e => {
            if(e.style.backgroundColor == colorForSelectedTags)
            {
                
                // hashTagList.push(`\n #${e.innerHTML} `);
                hashTagList.push(`#${e.innerHTML} `);
            }
        });
        /* hashTagList.push(`
    
        ${currentDate}`);

        console.log(hashTagList) */

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
        hashTagList.push(`\n${currentDate}`);

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