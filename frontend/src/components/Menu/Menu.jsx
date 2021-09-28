import React from 'react';
import style from './Menu.module.css';

import logo from './../../assets/logo.png';

function Menu() {
    return (
        <div className={style.nav}>
            <div className={style.container}>
                <img src={logo} alt="logo" className={style.container_logo} />
                <span className={style.container_sitename}>UploadFile</span>
            </div>
        </div>
    )
}

export default Menu
