//select all skill buttons
var skillBTNRowELs = document.querySelectorAll(".skill-btns")
//for each grouping
for(let i = 0; i < skillBTNRowELs.length; i++){
    //select all their children
    var skillBTNs = skillBTNRowELs[i].getElementsByClassName('btn-skill')
    //every interval, highlight the next one
    higlight(skillBTNs)
}

function higlight(elArr){
    var counter = elArr.length
    setInterval(()=>{
        // console.log("counter: ",counter)
        elArr[(counter - 1) % elArr.length ].classList.remove('btn-skill-active')
        elArr[counter % elArr.length].classList.add('btn-skill-active')
        counter++
    },2000)
}