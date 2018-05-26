import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  const projects = data.projects.edges
  const description = data.description
  return (
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
  )
}

export const query = graphql`
  query LanguageQuery($lang: String!) {
    projects: allMarkdownRemark(filter: { frontmatter: { languages: { eq: $lang } } }) {
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
    description: markdownRemark(fields: { title: { eq: $lang }, collection: { eq: "languages" } }) {
      html
    }
  }
`
