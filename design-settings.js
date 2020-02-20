module.exports = {
  label: 'Demo Design',
  description: 'This is an example Design',
  author: 'living doc',
  assets: {
    css: ['https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css']
  },
  componentProperties: [{
      type: 'style',
      label: 'Background Color',
      name: 'css-background-color',
      cssProperty: 'background-color'
  }, {
    type: 'option',
    label: 'Thin',
    name: 'css-class',
    value: 'thin'
  }, {
    type: 'select',
    label: 'Class selection',
    name: 'css-class-selection',
    options: [
      {caption: 'Default'},
      {caption: 'Red',
      value: 'materialize-red-text'}
    ]
  }],
  componentGroups: [{
    name: 'content',
    label: 'Components',
    components: ['title', 'p', 'p2', 'image']
  }],
  defaultComponents: {
    paragraph: 'p2',
    image: 'image'
  },
  fieldExtractor: [{
    identifier: 'title',
    type: 'text',
    matches: ['p2.text']
  }, {
    identifier: 'teaserImage',
    type: 'image',
    matches: ['image.img']
  }]
}
