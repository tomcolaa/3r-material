import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment } from '../../redux/actions/increment';
import Navigation from '../../components/Navigation';
import Incrementor from '../../components/Incrementor';

const Home = props => (
  <div>
    <Navigation
      name="Page1"
      to="/page1"
      onClick={() => props.changePage()}
    />
    <Incrementor
      name="Home"
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
      changePage: () => push('/page1')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
