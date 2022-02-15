(function () {
  addImageZoom('.media__image')
})();

function addImageZoom(selector) {
  const images = document.querySelectorAll(selector)
  images.forEach((image) => {
    image.addEventListener('click', () => clickImage(image))
  })
}

function clickImage(image) {
  const divId = createDiv(image)
  const tileSources = getTileSources(image)
  const viewer = appendImageZoom(divId, tileSources)
  viewer.addOnceHandler('tile-loaded', hideImage, image)
  viewer.addOnceHandler('tile-loaded', fixScroll, divId)
}

function createDiv(image) {
  const div = document.createElement('div')
  const divId = 'div-' + image.getAttribute('id')
  div.setAttribute('id', divId)
  const imageComputedStyles = window.getComputedStyle(image)
  div.style.width = imageComputedStyles.getPropertyValue('width')
  div.style.height = imageComputedStyles.getPropertyValue('height')
  div.style.margin = '0 auto'
  image.parentNode.appendChild(div)
  return divId
}

function getTileSources(image) {
  const folder = '/files/derivatives/tiles/'
  const dzi =
    image
      .getAttribute('src')
      .split('/')
      .pop() + '.dzi'
  return folder + dzi
}

function appendImageZoom(divId, tileSources) {
  const prefixUrl = '/img/zoom-controls'
  const viewer = OpenSeadragon({
    id: divId,
    tileSources,
    prefixUrl,
    navImages: {
      fullpage: {
        REST: '/fullpage.svg',
        GROUP: '/fullpage.svg',
        HOVER: '/fullpage.svg',
        DOWN: '/fullpage.svg'
      },
      home: {
        REST: '/home.svg',
        GROUP: '/home.svg',
        HOVER: '/home.svg',
        DOWN: '/home.svg'
      },
      zoomIn: {
        REST: '/zoomin.svg',
        GROUP: '/zoomin.svg',
        HOVER: '/zoomin.svg',
        DOWN: '/zoomin.svg'
      },
      zoomOut: {
        REST: '/zoomout.svg',
        GROUP: '/zoomout.svg',
        HOVER: '/zoomout.svg',
        DOWN: '/zoomout.svg'
      }
    }
  })
  return viewer
}

function hideImage(eventSource) {
  const image = eventSource.userData
  image.style.display = 'none'
}

function fixScroll(eventSource) {
  const divId = eventSource.userData
  window.location.hash = '#' + divId
}
