import './App.sass'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getQuestions from './actions/questions/fetch'

class App extends PureComponent {
  componentDidMount() {
    if (this.props.fetchedQuestions === false) {
      this.props.getQuestions()
    }
  }

  render() {
    return (
      <div className='content'>
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps =({fetchedQuestions}) => ({fetchedQuestions})

export default connect(mapStateToProps, { getQuestions })(App)
