import React from 'react'
import './StyleSheet.css'

function StyleSheet(props) {
    let data = props.primary ? 'primary' : ""
  return (
    <div>
      <h1 className = {data}> styledsheet</h1>
    </div>
  )
}

export default StyleSheet
