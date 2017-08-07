import React, { PropTypes } from 'react';
import styles from './../../../assets/css/pages/settings.scss';
import { FormGroup, Col, FormControl} from 'react-bootstrap';
import classNames from 'classnames';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let stripe = (
            <div>
                <h3>Make a Stripe account to get paid</h3>
                <hr />
                <a
                    target="_blank"
                    href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_B6CI5ITmnWyLofYoQezSrK6kPYgj1umM&scope=read_write&state=${localStorage.getItem('id_token')}`}
                >Make a Stripe account</a>
            </div>
        );

        if(!this.props.isCustomer) {
            stripe = (
                <FormGroup className={styles.formGroup}>
                    <Col sm={12}>
                        <h3>Verify Your Stripe Account</h3>
                    </Col>
                    <Col sm={8}>
                        <FormControl
                            type="text"
                            placeholder="Stripe Account Code"
                        />
                    </Col>
                    <Col sm={4}>
                        <button type="submit" className={classNames(styles.update, styles.submitCode)}>Submit Code</button>
                    </Col>
                    <Col sm={12}>
                        <button className={styles.update}>Send Email Code</button>
                    </Col>
                </FormGroup>
            );
        }

        return (
            <div className={classNames(styles.item, styles.stripeSection)}>
                {stripe}
            </div>
        );
    }
}

Profile.propTypes = {
    isCustomer: PropTypes.bool,
};

export default Profile;
