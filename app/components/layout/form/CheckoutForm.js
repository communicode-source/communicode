// CheckoutForm.js
import React from 'react';
import PropTypes from 'prop-types';
import {injectStripe} from 'react-stripe-elements';
import styles from './../../../assets/css/pages/createProject.scss';

import CardSection from './CardSection';

class CheckoutForm extends React.Component {
    handleSubmit = (ev) => {
        // We don't want to let default form submission happen here, which would refresh the page.
        ev.preventDefault();

        // Within the context of `Elements`, this call to createToken knows which Element to
        // tokenize, since there's only one in this group.
        this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
            console.log('Received Stripe token:', token);
        });

        // However, this line of code will do the same thing:
        // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <CardSection />
                <button className={styles.confirm}>Confirm Project</button>
            </form>
        );
    }
}

CheckoutForm.propTypes = {
    stripe: PropTypes.object
};

export default injectStripe(CheckoutForm);
