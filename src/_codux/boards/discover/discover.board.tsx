import { createBoard } from '@wixc3/react-board';
import { Discover } from '../../../components/discover/discover';

export default createBoard({
    name: 'Discover',
    Board: () => <Discover />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1353,
        windowWidth: 1356
    }
});
