import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return <div className={classNames(styles.root, className)}>
        <header className={styles.root}>
            <div className={styles['div-logo']}>
                <h1 className={styles['logo-text-1']}>
                    <span className={styles['logo-text-2']}>Census</span>Portal</h1></div>
            <nav className={styles['nav-menu']}><a href="/home" className={styles['a-menu']}>Home</a><a href="/projects" className={styles['a-menu']}>News</a><a href="/about" className={styles['a-menu']}>About</a><a href="/contact" className={styles['a-menu']}>Contact Us</a></nav>
            <button className={styles['register-now']}>Register Now</button></header>
    </div>;

};
