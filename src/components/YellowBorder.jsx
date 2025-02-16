import React from 'react'

const YellowBorder = ({children}) => {
    const yellowBorderStyle = {
        border: '2px solid yellow',
        borderRadius: '12px',
        padding: '8px 12px'
    }
  return (
    <div style={yellowBorderStyle}>
        {children}
    </div>
  )
}

export default YellowBorder