import classNames from 'classnames';
import styles from './circle-images.module.scss';

export interface CircleImagesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CircleImages = ({ className }: CircleImagesProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['div-rimages']}>
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={classNames(styles['round-img1'], styles['round-images'])} />
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={classNames(styles['round-img2'], styles['round-images'])} />
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={classNames(styles['round-img3'], styles['round-images'])} />
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={classNames(styles['round-img4'], styles['round-images'])} />
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={classNames(styles['round-img5'], styles['round-images'])} /></div>
    </div>;
};
