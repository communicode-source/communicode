import React from 'react';
import classNames from 'classnames';

import styles from './divider.scss';

const Divider = () =>
    <div className="row">
        <div className={classNames('col-md-12', styles.divider)} />
    </div>;

export default Divider;
