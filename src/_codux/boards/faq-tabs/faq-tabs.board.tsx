import { createBoard } from '@wixc3/react-board';
import { FaqTabs } from '../../../components/faq-tabs/faq-tabs';

export default createBoard({
    name: 'FaqTabs',
    Board: () => <FaqTabs />,
    isSnippet: true,
});
