import React from 'react'
import copy from 'copy-to-clipboard'
import { useState, useEffect } from 'react'
import '/Users/aleksa/Desktop/emoji-search-app/emoji-search-app/src/styles/style.css'
const SearchResultsList = ({results}) => {
  const [copied, setCopied] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  const handleCopy = (symbol) => {
    if (timeoutId != null) {
      clearTimeout(timeoutId)
      console.log('Timeout cleared')
    }

    copy(symbol)
    setCopied(symbol)
    setShowPopup(true)
    
    const newTimeoutId = setTimeout(() => {
      setShowPopup(false)
      setCopied('')
      setTimeoutId(null)
      
    }, 2000)

    setTimeoutId(newTimeoutId)
}

  if (results.length === 0) {
    return null
  }
  
  return (
    <div className='emoji-list'>
      {showPopup && (
        <div className="clipboard-popup">
          {copied} Copied to clipboard!
        </div>
      )}
      {results.slice(0, 10).map((result, id) =>{
        return <div className='emoji' key={id} onClick={() => handleCopy(result.symbol)}>
          <span className='emoji-symbol'>{result.symbol}</span>
          <span className='emoji-title'>{result.title}</span>
          </div>
      })}
    </div>
  )
}

export default SearchResultsList
