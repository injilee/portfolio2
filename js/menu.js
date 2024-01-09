const menu = $('.menu')
const menuBtn = $('.menu-trigger')
const btnBar = $('.btn-bar')

let isClick = false

function showMenu() {
  isClick = true

  $('body').addClass('no-scroll')
  btnBar.addClass('active')
  menuBtn.addClass('active')
  menu.addClass('active')
}

function hideMenu() {
  isClick = false

  $('body').removeClass('no-scroll')
  btnBar.removeClass('active')
  menuBtn.removeClass('active')
  menu.removeClass('active')
}

menuBtn.on('click', () => {
  if (!isClick) {
    showMenu()
  } else {
    hideMenu()
  }
})
