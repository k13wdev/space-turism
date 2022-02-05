document.addEventListener('DOMContentLoaded', () => {
  const primaryNavigation = document.querySelector('.primary-navigation')
  const primaryNavigationToggle = document.querySelector('.primary-navigation-toggle')

  primaryNavigationToggle.addEventListener('click', () => {
    if(primaryNavigation.dataset.visible === 'false') {
      primaryNavigation.dataset.visible = 'true'
      primaryNavigationToggle.setAttribute('aria-expanded', 'true')
      
    } else if(primaryNavigation.dataset.visible === 'true') {
      primaryNavigation.dataset.visible = 'false'
      primaryNavigationToggle.setAttribute('aria-expanded', 'false')
    }
  })
})