import React from 'react';
import PropTypes from 'prop-types';

function handleTypeSelect(e, selectProjectType) {
    if(e.target.value === 'Select...') {
        return selectProjectType('');
    }
    return selectProjectType(e.target.value);
}

const Mobile = ({ selectProjectType, type }) => (
    <div>
        <select value={(type === '') ? 'Select a Type' : type} onChange={(e) => { handleTypeSelect(e, selectProjectType); }} name="type">
            <option value={null}>Select a Type...</option>
            <option value="SmallIOSApplication">Small iOS Application ($100)</option>
            <option value="SmallAndroidApplication">Small Android Application ($100)</option>
            <option value="MediumIOSApplication">Medium iOS Application ($300)</option>
            <option value="MediumAndroidApplication">Medium Android Application ($300)</option>
            <option value="LargeIOSApplication">Large iOS Application ($500)</option>
            <option value="LargeAndroidApplication">Large Android Application ($500)</option>
        </select>
        <p style={{fontStyle: 'italic', padding: '10px'}}>Note: We recommend creating two separate projects for Android and iOS.</p>
        <ul style={{listStyleType: 'disc', padding: '10px 20px'}}>
            <li>Small apps have little to no logic and very little updating content/moving parts.</li>
            <li>Medium apps have a fair amount of logic and more moving parts/content.</li>
            <li>Large apps have more difficult logic with a lot of moving parts and require more experienced developers.</li>
        </ul>
    </div>
);

Mobile.propTypes = {
    selectProjectType: PropTypes.func,
    type: PropTypes.string
};

export default Mobile;
