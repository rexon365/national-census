import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 2196,
        canvasHeight: 790,
        windowWidth: 1592,
        windowHeight: 1669
    }
});
