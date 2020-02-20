module.exports = {
  name: 'image',
  label: 'Image',
  iconUrl: 'https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_image.svg',
  directives: [{
    name: 'img',
    type: 'image',
    imageRatios: ['16:9', '1:1', '4:3', '3:4']
  }],
  html: '<img\n  doc-image="img"\n  class="responsive-img">'
}
