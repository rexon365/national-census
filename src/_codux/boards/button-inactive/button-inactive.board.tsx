import { createBoard } from '@wixc3/react-board';
import { ButtonInactive } from '../../../components/button-inactive/button-inactive';

export default createBoard({
    name: 'ButtonInactive',
    Board: () => <ButtonInactive />,
    isSnippet: true,
});
