import { createBoard } from '@wixc3/react-board';
import { AgeVerification } from '../../../components/age-verification/age-verification';

export default createBoard({
    name: 'AgeVerification',
    Board: () => <AgeVerification />,
    isSnippet: true,
});
