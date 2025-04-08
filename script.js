
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
            <span onclick="markAsComplete(${i})" class="radioButton"> ◯ <span>${myToDoList[i]}</span></span> 
            <span><i onclick="deleteItem(${i})"  class="fa-solid fa-xmark"></i></span>
        </div>
        `
    }
    getListItemContainer.innerHTML = innerHtml;
}



function markAsComplete(id){
    
    let indTask = myToDoList.filter(element => element != id)
    // let getRadioButton = document.

    indTask.querySelector('.radioButton').textContent = '◯';
    
}



function deleteItem(index){
    myToDoList.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(myToDoList));
    displayToDoListItem();
}