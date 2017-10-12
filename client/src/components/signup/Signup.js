import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFormField } from './actions/index';
import Auth from '../Auth/Auth.js';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.lock = new Auth0Lock('QBNKjr18yImATZi5rw7z0l6i3dHKJ4Om', 'jacked.auth0.com');
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e, data) {
    this.props.dispatch(changeFormField(data.name || e.target.name, data.value || e.target.value));
  }

  render() {
    const auth = new Auth();
    auth.login();
    return (
      <div>
        <h2>Signup</h2>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { carrierName, firstName, lastName, email, password, passwordHint, broker, mc, usdot, ownerOrOperator } = state.signup;
  return { carrierName, firstName, lastName, email, password, passwordHint, broker, mc, usdot, ownerOrOperator };
};

export default connect(mapStateToProps)(Signup);
