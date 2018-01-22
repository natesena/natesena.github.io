// This should run on load and resize
$(window).on('resize', sizeToFit)

function sizeToFit(){
    var coverEl = document.getElementById('cover')
    if(window.innerWidth < 405 ){
        var slide = window.innerWidth - 900
        coverEl.style.backgroundPositionX = slide + "px"
    }
    else if(window.innerWidth < 650){
        var slide = window.innerWidth - 710
        coverEl.style.backgroundPositionX = slide + "px"
    }
    else{
        cover.style.backgroundPositionX = 0
    }
}

sizeToFit()