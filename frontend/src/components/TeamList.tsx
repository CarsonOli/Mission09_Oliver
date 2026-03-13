
import TeamCard, { type Team } from "./TeamCard";

type Props = {
  teams: Team[];
};

export default function TeamList({ teams }: Props) {
  return (
    <section>
      {/* A simple heading for the list */}
      <h3 style={{ textAlign: "left" }}>All Teams</h3>

      {/* Map over the array and render a card for each team */}
      <div>
        {teams.map((t) => (
          // key should be unique — tid is a good choice
          <TeamCard key={t.tid} team={t} />
        ))}
      </div>
    </section>
  );
}