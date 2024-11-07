$(function () {
  const expList = $('.exp-list')
  const topBtn = $('.top-btn')

  // observe 옵션
  const appearOptions = {
    threshold: 1,
    rootMargin: '0px 0px 120px 0px',
  }

  // intersectionObserver 함수로 스크롤 시 해당 섹션의 위치에 위치하면 아래 코드 실행
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      }

      // exp-list의 자식 요소인 left, right 선택
      let childLeft = $(entry.target.firstElementChild)
      let childRight = $(entry.target.lastElementChild)

      childLeft.addClass('appear')
      childRight.addClass('appear')

      appearOnScroll.unobserve(entry.target)
    })
  },
  appearOptions)

  // 스크롤 최상단으로 이동
  function upToScroll() {
    $('html, body').animate({ scrollTop: 0 }, 800)
  }

  // observe 실행
  expList.each(function () {
    appearOnScroll.observe(this)
  })

  // top 버튼 클릭 시 스크롤 최상단으로 이동
  topBtn.on('click', upToScroll)
})
