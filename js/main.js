

window.addEventListener("load", () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /*----Page Loader ----- */
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    },600);
})



/*------ about section tab-------*/


    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        console.log(event.target);
        /* if event trget contains 'tab item' class and not
        contains active class*/
        if(event.target.classList.contains("tab-item") &&
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            //deactive existing active 'tab item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            //activate new 'tab-item'
            event.target.classList.add("active","outer-shadow");
             //deactive existing active 'tab item'
             aboutSection.querySelector(".tab-content.active").classList.remove("active");
             //activate new 'tab-content'
             aboutSection.querySelector(target).classList.add("active");
        }
    })

/*------ about section tab ends -------------*/

/*-------- Active Section ----------------- */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link-item") && e.target.hash !== "")
    {
        const hash = e.target.hash;
        console.log(hash);
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            console.log("true");
            toggleNavbar();
        }
        else{
            console.log("false");
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});



/*----------- portfolio item details popup ----------- */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn"))
    {
       togglePortfolioPopup();
       document.querySelector(".portfolio-popup").scrollTo(0,0);
       portfolioItemDetails(e.target.parentElement);
    }
})
//hide pop up when click outside of it
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

function  portfolioItemDetails(portfolioItem)
{
    document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}


/*---Toggle Navbar----*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}