import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';

class TrackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleTrackSelect(e) {
        if(e.target.value === 'Select...') {
            return this.props.selectProjectTrack('');
        }
        return this.props.selectProjectTrack(e.target.value);
    }

    render() {
        return (
            <div className={styles.question}>
                <h4>Or select a track...</h4>
                <select value={(this.props.track === '') ? 'Select...' : this.props.track} onChange={this.handleTrackSelect.bind(this)} name="tracks">
                    <option value={null}>Select...</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Website">Website</option>
                    <option value="API">API Help</option>
                    <option value="Big Data">Big Data</option>
                    <option value="Sleep">Sleep</option>
                </select>
            </div>
        );
    }
}

TrackSelector.propTypes = {
    track: PropTypes.string,
    selectProjectTrack: PropTypes.func
};

export default TrackSelector;
