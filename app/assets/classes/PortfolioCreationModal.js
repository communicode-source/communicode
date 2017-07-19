import modal from '../css/modals/portfolioCreateModal.scss';
import main from '../css/main.scss';

import classNames from 'classnames';


// Main Modal stuff
export const MODAL = classNames(modal.modal);
export const ROW       = classNames('row', modal.row);
export const AUTH_ICON = classNames(modal['auth-icon']);

// Icons
export const FACEBOOK_ICON = classNames('fa', 'fa-facebook', modal.i);
export const GOOGLE_ICON   = classNames('fa', 'fa-google', modal.i);
export const GITHUB_ICON   = classNames('fa', 'fa-github', modal.i);

// Form Stuff
export const NAME_PARAGRAPH    = classNames(modal.p);
export const INPUT_FIELD       = classNames(modal.field);
export const INPUT_LABEL       = classNames(modal.labels);
export const INPUT_LABEL_NAME  = classNames(modal.h6, modal.name);
export const INPUT_LABEL_ERROR = classNames(modal.h6, modal.error);

export const SOCIAL_CONTAINER   = classNames('col-md-12', modal['social-container']);
export const SOCIAL_CONTAINER_2 = classNames('col-md-12', modal['social-container'], modal['social-container-2']);

export const SUBMIT_BUTTON = classNames('col-md-12', main['primary-btn']);
