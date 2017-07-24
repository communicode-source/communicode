// MyStoreCheckout.js
import React from 'react';
import { Elements } from 'react-stripe-elements';
import { PropTypes } from 'prop-types';
import CheckoutForm from './CheckoutForm';

class ProjectCheckout extends React.Component {
    render() {
        return (
            <Elements>
                <CheckoutForm finishProject={this.props.finishProject} price={this.props.price}/>
            </Elements>
        );
    }
}

ProjectCheckout.propTypes = {
    stripe: PropTypes.object,
    finishProject: PropTypes.func,
    price: PropTypes.string
};

export default ProjectCheckout;
