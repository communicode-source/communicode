import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/profile.scss';
import ReviewCard from './ReviewCard';
import PropTypes from 'prop-types';


class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let reviews = null;
        if(this.props.reviews && this.props.reviews.map) {
            reviews = this.props.reviews.map(
                item =>
                    <ReviewCard
                        profileImage = {item.profileImage}
                        personName = {item.personName}
                        projectName = {item.projectName}
                        stars = {item.stars}
                        reviewText = {item.reviewText}
                        recommendation = {item.recommendation}
                    />
            );
        }
        return (
            <div id={classNames(styles.reviews)}>
                {reviews}
            </div>
        );
    }
}

Reviews.propTypes = {
    reviews: PropTypes.array
};
export default Reviews;
