import { ChangeEvent, useState } from 'react'

import './App.css'
import { useFetchRss } from './api/queryMedium';

function App() {
  const [inputText, setInputText] = useState('');
  const {data, isLoading} = useFetchRss(inputText);
  function searchMedium(): void {
    console.log('clicked');
  }

  function updateSearchText(event: ChangeEvent<HTMLInputElement>): void {
    setInputText(event.target.value);
  }

  return (
    <>
      <div>
        <input type='text' onChange={updateSearchText}></input>
        <button onClick={searchMedium}>Search</button>
        {isLoading ? <div>loading....</div> : <div>{data}</div>}
      </div>
      
    </>
  )
}

export default App
