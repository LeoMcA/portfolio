import React from 'react'

import Value from './sidebar-value'

export default ({ frontmatter }) => (
  <div style={{
    gridRow: '2',
    gridColumn: '2',
  }} className='sidebar'>
    <div style={{ display: 'table' }}>
      {Object.keys(frontmatter).filter(k => frontmatter[k] && !['description', 'image'].includes(k)).map(k =>
        <div style={{ display:'table-row' }} key={k}>
          <span style={{ display:'table-cell', paddingRight: '1ch' }} className='label'>{k}</span>
          <Value label={k} value={frontmatter[k]} />
        </div>
      )}
    </div>
  </div>
)
