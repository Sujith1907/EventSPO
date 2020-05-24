import * as React from 'react';

import styles from '../NavigationItems/NavigationItems.module.scss';

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <li>Home</li>
        <li>About</li>
        <li>Members</li>
    </ul>
);

export default navigationItems;