import { createBoard } from '@wixc3/react-board';
import { CensusForm } from '../../../components/census-form/census-form';
import CensusForm_module from '../../../components/census-form/census-form.module.scss';

export default createBoard({
    name: 'CensusForm',
    Board: () => <CensusForm className={CensusForm_module.sbt} />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 999
    }
});
