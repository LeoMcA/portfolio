import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data, location }) => {
  const projects = data.projects.edges
  const description = data.description
  return (
    <Layout location={location}>
      <div className='content'>
        {description ?
          <div dangerouslySetInnerHTML={{ __html: description.html }} />
        : null}
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
  query($tag_field: String!, $tag: String!, $tagFilter: MarkdownRemarkFilterInput!) {
    projects: allMarkdownRemark(
        filter: $tagFilter,
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
    },
    description: markdownRemark(fields: { title: { eq: $tag }, collection: { eq: $tag_field } }) {
      html
    }
  }
`
