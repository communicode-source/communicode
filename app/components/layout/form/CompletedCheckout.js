// MyStoreCheckout.js
import React from 'react';
import { Elements } from 'react-stripe-elements';
import { PropTypes } from 'prop-types';
import CheckoutForm from './CompletedCheckoutForm';

class CompletedCheckout extends React.Component {
    render() {
        return (
            <Elements>
                <CheckoutForm deposit={this.props.deposit} price={this.props.price}/>
            </Elements>
        );
    }
}

CompletedCheckout.propTypes = {
    stripe: PropTypes.object,
    deposit: PropTypes.func,
    price: PropTypes.string
};

export default CompletedCheckout;
