const dedent = require('dedent')

module.exports = {
  name: 'p',
  label: 'Paragraph',
  properties: ['css-background-color'],
  iconUrl: 'https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_text.svg',
  html: dedent`
    <p class="text" doc-editable="text">
      Paragraph
    </p>`
}
