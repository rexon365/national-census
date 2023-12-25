import classNames from 'classnames';
import styles from './statistics.module.scss';

export interface StatisticsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Statistics = ({ className }: StatisticsProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['div-statistics']}>
            <h2>0</h2>
            <h3>Total Population</h3></div>
        <div className={styles['div-statistics']}>
            <h2>0</h2>
            <h3>Total Male</h3>
        </div>
        <div className={styles['div-statistics']}>
            <h2>0</h2>
            <h3>Total Female</h3>
        </div>
        <div className={styles['div-statistics']}>
            <h2>0</h2>
            <h3>Total Under 21</h3>
        </div>
        <div className={styles['div-statistics']}>
            <h2>0</h2>
            <h3>Total Over 60</h3>
        </div>
    </div>;
};
