//=============== opening faq answer on faq head click ========================//

// get all faq head element
const faq = document.querySelectorAll(".faq");

// add listener Click to all faq head
faq.forEach(qa => {
    // get faq head in selected faq
    const faqHead = qa.querySelector(".faq-head")
    // add listener to faq head
    faqHead.addEventListener("click", function(){
        // remove active in all faq
        faq.forEach(q => q.classList.remove("active"))
        // add active class to selected faq
        qa.classList.add("active")
        
        console.log(faqHead)
    })
})
