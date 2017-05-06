import header from '../../styles/css/static/header.scss';
import classNames from 'classnames';

export const HEADER_NAV = classNames(header.nav);
export const NAV_LOGO   = classNames('pull-left logo', header.a);

// Collapsed navbar
export const HEADER_NAV_COLLAPSE = classNames('collapse', 'navbar-collapse', header['collapse-container']);
export const HEADER_BUTTON_COLLAPSE  = classNames('icon-bar', header['collapse-button']);
