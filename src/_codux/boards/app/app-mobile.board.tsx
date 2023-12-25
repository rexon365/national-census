import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App (mobile)',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 414,
        windowHeight: 896,
        canvasHeight: 899
    }
});
