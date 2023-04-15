//=============== opening faq answer on faq head click ========================//

// get all faq head element
const faq = document.querySelectorAll(".faq");
let answerHeights = [];
const faqAnswers = document.querySelectorAll(".faq-answer")

faqAnswer.forEach(ans => {
    const high = ans.getBoundingClientRect().height
    answerHeights.push(high)
    ans.getBoundingClientRect().height = "0px"
}
alert(answerHeights)
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
