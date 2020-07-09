import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { useRouter } from "next/router"
import { RightOutlined, FireOutlined, StarOutlined, RiseOutlined, CalendarOutlined, BarChartOutlined, LogoutOutlined } from '@ant-design/icons';
import ReactTooltip from "react-tooltip";
import React, { useState, useEffect } from 'react'


function Sidebar({ }) {
    const router = useRouter();
    const [sessionActive, setSessionActive] = useState(false);

    useEffect(() => {
        let isSessionActive = localStorage.getItem('session_id');
        if (isSessionActive) {
            setSessionActive(true);
        }
    })

    function logout() {
        localStorage.clear();
        setSessionActive(false);
        router.push('/');
    }

    return (
        <div className={styles.sidebarWrapper}>
            <div className={styles.sidebar}>
                <div className={styles.sidebarTop}>
                    <div className={styles.header}>
                        <div className={styles.menuIcon}>
                            <RightOutlined />
                        </div>
                        <h2>Movie App</h2>
                    </div>
                    <div className={styles.sidebarItems}>
                        <Link href="/">
                            <div className={router.pathname == "/" ? styles.sidebarItemActive : styles.sidebarItem}>
                                <FireOutlined />
                                <p>Most Popular</p>
                            </div>
                        </Link>

                        <Link href="/movies/top-rated-movies">
                            <div className={router.pathname == "/movies/top-rated-movies" ? styles.sidebarItemActive : styles.sidebarItem}>
                                <RiseOutlined />
                                <p>Top Rated</p>
                            </div>
                        </Link>

                        <Link href="/movies/upcoming-movies">
                            <div className={router.pathname == "/movies/upcoming-movies" ? styles.sidebarItemActive : styles.sidebarItem}>
                                <CalendarOutlined />
                                <p>Upcoming Movies</p>
                            </div>
                        </Link>

                        <Link href="/movies/favorite-movies">
                            <div className={router.pathname == "/movies/favorite-movies" ? styles.sidebarItemActive : styles.sidebarItem}>
                                <StarOutlined />
                                <p>Favorites</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.sidebarBottom}>

                    {sessionActive ?
                        <div className={styles.logout}>
                            <LogoutOutlined />
                            <p onClick={logout}>Logout</p>
                        </div>
                        : <p data-tip="Start adding movies to favorites to authenticate" className={styles.notAuthenticated}>You are not authenticated</p>
                    }
                    <ReactTooltip place='top'  effect="solid" uuid="mytt"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar