// @flow

import { connect } from 'react-redux'

import Message from '../components/Message'

const mapStateToProps = state => ({
  message: state.test.get('message'),
})

export default connect(mapStateToProps)(Message)
