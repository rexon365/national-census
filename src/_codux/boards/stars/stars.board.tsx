import { createBoard } from '@wixc3/react-board';
import { Stars } from '../../../components/stars/stars';

export default createBoard({
    name: 'Stars',
    Board: () => <Stars />,
    isSnippet: true,
});
