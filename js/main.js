
//mobile menu
let mobile_menu_action = (()=>{
    const mobile_menu = document.querySelector("nav .mobile-menu");
    const hamburger = document.querySelector(".hamburger");
    const cancle = document.querySelector("nav .mobile-menu  .cancle");
    let html  = document.querySelector("html");
    const nav_item = document.querySelectorAll(".nav-item");
    hamburger.addEventListener("click", ((e) => {
        //  mobile_menu.style.display ="block"
        mobile_menu.classList.add("slideLeft");
        mobile_menu.classList.remove("slideRight");
        
        html.classList.add("fixed-display")
        
    }))

    cancle.addEventListener("click", (e =>{     
        mobile_menu.classList.add("slideRight");
        mobile_menu.classList.remove("slideLeft");
        html.classList.remove("fixed-display")
        
    }))

    //when user click a menu item and item
    nav_item.forEach(item =>{
        item.addEventListener("click", e =>{
            html.classList.remove("fixed-display")
            mobile_menu.classList.add("slideRight");
            mobile_menu.classList.remove("slideLeft");
        })
    })
})
    

//handeling popup
const portfolioPopup = ()=>{
    let clickAbles = document.querySelectorAll(".open-popup");
    const close_btn = document.querySelector("#portfolio-modal .cancle");
    const portfolio_modal = document.querySelector("#portfolio-modal");
    const body = document.querySelector("body")



    //popup data
    let p_tittle = document.querySelector(".popup .title")
    let p_img = document.querySelector(".popup .img img")
    let p_category = document.querySelector(".popup .category");
    let p_year = document.querySelector(".popup .year");
    let p_client_name = document.querySelector(".popup .client-name");
    let p_description = document.querySelector(".popup .portofolio-desc");
    
    clickAbles.forEach(item =>{
        item.addEventListener("click", (e)=>{
            let elem = e.target;
            
            while (!elem.classList.contains("card"))
            {
                elem = elem.parentNode;
            }

            //manipulationg modal

            p_img.setAttribute("src", elem.querySelector(".c-img img").getAttribute("src"))  //changing img
            p_tittle.innerHTML = p_tittle.innerText = elem.querySelector(".card-title").innerText; //changing title

            p_category.innerText = elem.querySelector(".category").innerText; //changing category
            p_year.innerText = elem.querySelector(".year").innerText;
            p_client_name.innerText = elem.querySelector(".client").innerText
            p_description.innerText = elem.querySelector(".desc").innerText;


            portfolio_modal.classList.add("open");
            body.classList.add("fixed-display")
        })
    })

    close_btn.addEventListener("click", ()=>{
        body.classList.remove("fixed-display")
        portfolio_modal.classList.remove("open");

    })
}
    

//scrolling effect

const scrollEfect = ()=>
{
    let card_container = document.querySelectorAll(".portfolio-container .card-container")
    
    if (!card_container[card_container.length-1].classList.contains("slideTop2")){

        let viewportHeight  = window.innerHeight;
        card_container.forEach(item =>{
            let content_height =  item.innerHeight;
            let dist = item.getBoundingClientRect().top - viewportHeight + content_height ;
            if (dist <= 0)
            {
                tem.querySelector(".card").style.transform = " translateY(0%)"
                item.classList.add("slideTop2");
                
            }
        })
        document.addEventListener("scroll", (e)=>{
            
            card_container.forEach(item =>{
                let content_height =  item.clientHeight;
                
                let dist = item.getBoundingClientRect().top - viewportHeight + content_height ;
                
                if (dist <= 0)
                {
                    item.querySelector(".card").style.transform = " translateY(0%)"
                    item.classList.add("slideTop2");
                    
                }
            })
            
            
            
            
         })
    }
    

   
}


const portfolio_menu = ()=>{
    let menu_items = document.querySelectorAll(".p-menu-item");
    let card_containers = document.querySelectorAll(".portfolio-container .card-container");
    
    menu_items.forEach(menu=>{
        menu.addEventListener("click", (e)=>{
            let target = e.target.getAttribute("target");
            
            card_containers.forEach(item =>{
               if (target == "all")
               {
                    item.querySelector(".card").style.transform = " translateY(100%)"
                    item.classList.remove("d-hid")
                   
                    item.classList.remove("slideTop2")
                    item.classList.add("slideTop2");
                   
                   
                   item.querySelector(".card").style.transform = " translateY(0%)"
               }
               else 
               {
               
                    if (item.getAttribute("data-target") == target)
                    {
                        item.classList.remove("d-hid");
                        item.querySelector(".card").style.transform = " translateY(0%)"
                        
                        
                        item.classList.remove("slideTop2")
                        item.classList.add("slideTop2");
                        
                    }
                    else
                    {
                        
                        item.querySelector(".card").style.transform = " translateY(100%)"
                        item.classList.add("d-hid");
                        
                    }
                }
            })
        })
    })
}

portfolio_menu();
scrollEfect();
mobile_menu_action();
portfolioPopup();
