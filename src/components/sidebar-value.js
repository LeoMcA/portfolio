import React from 'react'
import Link from 'gatsby-link'

export default ({ label, value, tag_fields }) => {
  switch (true) {
    case ['demo', 'source'].includes(label):
      return (
        <a href={value}>
          {value.replace(/https?:\/\/(github.com\/)?/, '')}
        </a>
      )
    case tag_fields.includes(label):
      return (
        <Link to={`/${label}/${value}`}>{value}</Link>
      )
    default:
      return (
        <span style={{ display:'table-cell' }} >{value}</span>
      )
  }
}
