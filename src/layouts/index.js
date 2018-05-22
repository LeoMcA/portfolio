import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { prettyPath } from '../util/title-from-slug'

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
    <h1>
      <Link to='/' className='title-link'>
        <span style={{ fontWeight: '200' }}>portfolio.</span>mcardle.io
      </Link>
      <span style={{ fontWeight: '200' }}> / </span>{prettyPath(location.pathname)}
    </h1>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
