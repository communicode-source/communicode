import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import PropTypes from 'prop-types';
import {Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            value: ''
        };
    }

    handleRemoveSkill(e) {
        this.props.changeSkill(e.target.innerHTML);
    }

    buildSkills() {
        if(!this.props.skills || !this.props.skills.map) {
            return null;
        }
        const node = this.props.skills.map((item, index) => <p onClick={this.handleRemoveSkill.bind(this)} key={index} className={classNames(styles.button, styles.removable)}>{item}</p>);
        return node;
    }

    handleFormChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.changeSkill(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <div>
                <div className={classNames(styles.btns)}>
                    {this.buildSkills.call(this)}
                </div>
                <Form onSubmit={this.handleSubmit.bind(this)} horizontal>
                    <FormGroup className={styles.formGroup}>
                        <Col componentClass={ControlLabel} sm={3}>
                            Add a skill &nbsp; <i className={classNames('fa', 'fa-pencil-square-o')} aria-hidden="true"></i>
                        </Col>
                        <Col sm={9}>
                            <FormControl
                                type="text"
                                placeholder="i.e. Ruby on Rails, then press ENTER"
                                value={this.state.value}
                                onChange={this.handleFormChange.bind(this)}
                            />
                        </Col>
                    </FormGroup>
                </Form>
                <p>{this.state.value !== '' && 'Press ENTER when you are done!'}</p>
            </div>
        );
    }

}

Skills.propTypes = {
    skills: PropTypes.array,
    changeSkill: PropTypes.func
};


export default Skills;
