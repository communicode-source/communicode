import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';
import { Row, Col } from 'react-bootstrap';
import ProjectCheckout from '../form/ProjectCheckout';

class ReviewTicket extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    formatArray(arr) {
        let outStr = '';
        if (arr.length === 1) {
            outStr = arr[0];
        }
        else if (arr.length === 2) {
            outStr = arr.join(' and ');
        }
        else if (arr.length > 2) {
            outStr = arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
        }
        return outStr;
    }

    calculateServiceFee() {
        const price = this.props.project.priceWithService;

        return (price * 0.099).toFixed(2);
    }

    getAOrAn(type) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let isVowel = false;

        vowels.forEach((vowel) => {
            if(type.charAt(1).toLowerCase() === vowel.toLowerCase()) {
                isVowel = true;
            }
        });

        return isVowel ? 'an ' + type : 'a' + type;
    }

    buildParagraph(type, start, end, skills) {
        let paragraph = '';
        let formattedSkills;

        if(!type || !start || !end) {
            return 'You need to complete the sections to get a paragraph!';
        }

        if(skills) {
            formattedSkills = this.formatArray(skills);
        }

        const displayType = this.getAOrAn(type);
        paragraph = `Your project is ${displayType}. `;
        paragraph += `It will appear in the feed of projects to be discovered by developers on ${start}. `;
        paragraph += `It needs to be finished by ${end}. `;
        skills.length !== 0 ? `It requires a knowledge of ${formattedSkills}` : '';

        return paragraph;
    }

    render() {
        let title = 'You didn\'t provide a title!';
        let description = 'You didn\'t provide a description!';
        let billingStatement = 'You need to finish creating your project before it can be finished!';

        if(this.props.project.title !== '') {
            title = this.props.project.title;
        }

        if(this.props.project.description !== '') {
            description = this.props.project.description;
        }

        // Check if all of this stuff exists before showing create a project button for volunteer projects
        if(this.props.project.title && this.props.project.type && this.props.project.start && this.props.project.end && this.props.project.price === 'volunteer') {
            billingStatement = (<div className={styles.createProjectWrapper}>
                <p>None! This is a volunteer project. Press confirm to move on:</p>
                <button onClick={() => { this.props.onConfirmProject(); }} className={styles.confirm}>Confirm Project</button>
            </div>);
        }

        // Check if all of this stuff exists before showing create a project button for paid projects
        if(this.props.project.title && this.props.project.type && this.props.project.start && this.props.project.end && this.props.project.price !== 'volunteer') {
            billingStatement = (<div className={styles.createProjectWrapper}>
                <ul className={styles.billingList}>
                    <li>Price of Project: <span className={styles.price}>${this.props.project.price}</span></li>
                    <li className={styles.addBottomBorder}>Services Fee <span>(what is this?)</span>: <span className={styles.price}>${this.calculateServiceFee()}</span></li>
                    <li>Total: <span className={styles.price}>${this.props.project.priceWithService}</span></li>
                </ul>
                <ProjectCheckout finishProject={this.props.finishProject} price={this.props.project.priceWithService} />
            </div>);
        }


        return (
            <div className={styles.question}>
                <Row>
                    <Col className={styles.leftSide} xs={12} sm={12} md={6} lg={6}>
                        <h4>Make sure everything looks good:</h4>
                        <ol className={styles.ticketList}>
                            <li>Your Project Title: <p className={styles.propsValue}>{title}</p></li>
                            <li>Your Project Description: <p className={styles.propsValue}>{description}</p></li>
                            <li>Your Project Paragraph:
                                <p className={styles.propsValue}>
                                    {this.buildParagraph(this.props.project.type.replace(/([A-Z])/g, ' $1'), this.props.project.start, this.props.project.end, this.props.project.skills)}
                                </p>
                            </li>
                        </ol>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <h4>Billing:</h4>
                        {billingStatement}
                    </Col>
                </Row>
            </div>
        );
    }
}

ReviewTicket.propTypes = {
    project: PropTypes.object,
    finishProject: PropTypes.func,
    onConfirmProject: PropTypes.func
};

export default ReviewTicket;
