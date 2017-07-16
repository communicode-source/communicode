import React from 'react';
import PropTypes from 'prop-types';

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
            <div>
                <p>This is the track selector.</p>
                <p>{(this.props.track !== '') ? `Currently is shows you have selected track: ${this.props.track}` : 'No track has been selected'}</p>
                <select onChange={this.handleTrackSelect.bind(this)} name="tracks">
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
