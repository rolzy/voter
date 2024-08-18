export default function PollList({data}) {
  return (
    <ul data-testid="pollList">
      {data.map(poll => <li key={poll}>{poll}</li>)}
    </ul>
  );
}
