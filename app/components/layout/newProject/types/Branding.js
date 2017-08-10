import React from 'react';
import PropTypes from 'prop-types';

function handleTypeSelect(e, selectProjectType) {
    if(e.target.value === 'Select...') {
        return selectProjectType('');
    }
    return selectProjectType(e.target.value);
}

const Branding = ({ selectProjectType, type }) => (
    <div>
        <select value={(type === '') ? 'Select a Type' : type} onChange={(e) => { handleTypeSelect(e, selectProjectType); }} name="type">
            <option value={null}>Select a Type...</option>
            <option value="LogoDesign">Logo Design (Volunteer)</option>
            <option value="Typography">Typography (Volunteer)</option>
            <option value="ColorScheme">Color Scheme (Volunteer)</option>
            <option value="BrandConsulting">Brand Consulting (Volunteer)</option>
            <option value="FullRebrand">Full Rebranding ($100)</option>
            <option value="NewBranding">Full Branding ($100)</option>
        </select>
        <ul style={{listStyleType: 'disc', padding: '10px 20px'}}>
        </ul>
    </div>
);

Branding.propTypes = {
    selectProjectType: PropTypes.func,
    type: PropTypes.string
};

export default Branding;
