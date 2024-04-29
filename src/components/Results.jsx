import React from "react";

export const Results = ({ results }) => {
  console.log(results);
  return (
    <div>
      {results.map((result) => {
        return (
          <div key={result.id}>
            <h2>{result.original_title}</h2>
          </div>
        );
      })}
    </div>
  );
};