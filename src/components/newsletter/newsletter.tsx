import classNames from 'classnames';
import styles from './newsletter.module.scss';
import { EmailSubmit } from '../email-submit/email-submit';

export interface NewsletterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Newsletter = ({ className }: NewsletterProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.divc}>
            <div className={styles['div-elements']}>
                <h1 className={styles.h1}>Don&apos;t Miss Out on Important Updates </h1>
                <p className={styles.p}>Join our mailing list to receive the latest data trends and updates. </p>
                <EmailSubmit />
            </div>
        </div>
    </div>;
};
