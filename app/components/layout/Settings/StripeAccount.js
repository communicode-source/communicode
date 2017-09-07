import React, { PropTypes } from 'react';
import styles from './../../../assets/css/pages/settings.scss';
import { FormGroup, Col, FormControl} from 'react-bootstrap';
import classNames from 'classnames';

class UserStripeAccountSettings extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {code: ''};
    }

    componentWillMount() {
        this.props.getMostRecentUser();
    }

    onCodeEnter(e) {
        this.setState({code: e.target.value});
    }

    onCheckCodeClick(e) {
        e.preventDefault();
        this.props.checkCodeClick(this.state.code);
        this.setState({code: ''});
    }

    onGetEmailClick() {
        this.props.getEmailClick();
    }

    render() {
        let stripe = (
            <div>
                <h3>Create a Stripe account to receive payments</h3>
                <hr />
                <a
                    target="_blank"
                    href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_B6CI5ITmnWyLofYoQezSrK6kPYgj1umM&scope=read_write&state=${localStorage.getItem('id_token')}`}
                >Make a Stripe account</a>
            </div>
        );

        if(this.props.isCustomer === true) {
            stripe = (
                <form onSubmit={this.onCheckCodeClick.bind(this)}>
                    <FormGroup className={styles.formGroup}>
                        <Col sm={12}>
                            <h3>Verify Your Stripe Account</h3>
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                type="text"
                                placeholder="Stripe Account Code"
                                value={this.state.code}
                                onChange={this.onCodeEnter.bind(this)}
                            />
                        </Col>
                        <Col className={styles.addBottomPaddingSubmit} sm={4}>
                            <button type="submit" className={classNames(styles.update, styles.submitCode)}>Submit Code</button>
                        </Col>
                        <Col className={styles.addBottomPadding} sm={12}>
                            <button onClick={this.onGetEmailClick.bind(this)} className={styles.update}>Send Email Code</button>
                        </Col>
                    </FormGroup>
                </form>
            );
        }

        return (
            <div className={classNames(styles.item, styles.stripeSection)}>
                {stripe}
            </div>
        );
    }
}

UserStripeAccountSettings.propTypes = {
    isCustomer: PropTypes.bool,
    getEmailClick: PropTypes.func,
    checkCodeClick: PropTypes.func,
    getMostRecentUser: PropTypes.func
};

export default UserStripeAccountSettings;
