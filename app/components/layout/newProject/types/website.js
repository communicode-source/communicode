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
        <option value="SplashPage">Splash Page (Volunteer)</option>
        <option value="MultiplePageStaticWebsite">Multiple Page Static Website ($50)</option>
        <option value="WebsiteWithABlog">Website with a Blog ($75)</option>
        <option value="WebsiteWithMultipleContentSources">Website with Multiple Content Sources ($250)</option>
        <option value="UserAccountWebsite">User Account Website ($500)</option>
        <option value="ECommerceWebsite">E-Commerce Website ($2,000)</option>
    </select>
);

Website.propTypes = {
    selectProjectType: PropTypes.func,
    type: PropTypes.string
};

export default Website;
