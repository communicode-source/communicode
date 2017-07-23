import React from 'react';
import PropTypes from 'prop-types';

function handleTypeSelect(e, selectProjectType) {
    if(e.target.value === 'Select...') {
        return selectProjectType('');
    }
    return selectProjectType(e.target.value);
}

const Website = ({ selectProjectType, type }) => (
    <select value={(type === '') ? 'Select a Type' : type} onChange={(e) => { handleTypeSelect(e, selectProjectType); }} name="type">
        <option value={null}>Select a Type...</option>
        <option value="Splash Page">Splash Page</option>
        <option value="Single Page Static Website">Single Page Static Website</option>
        <option value="Multiple Page Static Website">Multiple Page Static Website</option>
        <option value="Website with a Blog">Website with a Blog</option>
        <option value="Website with Multiple Content Sources">Website with Multiple Content Sources</option>
        <option value="E-Commerce Website">E-Commerce Website</option>
        <option value="User Account Website">User Account Website</option>
    </select>
);

Website.propTypes = {
    selectProjectType: PropTypes.func,
    type: PropTypes.string
};

export default Website;
