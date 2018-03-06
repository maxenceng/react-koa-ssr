// @flow

import { connect } from 'react-redux'

import Message from '../components/Message'

/**
 * Maps the text when triggered
 */
const mapStateToProps = ({ test }) => ({
  message: test.get('message'),
})

export default connect(mapStateToProps)(Message)
