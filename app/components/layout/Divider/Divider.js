import React from 'react';
import classNames from 'classnames';

import home from '../../pages/Home/home.scss';

const Divider = () =>
    <div>
        <div className="row">
            <div className={classNames('col-md-12', home.divider)}>

            </div>
        </div>
    </div>;

export default Divider;
