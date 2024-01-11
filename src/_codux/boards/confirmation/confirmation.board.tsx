import { createBoard } from '@wixc3/react-board';
import { Confirmation } from '../../../components/confirmation/confirmation';

export default createBoard({
    name: 'Confirmation',
    Board: () => <Confirmation />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 766
    }
});
