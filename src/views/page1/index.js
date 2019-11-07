import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment } from '../../redux/actions/increment';
import Navigation from '../../components/Navigation';
import Incrementor from '../../components/Incrementor';

const Page1 = props => (
  <div>
    <Navigation
      name="Home"
      to="/"
      onClick={() => props.changePage()}
    />
    <Incrementor
      name="Page1"
      count={props.count}
      onClick={() => props.increment()}
    />
  </div>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      changePage: () => push('/')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1)
