
let myToDoList = JSON.parse(localStorage.getItem('items')) || [];



function addToDoList() {
    let getInputValue = document.querySelector('.inputField');
    let getInputText = getInputValue.value;

    myToDoList.push(getInputText);

    if(getInputText == ""){
        alert("Can't Be Empty")
        return;
    }

    localStorage.setItem("items", JSON.stringify(myToDoList));

    getInputValue.value = "";


    displayToDoListItem();
}
displayToDoListItem();

function displayToDoListItem(){
    let getListItemContainer = document.querySelector('.listItem');

    let innerHtml = "";

    for(let i = 0; i<myToDoList.length; i++){
        innerHtml += `
        <div class="SingleItem" >
            <span class="radioButton">${myToDoList[i]}</span>
            <span><i onclick="deleteItem(${i})"  class="fa-solid fa-xmark"></i></span>
        </div>
        `
    }
    getListItemContainer.innerHTML = innerHtml;
}


document.querySelector('.radioButton').addEventListener('click', function (e) {
    if (e.target.classList.contains('radioButton')) {
        e.target.classList.toggle('lineThrough');
        e.target.classList.toggle('selected');
        localStorage.setItem('items', JSON.stringify(myToDoList));
    }
})



function deleteItem(index){
    myToDoList.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(myToDoList));
    displayToDoListItem();
}