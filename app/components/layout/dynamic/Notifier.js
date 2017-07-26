import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/static/notifier.scss';
import classNames from 'classnames';

export default class Notifier extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            active: null,
            time: null,
            node: null
        };
    }

    componentWillMount() {
        this.startFirstLoad();
    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.startFirstLoad();
    }

    startFirstLoad() {
        if(this.props.messages.length === 0) {
            this.setState({active: null, time: null, node: null});
            return;
        }
        if(this.state.active === null && this.state.time === null) {
            const time = new Date().getTime();
            const node = (
                <div className={styles[this.props.messages[0].classtype]}>
                    <p>
                        {this.props.messages[0].msg}
                        {this.props.messages[0].time === 0 && (<span className={styles.smallInfo}> Click the X to dismiss</span>)}
                        <i onClick={this.handlePrematureRemoval.bind(this, time)} className={classNames('fa', 'fa-times-circle')} aria-hidden="true">
                        </i>
                    </p>
                </div>);
            this.setState({active: this.props.messages[0], time: time, node: node});
            if(this.props.messages[0].time !== 0) {
                setTimeout(this.handleEndLoad.bind(this, time), this.props.messages[0].time * 1000);
            }
        }
        return;
    }

    handlePrematureRemoval(time) {
        if(this.state.time !== time || this.state.time === null || this.state.active === null || this.state.node === null) {
            return null;
        }
        this.setState({active: null, time: null, node: null}, () => {
            this.props.removeOldestMessage();
        });
        return null;
    }

    handleEndLoad(time) {
        if(this.state.time !== time || this.state.time === null || this.state.active === null || this.state.node === null) {
            return null;
        }
        this.setState({active: null, time: null, node: null}, () => {
            this.props.removeOldestMessage();
        });
        return null;
    }

    render() {
        return (
            <div className={styles.notification}>
                {this.state.node}
            </div>
        );
    }
};

Notifier.propTypes = {
    messages: PropTypes.array,
    removeOldestMessage: PropTypes.func
};
