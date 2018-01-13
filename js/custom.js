//on scroll up navbar should appear
var navEl = document.getElementById('theNavBar')
var contentEl = document.getElementById('content-container')

console.log("nav height", navEl.clientHeight)

window.addEventListener('scroll', scrollTopDisappear)
var lastScroll = 0
function scrollTopDisappear(){
  var scrollMeter = window.pageYOffset
  if(scrollMeter < lastScroll){//if scrolling up
    if(scrollMeter > navEl.clientHeight){
      //console.log('navbar should be colored')
      $('.navbar-inverse').addClass("navbar-colored")
    }
    else{
      $('.navbar-inverse').removeClass("navbar-colored")
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
  console.log('hey')
  $('html,body').animate({ scrollTop: 0 }, 'slow');
}