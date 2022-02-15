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

  const tabLists = document.querySelector('[role="tablist"]')
  const tabs = tabLists.querySelectorAll('[role="tab"]')
  
  let tabFocus = 0

  tabLists.addEventListener('keydown', event => {
    const keydownLeft = 37
    const keydownRight = 39

    if (event.keyCode === keydownLeft || event.keyCode === keydownRight) {
      tabs[tabFocus].setAttribute("tabindex", -1)
    }

    switch (event.keyCode) {
      case keydownLeft:
        tabFocus--
        if (tabFocus < 0) tabFocus = tabs.length - 1
        break;
      case keydownRight: 
        tabFocus++
        if (tabFocus >= tabs.length) tabFocus = 0
        break;
    }

    tabs[tabFocus].setAttribute("tabindex", 0)
    tabs[tabFocus].focus()
  })

  tabs.forEach(tab => {
    tab.addEventListener('click', event => {
      const targetTab = event.target
      const targetPanel = targetTab.getAttribute('aria-controls')
      const targetImage = targetTab.dataset.image
      const tabContainer = targetTab.parentNode
      const mainContainer = tabContainer.parentNode

      tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute('aria-selected', false)
      
      targetTab.setAttribute('aria-selected', true)

      mainContainer
        .querySelectorAll('[role="tabpanel"]')
        .forEach(panel => panel.setAttribute('hidden', true))
      
      mainContainer.querySelector(`#${targetPanel}`).removeAttribute('hidden')

      mainContainer
        .querySelectorAll('picture')
        .forEach(picture => picture.setAttribute('hidden', true))

      mainContainer.querySelector(`#${targetImage}`).removeAttribute('hidden')

    })
  })
})
