import React from 'react';
import PropTypes from 'prop-types';

function handleTypeSelect(e, selectProjectType) {
    if(e.target.value === 'Select...') {
        return selectProjectType('');
    }
    return selectProjectType(e.target.value);
}

const Prototyping = ({ selectProjectType, type }) => (
    <div>
        <select value={(type === '') ? 'Select a Type' : type} onChange={(e) => { handleTypeSelect(e, selectProjectType); }} name="type">
            <option value={null}>Select a Type...</option>
            <option value="UIConsulting">UI/UX Consulting (Volunteer)</option>
            <option value="FullSitePrototype">Full Site Prototype ($50)</option>
            <option value="FullAppPrototype">Full App Prototype ($50)</option>
            <option value="FullProductPrototype">Full Product Prototype ($50)</option>
        </select>
        <ul style={{listStyleType: 'disc', padding: '10px 20px'}}>
        </ul>
    </div>
);

Prototyping.propTypes = {
    selectProjectType: PropTypes.func,
    type: PropTypes.string
};

export default Prototyping;
