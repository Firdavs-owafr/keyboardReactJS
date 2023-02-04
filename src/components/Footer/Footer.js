import React from 'react'
import linkk from '../../img/linkk.png'
import './Footer.scss'

function Footer(props) {
  // console.log();
  return (
    <>
        <footer>
            {
              props.bazaa[0] === undefined ? null : <>
              <div className="liniee"></div>

                <div className="linked">
                <h2 className='link-address'>Source</h2>
                <p className='df'>
                <a className='link' href={props.bazaa[0].sourceUrls}>{props.bazaa[0].sourceUrls }</a>
                <img src={linkk} alt="" className='wiki' />
                </p>
                </div>
              </>
            }
        </footer>
    </>
  )
}

export default Footer;