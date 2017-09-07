import React from 'react';
import NewProjectReview from './../../containers/newProjectReviewContainer';
import NewProjectProgressBar from './../../containers/newProjectProgressBar';
import NewProjectReviewTicket from './../../containers/newProjectReviewTicketContainer';
import classNames from 'classnames';
import styles from './../../assets/css/pages/createProject.scss';

const Review = () => (
    <div className={classNames('container', styles.page)}>
        <div>
            <NewProjectProgressBar />
            <NewProjectReview>
                <NewProjectReviewTicket />
            </NewProjectReview>
        </div>
    </div>
);

export default Review;
