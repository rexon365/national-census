import classNames from 'classnames';
import styles from './why-us.module.scss';
import { OurFeatures } from '../our-features/our-features';

export interface WhyUsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const WhyUs = ({ className }: WhyUsProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['div-header']}>
            <h5 className={styles.h5}>Why Choose Us</h5>
            <h1 className={styles.h1}>Our Merits: Making Us Your Trusted Choice </h1>
        </div>
        <div>
            <OurFeatures />
        </div>
    </div>;
};
