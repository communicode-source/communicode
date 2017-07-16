import MainInterests from './../components/layout/interests';
import { checkInterestsBox, submitInterest } from './../actions/funcs/interests';
import { updateName, updateFname, updateLname } from './../actions/funcs/user';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    const interestsArray = [
      {title: 'Environment', bg: 'environment', checked: false},
      {title: 'International', bg: 'international', checked: false},
      {title: 'Science', bg: 'science', checked: false},
      {title: 'Human Services', bg: 'humanservices', checked: false},
      {title: 'Health', bg: 'health', checked: false},
      {title: 'Education', bg: 'education', checked: false},
      {title: 'Arts and Culture', bg: 'artsandculture', checked: false},
      {title: 'Religion', bg: 'religion', checked: false},
      {title: 'Technology', bg: 'tech', checked: false},
      {title: 'Peace Efforts', bg: 'peaceefforts', checked: false},
      {title: 'Wildlife', bg: 'wildlife', checked: false},
      {title: 'Parks and Recreation', bg: 'parksandrec', checked: false},
      {title: 'Business And Marketing', bg: 'businessandmarketing', checked: false},
      {title: 'Urban Management', bg: 'urbanmanagement', checked: false},
      {title: 'Preservation', bg: 'preservation', checked: false},
      {title: 'Engineering', bg: 'engineering', checked: false},
      {title: 'Mathematics', bg: 'mathematics', checked: false},
      {title: 'Food Services', bg: 'foodservices', checked: false},
      {title: 'Criminal', bg: 'criminal', checked: false},
      {title: 'Athletics', bg: 'athletics', checked: false},
      {title: 'Internet', bg: 'internet', checked: false},
      {title: 'Public Safety', bg: 'publicsafety', checked: false},
      {title: 'Youth Aid', bg: 'youthaid', checked: false},
      {title: 'Construction', bg: 'construction', checked: false},
      {title: 'TV and Media', bg: 'tvandmedia', checked: false},
      {title: 'War Relief', bg: 'warrelief', checked: false},
      {title: 'Poverty', bg: 'poverty', checked: false},
      {title: 'Legal', bg: 'legal', checked: false},
      {title: 'Design', bg: 'design', checked: false},
      {title: 'Research', bg: 'research', checked: false},
      {title: 'Disease', bg: 'disease', checked: false},
      {title: 'Fundraising', bg: 'fundraising', checked: false},
      {title: 'Finance', bg: 'finance', checked: false},
      {title: 'Trade', bg: 'trade', checked: false},
      {title: 'Historical', bg: 'historical', checked: false},
    ];
    return {
        user: state.user.profile,
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
        onSubmitInterest: (data) => dispatch(submitInterest(data)),
        onNameSubmit: () => dispatch(updateName()),
        onFnameEnter: (fname) => dispatch(updateFname(fname)),
        onLnameEnter: (lname) => dispatch(updateLname(lname))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainInterests);
