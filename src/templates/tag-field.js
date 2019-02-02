import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ pageContext, location }) => {
  const tag_field = pageContext.tag_field
  const tags = pageContext.tags
  return (
    <Layout location={location}>
      <div className='content'>
        <ul>
          {tags.map(tag =>
            <li key={tag}>
              <Link to={`/${tag_field}/${tag}`}>
                {tag}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  )
}
