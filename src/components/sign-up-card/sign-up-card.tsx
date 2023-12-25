import classNames from 'classnames';
import styles from './sign-up-card.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export interface SignUpCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SignUpCard = ({ className }: SignUpCardProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['card-div']}>
            <div className={styles['div-title']}>
                <h2>Sign up to Census Portal</h2>
                <p className={styles.subtitle}>The Census Bureau collects critical demographic information nationwide.</p>
            </div>
            <div className={styles['div-inputs']}>
                <form className={styles.form}>
                    <label className={styles.label}>Username<br />
                        <input type="text" name="username" placeholder="Enter your username" className={styles.input} />
                    </label>
                    <br />
                    <label className={styles.label}>Email<br />
                        <input type="email" name="email" placeholder="Enter your email" className={styles.input} />
                    </label>
                    <br />
                    <label className={styles.label}>Password<br />
                        <input type="password" name="password" placeholder="Enter your password" className={styles.input} />
                        <FiEyeOff className={styles.eye} />
                    </label>
                    <br />
                    <label className={styles.label}>Confirm Password<br />
                        <input type="password" name="confirmPassword" placeholder="Confirm your password" className={styles.input} />
                    </label>
                    <br />
                    <div className={styles['div-btn']}>
                        <input type="submit" value="Sign Up" className={styles['input-btn']} />
                    </div>
                    <div className={styles.redirect}>
                        <p>Already have an account?</p>
                        <a href="/" className={styles['link-to-login']}>Sign In </a>
                    </div>
                </form>
            </div>
        </div>
    </div>;
};
