import { createBoard } from '@wixc3/react-board';
import { CounterBanner } from '../../../components/counter-banner/counter-banner';

export default createBoard({
    name: 'CounterBanner',
    Board: () => <CounterBanner />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 598
    }
});
