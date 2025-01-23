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

    let bucketListObject = document.getElementById(bucketListId);

   // bucketListObject.appendChild(newElementStringValue);

    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(activityName));
    bucketListObject.appendChild(entry);
}
