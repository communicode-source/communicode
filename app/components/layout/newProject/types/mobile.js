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
        <option value="StaticIOSApplication">Static iOS Application ($150)</option>
        <option value="StaticAndroidApplication">Static Android Application ($150)</option>
    </select>
);

Website.propTypes = {
    selectProjectType: PropTypes.func,
    type: PropTypes.string
};

export default Website;
