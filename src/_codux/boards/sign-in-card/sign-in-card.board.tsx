import { createBoard } from '@wixc3/react-board';
import { SignInCard } from '../../../components/sign-in-card/sign-in-card';

export default createBoard({
    name: 'SignInCard',
    Board: () => <SignInCard />,
    isSnippet: true,
});
