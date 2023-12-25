import '../../index.css';
import { createBoard } from '@wixc3/react-board';
import { SignUpCard } from '../../components/sign-up-card/sign-up-card';

export default createBoard({
    name: 'Sign up',
    Board: () => <div className="root">
        <div className="main">
            <div className="div1">
                <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className="image" />
            </div>
            <div className="div2">
                <SignUpCard />
            </div>
        </div>
    </div>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1644,
        windowWidth: 1636,
        windowHeight: 1243
    }
});
