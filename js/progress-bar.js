const progreesBar = $('.progress-bar')

function updateProgressBar() {
  const scrollTop = $(window).scrollTop()
  const scrollHeight = $(document).height() - $(window).height()
  const progress = Math.round((scrollTop / scrollHeight) * 100)

  const translateValue = `translate3d(${progress}%, 0, 0)`
  progreesBar.css('transform', translateValue)
}

// 스크롤시 progress bar 상태 변화
$(window).on('scroll', updateProgressBar)

updateProgressBar()
