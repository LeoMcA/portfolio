import React from 'react'

import Header from '../components/header'
import Sidebar from '../components/sidebar'

export default ({ data, pathContext }) => {
  const project = data.project
  const tag_fields = pathContext.tag_fields
  const link_fields = pathContext.link_fields
  const excluded_from_sidebar = [
    'description',
    'video',
    'ratio'
  ]
  const sidebar_data = Object.keys(project.frontmatter)
    .filter(k => project.frontmatter[k] && !excluded_from_sidebar.includes(k))
    .reduce((o, k) => (o[k] = project.frontmatter[k], o), {})
  return (
    <div className='project'>
      <Header project={project} />
      <Sidebar sidebar_data={sidebar_data} tag_fields={tag_fields} link_fields={link_fields} />
      <div className='content' dangerouslySetInnerHTML={{ __html: project.html }} />
    </div>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      transparentPng
      frontmatter {
        description
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
              sizes {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        ratio
        ...sidebarFields
      }
    }
  }
`
