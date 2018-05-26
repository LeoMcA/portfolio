import React from 'react'
import Link from 'gatsby-link'

export default ({ pathContext }) => {
  const languages = pathContext.languages
  return (
    <div className='content'>
      <ul>
        {languages.map(lang =>
          <li key={lang}>
            <Link to={`/languages/${lang}`}>
              {lang}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
