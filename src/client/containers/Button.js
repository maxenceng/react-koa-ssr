import { connect } from 'react-redux'

import { sayOkay } from '../actions/testAction'
import Button from '../components/Button'

const mapStateToProps = () => ({
  text: 'Redux OK?',
})

const mapDispatchToProps = dispatch => ({
  onclick: () => { dispatch(sayOkay('Redux OK!')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
