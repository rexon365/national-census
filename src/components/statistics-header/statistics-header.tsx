import classNames from 'classnames';
import styles from './statistics-header.module.scss';

export interface StatisticsHeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const StatisticsHeader = ({ className }: StatisticsHeaderProps) => {
    return <div className={classNames(styles.root, className)}>
        <h1 className={styles['recent-statistics-h1']}>Recent Statistics</h1></div>;
};
