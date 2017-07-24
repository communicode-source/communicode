import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/profile.scss';
import PropTypes from 'prop-types';

class NPProject extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        this.props.getNonProfitProjects();
    }

    handleCompletedProjectClick(id) {
        this.props.checkProjectOff(id);
    }

    build() {
        if(!this.props.projects || !this.props.projects.map || !this.props.projects[0]) {
            return null;
        }
        return this.props.projects.map((value, key) => {
            return (
                <div key={key}>
                    <p>{value.title}</p>
                    <p>{value.type}</p>
                    <p>{value.item}</p>
                    <p>{value.description}</p>
                    {(this.props.id === value.nonprofitId && value.isCompleted === false) && <p onClick={this.handleCompletedProjectClick.bind(this, value._id)}>Click here to say this is completed</p>}
                    <hr />
                </div>
            );
        });
    }

    render() {
        return (
            <div className={classNames(styles.item, styles.pic, 'col-md-3', 'col-sm-12')}>
                {this.build.call(this)}
            </div>
        );
    }
}

NPProject.propTypes = {
    projects: PropTypes.array,
    account: PropTypes.bool,
    id: PropTypes.string,
    getNonProfitProjects: PropTypes.func,
    checkProjectOff: PropTypes.func
};

export default NPProject;
