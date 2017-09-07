import React from 'react';
import PropTypes from 'prop-types';

function handleTypeSelect(e, selectProjectType) {
    if(e.target.value === 'Select...') {
        return selectProjectType('');
    }
    return selectProjectType(e.target.value);
}

const Backend = ({ selectProjectType, type }) => (
    <div>
        <select value={(type === '') ? 'Select a Type' : type} onChange={(e) => { handleTypeSelect(e, selectProjectType); }} name="type">
            <option value={null}>Select a Type...</option>
            <option value="APIDevelopment">API Creation/Development ($50)</option>
            <option value="SmallDevelopmentFeature">Small Development Feature ($50)</option>
            <option value="MediumDevelopmentFeature">Medium Development Feature ($100)</option>
            <option value="LargeDevelopmentFeature">Large Development Feature ($200)</option>
        </select>
        <ul style={{listStyleType: 'disc', padding: '10px 20px'}}>
            <li>Small features have logic and require coding.</li>
            <li>Medium features have a more logic and coding required.</li>
            <li>Large apps have more difficult logic with a lot of coding knowledge needed. Require more experienced developers.</li>
        </ul>
    </div>
);

Backend.propTypes = {
    selectProjectType: PropTypes.func,
    type: PropTypes.string
};

export default Backend;
