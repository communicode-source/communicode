import React from 'react';
import PropTypes from 'prop-types';

function handleTypeSelect(e, selectProjectType) {
    if(e.target.value === 'Select...') {
        return selectProjectType('');
    }
    return selectProjectType(e.target.value);
}

const Setup = ({ selectProjectType, type }) => (
    <div>
        <select value={(type === '') ? 'Select a Type' : type} onChange={(e) => { handleTypeSelect(e, selectProjectType); }} name="type">
            <option value={null}>Select a Type...</option>
            <option value="SetupAdvice">General Setup Advice/Consulting (volunteer)</option>
            <option value="DomainNameSetup">Setup a Domain Name (volunteer)</option>
            <option value="HostingSetup">Setup Website Hosting (volunteer)</option>
            <option value="DomainAndHostingSetup">Setup Domain Name and Website Hosting (volunteer)</option>
            <option value="DataBackup">Backup Data (volunteer)</option>
            <option value="WebsiteTransfer">Fully transfer a website with Data ($25)</option>
            <option value="MediumCloudArchitecture">Deploy and Configure a Smaller Cloud Application ($50)</option>
            <option value="LargeCloudArchitecture">Deploy and Configure a Large/Complex Cloud Application ($100)</option>
        </select>
        <ul style={{listStyleType: 'disc', padding: '20px'}}>
            <li>Note: Volunteers do not pay for domain name or hosting payments, or any charges affiliated with your project.</li>
        </ul>
    </div>
);

Setup.propTypes = {
    selectProjectType: PropTypes.func,
    type: PropTypes.string
};

export default Setup;
