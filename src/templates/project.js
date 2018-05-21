import React from 'react'

import Header from '../components/header'
import Sidebar from '../components/sidebar'

export default ({ data }) => {
  const project = data.markdownRemark
  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'max-content max-content',
      gridTemplateColumns: '2fr 1fr',
      gridColumnGap: '1ch',
      columnGap: '1ch',
    }} >
      <Header frontmatter={project.frontmatter} />
      <Sidebar frontmatter={project.frontmatter} />
      <div className='content' dangerouslySetInnerHTML={{ __html: project.html }} />
    </div>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        image
        demo
        languages
        frameworks
        type
        license
        source
      }
    }
  }
`
