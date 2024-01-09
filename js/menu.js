const menu = $('.menu')
const menuBtn = $('.menu-trigger')
const btnBar = $('.btn-bar')
const menuList = $('.menu-content')

let isClick = false

function showMenu() {
  isClick = true

  $('body').addClass('no-scroll')
  btnBar.addClass('active')
  menuBtn.addClass('active')
  menu.addClass('active')

  // 스크린 리더에 메뉴 펼침 상태 제공
  menuBtn.attr('aria-expanded', 'true')

  // 스크린 리더에 메뉴 보이기
  menu.attr('aria-hidden', 'false')
}

function hideMenu() {
  isClick = false

  $('body').removeClass('no-scroll')
  btnBar.removeClass('active')
  menuBtn.removeClass('active')
  menu.removeClass('active')

  // 스크린 리더에 메뉴 접힘 상태 제공
  menuBtn.attr('aria-expanded', 'false')

  // 스크린 리더에 메뉴 숨기기
  menu.attr('aria-hidden', 'true')
}

// 메뉴 리스트 클릭 시 해당 섹션으로 이동
menuList.on('click', 'a', () => {
  hideMenu()
})

// 메뉴 버튼 클릭 시 메뉴창 보이기/숨기기
menuBtn.on('click', () => {
  if (!isClick) {
    showMenu()
  } else {
    hideMenu()
  }
})
