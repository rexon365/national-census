import { createBoard } from '@wixc3/react-board';
import { CircleImages } from '../../../components/circle-images/circle-images';

export default createBoard({
    name: 'CircleImages',
    Board: () => <CircleImages />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1192,
        canvasWidth: 626
    }
});
