import classNames from 'classnames';
import styles from './sign-in-card.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export interface SignInCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SignInCard = ({ className }: SignInCardProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['div-content']}>
            <div className={styles['div-card']}>
                <div>
                    <h2>Sign in to Census Portal</h2>
                    <div className={styles['div-redirect']}>
                        <p>Don&apos;t have an account?</p>
                        <a href="/" className={styles['a-redirect']}>Sign up</a>
                    </div>
                </div></div>
            <div>
                <hr className={styles.line} />
            </div>
            <div className={styles['div-forms']}>
                <form className={styles.form}>
                    <label className={styles.label}>Username or Email<br />
                        <input type="text" name="usernameOrEmail" placeholder="Enter your username or email" className={styles.input} />
                    </label>
                    <br />
                    <label className={styles.label}>Password<br />
                        <input type="password" name="password" placeholder="Enter your password" className={styles.input} />
                        <FiEyeOff className={styles.eye} />
                    </label>
                    <br />
                    <div className={styles['div-btn']}>
                        <input type="submit" value="Sign In" className={styles['input-btn']} />
                    </div></form>
            </div>
        </div></div>;
};
