import { createBoard } from '@wixc3/react-board';
import { Testimonials } from '../../../components/testimonials/testimonials';

export default createBoard({
    name: 'Testimonials',
    Board: () => <Testimonials />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1378,
        canvasWidth: 1422
    }
});
