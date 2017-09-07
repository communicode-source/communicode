import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'components';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div><Header /></div>
        <div>{ this.props.children }</div>
        <div>Footer</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.object]).isRequired
};
