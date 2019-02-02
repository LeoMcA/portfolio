import React from 'react'
import Img from 'gatsby-image'

import RatioBox from './ratio-box.js'

export default ({ project }) => {
  const frontmatter = project.frontmatter
  const header = frontmatter.header
  return (
    <div className='header'>
      <div style={{
        marginBottom: '1.7em',
        fontWeight: '200',
      }}>
        {frontmatter.description}
      </div>
      {header.image ?
        header.image.svg_preview ?
          <Img style={{margin: '1.7em 0'}} fluid={header.image.src.childImageSharp.fluid_svg} />
        :
          <Img style={{margin: '1.7em 0'}} fluid={header.image.src.childImageSharp.fluid} />
      : null}
      {header.video ?
        <RatioBox ratio={header.ratio ? header.ratio : "16:9"}>
          {header.video.poster ?
            <Img fluid={header.video.poster.childImageSharp.fluid} />
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
            {header.video.source.map(source =>
              <source key={source.src.id} src={source.src.publicURL} type={source.type} />
            )}
          </video>
        </RatioBox>
      : null}
    </div>
  )
}
