import React from 'react'

export default ({ frontmatter }) => (
  <div style={{
    gridColumn: '1 / span 2',
  }}>
    <div style={{
      marginBottom: '1.7em',
      fontWeight: '200',
    }}>
      {frontmatter.description}
    </div>
    <div dangerouslySetInnerHTML={{ __html: frontmatter.image }} />
  </div>
)
