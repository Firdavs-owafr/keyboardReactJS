import React,{ useState,useEffect } from 'react'
import './App.scss'
import Header from '../components/Header/Header'
import SearchPanel from '../components/SearchPanel/SearchPanel'
import Section from '../components/Section/Section'
import Footer from '../components/Footer/Footer'


function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  const darkFun = () => {
    setDarkMode(!darkMode)
  }
  
  const [obj, setObj] = useState({user: ''})
  const [text, setText] = useState('')
  const [btn, setBtn] = useState(false)

  const inpSearch = (e) => {
    setText(e.target.value)
  }

  const btnClick = () => {
    setBtn(!btn)
  }

  useEffect(() => {
    if(text.length >= 1){
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
        .then(res => res.json())
        .then(js => {
          setObj(js)
        })
    }
  },[btn])

  return (
            <div className={ darkMode ? "wrapper"  : "wrapper dark-mode" }>
              <div className='App'>
                <Header fun={darkFun}  darkMode={darkMode} />
                      <SearchPanel darkMode={darkMode} val={text}  functionInp={inpSearch}  btn={btnClick} bazaa={obj}  />
                  
                <Section darkMode={darkMode} bazaa={obj} />
                <Footer bazaa={obj}  />
          </div>
            </div>
  );
}

export default App;
