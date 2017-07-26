import modal from '../css/modals/loginModal.scss';
import main from '../css/main.scss';

import classNames from 'classnames';


// Main Modal stuff
export const MODAL_ID  = classNames(modal.modal);
export const ROW       = classNames('row', modal.row);
export const AUTH_ICON = classNames(modal['auth-icon']);

// Icons
export const FACEBOOK_ICON = classNames('fa', 'fa-facebook', modal.i);
export const GOOGLE_ICON   = classNames('fa', 'fa-google', modal.i);
export const GITHUB_ICON   = classNames('fa', 'fa-github', modal.i);

// Form Stuff
export const INPUT_FIELD       = classNames(modal.field);
export const INPUT_LABEL       = classNames(modal.labels);
export const INPUT_LABEL_NAME  = classNames(modal.h6, modal.name);
export const INPUT_LABEL_ERROR = classNames(modal.h6, modal.error);

// SLIDER WOO!!
export const SLIDER_MAIN     = classNames(modal.sliderfull);
export const LABEL_CONT      = classNames(modal.labelcont);
export const NONPROFIT_SLIDE = classNames(modal.nonp);
export const ARROW_LEFT      = classNames('fa', 'fa-arrow-left', modal.fa, modal['fa-arrow-left']);
export const ARROW_RIGHT     = classNames('fa', 'fa-arrow-right', modal.fa, modal['fa-arrow-right']);
export const HANDLER         = classNames(modal.slider);
export const SLIDE_HANDLER   = classNames(modal.handleCont);
export const HANDLE          = classNames(modal.handle);
export const HANDLE_ARROWS   = classNames('fa', 'fa-arrows-h', modal.fa, modal['fa-arrows-h'], modal.i);
export const LEFT_SIDE       = classNames(modal.leftSide);

export const SOCIAL_CONTAINER   = classNames('col-md-12', modal['social-container']);
export const SOCIAL_CONTAINER_2 = classNames('col-md-12', modal['social-container'], modal['social-container-2']);

export const SUBMIT_BUTTON   = classNames('col-md-12', main['primary-btn']);
export const FORGOT_PASSWORD = classNames('text-center', modal.forgot);
