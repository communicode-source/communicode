// CardSection.js
import React from 'react';
import {CardElement} from 'react-stripe-elements';

class CardSection extends React.Component {
    render() {
        return (
            <label>
                <p>Card details</p>
                <CardElement style={{base: {iconColor: '#333', lineHeight: '40px', fontSize: '16px', fontFamily: 'montserrat'}}} />
            </label>
        );
    }
};

export default CardSection;
