import * as React from 'react';

import styles from '../NavigationItems/NavigationItems.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={styles.NavigationItems}>
    <NavigationItem url='/' >Home</NavigationItem>
    <NavigationItem url='/about'>About</NavigationItem>
    <NavigationItem url='/members'>Members</NavigationItem>
</ul>
);

export default NavigationItems;