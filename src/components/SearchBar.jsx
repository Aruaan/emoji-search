import React, { useEffect } from 'react'
import {FaSearch} from 'react-icons/fa'
import {useState} from 'react'
import '../styles/style.css'
const SearchBar = ({setResults}) => {
  const [input, setInput] = useState('')
  const [allEmojis, setAllEmojis] = useState('[]')

  useEffect(()=> {
    fetch('https://gist.githubusercontent.com/VPetar/e1cd462371d438ff863e09983072007b/raw/52087f314f4f763ae0a81fcb9f340bf0a1f2a41a/json')
      .then((response) => response.json())
      .then(data => {
        setAllEmojis(data)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])
  
  const filterEmojis = (value) => {
    const searchTerms = value.toLowerCase().split(' ')
    const results = allEmojis.filter(emoji =>
      searchTerms.every(term =>
        emoji.keywords.toLowerCase().includes(term)
        )
      )
    setResults(results)
  }

  const handleChange = (value) => {
    setInput(value)
    if(value.trim() === ''){
      setResults([])
    } else
    filterEmojis(value)
  }

  return (
    <div className='input-container'>
      <button 
        type='submit' 
        className='search-button'>
        <FaSearch/>
      </button>
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
