import React from 'react';
import PropTypes from 'prop-types';

function handleTypeSelect(e, selectProjectType) {
    if(e.target.value === 'Select...') {
        return selectProjectType('');
    }
    return selectProjectType(e.target.value);
}

const Advertisements = ({ selectProjectType, type }) => (
    <div>
        <select value={(type === '') ? 'Select a Type' : type} onChange={(e) => { handleTypeSelect(e, selectProjectType); }} name="type">
            <option value={null}>Select a Type...</option>
            <option value="AdvertisementConsulting">Advertisement Consulting (Volunteer)</option>
            <option value="DigitalAdvertisement">Digital Advertisement ($50)</option>
            <option value="PrintAdvertisement">Print Advertisement ($50)</option>
            <option value="VideoAdvertisement">Video Advertisement ($100)</option>
            <option value="FullAdvertisementCampaign">Full Campaign ($150)</option>
        </select>
        <ul style={{listStyleType: 'disc', padding: '10px 20px'}}>
        </ul>
    </div>
);

Advertisements.propTypes = {
    selectProjectType: PropTypes.func,
    type: PropTypes.string
};

export default Advertisements;
