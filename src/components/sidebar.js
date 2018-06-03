import React from 'react'

import Value from './sidebar-value'

export default ({ sidebar_data, tag_fields, link_fields }) => (
  <div className='sidebar'>
    <div style={{ display: 'table' }}>
      {Object.keys(sidebar_data).map(k =>
        <div style={{ display:'table-row' }} key={k}>
          <span className='label'>{k}</span>
          {Array.isArray(sidebar_data[k]) ?
            <ul className='value'>
              {sidebar_data[k].map(item =>
                <li key={item}>
                  <Value label={k} value={item} tag_fields={tag_fields} link_fields={link_fields} />
                </li>
              )}
            </ul>
          :
            <span className='value'>
              <Value label={k} value={sidebar_data[k]} tag_fields={tag_fields} link_fields={link_fields} />
            </span>
          }
        </div>
      )}
    </div>
  </div>
)
