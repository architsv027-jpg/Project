const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
const dueDate=document.getElementById("due-date");

// ye function addtask() hai jo input box se value leta hai aur 
// usse ek naya list item (li) banata hai aur usse list container 
// add karta hai. Agar input box khali hai to alert deta hai ki kuch 
// likhna hoga. Har list item ke sath ek span element bhi banata 
// hai jisme "×" hota hai, jo ki delete button ke roop me kaam karta hai.

function addtask(){

    if(inputbox.value === ''){
        alert("You must write something!");
    }

    else{

        let li = document.createElement("li");

        li.innerHTML = inputbox.value + " 📅 " + dueDate.value;

        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
        inputbox.value = '';
        savedata();
    }

//is code me humne listcontainer pe ek event listener add kiya hai
//  jo click event ko listen karta hai. Jab bhi listcontainer pe click
//  hota hai, ye function execute hota hai.

listcontainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

// ye is code ka matlab hai ki jab bhi listcontainer pe click hoga to ye 
// function chalega aur check karega ki click kis element pe hua hai. 
// Agar click LI element pe hua hai to us element ki class "checked" toggle 
// karega, yani agar class pehle se hai to remove karega aur agar nahi hai 
// to add karega. Agar click SPAN element pe hua hai to us element ke parent
//  (jo ki LI hoga) ko remove kar dega.

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();

// ye code localStorage ka use karta hai data ko save karne ke liye.