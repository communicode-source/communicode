import React from 'react';
import PropTypes from 'prop-types';

class TrackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <p>this is the Progress Bar.</p>
                <p>{(this.props.track !== '') ? `Currently is shows you have selected track: ${this.props.track}` : 'No track has been selected'}</p>
            </div>
        );
    }
}

TrackSelector.propTypes = {
    track: PropTypes.string,
    selectProjectTrack: PropTypes.func
};

export default TrackSelector;
