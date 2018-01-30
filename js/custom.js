//on scroll up navbar should appear
var navEl = document.getElementById('theNavBar')
var contentEl = document.getElementById('content-container')


window.addEventListener('scroll', scrollTopDisappear)
var lastScroll = 0
function scrollTopDisappear(){
  var scrollMeter = window.pageYOffset
  if(scrollMeter < lastScroll){//if scrolling up
    if(scrollMeter > navEl.clientHeight){
      //console.log('navbar should be colored')
      $('.navbar-inverse').addClass("navbar-colored")
      var links = document.querySelector("nav").querySelectorAll("a")
      links.forEach((link)=>{
        link.style.textShadow = "none"
      })
    }
    else{
      $('.navbar-inverse').removeClass("navbar-colored")
      var links = document.querySelector("nav").querySelectorAll("a")
      links.forEach((link)=>{
        link.style.textShadow = "1px 1px #9d9d9d"
      })
    }
    //console.log('show nav')
    $('.navbar').fadeIn()
  }
  else{
    //console.log('hide nav')
    $('.navbar').fadeOut()
  }
  lastScroll = scrollMeter
}

function scrollToTop(){
  $('html,body').animate({ scrollTop: 0 }, 'slow');
}

