import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewPollForm from './NewPollForm';

describe('<NewPollForm />', () => {
  describe('clicking the send button', () => {
    let sendHandler;

    async function sendPoll() {
      sendHandler = jest.fn().mockName('sendHandler');

      render(<NewPollForm onSend={sendHandler} />);

      await userEvent.type(
        screen.getByTestId('pollText'),
        'New poll',
      );

      userEvent.click(screen.getByTestId('sendButton'));
    }

    it('clears the text field', async () => {
      await sendPoll();
      expect(screen.getByTestId('pollText').value).toEqual('');
    });
  });
});
