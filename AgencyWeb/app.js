// ================= MOBILE MENU =================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



menuBtn.addEventListener("click", () => {


    navLinks.classList.toggle("active");


});

// ================= CLOSE MENU ON CLICK =================


const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {


    link.addEventListener("click", () => {


        navLinks.classList.remove("active");


    });


});

// bike ki details 

function showDetails(id){

    let section = document.getElementById(id);

    if(section.style.display === "block"){
        section.style.display="none";
    }
    else{
        section.style.display="block";

        section.scrollIntoView({
            behavior:"smooth"
        });
    }

}



let accordions = document.querySelectorAll(".accordion");


accordions.forEach(button=>{

    button.addEventListener("click",()=>{

        let panel = button.nextElementSibling;


        if(panel.style.display==="block"){

            panel.style.display="none";

        }
        else{

            panel.style.display="block";

        }

    });

});



// ================= ENQUIRY FORM =================


const enquiryForm = document.getElementById("enquiryForm");



if(enquiryForm){


    enquiryForm.addEventListener("submit",(e)=>{


        e.preventDefault();



        alert(
            "Thank you for your enquiry. Shri Naresh Honda team will contact you soon."
        );



        enquiryForm.reset();

    });


}

// ================= BIKE ENQUIRY BUTTON =================



const enquiryButtons = document.querySelectorAll(".enquiry-btn");



enquiryButtons.forEach(button => {



    button.addEventListener("click",()=>{


        document
        .getElementById("contact")
        .scrollIntoView({
            behavior:"smooth"
        });



    });


});

// ================= SCROLL ANIMATION =================



const cards = document.querySelectorAll(
".bike-card, .service-card, .why-card, .review-card"
);




const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";


        }


    });



},{
    threshold:0.2
});



cards.forEach(card=>{


    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition="0.6s";


    observer.observe(card);


});


// ================= CURRENT YEAR FOOTER =================



const year = new Date().getFullYear();


const copyright = document.querySelector(".copyright p");



if(copyright){


    copyright.innerHTML =
    `© ${year} Shri Naresh Honda. All Rights Reserved.`;


}

function changeBike(id, image){
    document.getElementById(id).src = image;
}