import * as React from 'react';

import styles from './Logo.module.scss';

import { Icon } from 'office-ui-fabric-react/lib/Icon';



const Logo = () => (
    <div className={styles.Logo}>
        <Icon iconName="CompassNW" className={styles.Logo}/>
    </div>
);

export default Logo;