import React from 'react'
import Link from 'gatsby-link'

export default ({ label, value }) => {
  switch (true) {
    case /^(demo|source)$/.test(label):
      return (
        <a href={value}>
          {value.replace(/https?:\/\/(github.com\/)?/, '')}
        </a>
      )
    case Array.isArray(value):
      return (
        <ul style={{ display:'table-cell' }}>
          {value.map(item =>
            <li key={item}>
            {/^(languages)$/.test(label) ?
              <Link to={`/languages/${item}`}>{item}</Link>
            :
              item
            }
            </li>
          )}
        </ul>
      )
    default:
      return (
        <span style={{ display:'table-cell' }} >{value}</span>
      )
  }
}
