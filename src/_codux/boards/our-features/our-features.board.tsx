import { createBoard } from '@wixc3/react-board';
import { OurFeatures } from '../../../components/our-features/our-features';

export default createBoard({
    name: 'OurFeatures',
    Board: () => <OurFeatures />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1096
    }
});
