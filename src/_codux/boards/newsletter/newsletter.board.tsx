import { createBoard } from '@wixc3/react-board';
import { Newsletter } from '../../../components/newsletter/newsletter';

export default createBoard({
    name: 'Newsletter',
    Board: () => <Newsletter />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 919
    }
});
