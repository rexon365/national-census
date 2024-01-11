import { createBoard } from '@wixc3/react-board';
import { ProfileStatus } from '../../../components/profile-status/profile-status';

export default createBoard({
    name: 'ProfileStatus',
    Board: () => <ProfileStatus />,
    isSnippet: true,
});
