import { graphql } from 'gatsby'

export const sidebarFieldsFragment = graphql`
  fragment sidebarFields on frontmatter_3 {
    demo
    languages
    frameworks
    category
    license
    source
  }
`
