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
 * @param  {any} dispatch
 */
const mapDispatchToProps = (dispatch: any) => ({
  onclick: () => { dispatch(sayOkay('Redux OK!')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
