
export type Team = {
  tid: number;
  school: string;
  name: string;   // mascot name
  city: string;
  state: string;
};

type Props = {
  team: Team;
};

// One card for a single team
export default function TeamCard({ team }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        textAlign: "left",
        maxWidth: 420,
      }}
    >
      {/* School name */}
      <h2 style={{ margin: "0 0 6px 0" }}>{team.school}</h2>

      {/* Mascot name */}
      <p style={{ margin: "0 0 6px 0" }}>
        <strong>Mascot:</strong> {team.name}
      </p>

      {/* Location */}
      <p style={{ margin: 0 }}>
        <strong>Location:</strong> {team.city}, {team.state}
      </p>
    </div>
  );
}