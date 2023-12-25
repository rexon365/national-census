import classNames from 'classnames';
import styles from './testimonials.module.scss';
import { TestimonialCard } from '../testimonial-card/testimonial-card';

export interface TestimonialsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Testimonials = ({ className }: TestimonialsProps) => {
    return <div className={classNames(styles.root, className)}>
        <h1 className={styles.h1tag}>User Experiences</h1>
        <p className={styles.ptag}>Checkout how our reliable and updated census data is helping out users around the country</p>
        <div className={styles['div-testimonial']}>
            <TestimonialCard />
        </div>
    </div>;
};
