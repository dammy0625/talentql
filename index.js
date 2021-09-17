const ham=document.querySelector(".ham")
const slider=document.querySelector(".slider")
const bold=document.querySelector(".slider .bold")
const all = document.querySelectorAll(".cur li")




all.forEach((item)=>{
    item.onmouseover = (e)=>{
        bold.innerText = e.target.innerText
        
    }
})

ham.onclick = ()=>{
    slider.classList.toggle("slide")
}

