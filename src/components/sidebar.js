import React from 'react'

import Value from './sidebar-value'

export default ({ sidebar_data }) => (
  <div className='sidebar'>
    <div style={{ display: 'table' }}>
      {Object.keys(sidebar_data).map(k =>
        <div style={{ display:'table-row' }} key={k}>
          <span style={{ display:'table-cell', paddingRight: '1ch' }} className='label'>{k}</span>
          <Value label={k} value={sidebar_data[k]} />
        </div>
      )}
    </div>
  </div>
)
