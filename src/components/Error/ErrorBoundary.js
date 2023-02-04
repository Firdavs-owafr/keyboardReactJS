import React, { Component } from 'react'
import './ErrorBoundary.scss'       

export default class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(){
        this.setState({ error: true })
    }

  render() {
        if(!this.state.error){
                return <div>{ this.props.children }</div>
        } else {
            return <div className='big'>
                    <section className="page_404">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12 ">
                          <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                            </div>
                            <div className="contant_box_404">
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
</section>
            </div>
        }
  }
}
