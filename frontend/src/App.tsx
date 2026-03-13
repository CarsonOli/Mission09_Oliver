
import Header from "./components/Header";
import TeamList from "./components/TeamList";
import teamsData from "./CollegeBasketballTeams.json";

function App() {
  // cast to any to keep things beginner-friendly and avoid TS noise
  const teams = (teamsData as any).teams as {
    tid: number;
    school: string;
    name: string;
    city: string;
    state: string;
  }[];

  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial, sans-serif" }}>
      {/* Header component */}
      <Header />

      {/* TeamList receives the teams array pulled from the JSON file */}
      <TeamList teams={teams} />
    </div>
  );
}

export default App;
