import { createBoard } from '@wixc3/react-board';
import { WelcomeCard } from '../../../components/welcome-card/welcome-card';

export default createBoard({
    name: 'WelcomeCard',
    Board: () => <WelcomeCard />,
    isSnippet: true,
});
