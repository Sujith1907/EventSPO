import * as React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import styles from '../MenuBar/MenuBar.module.scss';

const MenuBar = () => {
    return (
        <header className={styles.MenuBar}>
            <Logo  />
            <nav>
                <NavigationItems /> 
            </nav>
        </header>
    );
}

export default MenuBar;