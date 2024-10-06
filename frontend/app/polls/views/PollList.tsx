export default function PollList({ data }: { data: string[] }) {
  return (
    <ul>
      {data.map((poll) => (
        <li key={poll}>{poll}</li>
      ))}
    </ul>
  );
}
