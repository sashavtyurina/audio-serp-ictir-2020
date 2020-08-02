// Hanlder for 'Follow Button Bar' module at smaller screens
function adjustLabelForFollowButtonBar() {
  let moduleWidth = document.querySelector('.pb-f-global-follow-button-bar .card').offsetWidth
  console.log('moduleWidth inside service: ' + moduleWidth)
  const btns = [...document.querySelectorAll('.pb-f-global-follow-button-bar span.uppercase')]
  if (moduleWidth <= 295) {
    btns.forEach(btn => {
      btn.classList.add('hidden')
    })
  } else {
    btns.forEach(btn => {
      btn.classList.remove('hidden')
    })
  }
}

adjustLabelForFollowButtonBar()
window.addEventListener('resize', adjustLabelForFollowButtonBar)
