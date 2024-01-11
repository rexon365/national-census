import { createBoard } from '@wixc3/react-board';
import { BannerImage } from '../../../components/banner-image/banner-image';

export default createBoard({
    name: 'BannerImage',
    Board: () => <BannerImage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1362,
        canvasWidth: 808,
        windowHeight: 741
    }
});
