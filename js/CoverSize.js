$(window).on('resize', ()=>{
    var coverEl = document.getElementById('cover')
    if(window.innerWidth < 650){
        var slide = window.innerWidth - 710
        coverEl.style.backgroundPositionX = slide + "px"
    }
    else{
        cover.style.backgroundPositionX = 0
    }
})