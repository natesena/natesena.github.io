function sizeHeight(){
    var windowHeight = window.innerHeight
    console.log(windowHeight)
    var iframeEl = document.getElementById("three-sixty")
    var innerFrameEl = document.getElementById("inner-frame")
    console.log("top inner before: ",innerFrameEl.style.top)
    iframeEl.style.minHeight = windowHeight + "px"
    innerFrameEl.style.top = windowHeight/2 - 50 + "px"
}

sizeHeight()