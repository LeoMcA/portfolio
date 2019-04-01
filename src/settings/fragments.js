import { graphql } from 'gatsby'

export const sidebarFieldsFragment = graphql`
  fragment sidebarFields on MarkdownRemarkFrontmatter {
    demo
    languages
    frameworks
    category
    license
    source
  }
`
