import { createBoard } from '@wixc3/react-board';
import { Banner } from '../../../components/banner/banner';
import Banner_module from '../../../components/banner/banner.module.scss';

export default createBoard({
    name: 'Banner',
    Board: () => <Banner className={Banner_module['div-btn-banner']} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1464,
        windowWidth: 1766,
        windowHeight: 981,
        canvasHeight: 739
    }
});
