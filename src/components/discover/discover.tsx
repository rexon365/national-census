import classNames from 'classnames';
import styles from './discover.module.scss';

export interface DiscoverProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Discover = ({ className }: DiscoverProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['text-box-div']}>
            <h1>Discover Accurate Population Statistics Locally </h1>
            <p className={styles['p-tag']}>Census Central provides reliable, updated and detailed population statistics for your local area. From age and gender distributions to housing and employment status, we give you the numbers that matter. Our data is sourced directly from government and validated by experts, ensuring its accuracy and reliability. Dive into a rich array of visuals, custom-made for better understanding and interpretation. </p>
            <button className={styles['discover-btn']}>Check Local Statistics</button>
        </div>
        <div className={styles['div-d-img']}>
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles['d-img']} />
        </div>
    </div>;
};
