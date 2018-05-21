import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { prettyPath } from '../util/title-from-slug'

import './index.css'

const Layout = ({ children, location }) => (
  <div style={{
    marginTop: '60px',
    padding: '0 2ch',
    boxShadow: '0 -20px #890067, 0 -40px #560041, 0 -60px #23001A',
    display: 'grid',
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
