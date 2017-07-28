import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/createProject.scss';
import {Row, Col} from 'react-bootstrap';

class ItemBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleItemSelect(value) {
        if(value === this.props.item) {
            return this.props.selectProjectItem('');
        }
        return this.props.selectProjectItem(value);
    }

    render() {
        const secondRowStyle = {
            marginTop: '50px'
        };

        return (
            <div className={classNames(styles.question, 'row')}>
                <div className={classNames('row')}>
                    <div className={classNames('col-md-12')}>
                        <h4 className={styles.itemBarHeader}>What are you looking for?</h4>
                    </div>
                </div>
                <Row id={styles.types}>
                    <Col xs={6} sm={2} md={2} lg={2} onClick={this.handleItemSelect.bind(this, 'Website')} className={classNames(styles.item, (this.props.item === 'Website') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <img width="45px" src={require('./../../../assets/images/icons/black/websiteblack.png')} />
                        </div>
                        <h5>Website</h5>
                    </Col>
                    <Col xs={6} sm={2} md={2} onClick={this.handleItemSelect.bind(this, 'Mobile')} className={classNames(styles.item, (this.props.item === 'Mobile') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <img width="30px" src={require('./../../../assets/images/icons/black/mobileblack.png')} />
                        </div>
                        <h5>Mobile</h5>
                    </Col>
                    <Col xs={6} sm={2} md={2} onClick={this.handleItemSelect.bind(this, 'Issues')} className={classNames(styles.item, (this.props.item === 'Issues') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <img width="10px" src={require('./../../../assets/images/icons/black/issuesblack.png')} />
                        </div>
                        <h5>Issues</h5>
                    </Col>
                    <Col xs={6} sm={2} md={2} onClick={this.handleItemSelect.bind(this, 'Setup')} className={classNames(styles.item, (this.props.item === 'Setup') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <img width="35px" src={require('./../../../assets/images/icons/black/setupblack.png')} />
                        </div>
                        <h5>Setup</h5>
                    </Col>
                    <Col xs={6} sm={2} md={2} onClick={this.handleItemSelect.bind(this, 'Backend')} className={classNames(styles.item, (this.props.item === 'Backend') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <img width="45px" src={require('./../../../assets/images/icons/black/backendblack.png')} />
                        </div>
                        <h5>Backend</h5>
                    </Col>
                    <Col xs={6} sm={2} md={2} onClick={this.handleItemSelect.bind(this, 'Data')} className={classNames(styles.item, (this.props.item === 'Data') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <img width="45px" src={require('./../../../assets/images/icons/black/dataanalyticsblack.png')} />
                        </div>
                        <h5>Data Analytics</h5>
                    </Col>
                </Row>

                <Row style={secondRowStyle} id={classNames(styles.types)}>
                    <Col xs={6} sm={2} md={2} onClick={this.handleItemSelect.bind(this, 'Branding')} className={classNames(styles.item, (this.props.item === 'Data') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <img width="40px" src={require('./../../../assets/images/icons/black/brandingblack.png')} />
                        </div>
                        <h5>Branding</h5>
                    </Col>
                    <Col xs={6} sm={2} md={2} onClick={this.handleItemSelect.bind(this, 'Prototyping')} className={classNames(styles.item, (this.props.item === 'Data') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <img width="40px" src={require('./../../../assets/images/icons/black/prototypingblack.png')} />
                        </div>
                        <h5>Prototyping</h5>
                    </Col>
                    <Col xs={6} sm={2} md={2} onClick={this.handleItemSelect.bind(this, 'Social Media')} className={classNames(styles.item, (this.props.item === 'Data') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <img width="45px" src={require('./../../../assets/images/icons/black/socialmediablack.png')} />
                        </div>
                        <h5>Social Media</h5>
                    </Col>
                    <Col xs={6} sm={2} md={2} onClick={this.handleItemSelect.bind(this, 'Advertisements')} className={classNames(styles.item, (this.props.item === 'Data') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <img width="40px" src={require('./../../../assets/images/icons/black/advertisementsblack.png')} />
                        </div>
                        <h5>Advertisements</h5>
                    </Col>
                </Row>
            </div>
        );
    }
}

ItemBar.propTypes = {
    item: PropTypes.string,
    selectProjectItem: PropTypes.func
};

export default ItemBar;
