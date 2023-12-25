import { createBoard } from '@wixc3/react-board';
import { AccessibleData } from '../../../components/accessible-data/accessible-data';

export default createBoard({
    name: 'AccessibleData',
    Board: () => <AccessibleData />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1066
    }
});
