import React from 'react'
import Link from 'gatsby-link'

export default ({ pathContext }) => {
  const tag_field = pathContext.tag_field
  const tags = pathContext.tags
  return (
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
  )
}
