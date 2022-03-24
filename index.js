let countEl  = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increaseCount(){
    count++;
    countEl.innerText = count
}


function decreaseCount() {
    count--;
    if(count < 0){
        count = 0
    }
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent +=  countStr
    countEl.textContent = 0
    count = 0
}





