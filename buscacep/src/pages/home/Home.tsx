import React from 'react';
import styles from './Home.module.css'
import ModelForm from '../../components/form/ModelForm';

function Home() {
    return (
        <div className={styles.mainContainer}>
            <h2>Buscador de CEP</h2>
            <div>
                <ModelForm/>
            </div>
        </div>
    );
}

export default Home;