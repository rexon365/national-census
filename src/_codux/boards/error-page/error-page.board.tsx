import { createBoard } from '@wixc3/react-board';
import { ErrorPage } from '../../../components/error-page/error-page';

export default createBoard({
    name: 'ErrorPage',
    Board: () => <ErrorPage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1098,
        windowHeight: 688
    }
});
