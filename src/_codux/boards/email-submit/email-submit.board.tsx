import { createBoard } from '@wixc3/react-board';
import { EmailSubmit } from '../../../components/email-submit/email-submit';

export default createBoard({
    name: 'EmailSubmit',
    Board: () => <EmailSubmit />,
    isSnippet: true,
});
