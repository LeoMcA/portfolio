import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { prettyPath } from '../util/title-from-slug'

import 'typeface-source-code-pro'
import './styles/layout.css'

const Layout = ({ children, location }) => (
  <>
    <Helmet
      title={
        'portfolio.mcardle.io / ' + prettyPath(location.pathname)
      }
    />
    <h1 className='title'>
      <Link to='/'>
        <span style={{ fontWeight: '200' }}>portfolio.</span>mcardle.io
      </Link>
      {prettyPath(location.pathname).split(' / ').map((path, index) =>
        <span key={path}>
          <span style={{ fontWeight: '200' }}> / </span>
          {index === 0 ?
            <Link to={`/${path}`}>{path}</Link>
          :
            path
          }
        </span>
      )}
    </h1>
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
