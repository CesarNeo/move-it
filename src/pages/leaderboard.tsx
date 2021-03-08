import Head from 'next/head';

import Sidebar from '../components/Sidebar';
import styles from '../styles/pages/Leaderboard.module.css';

export default function LeaderBoard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Leaderboard</title>
            </Head>

            <Sidebar />

            <header>
                <h1>Leaderboard</h1>

                <footer>
                    <section className={styles.sectionLeft}>
                        <span>
                            POSIÇÃO
                        </span>
                        <span>
                            USUÁRIO
                        </span>
                    </section>
                    <section className={styles.sectionRight}>
                        <span>
                            DESAFIOS
                        </span>
                        <span>
                            EXPERIÊNCIA
                        </span>
                    </section>
                </footer>
            </header>

            <main>
                <article>
                    <div className={styles.containerPosition}>
                        <span>1</span>
                    </div>
                    <div className={styles.containerRanking}>
                        <div className={styles.containerProfile}>
                            <img src="https://github.com/cesarneo.png" alt="Cesar Emmanuel" />
                            <div>
                                <strong>Cesar Emmanuel</strong>
                                <p>
                                    <img src="icons/level.svg" alt="Level" />
                                    Level 1
                                    </p>
                            </div>
                        </div>
                        <div className={styles.containerChallenges}>
                            <p className={styles.containerChallengeText}>
                                <span>127</span>
                                completados
                            </p>
                            <p className={styles.containerExperienceText}>
                                <span>1000</span>
                                xp
                            </p>
                        </div>
                    </div>
                </article>
                <article>
                    <div className={styles.containerPosition}>
                        <span>1</span>
                    </div>
                    <div className={styles.containerRanking}>
                        <div className={styles.containerProfile}>
                            <img src="https://github.com/cesarneo.png" alt="Cesar Emmanuel" />
                            <div>
                                <strong>Cesar Emmanuel</strong>
                                <p>
                                    <img src="icons/level.svg" alt="Level" />
                                    Level 1
                                </p>
                            </div>
                        </div>
                        <div className={styles.containerChallenges}>
                            <p className={styles.containerChallengeText}>
                                <span>127</span>
                                completados
                            </p>
                            <p className={styles.containerExperienceText}>
                                <span>1000</span>
                                xp
                            </p>
                        </div>
                    </div>
                </article>
                <article>
                    <div className={styles.containerPosition}>
                        <span>1</span>
                    </div>
                    <div className={styles.containerRanking}>
                        <div className={styles.containerProfile}>
                            <img src="https://github.com/cesarneo.png" alt="Cesar Emmanuel" />
                            <div>
                                <strong>Cesar Emmanuel</strong>
                                <p>
                                    <img src="icons/level.svg" alt="Level" />
                                    Level 1
                                </p>
                            </div>
                        </div>
                        <div className={styles.containerChallenges}>
                            <p className={styles.containerChallengeText}>
                                <span>127</span>
                                completados
                            </p>
                            <p className={styles.containerExperienceText}>
                                <span>1000</span>
                                xp
                            </p>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}
