import {render, screen, within} from '@testing-library/react';
import PollList from './PollList';

describe('<PollList />', () => {
  describe('add an entry', () => {
    const pollList = ["New poll", "Test poll"]

    render(<PollList data={pollList} />);

    const list = screen.getByTestId('pollList');

    it('adds to the list of polls', () => {
      expect(list).toMatchInlineSnapshot(`
        <ul
          data-testid="pollList"
        >
          <li>
            New poll
          </li>
          <li>
            Test poll
          </li>
        </ul>
        `)
    });
  });
});
