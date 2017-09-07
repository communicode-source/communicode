import Location from './../../components/layout/Settings/Location';
import {connect} from 'react-redux';
import {updateCity, updateCountry} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {
        city: state.settings.city,
        country: state.settings.country
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCityEnter: (city) => dispatch(updateCity(city)),
        onCountryEnter: (country) => dispatch(updateCountry(country))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Location);
