import React from 'react'

export default ({ children, ratio }) => {
  ratio = ratio.split(':').map(s => Number(s))
  return (
    <div style={{
      position: 'relative',
      display: 'block',
      width: '100%',
      padding: '0',
      overflow: 'hidden',
      margin: '1.7em 0',
    }}>
      <div style={{
        paddingTop: ratio[1] / ratio[0] * 100 + '%',
      }}>
      </div>
      <div style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100%',
      }}>
        {children}
      </div>
    </div>
  )
}
