import React,{ useState } from 'react'
import logo from '../../img/iconoir_book.png'
import triangle from '../../img/triangle.png'
import linie from '../../img/linie.png'
import './Header.scss'

 function Header(props) {
    const [dropdown, setDropDown] = useState(false) // mana
    const [before, setBefore] = useState(false)
    
    const [textCon, setTextCon] = useState('Sans-serif')


    const handleDropDown = () => {
       setDropDown(!dropdown)   
    }

    const handleBeforeAfter = () => {
       setBefore(!before)
        props.fun()
    }
    

    const font = (e,text) => {
      document.body.style.fontFamily=e
      setTextCon(text.target.textContent)
    }

    
    const fff = '#fff'
    const dark = '#2D2D2D'

    const { darkMode } = props;
    
  return (
    <>
        <header>  
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="text-darkmode">
                
                <div className="dropdown " onClick={handleDropDown}>
                    <div className="dropdown-btn " > <span className='text-dr' style={{ color: darkMode ? fff  : dark }} > { textCon } </span>  <img src={triangle} alt="" className='rotat' /> </div>

                    <div className={ dropdown ? 'dropdown-items active' : 'dropdown-items' } style={    { boxShadow: darkMode ? '0px 5px 30px #A445ED' : '0px 5px 30px rgba(0, 0, 0, 0.1', background: darkMode ? '#1F1F1F' : '#fff' }}  >
                        <div className="items"  onClick={(e) => font('Inter',e)} style={{ color: darkMode ? fff  : dark }} >Sans Serif</div>
                        <div className="items" onClick={(e) => font('Lora',e)} style={{ color: darkMode ? fff  : dark }} >Serif</div>  
                        <div className="items" onClick={(e) => font('Inconsolata',e)} style={{ color: darkMode ? fff  : dark }}>Mono</div>
                    </div>
                </div>

                <img src={linie} alt="" />

                <div className="oval-before-after " onClick={handleBeforeAfter}>
                    <span className={ before ? 'ovall ovalClick' : 'ovall' }></span>
                </div>

                <div className="moon" >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={ { stroke: darkMode ? '#A445ED' : '#757575'  } }/>
                  </svg>
                </div>
            </div>
        </header>
    </>
  )
}
export default Header;