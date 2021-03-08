import Head from 'next/head';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
    return (
        <div className={styles.containerLogin}>
            <Head>
                <title>Login | move.it</title>
            </Head>
            <main>
                <div className={styles.containerLoginLogo}>
                    <img src="/simbolo-moveit.svg" alt="Logo moveit" />
                </div>
                <div className={styles.containerLoginRight}>
                    <div className={styles.logoLeft}>
                        <img src="/Logo-full-moveit.svg" alt="Logo moveit" />
                    </div>

                    <div className={styles.containerTitle}>
                        <h1>Bem-vindo</h1>
                        <div>
                            <img src="/Github.svg" alt="Github logo" />
                            <p>Faça login com seu Github para começar</p>
                        </div>
                    </div>

                    <form action="/home">
                        <div>
                            <input
                                type="text"
                                name="userGithub"
                                id="userGithub"
                                placeholder="Digite seu username"
                            />
                        </div>
                        <button type="submit">
                            <img src="/Vector-right.svg" alt="Seta para direita" />
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}