const starEL =  document.querySelectorAll(".fa-solid")

starEL.forEach((starEL,index)=>{
    starEL.addEventListener("click",()=>{
        console.log("clicked", ()=>{
            updateRating(index)
        });
    });
});

function updateRating(index){
    starEL.forEach((starEL, idx)=>{
        if(idx < index +1){
            starEL.classList.add("active");
        }else{
            starEL.classList.remove("active");
        }
    });
}