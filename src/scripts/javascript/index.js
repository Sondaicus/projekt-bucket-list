let resor_array = [];
let äventyr_array = [];
let lärande_array = [];
let hobby_array = [];

init();

function init()
{
    document.getElementById("submit_activity").addEventListener("click", () => addToList(event));
}


function addToList(event) 
{
    event.preventDefault();

    let bucketForm = document.getElementById("activityCategory").value;
    let activityName = document.getElementById("activityName").value;

    //let newElementStringValue = `<li>${activityName}</li>`;

    let bucketListId = undefined;

    switch (bucketForm) 
    {
        case "Resor":
            bucketListId = "bucket_lists_resor_list";
            break;

        case "Äventyr":
            bucketListId = "bucket_lists_äventyr_list";
            break;

        case "Lärande":
            bucketListId = "bucket_lists_lärande_list";
            break;

        case "Hobby":
            bucketListId = "bucket_lists_hobby_list";
            break;

        default:
            break;
    }

    let entry = document.createElement('li');
    let bucketListObject = document.getElementById(bucketListId);
    let activityName_p = "<p>" + activityName + "</p>";
    let activitydeleteButton = '<button>Delete</button>';
    let newActivityContent = activityName_p + activitydeleteButton;
    entry.innerHTML = newActivityContent;

    const date = new Date();
    const time = date.getTime();

    entry.setAttribute("data-time", time);

    let entry_nodeButton = undefined;

    for(let i_0 = 0; i_0 < entry.childNodes.length; i_0++)
    {
        let currentChildNode = entry.childNodes[i_0];

        if(currentChildNode.localName == "button")
        {
            entry_nodeButton = currentChildNode;
            break;
        }
    }

    if(entry_nodeButton != undefined)
    {
        entry_nodeButton.setAttribute("onClick", "deleteEntry(" + time + ")");
    }
    
    bucketListObject.appendChild(entry);
}

function deleteEntry(elementTime)
{
    let deletedElement = document.querySelector('li[data-time="' + elementTime + '"]');

    if(deletedElement != null)
    {
        deletedElement.remove();
    }
}
