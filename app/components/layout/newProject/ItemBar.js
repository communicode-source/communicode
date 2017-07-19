import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/createProject.scss';

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
        return (
            <div className={classNames(styles.question)}>
                <h4>What are you looking for?</h4>
                <div id={styles.types}>
                    <div onClick={this.handleItemSelect.bind(this, 'Website')} className={classNames(styles.item, (this.props.item === 'Website') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <i className={classNames('fa', 'fa-code')} aria-hidden="true"></i>
                        </div>
                        <h5>Website</h5>
                    </div>
                    <div onClick={this.handleItemSelect.bind(this, 'Mobile')} className={classNames(styles.item, (this.props.item === 'Mobile') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <i className={classNames('fa', 'fa-code')} aria-hidden="true"></i>
                        </div>
                        <h5>Mobile</h5>
                    </div>
                    <div onClick={this.handleItemSelect.bind(this, 'Issues')} className={classNames(styles.item, (this.props.item === 'Issues') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <i className={classNames('fa', 'fa-code')} aria-hidden="true"></i>
                        </div>
                        <h5>Issues</h5>
                    </div>
                    <div onClick={this.handleItemSelect.bind(this, 'Setup')} className={classNames(styles.item, (this.props.item === 'Setup') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <i className={classNames('fa', 'fa-code')} aria-hidden="true"></i>
                        </div>
                        <h5>Setup</h5>
                    </div>
                    <div onClick={this.handleItemSelect.bind(this, 'Backend')} className={classNames(styles.item, (this.props.item === 'Backend') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <i className={classNames('fa', 'fa-code')} aria-hidden="true"></i>
                        </div>
                        <h5>Backend</h5>
                    </div>
                    <div onClick={this.handleItemSelect.bind(this, 'Data')} className={classNames(styles.item, (this.props.item === 'Data') ? styles.on : styles.off)}>
                        <div className={styles.icon}>
                            <i className={classNames('fa', 'fa-code')} aria-hidden="true"></i>
                        </div>
                        <h5>Data Analytics</h5>
                    </div>
                </div>
            </div>
        );
    }
}

ItemBar.propTypes = {
    item: PropTypes.string,
    selectProjectItem: PropTypes.func
};

export default ItemBar;
