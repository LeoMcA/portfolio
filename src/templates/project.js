import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

export default ({ data, pageContext, location }) => {
  const project = data.project
  const tag_fields = pageContext.tag_fields
  const link_fields = pageContext.link_fields
  const excluded_from_sidebar = [
    'description',
    'header',
  ]
  const sidebar_data = Object.keys(project.frontmatter)
    .filter(k => project.frontmatter[k] && !excluded_from_sidebar.includes(k))
    .reduce((o, k) => {
      o[k] = project.frontmatter[k]
      return o
    }, {})
  return (
    <Layout location={location}>
      <div className='project'>
        <Header project={project} />
        <Sidebar sidebar_data={sidebar_data} tag_fields={tag_fields} link_fields={link_fields} />
        <div className='content' dangerouslySetInnerHTML={{ __html: project.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      transparentPng
      frontmatter {
        description
        header {
          ratio
          video {
            source {
              src {
                id
                publicURL
              }
              type
            }
            poster {
              childImageSharp {
                fluid(maxWidth: 1170, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image {
            svg_preview
            src {
              childImageSharp {
                fluid: fluid(maxWidth: 1170, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
                fluid_svg: fluid(maxWidth: 1170, quality: 90) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
        ...sidebarFields
      }
    }
  }
`
