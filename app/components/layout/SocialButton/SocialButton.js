import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import links from './links';

export default class SocialButton extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <Link href={this.props.link ? links[this.props.platform] : null} className={classNames(
                'btn',
                'btn-social',
                this.props.block ? 'btn-block' : null,
                this.props.icon ? 'btn-social-icon' : null,
                `btn-${this.props.platform}`)}
            >
                <span className={classNames('fa', `fa-${this.props.platform}`)} />&nbsp;&nbsp;{ this.props.children }
            </Link>
        );
    }
}

SocialButton.propTypes = {
    children: PropTypes.string,
    platform: PropTypes.string.isRequired,
    icon: PropTypes.bool,
    block: PropTypes.bool,
    link: PropTypes.bool
};
