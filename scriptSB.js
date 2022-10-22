/* This const selects all hashtags in the HTML
DOC so that a later forEach loop can place a
"click" evenListener on them for further
manipulation*/

const myDivs = document.querySelectorAll(".hashTagItem");


/* This function selectedHashTag has the sole purpose
of altering the color of an element in the HTML Doc
upon a click by the user. */
function selectedNumber(input)
{
    console.log("Div has been clicked");
    // console.log(input.innerHTML)
    // console.log(input.target)
    if(input.style.backgroundColor != 'grey')
    {
        input.style.backgroundColor = 'grey'
        
    }
    else
    {
        input.style.backgroundColor = 'white';
    }
    
}

myDivs.forEach(placeHolderForCurrentDivInLoop => {
    placeHolderForCurrentDivInLoop.addEventListener("click",  e => {
        
        selectedNumber(placeHolderForCurrentDivInLoop)
        
        
    } )
})

/* gotta fix this up to get text from elements
instead of parsing an int. */

function getSelectedHashTags()
{
    let hashTagList = []
    myDivs.forEach(e => {
        if(e.style.backgroundColor == 'grey')
        {
            hashTagList.push(`#${e.innerHTML} `);
        }
    });
    
    myDivs.forEach(e => {
        if(e.style.backgroundColor == 'grey')
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

