import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { prettyPath } from '../util/title-from-slug'

import 'typeface-source-code-pro'
import './index.css'

const Layout = ({ children, location }) => (
  <div style={{
    padding: '0 2ch',
    display: 'grid',
    maxWidth: '90ch',
    margin: '0 auto',
  }}>
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
          {index == 0 ?
            <Link to={`/${path}`}>{path}</Link>
          :
            path
          }
        </span>
      )}
    </h1>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
