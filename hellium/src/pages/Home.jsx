import { useState, useEffect } from "react";
import { fetchElectionResults } from "../utils/api";

function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      const data = await fetchElectionResults();
      console.log("Fetched Election Results:", data);
      if (data) setResults(data);
    };

    getResults();
  }, []);

  return (
    <div>
      <h1>Election Results</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {result.candidate ? result.candidate : "Unknown Candidate"}:{" "}
              {result.votes !== undefined ? result.votes : 0} votes
              {/* If a 'start' property exists, display it safely */}
              {result.start !== undefined && (
                <span> (Start: {result.start})</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
}

export default Home;
