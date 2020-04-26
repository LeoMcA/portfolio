import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data, location }) => {
  const projects = data.allMarkdownRemark.edges
  const languages = {}
  projects.forEach(({ node: p }) => {
    const ls = p.frontmatter.languages
    ls.forEach(l => {
      if (languages[l]) {
        languages[l].push(p)
      } else {
        languages[l] = [p]
      }
    })
  })
  return (
    <Layout location={location}>
      <div className='content'>
        {Object.entries(languages).map(([lang, projects]) =>
          <div>
            <h1>{lang}</h1>
            <ul>
              {projects.map((p) =>
                <li key={p.id}>
                  <Link to={p.fields.slug}>
                    {p.fields.title}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
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
            languages
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
