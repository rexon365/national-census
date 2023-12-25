import classNames from 'classnames';
import styles from './qualities.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBahai, faCheck, faCertificate } from '@fortawesome/free-solid-svg-icons';

export interface QualitiesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Qualities = ({ className }: QualitiesProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['div-icon-h4']}>
            <div className={styles['div-icon']}>
                <FontAwesomeIcon icon={faBahai} className={styles.icon1} />
            </div>
            <div className={styles['h4-p']}>
                <h4 className={styles.h4}>Unmatched Precision </h4>
                <p className={styles.p}>Count on our unmatched precision that guarantees a meticulous population count. </p>
            </div></div>
        <div className={styles['div-icon-h4']}>
            <div className={styles['div-icon2']}>
                <FontAwesomeIcon icon={faBahai} className={styles.icon2} />
            </div>
            <div className={styles['h4-p']}>
                <h4 className={styles.h4}>Data Diversity </h4>
                <p className={styles.p}>Delve into a diverse spectrum of available statistical data. </p>
            </div></div>
        <div className={styles['div-icon-h4']}>
            <div className={styles['div-icon3']}>
                <FontAwesomeIcon icon={faBahai} className={styles.icon3} />
            </div>
            <div className={styles['h4-p']}>
                <h4 className={styles.h4}>In-Depth Insights </h4>
                <p className={styles.p}>Our analyzations offer you insightful views into demographic trends. </p>
            </div></div>
    </div>;
};
