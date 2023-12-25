import classNames from 'classnames';
import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.top}>
            <div className={styles.diva}>
                <h1 className={styles.h1}>Don&apos;t Miss the Census </h1>
            </div>
            <div className={styles.divb}>
                <p className={styles.p}>Ensure your community&apos;s resources and representation. Participate in the census today. </p>
                <button className={styles.btn}>Participate Now</button>
            </div>
        </div>
        <div className={styles['line-div']}>
            <hr className={styles.line} />
        </div>
        <br />
        <br />
        <div className={styles['div-bottom']}>
            <div className={styles['div-logo']}>
                <h2 className={styles['h2-title']}>Census<span className={styles.portal}>Portal</span>
                </h2>
                <p className={styles['p-subtitle']}>The Census Bureau collects critical demographic information nationwide. </p>
            </div>
            <div className={styles['div-menus']}>
                <div className={styles['div-menu-footer']}>
                    <nav className={styles['footer-menu']}><a href="/home" className={styles.a}>Contact Us</a><a href="/projects" className={styles.a}>Privacy Policy</a><a href="/about" className={styles.a}>Statistics</a><a href="/contact" className={styles.a}>Blog</a></nav>
                </div>
                <div className={styles['div-socials']}>
                    <nav className={styles['socials-menu']}><a href="/home" className={styles.a}>Facebook</a><a href="/projects" className={styles.a}>Instagram</a><a href="/about" className={styles.a}>Twiter</a><a href="/contact" className={styles.a}>WhatsApp</a></nav>
                </div>
            </div></div>
        <br />
        <div className={styles['div-copyright']}>
            <p className={styles['copy-right']}>©2023 Census Portal. All rights reserved </p>
        </div>
    </div>;
};
