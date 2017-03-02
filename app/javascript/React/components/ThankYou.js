import React, { PureComponent } from 'react'

export class ThankYou extends PureComponent {
  render() {
    window.setTimeout(function(){
      // we want to close the window
    }, 3000);

    return(
      <div className="main-container">
        <div className='main-text'>
          <h1>Thanks!</h1>

          <p>Je hebt nu toegang tot je gratis artikel.</p>
          <p>Enjoy!</p>
        </div>
      </div>
    )
  }
}

export default ThankYou
