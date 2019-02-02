import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data, location }) => {
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout location={location}>
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
    </Layout>
  )
}

export const query = graphql`
  {
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
