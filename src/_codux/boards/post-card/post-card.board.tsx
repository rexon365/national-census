import { createBoard } from '@wixc3/react-board';
import { PostCard } from '../../../components/post-card/post-card';

export default createBoard({
    name: 'PostCard',
    Board: () => <PostCard />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1278,
        canvasWidth: 1280
    }
});
