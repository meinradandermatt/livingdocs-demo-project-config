module.exports = {
  v: 2,
  $baseRevision: 10,

  settings: require('./settings'),
  contentTypes: [
    require('./content-types/regular')
  ],
  designSettings: require('./design-settings'),
  components: [
    require('./components/title'),
    require('./components/p'),
    require('./components/p2'),
    require('./components/image')
  ]
}
