module.exports = {
  handle: 'tag',
  info: {
    label: 'Tag'
  },
  documentType: 'data-record',
  metadata: [{
    handle: 'title',
    type: 'li-text',
    config: {},
    ui: {
      component: 'liMetaTextForm',
      label: 'Name'
    }
  }, {
    handle: 'name',
    type: 'li-text',
    config: {
      required: true
    },
    ui: {
      component: 'liMetaTextForm',
      label: 'name'
    }
  }],
  isAuthor: false
}
