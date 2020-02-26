module.exports = {
  v: 2,
  $baseRevision: 32,

  settings: require('./settings'),
  contentTypes: [
    require('./content-types/regular'),
    require('./content-types/page'),
    require('./content-types/tag')
  ],
  designSettings: require('./design-settings'),
  components: [
    require('./components/title'),
    require('./components/p'),
    require('./components/p-2'),
    require('./components/image'),
    require('./components/article-link'),
    require('./components/portfolio-container'),
    require('./components/complex-paragraph')
  ],
  categories: [
    require('./categories/da-39-a-3-ee-5-e-6-b-4-b-0-d-32'),
    require('./categories/da-39-a-3-ee-5-e-6-b-4-b-0-d-33'),
    require('./categories/da-39-a-3-ee-5-e-6-b-4-b-0-d-34')
  ]
}
