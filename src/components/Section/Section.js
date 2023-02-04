import React,{ useState } from 'react'
import './Section.scss'
import error from  '../../img/error.png'

 function Section(props) {
   
   const fff = '#fff';
   const dark = '#2D2D2D';
   
   const { darkMode,bazaa } = props;
   const [pause, setPause] = useState(false)
   
   const playMusic = (url) => {
     const music = new Audio(url)
     music.play()
    }
    
    const onClickPause= () => {
      setPause(!pause)
      playMusic(bazaa[0].phonetics[0].audio)
    }

  return (
    <>
            <section>
            {
                bazaa.title === 'No Definitions Found'  ? 
                <div className='Error'> <img src={error} alt="" className='emj' /> <h2 className='no' style={{ color: darkMode ?fff : dark }} >No Definitions Found</h2> <p className='sorry'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p> </div> : bazaa[0] === undefined ?  null : <>
                <div className="key">
                <h2 className='text-keyboard' style={{color: darkMode ? fff : dark  }} >{ props.bazaa[0].word }</h2>
                <div className={pause ? 'pause equalizer' : 'pause'}  onClick={(e) => onClickPause()}>
                  {
                    pause ? <svg fill="#000000" width="31" height="31" viewBox="0 0 22 22" id="memory-pause"><path d="M6 4H9V18H6V4M13 18V4H16V18H13Z" /></svg> :  <svg width="21" height="21" viewBox="0 0 21 21" fill="#A445ED">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0V21L21 10.5L0 0Z" fill="#A445ED"/>
                    </svg> 
                  }
                  <div className="everlib-logo">
                    <i className="everlib-logo-first-bar"></i>
                    <i className="everlib-logo-second-bar"></i>
                    <i className="everlib-logo-third-bar"></i>
                    <i className="everlib-logo-fourth-bar"></i>
                </div>
                </div>

            </div>  
            <h2 className='sinonim'>{ bazaa[0] === undefined ? <h2>Not valible</h2> : props.bazaa[0].phonetics[1].text }</h2>
            <div className="noun">
              <div className="center-glav" style={{ color: darkMode ? fff  : dark }} >{ props.bazaa[0].meanings[0].partOfSpeech }</div>
              <div className="lin" style={{ background: darkMode ? '#3A3A3A'  : '#E9E9E9' }} ></div>
            </div>
            <div className="meaning">
                  <h2 className='title'>Meaning</h2>
                  <ul className='box-mean'>

                        <div className="ul-li">
                        <div style={{ color: darkMode ? fff  : dark }} > {  props.bazaa[0].meanings[0].definitions.map((item,id) => (
                          <ul key={id}>
                              <div className="toch"></div>
                              <li key={id}> { item.definition }</li>
                          </ul>
                        ) ) } </div>
                    </div>
                  </ul>
                  <h2 className='title'  >Synonyms {props.bazaa[0].meanings[0].synonyms.map((item,id) => (
                      <div key={id}>
                        <span className='elect' key={id} >{item}</span>
                      </div>
                  ))} </h2>
                  <div className="noun">
                    <div className="center-glav" style={{ color: darkMode ? fff  : dark }} >verb</div>
                    <div className="lin" style={{ background: darkMode ? '#3A3A3A'  : '#E9E9E9' }} ></div>
                  </div>
            </div>
            <h2 className='title'>Meaning</h2>

            <ul className='box-mean'>
                      <div className="ul-li">
                        <div style={{ color: darkMode ? fff  : dark }} >{ props.bazaa[0].meanings[1].definitions.map((item,id) => (
                          <ul key={id}>
                            <div className="toch"></div>
                            <li key={id} >{ item.definition }</li>
                          </ul>
                        )) }</div>
                      </div>
                      <p className='gray'> { bazaa[0] === undefined ?  <h2>Not valible</h2> :  props.bazaa[0].meanings[1].definitions[0].example }
                      </p>
            </ul>

                </> 
            }
        </section> 
    </>
  )
}
export default Section;