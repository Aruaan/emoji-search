import React from 'react'
import copy from 'copy-to-clipboard'
import { useState } from 'react'
import '../styles/style.css'

// A component used to display the search results.
const SearchResultsList = ({results}) => {
  const [copied, setCopied] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  // Handles copying the emoji to the clipboard and showing the popup.
  const handleCopy = (symbol) => {
    if (timeoutId != null) {
      clearTimeout(timeoutId)
    }
    
    copy(symbol)
    setCopied(symbol)
    // Make sure the popup is hidden when the user copies a new emoji
    // before the timeout has expired.
    setShowPopup(false)
    setTimeout(() => setShowPopup(true),10)
    
    const newTimeoutId = setTimeout(() => {
      setShowPopup(false)
      setCopied('')
      setTimeoutId(null)
    }, 2000)

    setTimeoutId(newTimeoutId)
}

  // If there are no results, show a message instead of the list.
  if (results.length === 0) {
    return (
    <div className='no-results'>
      When you start typing the emojis will appear here in a list.
    </div>
    )
  } 
  
  return (
    <div className='emoji-list'>
      {/* Show popup when an emoji is copied */}
      {showPopup && (
        <div className="clipboard-popup show">
          {copied} Copied to clipboard!
        </div>
      )}
      {/* Map through the results and render each emoji, up to 10 of them. */}
      {results.slice(0, 10).map((result, id) =>{
        return <div className='emoji' key={id} onClick={() => handleCopy(result.symbol)}>
          <span className='emoji-symbol'>{result.symbol}</span>
          <span className='emoji-title'>{result.title}</span>
          </div>
      })}
      {/* Show a message at the bottom of the list if there's more than 10 emojis.*/}
      {results.length > 10 && (
        <div className='more-than-10'>
          Not showing all results, narrow down your search.
        </div>
      )}
    </div>
  )
}

export default SearchResultsList
