// src/components/Header.tsx

// A very small header component that introduces the site
export default function Header() {
  return (
    <header style={{ marginBottom: "1.5rem" }}>
      {/* Main title */}
      <h1>College Basketball Teams</h1>

      {/* Short description */}
      <p>
        A simple site that lists college basketball teams.  This header is its
        own component so it can be reused or changed easily.
      </p>
    </header>
  );
}