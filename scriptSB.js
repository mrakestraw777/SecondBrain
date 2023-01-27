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
const co_workersHashTags = ['Bill_Bristow', 'Harris_Bristow', 'Drew_Bunson', 'Savanna_Willis', 'Stephen_Beaudrot', 'Tony_Skinner', 'Mark_Burnett']
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
    'Resources',
    'Digital',
        digital_Resources,
    'Physical',
        physical_Resources,
]
const appointmentArray = ['Appointment', 'Therapy','LIFE_Behavior_Consulting','Egoscue_Physical_Therapy', ]
const repeatOptions = ['Repeated', 'Daily', 'Weekly', 'Monthly', 'Annual', 'Custom_TBD',]
const to_Do_HashTags = ['Task', 'Appointment',appointmentArray,'Not_Done', 'Done',  'Shopping', 'Time_Sensitive', 'One_Time', 'Repeated', repeatOptions,]

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

const holiday_Food = ['Holiday_Food', 'Christmas', 'Thanksgiving', 'Halloween', 'Fourth_of_July', 'New_Years', "Lunar_New_Year",]
const visitation_HashTags = ['Visited', 'Not_Visited',]
const meal_Type_HashTags = ['Breakfast', 'Brunch', 'Lunch', 'Dinner',]
const seasonal_Cuisine_HashTags = ['Spring', 'Summer', 'Fall', 'Winter','Holiday_Food', holiday_Food,]
const diet_Type_HashTags = ['Keto', 'Paleo', 'Vegetarian', 'Vegan', 'Gluten_Free_Diet', 'Whole_30',]
const asian_Cuisine_HashTags = ['Korean', 'Taiwanese', 'Vietnamese',]
const cuisine_HashTags = [
    'Meal_Type',
        meal_Type_HashTags,
    'Seasonal',
        seasonal_Cuisine_HashTags,
    'Diet_Type',
        diet_Type_HashTags,
    'Asian',
        asian_Cuisine_HashTags,
    'Americas',
    'African',
    'European',
    'Oceanic',    
]

const restaurants_HashTags = [
    "Restaurants",
    'Cuisine',
        cuisine_HashTags,
    'Gluten_Free_Friendly',
    'Visitation_Status',
        visitation_HashTags,
    'Visit_With',
        shareWithHashTags,

]
const going_Out_HashTags = [
    'Going_Out',
    'Restaurants',
        restaurants_HashTags,
    'Activities',
]
const staying_In_HashTags = ['Movie_Night',]
const date_result_Array = ['Date_Result','Amazing_Success', 'Very_Good','Acceptable_Neutral', 'Bad_Date_Idea_No_Repeat',]
const dating_HashTags = [
    'Date_With_Uyen',
    'Going_Out',
        going_Out_HashTags,
    'Staying_In',
        staying_In_HashTags,
    'Suggestions_From_Others',
    'Date_Result',
        date_result_Array,
]
const traveling_HashTags = [
    'Visitation_Status',
        visitation_HashTags,
]
const uyen_HashTags = [
    'Uyen',
    'Uyên_Seal_Of_Approval',
    'Date_With_Uyen',
        dating_HashTags,
    'Memories',
    'Traveling',
        traveling_HashTags,
    'To_Do',
        to_Do_HashTags,
]

const food_HashTags = [
    'Food',
    'Recipes',
        cuisine_HashTags,
    'Restaurants',
    restaurants_HashTags,
]
const questions_HashTags = ['UnAnswered_Question', 'Answered_Question',]
const general_Interest_HashTags = [
    'General_Interest',
    'Inspiration',
    
    'Fitness',
    'Look_At_Later'
]

const personalHashTags = [
    'Personal',
    'Uyên',
        uyen_HashTags,
    'General_Interest',
        general_Interest_HashTags,
    'Food',
        food_HashTags,
    'Questions',
        questions_HashTags,
    'Brings_Happiness',
]

const LIFE_Behavior_Consulting_Links = ["Renee's Zoom:  https://us02web.zoom.us/my/lifebehaviorconsulting.careers.rf?pwd=dK5yXuWm4QpsDNyeAKe-3VH6-8646Q.1", ]

const LIFE_Behavior_Consulting_Hashtags = ['LIFE_Behavior_Consulting', 'Links', LIFE_Behavior_Consulting_Links, 'Energy_Restoration',]

const projectHashTags = [
    'Fossil_Future',
    'Work',
    'Therapy',
    'LIFE_Behavior_Consulting',
    LIFE_Behavior_Consulting_Hashtags,
    'Better_At_Cooking',
    'Second_Brain',
    'Questions',
        questions_HashTags,
    'META',
        metaHashTags,
    'Look_At_Later',
]
const myHashTagArray = [
    'Personal',
        personalHashTags,
    'Project',
        projectHashTags, 
    // 'Archive_(Misc)',
    'META',
        metaHashTags,
    'SHARING', 
        sharingHashTags,
    'TASKs',
        to_Do_HashTags,
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

    let textifiedText = secondBrainNoteOrLink;
    console.log(`This is the textified TextArea:  ${textifiedText.length}`)

    if(textifiedText.length <= 2)
    {
        let hashTagList = []; /* [`Explanatory Note:  `] */
        myHashTagItems.forEach(e => {
            if(e.style.backgroundColor == colorForSelectedTags)
            {
                
                // hashTagList.push(`\n #${e.innerHTML} `);
                hashTagList.push(` #${e.innerHTML} `);
            }
        });
        /* hashTagList.push(`
    
        ${currentDate}`);

        console.log(hashTagList) */

        navigator.clipboard.writeText(hashTagList);
    } else
    {
        let hashTagList = [`${textifiedText}\n\nExplanatory Note:  `];
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