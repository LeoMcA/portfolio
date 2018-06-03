import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  const projects = data.allMarkdownRemark.edges
  return (
    <div className='content'>
      <ul>
        {projects.map(({ node }) =>
          <li key={node.id}>
            <Link to={node.fields.slug}>
              {node.fields.title}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } },
      sort: { fields: [fields___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            description
          }
          fields {
            slug
            title
          }
        }
      }
    }
  }
`
