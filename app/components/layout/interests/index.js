import React, { PropTypes } from 'react';
import interestsCss from './../../../assets/css/pages/interests.scss';
import classNames from 'classnames';
import InterestCard from './InterestCard';

/*
  If ComponentDidMount fires,
    check if there is a name in the db
      if there is not a name
        Open a modal window that says "please enter your name ...."
      else
        Choose interests
*/
class MainInterests extends React.Component {
    constructor({interests, stateInterests = [], onClickInterest}) {
        super();
        this.interests = interests;
        this.stateInterests = stateInterests;
        this.onClickInterest = onClickInterest;
    };

    componentWillUpdate(props) {
        this.stateInterests = props.stateInterests;
        return;
    };

    render() {
        const interestsBoxes = this.interests.map((json, index) => {
            const nextIndex = index + 1;
            const nextJson = (this.interests[nextIndex]) ? this.interests[nextIndex] : {};
            const nextCard = (!this.interests[nextIndex]) ? <div className={classNames(interestsCss.hold)}></div> : <InterestCard key={nextIndex} stateInterests={this.stateInterests} json={nextJson} index={nextIndex} onClickInterest={this.onClickInterest} />;
            if(index % 2 === 0) {
                return (
                    <div key={index} className={classNames('row', interestsCss['interest-row'])}>
                        <InterestCard key={index} stateInterests={this.stateInterests} json={json} index={index} onClickInterest={this.onClickInterest} />
                        {nextCard}
                    </div>);
            }

            return null;
        });
        return (
            <div className={classNames(interestsCss['interests-main'], 'container-fluid')}>
                {interestsBoxes}
            </div>
        );
    };
}


MainInterests.propTypes = {
    stateInterests: PropTypes.array,
    interests: PropTypes.array,
    onClickInterest: PropTypes.func,
};

export default MainInterests;
