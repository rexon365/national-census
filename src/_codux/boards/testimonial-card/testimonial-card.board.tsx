import { createBoard } from '@wixc3/react-board';
import { TestimonialCard } from '../../../components/testimonial-card/testimonial-card';

export default createBoard({
    name: 'TestimonialCard',
    Board: () => <TestimonialCard />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1204,
        windowWidth: 1270
    }
});
