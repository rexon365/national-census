import { createBoard } from '@wixc3/react-board';
import { WhyUs } from '../../../components/why-us/why-us';

export default createBoard({
    name: 'WhyUs',
    Board: () => <WhyUs />,
    isSnippet: true,
});
