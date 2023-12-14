import React, { useEffect } from 'react'
import {FaSearch} from 'react-icons/fa'
import {useState} from 'react'
import '../styles/style.css'

// A component used to search for emojis.
const SearchBar = ({setResults}) => {
  // State for the input field and the emojis.
  const [input, setInput] = useState('')
  const [allEmojis, setAllEmojis] = useState('[]')

  //Fetches the emojis from the gist once the component mounts.
  useEffect(()=> {
    fetch('https://gist.githubusercontent.com/VPetar/e1cd462371d438ff863e09983072007b/raw/52087f314f4f763ae0a81fcb9f340bf0a1f2a41a/json')
      .then((response) => response.json())
      .then(data => {
        setAllEmojis(data)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])
  
  //Filters the emojis based on the input value.
  const filterEmojis = (value) => {
    const searchTerms = value.toLowerCase().split(' ')
    const results = allEmojis.filter(emoji =>
      searchTerms.every(term =>
        emoji.keywords.toLowerCase().includes(term)
        )
      )
    setResults(results)
  }
  //Handles the input change.
  const handleChange = (value) => {
    setInput(value)
    if(value.trim() === ''){
      setResults([])
    } else
    filterEmojis(value)
  }

  return (
    <div className='input-container'>
      <FaSearch className='search-icon'/> 
      <input
        className='search-input'
        placeholder='Search for emojis...'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
