import React from 'react'
import Img from 'gatsby-image'

import RatioBox from './ratio-box.js'

export default ({ project }) => {
  const frontmatter = project.frontmatter
  return (
    <div className='header'>
      <div style={{
        marginBottom: '1.7em',
        fontWeight: '200',
      }}>
        {frontmatter.description}
      </div>
      {frontmatter.video ?
        <RatioBox ratio={frontmatter.ratio ? frontmatter.ratio : "16:9"}>
          {frontmatter.video.poster ?
            <Img sizes={frontmatter.video.poster.childImageSharp.sizes} />
          : null}
          <video
            controls
            loop
            muted
            playsInline
            poster={project.transparentPng}
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          >
            {frontmatter.video.source.map(source =>
              <source key={source.src.id} src={source.src.publicURL} type={source.type} />
            )}
          </video>
        </RatioBox>
      : null}
    </div>
  )
}