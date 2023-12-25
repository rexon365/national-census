import { createBoard } from '@wixc3/react-board';
import { Qualities } from '../../../components/qualities/qualities';

export default createBoard({
    name: 'Qualities',
    Board: () => <Qualities />,
    isSnippet: true,
});
