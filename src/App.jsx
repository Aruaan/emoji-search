import SearchBar from './components/SearchBar'
import { useState } from 'react'
import '/Users/aleksa/Desktop/emoji-search-app/emoji-search-app/src/styles/style.css'
function App() {
  const [results, setResults] = useState([])
  return (
    <div className='container'>
    <SearchBar setResults = {setResults} />
    </div>
  )
}

export default App
