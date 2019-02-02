import React from 'react'
import { Link } from 'gatsby'

export default ({ label, value, tag_fields, link_fields }) => {
  switch (true) {
    case link_fields.includes(label):
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
        <span>{value}</span>
      )
  }
}
