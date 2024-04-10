import React, {useState} from 'react';
import styles from './RandomIcon.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faFaceSmileWink, faHandshake, faHeart, faLaptop, faStar} from '@fortawesome/free-solid-svg-icons';

export const RandomIcon = () => {
    const [randomIcon, setRandomIcon] = useState(null);

    const handleIconsClick = () => {
        const icons = [faCoffee, faStar, faHeart, faLaptop, faHandshake, faFaceSmileWink];
        const randomIndex = Math.floor(Math.random() * icons.length);
        setTimeout(() => {
            setRandomIcon(icons[randomIndex]);
        }, 3000);
    };


    return (
        <div className={styles.container}>
            {randomIcon && <FontAwesomeIcon icon={randomIcon}/>}
            <button onClick={handleIconsClick}>
                Показать случайную иконку
            </button>
        </div>
    );
};