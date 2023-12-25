import classNames from 'classnames';
import styles from './banner-image.module.scss';

export interface BannerImageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BannerImage = ({ className }: BannerImageProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['img-div-bg']}>
            <img src="./images/banner-image.png" alt="" className={styles['bn-img']} />
        </div>
    </div>;
};
