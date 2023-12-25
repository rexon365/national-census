import { createBoard } from '@wixc3/react-board';
import { Statistics } from '../../../components/statistics/statistics';

export default createBoard({
    name: 'Statistics',
    Board: () => <Statistics />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1234
    }
});
