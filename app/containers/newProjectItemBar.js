import ItemBar from './../components/layout/newProject/ItemBar';
import { selectedProjectItem } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        item: state.newProject.item
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectProjectItem: (item) => dispatch(selectedProjectItem(item))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemBar);
