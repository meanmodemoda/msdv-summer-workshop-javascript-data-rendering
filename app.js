import data from "./data.js";

let newData = data.sort(function(a,b){
    return a.release_date-b.release_date;
}
)

let itemNum = 5;
const nextPageButton =document.querySelector('#next-page');
const previousPageButton =document.querySelector('#previous-page');

function sliceData() {
    var pieceData =newData.slice(itemNum-5,itemNum);
    render(pieceData);
}

//default render first 5 records when the window is loading
window.onload = async function() {
    sliceData();
    previousPageButton.disabled = true;
}

nextPageButton.addEventListener(
    "click", ()=>{
     previousPageButton.disabled = false;
     
    if(itemNum<newData.length && itemNum>=5) {
        itemNum += 5;
     sliceData();
    }

    if(itemNum>=newData.length) {
   nextPageButton.disabled = true;
}
    console.log(itemNum);
})

previousPageButton.addEventListener(
    "click", ()=>{
        
    nextPageButton.disabled=false;
//the moment a previousPageButton is clicked, nextPageButton is enabled    
    
    if(itemNum>5) {
         itemNum -= 5;
    sliceData();
    }

    if(itemNum===5) {
   previousPageButton.disabled = true;

}
 console.log(itemNum);
})

    
function render(newData) {
    const container=document.querySelector('#container');

    container.innerHTML = newData.map(
         (item) => {
                return `<div class="card">
        <h2><b><i>${item.title}</i></b></h2>
        <img src=${item.image}>
        <ul>
        <li><b>Director:</b> ${item.director}</li>
        <li><b>Producer:</b> ${item.producer}</li>
        <li><b>Release Date:</b> ${item.release_date}</li>
        <li><b>Rotten Tomatoes:</b> ${item.rt_score}%</li>
        </ul>
        <p>${item.description}</p>
        </div>`
        }
    ).join('');
//here join joins all the html elements together
console.log(container);
}


