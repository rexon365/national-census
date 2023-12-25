import { createBoard } from '@wixc3/react-board';
import { SignUpCard } from '../../../components/sign-up-card/sign-up-card';

export default createBoard({
    name: 'SignUpCard',
    Board: () => <SignUpCard />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 552
    }
});
