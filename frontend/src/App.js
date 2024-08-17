import {useState} from 'react';
import NewPollForm from './NewPollForm';
import PollList from './PollList';

export default function App() {
  const [polls, setPolls] = useState([]);
  function handleSend(newPoll) {
    setPolls([newPoll, ...polls]);
  }

  return (
    <>
      <NewPollForm onSend={handleSend} />
      <PollList data={polls} />
    </>
  );
}
