function Distance({ leg }) {
  if (!leg.distance || !leg.duration) return null;
  return (
    <div>
      <p>
        This Pet Shop is <span className="highlight">{leg.distance.text}</span>{" "}
        away from your Place. That would take{" "}
        <span className="highlight">{leg.duration.text}</span> each direction.
      </p>
    </div>
  );
}
export default Distance;
