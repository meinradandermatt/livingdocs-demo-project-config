module.exports = {
  name: 'article-link',
  label: 'Article Link',
  iconUrl: 'https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_text.svg',
  directives: [{
    type: 'include',
    name: 'article-embed',
    service: 'embed-teaser',
    config: {
      search: {
        defaultQueries: [{
          type: 'documentType',
          value: 'article'
        }, {
          type: 'metadata',
          key: 'layout',
          value: 'regular'
        }],
        displayFilters: ['documentState']
      }
    }
  }],
  html: '<div\n  doc-include="article-embed"\n  class="container">this is an article link</div>'
}
