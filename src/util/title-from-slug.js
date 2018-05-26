module.exports = {
  prettyPath: slug => slug.replace(/^\/?((?:\/?[^/])*)\/?$/, '$1').replace(/\//g, ' / '),
  title: slug => slug.replace(/.*\/(.*)\/$/, "$1"),
}
