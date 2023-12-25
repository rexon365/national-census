import classNames from 'classnames';
import styles from './banner.module.scss';
import { Button } from '../button/button';
import { ButtonInactive } from '../button-inactive/button-inactive';
import { CounterBanner } from '../counter-banner/counter-banner';
import { BannerImage } from '../banner-image/banner-image';

export interface BannerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */



export const Banner = ({ className }: BannerProps) => {
    return <div className={styles.root}>
        <div className={styles.bdiv1}>
            <h1 className={styles['banner-title']}>The National Online Census Portal<span className={styles['banner-subtitle']}>Your participation matters. Make a difference today by registering for the national census.</span></h1>
            <div className={styles['div-btn-banner']}>
                <Button />
                <ButtonInactive /></div>
            <br />
            <div className={styles['div-counter-banner']}>
                <CounterBanner />
            </div></div>
        <div className={styles.bdiv2}>
            <BannerImage />
        </div>
    </div>;
};
