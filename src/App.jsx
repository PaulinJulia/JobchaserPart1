//import { useState } from 'react'
import "./App.css";
import { jobs } from "./jobs.jsx";

function App() {
  const numJobs = jobs.length
  return (
    <div>
      <Header />
      <Search />
      <main>
        {numJobs > 0 ? (
          <ul className="job-list">
            {jobs.map((job) => {
              return (
                <Card
                  key={job.id}
                  position={job.position}
                  location={job.location}
                  contract={job.contract}
                  logo={job.logo}
                />
              );
            })}
          </ul>
        ) : (
          <p>No jobs are available at the moment</p>
        )}
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
    <form className="search">
      <input type="text" placeholder="Search" />
      <button id="search-button">Search</button>
    </form>
  );
}

function Card({ position, location, contract, logo }) {
  // if ((description, city)) {
  //   console.log(description, city);
  // }
  return (
    <article className="card" style={{ borderRadius: "20px" }}>
      <h2 className="card-title">{position}</h2>
      <div className="card-info">
        <p>{location}</p>
        <p>{contract}</p>
      </div>
      <img className="card-logo" alt="logo" src={logo} />
    </article>
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
