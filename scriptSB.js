/* This const selects all hashtags in the HTML
DOC so that a later forEach loop can place a
"click" evenListener on them for further
manipulation*/

const myHashTagItems = document.querySelectorAll(".hashTagItem");


/* This function selectedHashTag has the sole purpose
of altering the color of an element in the HTML Doc
upon a click by the user. */
function selectedNumber(input)
{
    console.log("Div has been clicked");
    // console.log(input.innerHTML)
    // console.log(input.target)
    if(input.style.backgroundColor != 'rgb(205, 205, 205)')
    {
        input.style.backgroundColor = 'rgb(205, 205, 205)';
        
    }
    else
    {
        input.style.backgroundColor = 'white';
    }
    
}

myHashTagItems.forEach(placeHolderForCurrentDivInLoop => {
    placeHolderForCurrentDivInLoop.addEventListener("click",  e => {
        
        selectedNumber(placeHolderForCurrentDivInLoop)
        
        
    } )
})

/* gotta fix this up to get text from elements
instead of parsing an int. */

function getSelectedHashTags()
{
    let hashTagList = []
    myHashTagItems.forEach(e => {
        if(e.style.backgroundColor == 'rgb(205, 205, 205)')
        {
            hashTagList.push(`#${e.innerHTML} `);
        }
    });
    
    myHashTagItems.forEach(e => {
        if(e.style.backgroundColor == 'rgb(205, 205, 205)')
        {
            e.style.backgroundColor = 'white';
        }
    })

    console.log(hashTagList)

    navigator.clipboard.writeText(hashTagList);
    /* if(hashTagList.length > 0)
    {
        addSelectedNumbersToDiv(hashTagList);
    } */
    
}

/* Just adding a comment so that I can commit to GitHub again to test */

