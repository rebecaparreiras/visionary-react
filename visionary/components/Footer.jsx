import { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerMain}>
                    {/* FOOTER LINKS */}
                    <div className={styles.evenColumns}>
                        <div className={styles.footerAbout}>
                            <h3 className={styles.footerText}>Customer Service</h3>
                            <ul aria-label="primary" role="list" className={styles.footerText}>
                                <li><a href="">Contact us</a></li>
                                <li><a href="">Shipping</a></li>
                                <li><a href="">Exchanges/Returns</a></li>
                                <li><a href="">Track Your Order</a></li>
                                <li><a href="">FAQ</a></li>
                            </ul>
                        </div>
                        <div className={styles.footerLegal}>
                            <h3 className={styles.footerText}>Legal Notice</h3>
                            <ul aria-label="primary" role="list" className={styles.footerText}>
                                <li><a href="">Terms of Use</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Cookie Policy</a></li>
                            </ul>
                        </div>
                        <div className={styles.footerSocial}>
                            <h3 className={styles.footerText}>Social Media</h3>
                            <ul aria-label="primary" role="list" className={styles.footerText}>
                                <li><a href="">Facebook</a></li>
                                <li><a href="">Instagram</a></li>
                                <li><a href="">X</a></li>
                                <li><a href="">Pinterest</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* FOOTER NEWSLETTER */}
                    <div className={styles.footerNewsletter}>
                        <h3 className={styles.footerText}>Newsletter</h3>

                        <form className={styles.form} onSubmit={e => e.preventDefault()}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" aria-label="Send">
                                    →
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* FOOTER LOGO */}
                <div className={styles.footerLogo}>
                    <h1>visionary</h1>
                </div>

                {/* FOOTER COPYRIGHT */}
                <div className={styles.footerCopyright}>
                    <p>© 2025 Visionary</p>
                    <p>All rights reserved. Visionary Co., Ltd.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;