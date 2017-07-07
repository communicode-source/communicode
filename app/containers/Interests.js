import MainInterests from './../components/layout/interests';
import { checkInterestsBox, updateName, updateFname, updateLname } from './../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    const interestsArray = [
      {title: 'FIRE', bg: 'fire', checked: false},
      {title: 'WATER', bg: 'water', checked: false},
      {title: 'AIR', bg: 'clouds', checked: false},
      {title: 'EARTH', bg: 'ground', checked: false},
      {title: 'PINEAPPLES', bg: 'fruit', checked: false},
    ];
    return {
        interests: interestsArray,
        stateInterests: state.interests,
        fname: state.user.fname,
        lname: state.user.lname,
        showModal: state.user.showModal,
        error: state.user.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickInterest: event => {
            return dispatch(checkInterestsBox(event.target.getAttribute('data-title')));
        },
        onNameSubmit: () => dispatch(updateName()),
        onFnameEnter: (fname) => dispatch(updateFname(fname)),
        onLnameEnter: (lname) => dispatch(updateLname(lname))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainInterests);
