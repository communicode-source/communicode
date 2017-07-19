import React, { PropTypes } from 'react';
import interestsCss from './../../../assets/css/pages/interests.scss';
import classNames from 'classnames';

const InterestCard = ({stateInterests = [], json, onClickInterest}) => {
    return (
        <div
            className={classNames(
                (stateInterests.indexOf(json.title) !== -1) ? interestsCss.chosen : interestsCss.uncheckedInterest,
                interestsCss[json.bg], interestsCss.interestCard,
                interestsCss['interest-picture']
            )}
            onClick={onClickInterest}
            data-title={json.title}>
            <i data-title={json.title} className={classNames('fa', 'fa-plus', interestsCss['fa-plus'])} aria-hidden="true"></i>
            <i data-title={json.title} className={classNames('fa', 'fa-check', interestsCss['fa-check'])} aria-hidden="true"></i>
            <h2 data-title={json.title}>
                <span className={classNames('title')} data-title={json.title}>{json.title}</span>
            </h2>
        </div>
    );
};

InterestCard.propTypes = {
    stateInterests: PropTypes.array,
    json: PropTypes.object,
    onClickInterest: PropTypes.func,
};

export default InterestCard;
