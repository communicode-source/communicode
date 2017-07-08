import React from 'react';
import { connect } from 'react-redux';
import { searchChange } from './../actions/funcs/search';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        if (this.state.term <= event.target.value) {
            this.props.onSearchChange(event.target.value);
        }
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
	            placeholder="Nonprofit or Volunteer"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
		/>
            </form>
        );
    }
}

SearchBar.propTypes = {
    onSearchChange: React.PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (search) => dispatch(searchChange(search)),
    };
};

export default connect(null, mapDispatchToProps)(SearchBar);
