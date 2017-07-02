import { MainInterests } from 'components';
import { checkInterestsBox } from '../../../actions/index';
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickInterest: event => {
            return dispatch(checkInterestsBox(event.target.getAttribute('data-title')));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainInterests);
