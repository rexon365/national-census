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
            <img src="https://img.freepik.com/free-vector/group-people-jeans-shirts_52683-34818.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.2038404149.1703700836&amp;semt=sph" alt="" className={styles['bn-img']} />
        </div>
    </div>;
};
