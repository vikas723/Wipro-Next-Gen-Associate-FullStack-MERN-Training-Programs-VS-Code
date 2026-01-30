import React from "react";

const StatsCard = React.memo(({ title, value, lastUpdated }) => {
  console.log(`${title} rendered`);

  return (
    <div className="card p-3 m-2">
      <h5>{title}</h5>
      <p>{value}</p>
      <small>{lastUpdated}</small>
    </div>
  );
});

export default StatsCard;
