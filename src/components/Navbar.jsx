import React from 'react';
import Image from 'next/image';
import logo from '../../public/navbar-assets/TestLogo.svg';
import docPic from '../../public/navbar-assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png';
import gear from '../../public/icons/gear/settings_FILL0_wght300_GRAD0_opsz24@2x.png';
import dots from '../../public/icons/hambergerVert/more_vert_FILL0_wght300_GRAD0_opsz24@2x.png';
import home from '../../public/icons/home/home_FILL0_wght300_GRAD0_opsz24.svg';
import group from '../../public/icons/group/group_FILL0_wght300_GRAD0_opsz24.svg';
import calendar from '../../public/icons/calendar/calendar_today_FILL0_wght300_GRAD0_opsz24.svg';
import chat_bubble from '../../public/icons/chatBubble/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg';
import credit_card from '../../public/icons/creditCard/credit_card_FILL0_wght300_GRAD0_opsz24.svg';
import style from '../styles/Navbar.module.css';


export default function Navbar(){
    const handleNavClick = (name) => {
        alert('You clicked ' + name)
    }

    return (
        <div id={style.navbar}>
            <Image id={style.navImage} src={logo} alt='logo' height='48px' width='210px' />
            <nav id={style.navCover}>
                <ul className={style.nav_ul}>
                    <li onClick={()=> handleNavClick('Overview')}>
                        <Image src={home} alt='home' />
                        <p>Overview</p>
                    </li>
                    <li 
                        className={style.checked}
                        onClick={()=> handleNavClick('Patients')}
                    >
                        <Image src={group} alt='group' /> 
                        <p>Patients</p>
                    </li>
                    <li onClick={()=> handleNavClick('Schedule')}>
                        <Image src={calendar} alt='calendar' />
                        <p>Schedule</p>
                    </li>
                    <li onClick={()=> handleNavClick('Message')}>
                        <Image src={chat_bubble} alt='chat' />
                        <p>Message</p>
                    </li>
                    <li onClick={()=> handleNavClick('Transactions')}>
                        <Image src={credit_card} alt='credit card' />
                        <p>Transactions</p>
                    </li>
                </ul>
            </nav>
            <div id={style.docDisplay}>
                <Image id={style.docPic} src={docPic} alt='doctor' height={88} width={88} />
                <div id={style.docInfo}>
                    <p className={style.bold}>Dr. Jose Simmons</p>
                    <p className={style.lightGrey}>General Practitioner</p>
                </div>
                <div id={style.settings}>
                    <Image id={style.gearImg} src={gear} width={38} height={40} alt='settings' />
                    <Image id={style.dotsImg} src={dots} width={8} height={36} alt='more' />
                </div>
            </div>
        </div>
    )
}