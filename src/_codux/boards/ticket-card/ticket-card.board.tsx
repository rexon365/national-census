import { createBoard } from '@wixc3/react-board';
import { TicketCard } from '../../../components/ticket-card/ticket-card';

export default createBoard({
    name: 'TicketCard',
    Board: () => <TicketCard />,
    isSnippet: true,
});
