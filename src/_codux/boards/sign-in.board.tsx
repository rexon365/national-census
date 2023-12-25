import '../../index.css';
import { createBoard } from '@wixc3/react-board';
import { SignInCard } from '../../components/sign-in-card/sign-in-card';

export default createBoard({
    name: 'Sign in',
    Board: () => <div className="root">
        <div className="main">
            <div className="div1">
                <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className="image" />
            </div>
            <div className="div2">
                <SignInCard />
            </div>
        </div>
    </div>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1502,
        canvasHeight: 831,
        windowWidth: 1502,
        windowHeight: 1153
    }
});
