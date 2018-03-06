// @flow

import { connect } from 'react-redux'

import { sayOkay } from '../actions/testAction'
import Button from '../components/Button'

/**
 * Maps the text when triggered, here it is on first load
 */
const mapStateToProps = () => ({
  text: 'Redux OK?',
})

/**
 * Triggers the testReducer on click
 * @param  {Function} dispatch
 */
const mapDispatchToProps = (dispatch: Function) => ({
  onclick: () => { dispatch(sayOkay('Redux OK!')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
