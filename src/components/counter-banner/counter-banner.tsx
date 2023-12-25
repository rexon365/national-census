import classNames from 'classnames';
import styles from './counter-banner.module.scss';

export interface CounterBannerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CounterBanner = ({ className }: CounterBannerProps) => {
    return <div className={styles['div-counter']}>
        <div className={styles.div1}>
            <h1 className={styles.h1_total_population}>2000</h1>
            <h4 className={styles.h4_label}>Total Population</h4>
        </div>
        <div className={styles.div1}>
            <h1 className={styles.h1_total_male}>300</h1>
            <h4 className={styles.h4_label}>Total Male</h4>
        </div>
        <div className={styles.div1}>
            <h1 className={styles.h1_total_female}>150</h1>
            <h4 className={styles.h4_label}>Total Female</h4>
        </div>
        <div className={styles.div1}>
            <h1 className={styles.h1_taotal_under_21}>500</h1>
            <h4 className={styles.h4_label}>Total Under 21</h4>
        </div>
    </div>;
};
