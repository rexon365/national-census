import classNames from 'classnames';
import styles from './ticket-card.module.scss';

export interface TicketCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TicketCard = ({ className }: TicketCardProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.contain}>
            <div className={styles.top}>
                <img src="https://admin.pixelstrap.com/zeta/assets/images/side-bar.png" alt="" className={styles.image} />
            </div>
            <div className={styles.bottom}>
                <h4 className={styles.h4}>Need Help?</h4>
                <p>Raise ticket at:</p>
                <p className={styles.email}>support@censusportal.com</p>
                <button className={styles.button}>Contact Us</button>
            </div>
        </div>
    </div>;
};
