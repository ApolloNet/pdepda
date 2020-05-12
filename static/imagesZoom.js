document.addEventListener('DOMContentLoaded', function() {
  imagesZoom()
})

function imagesZoom() {
  const images = document.querySelectorAll('.media-image')
  images.forEach((image) => {
    const id = image.getAttribute('id')
    const tileSources =
      '/files/derivatives/tiles/' +
      image
        .getAttribute('src')
        .split('/')
        .pop() +
      '.dzi'
    const zoomInButton = ''
    const zoomOutButton = ''
    const homeButton = ''
    const fullPageButton = ''
    OpenSeadragon({
      id,
      tileSources,
      // prefixUrl: '/openseadragon/images/',
      zoomInButton,
      zoomOutButton,
      homeButton,
      fullPageButton
    })
  })
}
