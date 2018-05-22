const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { title } = require('./src/util/title-from-slug')
const { GraphQLString } = require('graphql')
const sharp = require('sharp')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'projects' })
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
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/project.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
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
