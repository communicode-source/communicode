import React, { PropTypes } from 'react';
import interestsCss from './../../../assets/css/pages/interests.scss';
import classNames from 'classnames';
import InterestCard from './InterestCard';
import NameModal from './../../../containers/NameModalContainer';
import { Row, Col} from 'react-bootstrap';

class MainInterests extends React.Component {
    constructor({interests, stateInterests = [], onClickInterest, user, onSubmitInterest, fname, lname, showModal, showButton, error, onNameSubmit, onFnameEnter, onLnameEnter}) {
        super();
        this.interests = interests;
        this.stateInterests = stateInterests;
        this.onClickInterest = onClickInterest;
        this.user = user;
        this.onSubmitInterest = onSubmitInterest;
        this.showModal = showModal;
        this.fname = fname;
        this.lname = lname;
        this.error = error;
        this.showButton = showButton;
        this.onNameSubmit = onNameSubmit;
        this.onFnameEnter = onFnameEnter;
        this.onLnameEnter = onLnameEnter;
    };

    componentWillMount() {
        this.props.loadInit();
    }

    componentWillUpdate(props) {
        this.stateInterests = props.stateInterests;
        this.showModal = props.showModal;
        this.fname = props.fanme;
        this.lname = props.lname;
        this.error = props.error;
        return;
    };

    handleSubmit() {
        this.onSubmitInterest({user: this.user, interests: [...this.stateInterests]});
    }

    render() {
        let button;
        if(this.stateInterests.length > 0) {
            button = <button onClick={() => { this.handleSubmit(); }} className={classNames(interestsCss.interestsSubmitButton)}>Let's do this! <i className={classNames('fa', 'fa-arrow-right')} aria-hidden="true"></i></button>;
        }

        const interestsBoxes = this.interests.map((json, index) => {
            return (
                <Col sm={12} md={4} key={index} className={classNames(interestsCss.interest)}>
                    <InterestCard key={index} stateInterests={this.stateInterests} json={json} index={index} onClickInterest={this.onClickInterest} />
                </Col>
            );
        });
        return (
            <div>
                <NameModal />
                <Row className={classNames(interestsCss['interests-main'])}>
                    {interestsBoxes}
                </Row>
                {button}
            </div>
        );
    };
}

/*
<div className={classNames(interestsCss['interests-main'], 'container-fluid')}>
    {interestsBoxes}
</div>
*/

MainInterests.propTypes = {
    stateInterests: PropTypes.array,
    interests: PropTypes.array,
    onClickInterest: PropTypes.func,
    user: PropTypes.object,
    onSubmitInterest: PropTypes.func,
    fname: PropTypes.string,
    lname: PropTypes.string,
    error: PropTypes.string,
    onNameSubmit: PropTypes.func,
    onFnameEnter: PropTypes.func,
    onLnameEnter: PropTypes.func,
    loadInit: PropTypes.func
};

export default MainInterests;
