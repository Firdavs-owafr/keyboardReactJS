import React,{ useState } from 'react'
import search from '../../img/search.png'
import './SearchPanel.scss'

 function SearchPanel(props) {
  

  const { darkMode,val,functionInp,btn,bazaa,btnClick } = props;
  
  const [first, setfirst] = useState(false)

  const notdefault = (e) => {
    e.preventDefault()  
    btn()

    if(e.target[0].value.length < 1){
      setfirst(true)
    } else {
          setfirst(false)
    }

  }

  const fff = '#F4F4F4';
  const dark = '#1F1F1F';
  
  return (
    <>

           <div>
            <form className="search-panel" style={{background: darkMode ? dark : fff }} onSubmit={notdefault} > 
          <input type="text" placeholder='Search for any word…' style={{ color: darkMode ? '#FFF' : '#2D2D2D',fontFamily: 'inherit' }} value={val}  onChange={functionInp} />
          <div>
            <img src={search} alt="" />
          </div>
   </form>
        
          {first ? <h1 className='errror'>Whoops, can’t be empty…</h1> : null}

          </div>
        
    </>
  )
}
export default SearchPanel;