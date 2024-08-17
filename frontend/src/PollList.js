export default function PollList({data}) {
  return (
    <ul>
      {data.map(poll => <li key={poll}>{poll}</li>)}
    </ul>
  );
}
