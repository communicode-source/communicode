import React from 'react';
import propTypes from 'prop-types';
import Guard from './Guard';
import EnterEmail from './EnterEmail';
import EnterHash from './EnterHash';
import EnterPassword from './EnterPassword';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/passwordrecovery.scss';
class MainPasswordRecovery extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className={classNames('col-md-2')}></div>
                    <div className={classNames(styles.mainContent, 'col-sm-12', 'col-md-8')}>
                        <h2>Forgot your password?</h2>
                        <h4>Follow the directions  to regain access to your account.</h4>
                        <hr />
                        <div className={classNames(styles.form)}>
                            <Guard logic={this.props.passwordRecovery.step.toString()} test="0">
                                <EnterEmail email={this.props.email} onEmailSubmit={this.props.onEmailSubmit} onEmailEnter={this.props.onEmailEnter} />
                            </Guard>
                            {(this.props.passwordRecovery.errmsg !== '') ? <div className={styles.error}><label>{this.props.passwordRecovery.errmsg}</label></div> : null}
                            <Guard logic={this.props.passwordRecovery.step.toString()} test="1">
                                <EnterHash hash={this.props.url} onHashEnter={this.props.onHashEnter} onHashSubmit={this.props.onHashSubmit} />
                            </Guard>
                            <Guard logic={this.props.passwordRecovery.step.toString()} test="2">
                                <EnterPassword password={this.props.password} onPasswordSubmit={this.props.onPasswordSubmit} onPasswordEnter={this.props.onPasswordEnter} />
                            </Guard>
                        </div>
                    </div>
                    <div className={classNames('col-md-2')}></div>
                </div>
            </div>
        );
    }
}

MainPasswordRecovery.propTypes = {
    step: propTypes.number,
    passwordRecovery: propTypes.object,
    email: propTypes.string,
    url: propTypes.string,
    errmsg: propTypes.string,
    password: propTypes.string,
    onEmailEnter: propTypes.func,
    onEmailSubmit: propTypes.func,
    onHashEnter: propTypes.func,
    onHashSubmit: propTypes.func,
    onPasswordSubmit: propTypes.func,
    onPasswordEnter: propTypes.func
};

export default MainPasswordRecovery;
