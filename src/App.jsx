import { useState } from "react";
import "./App.css";
import { jobs } from "./jobs.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searched = jobs.filter((job) =>
    job.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search onSearch={handleChange} searchTerm={searchTerm} />
      <main>
        <JobList jobs={searched} />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Jobchaser</h1>
    </header>
  );
}

function Search() {
  return (
    <form>
      <label htmlFor="search">Search: </label>
      <input type="text" onChange={handleChange} value={SearchTerm} />
      <button id="search-button">Search</button>
    </form>
  );
}

function JobList({ jobs }) {
  return (
    <ul className="job-list">
      {jobs.map((job) => {
        return (
          <article className="card" style={{ borderRadius: "20px" }}>
            <h2 className="card-title">{job.position}</h2>
            <div className="card-info">
              <p>{job.location}</p>
              <p>{job.contract}</p>
            </div>
            <img className="card-logo" alt="logo" src={job.logo} />
          </article>
        );
      })}
    </ul>
  );
}

function Footer() {
  return (
    <footer>
      <p>jobchaser.se</p>
    </footer>
  );
}

export default App;
