import React from 'react';
import PropTypes from 'prop-types';

function handleTypeSelect(e, selectProjectType) {
    if(e.target.value === 'Select...') {
        return selectProjectType('');
    }
    return selectProjectType(e.target.value);
}

const SocialMedia = ({ selectProjectType, type }) => (
    <div>
        <select value={(type === '') ? 'Select a Type' : type} onChange={(e) => { handleTypeSelect(e, selectProjectType); }} name="type">
            <option value={null}>Select a Type...</option>
            <option value="SocialMediaConsulting">Social Media Outreach Consulting (Volunteer)</option>
            <option value="SocialMediaSetup">Social Media Setup (Volunteer)</option>
            <option value="SocialMediaCampaign">Full Social Campaign ($20)</option>
        </select>
        <ul style={{listStyleType: 'disc', padding: '10px 20px'}}>
        </ul>
    </div>
);

SocialMedia.propTypes = {
    selectProjectType: PropTypes.func,
    type: PropTypes.string
};

export default SocialMedia;
