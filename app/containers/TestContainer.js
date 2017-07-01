import { connect } from 'react-redux';
import { getTests } from '../actions';

const TestContainer = ( props ) => {
    let input;

    const {
      tests
    } = props;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                </tr>
            </tbody>
        </table>
    );
}

TestContainer.propTypes = {
    tests: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        tests: state.tests
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetTests: tests => dispatch(getTests())
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);
