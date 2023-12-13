import SearchBar from './components/SearchBar'
import SearchResultsList from './components/SearchResultsList'
import { useState } from 'react'
import '/Users/aleksa/Desktop/emoji-search/emoji-search/src/styles/style.css'
function App() {
  const [results, setResults] = useState([])
  return (
    <div className='container'>
    <SearchBar setResults = {setResults} />
    <SearchResultsList results= {results} />
    </div>
  )
}

export default App
