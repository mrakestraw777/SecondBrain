function makeUL(array, appendTo)
{
    let newUL = document.createElement('ul');
    for(let x = 0; x < array.length; x++)
    {
        if (Array.isArray(array[x]))
        {
            makeUL(array[x], newUL);
        } else
        {
            let newLi = document.createElement('li');
            newLi.appendChild(document.createTextNode(array[x]));
            newUL.appendChild(newLi);
            appendTo.appendChild(newUL);
        }
    }
}
 
/*  var myArray = ['Value 1', ['Inner value 1', ['Inner-inner 1', ['Inner-Inner-Inner 1'],'Inner-Inner 2',],'Inner value 2', 'Inner value 3', 'Inner value 4'], 'Value 2', 'Value 3', 'Value 4', 'Value 5', ['Inner value 1', ['Inner-inner 1', ['Inner-Inner-Inner 1'],'Inner-Inner 2',]], 'Value 6'];  */
const co_workersHashTags = ['Bill_Bristow', 'Harris_Bristow', 'Drew_Bunson', 'Savannah_Willis', 'Stephen_Beaudrot', 'Tony_Skinner', 'Mark_Burnett']
const familyHashTags = ['Dad', 'Mom', 'David', 'Katie',]
const friendsHashTags = ['Matthew_Wamboldt', 'Joey']
const shareWithHashTags = ['Uyên', 'Family', familyHashTags, 'Friends', friendsHashTags, 'Co-Workers', co_workersHashTags]
const sharingHashTags = ['Not_Shared', 'Shared', 'Share_With', shareWithHashTags,]

const progressHashTags = ['Not_Started', 'Not_Done', 'In_Progress', 'Finished']
const linkStatusHashTags = ['Not_Linked', 'Linked']
const linkingHashTags = ['Pro_Affirmative_Supporting', 'Anti_Opposed_Against', 'Feels_Related', 'Link_Status', linkStatusHashTags]


const digital_Resources = ['Video','Book','Audio','Website']
const physical_Resources = ['Book']
const resourcesHashTags = [
    'Digital',
        digital_Resources,
    'Physical',
        physical_Resources,
]
const repeatOptions = ['Daily', 'Weekly', 'Monthly', 'Annual', 'Custom_TBD',]
const to_Do_HashTags = ['Task', 'Shopping', 'Time_Sensitive', 'One_Time', 'Repeated', repeatOptions,]

const metaHashTags = [
    'Sharing', 
        sharingHashTags, 
    'Done/Progress', 
        progressHashTags,
    'Link_To_Another_Note', 
        linkingHashTags,
    'Resources', 
        resourcesHashTags,
    'To_Do',
        to_Do_HashTags,
];


const visitation_HashTags = ['Visited', 'Not_Visited',]
const meal_Type_HashTags = ['Breakfast', 'Brunch', 'Lunch', 'Dinner']
const seasonal_Cuisine_HashTags = ['Spring', 'Summer', 'Fall', 'Winter',]
const diet_Type_HashTags = ['Keto', 'Paleo', 'Vegetarian', 'Vegan', 'Gluten_Free', 'Whole_30',]
const cuisine_HashTags = [
    'Meal_Type',
        meal_Type_HashTags,
    'Seasonal',
        seasonal_Cuisine_HashTags,
    'Diet_Type',
        diet_Type_HashTags,
    'Asian',
    'Americas',
    'African',
    'European',
    'Oceanic',    
]

const restaurants_HashTags = [
    'Cuisine',
        cuisine_HashTags,
    'Gluten_Free_Friendly',
    'Visitation_Status',
        visitation_HashTags,
    'Visit_With',
        shareWithHashTags,

]
const going_Out_HashTags = [
    'Restaurants',
        restaurants_HashTags,
    'Activities',
]
const staying_In_HashTags = ['Movie_Night',]
const dating_HashTags = [
    'Going_Out',
        going_Out_HashTags,
    'Staying_In',
        staying_In_HashTags,
    'Suggestions_From_Others',
]
const traveling_HashTags = [
    'Visitation_Status',
        visitation_HashTags,
]
const uyen_HashTags = [
    'Dating',
        dating_HashTags,
    'Memories',
    'Traveling',
        traveling_HashTags,
    'To_Do',
        to_Do_HashTags,
]

const food_HashTags = [
    'Recipes',
        cuisine_HashTags,
    'Restaurants',
        cuisine_HashTags,
]
const questions_HashTags = ['UnAnswered_Question', 'Answered_Question',]
const general_Interest_HashTags = [
    'Inspiration',
    'Food',
        food_HashTags,
    'Look_At_Later'
]
const personalHashTags = [
    'Uyên',
        uyen_HashTags,
    'General_Interest',
        general_Interest_HashTags,
    'Questions',
        questions_HashTags,
    'Shopping',
        to_Do_HashTags,
    'Brings_Happiness',
]
const projectHashTags = [
    'Work',
    'Therapy',
    'LIFE_Behavior_Consulting',
    'Second_Brain',
    'Questions',
        questions_HashTags,
    'META',
        metaHashTags,
]
const myHashTagArray = [
    'Personal',
        personalHashTags,
    'Project',
        projectHashTags, 
    'Archive_(Misc)',
    'META',
        metaHashTags
];
 

  var div = document.getElementById('arrayDiv');

  makeUL(myHashTagArray, div);

  
  




  
const myHashTagItems = document.querySelectorAll("li");
/* Adds classes .hashTagItem and .collapsible to all LIs */
myHashTagItems.forEach(placeHolderForCurrentDivInLoop => {
    placeHolderForCurrentDivInLoop.classList.add("hashTagItem", "collapsible")
})

/* This const selects all hashtags in the HTML
DOC so that a later forEach loop can place a
"click" evenListener on them for further
manipulation*/

// const secondBrainNoteOrLink = JSON.stringify(document.querySelectorAll("#secondBrainNote"));
var colorForSelectedTags = "rgb(205, 205, 205)";
var currentDate = new Date;

for (i = 0; i < myHashTagItems.length; i++) {
    myHashTagItems[i].classList.add("hashTagItem");
    console.log(myHashTagItems[i])
  }


  
/* adds a single click event to all LIs gather by the coll array */
var coll = document.querySelectorAll("li.hashTagItem");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    console.log(content)
    if ((content.style.display == "list-item") && !content.classList.contains("hashTagItem")) {
      content.style.display = "none";
    } else {
      content.style.display = "list-item";
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
}