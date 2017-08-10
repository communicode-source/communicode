import React from 'react';
import PropTypes from 'prop-types';

function handleTypeSelect(e, selectProjectType) {
    if(e.target.value === 'Select...') {
        return selectProjectType('');
    }
    return selectProjectType(e.target.value);
}

const DataAnalytics = ({ selectProjectType, type }) => (
    <div>
        <select value={(type === '') ? 'Select a Type' : type} onChange={(e) => { handleTypeSelect(e, selectProjectType); }} name="type">
            <option value={null}>Select a Type...</option>
            <option value="ExcelDataAnalysis">Excel Data Analysis (Volunteer)</option>
            <option value="SQLQueryAnalysis">SQL Query Analysis (Volunteer)</option>
            <option value="SimpleDataVisualization">Simple Data Visualization (Volunteer)</option>
            <option value="AdvancedDataVisualization">Advanced Data Visualization ($50)</option>
            <option value="ComplexDataAnalysis">Complex Data Analysis ($150)</option>
            <option value="SimpleMachineLearning">Simple Machine Learning ($50)</option>
            <option value="IntermediateMachineLearning">Intermediate Machine Learning ($100)</option>
            <option value="ComplexMachineLearning">Complex Machine Learning ($200)</option>
        </select>
        <ul style={{listStyleType: 'disc', padding: '10px 20px'}}>
        </ul>
    </div>
);

DataAnalytics.propTypes = {
    selectProjectType: PropTypes.func,
    type: PropTypes.string
};

export default DataAnalytics;
