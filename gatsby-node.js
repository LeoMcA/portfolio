const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { title } = require('./src/util/title-from-slug')
const { GraphQLString } = require('graphql')
const sharp = require('sharp')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'projects' })
    const collection = getNode(node.parent).relativeDirectory.split('/').pop()
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
    createNodeField({
      node,
      name: 'title',
      value: title(slug),
    })
    createNodeField({
      node,
      name: 'collection',
      value: collection,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        file (relativePath: { eq: "settings/fields.yml" }) {
          childSettingsYaml {
            link_fields
            tag_fields
          }
        }
      }
    `).then(result => {
      const link_fields = result.data.file.childSettingsYaml.link_fields
      const tag_fields = result.data.file.childSettingsYaml.tag_fields
      var tags = {}
      tag_fields.forEach(tag_field => {
        tags[tag_field] = new Set()
      })
      graphql(`
        {
          allMarkdownRemark(filter: { fields: { collection: { eq: "projects" } } }) {
            edges {
              node {
                frontmatter {
                  ${tag_fields}
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          for (var tag_field in tags) {
            if (node.frontmatter[tag_field]) {
              if (Array.isArray(node.frontmatter[tag_field])) {
                node.frontmatter[tag_field].forEach(tag => tags[tag_field].add(tag))
              } else {
                tags[tag_field].add(node.frontmatter[tag_field])
              }
            }
          }
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/project.js'),
            context: {
              slug: node.fields.slug,
              tag_fields: tag_fields,
              link_fields: link_fields,
            },
          })
        })
        for (var tag_field in tags) {
          tags[tag_field].forEach(tag => {
            tagFilter = {}
            tagFilter[tag_field] = { eq: tag }
            createPage({
              path: `/${tag_field}/${tag}`,
              component: path.resolve('./src/templates/tag.js'),
              context: {
                tag_field: tag_field,
                tag: tag,
                tagFilter: { frontmatter: tagFilter }
              },
            })
          })
          createPage({
            path: `/${tag_field}`,
            component: path.resolve('./src/templates/tag-field.js'),
            context: {
              tag_field: tag_field,
              tags: [...tags[tag_field]].sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1),
            },
          })
        }
        resolve()
      })
    })
  })
}

// Fix chrome bug where video will flicker when loading with poster with wrong aspect ratio
exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name != 'MarkdownRemark') {
    return {}
  }

  return {
    transparentPng: {
      type: GraphQLString,
      args: {},
      resolve: (a, b, c, d, e, f, g) => {
        if (a.frontmatter.ratio) {
          const ratio = a.frontmatter.ratio.split(':').map(s => Number(s))
          return sharp({
            create: {
              width: ratio[0],
              height: ratio[1],
              channels: 4,
              background: { r: 0, g: 0, b: 0, alpha: 0 },
            }
          })
          .png()
          .toBuffer()
          .then(d => 'data:image/png;base64,' + d.toString('base64'))
        }
      }
    }
  }
}
