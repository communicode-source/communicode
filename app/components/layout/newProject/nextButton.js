import React from 'react';
import PropTypes from 'prop-types';

class nextButton extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    getButtonText() {
        console.log('text');
        switch(this.props.location) {
            case 1:
                return 'Step 2';
            case 2:
                return 'Step 3';
            case 3:
                return 'Step 4';
            case 4:
                return 'Let\'s Go!';
            default:
                break;
        };
        return 'Error';
    }

    handleNextPageClick() {
        this.props.moveToNextPage(this.props.location);
    }

    render() {
        return (
            <div onClick={this.handleNextPageClick.bind(this)}>
                <p>{this.getButtonText()} This would be an arrow.</p>
            </div>
        );
    }
}

nextButton.propTypes = {
    location: PropTypes.number,
    moveToNextPage: PropTypes.func
};

export default nextButton;
