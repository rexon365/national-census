import { createBoard } from '@wixc3/react-board';
import { StatisticsHeader } from '../../../components/statistics-header/statistics-header';
import StatisticsHeader_module from '../../../components/statistics-header/statistics-header.module.scss';

export default createBoard({
    name: 'StatisticsHeader',
    Board: () => <StatisticsHeader className={StatisticsHeader_module['recent-statistics-h1']} />,
    isSnippet: true,
});
