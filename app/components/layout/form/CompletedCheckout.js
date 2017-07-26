// MyStoreCheckout.js
import React from 'react';
import { Elements } from 'react-stripe-elements';
import { PropTypes } from 'prop-types';
import CheckoutForm from './CompletedCheckoutForm';

class CompletedCheckout extends React.Component {
    render() {
        return (
            <Elements>
                <CheckoutForm submit={this.props.submit}/>
            </Elements>
        );
    }
}

CompletedCheckout.propTypes = {
    stripe: PropTypes.object,
    submit: PropTypes.func,
    price: PropTypes.string
};

export default CompletedCheckout;
