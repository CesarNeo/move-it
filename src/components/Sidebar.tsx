import Link from 'next/link';
import { useContext } from 'react';

import { SidebarContext } from '../contexts/SidebarContext';

import styles from '../styles/components/Sidebar.module.css';

export default function Sidebar() {
    const {
        isClickHome,
        isClickRanking,
        handleClickHome,
        handleClickRanking
    } = useContext(SidebarContext);

    return (
        <main className={styles.containerSidebar}>
            <div className={styles.containerLogo}>
                <img src="/Logo.svg" alt="Logo" />

            </div>

            <div className={styles.containerImageHome} onClick={handleClickHome}>
                <Link href="/home">

                    {isClickHome ? (
                        <a className={styles.containerImageHomeActive}>
                            <div >
                                <img src="/home-color.svg" alt="Home" />
                            </div>
                        </a>

                    ) : (
                        <a className={styles.containerImageHomeNotActive}>
                            <div>
                                <img src="/home.svg" alt="Home" />
                            </div>
                        </a>
                    )}
                </Link>
            </div>
            <div className={styles.containerImageAward} onClick={handleClickRanking}>
                <Link href="/leaderboard">
                    {isClickRanking ? (
                        <a className={styles.containerImageAwardActive}>
                            <div >
                                <img src="/award-color.svg" alt="Ranking" />
                            </div>
                        </a>

                    ) : (
                        <a className={styles.containerImageAwardNotActive}>
                            <div>
                                <img src="/award.svg" alt="Ranking" />
                            </div>
                        </a>
                    )}
                </Link>
            </div>
        </main>
    );
}