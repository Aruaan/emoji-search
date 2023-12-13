import React from 'react'
import copy from 'copy-to-clipboard'
import { useState, useEffect } from 'react'
import '../styles/style.css'
const SearchResultsList = ({results}) => {
  const [copied, setCopied] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  const handleCopy = (symbol) => {
    if (timeoutId != null) {
      clearTimeout(timeoutId)
    }

    copy(symbol)
    setCopied(symbol)
    setShowPopup(false)
    setTimeout(() => setShowPopup(true),10)
    
    const newTimeoutId = setTimeout(() => {
      setShowPopup(false)
      setCopied('')
      setTimeoutId(null)
      console.log(timeoutId)
    }, 2000)

    setTimeoutId(newTimeoutId)
}

  if (results.length === 0) {
    return (
    <div className='no-results'>
      When you start typing the emojis will appear here.
    </div>
    )
  }
  
  return (
    <div className='emoji-list'>
      {showPopup && (
        <div className="clipboard-popup show">
          {copied} Copied to clipboard!
        </div>
      )}

      {results.slice(0, 10).map((result, id) =>{
        return <div className='emoji' key={id} onClick={() => handleCopy(result.symbol)}>
          <span className='emoji-symbol'>{result.symbol}</span>
          <span className='emoji-title'>{result.title}</span>
          </div>
      })}
      
      {results.length > 10 && (
        <div className='more-than-10'>
          There are more than 10 emojis with the current input, narrow your search.
        </div>
      )}
    </div>
  )
}

export default SearchResultsList
