let addbutton = document.querySelector('.add-btn');
let modalCont = document.querySelector('.modal-cont')
let addTaskFlag = false;

addbutton.addEventListener('click',function(e){
    addTaskFlag =! addTaskFlag;
    if(addTaskFlag === true){
        //flex
        modalCont.style.display = 'flex';
    }
    else {
        // none
        modalCont.style.display = 'none';
    }
})


let removebutton = document.querySelector('.remove-btn');
let removeTaskFlag = false;

removebutton.addEventListener('click',function(e){
    removeTaskFlag =! removeTaskFlag;

    if(removeTaskFlag===true){
        //flex
        alert(' Remove button is now activated. ')
        removebutton.style.color ='red';
    }
    else {
        removebutton.style.color ='white';
    }
})


let allpriorityColors = document.querySelectorAll('.priorty-color');
// By doing the above step we are selecting all the div with class as Priority Color

allpriorityColors.forEach(function(colorElem){
    // By doing tyhis we are running the for loop on allPriorityColors. 
    colorElem.addEventListener('click',function(e){
        // ColorElem is second function by which we are adding functionality to each and every element of all the colors. 
        allpriorityColors.forEach(function(priortyColorElem){
            priortyColorElem.classList.remove('active');
        })
        colorElem.classList.add('active');
    })
})