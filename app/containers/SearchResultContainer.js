import { connect } from 'react-redux';
import React from 'react';
import Result from '../components/layout/Search/Result';

class SearchList extends React.Component {

    constructor(props) {
        super(props);
    }

    renderListTrue(userData) {
        if (userData.accounttype === true) {
            return (
                <Result key={userData._id} fname={userData.fname} lname={userData.lname} email={userData.email} url={userData.url}/>
            );
        }
        return null;
    }

    renderListFalse(userData) {
        if (userData.accounttype === false) {
            return (
                <Result key={userData._id} fname={userData.organizationname} lname={''} email={userData.email} url={userData.url}/>
            );
        }
        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-3">
                    <h className="col-md-offset-4">Volunteers</h>
                    <ul className="list-group">{(this.props.search === undefined) ? null : this.props.search.map(this.renderListTrue)}</ul>
                </div>

                <div className="col-md-3">
                    <h className="col-md-offset-4">Nonprofits</h>
                    <ul className="list=group">{(this.props.search === undefined) ? null : this.props.search.map(this.renderListFalse)}</ul>
                </div>
            </div>
	);
    }
}

SearchList.propTypes = {
    search: React.PropTypes.array,
    type: React.PropTypes.string,
    accType: React.PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        search: state.search
    };
};


export default connect(mapStateToProps)(SearchList);
