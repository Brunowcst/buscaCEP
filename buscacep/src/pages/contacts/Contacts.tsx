import React from 'react';
import CustomCard from '../../components/cards/CustomCard/CustomCard';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.content}>
            <CustomCard/>
        </div>
    );
}

export default Contacts;