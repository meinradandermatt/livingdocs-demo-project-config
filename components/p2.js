const dedent = require('dedent')

module.exports = {
  name: 'p2',
  label: 'Paragraph 2',
  properties: ['css-class', 'css-class-selection'],
  iconUrl: 'https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_text.svg',
  html: dedent`
    <p class="text" doc-editable="text">
      Paragraph
    </p>`
}
