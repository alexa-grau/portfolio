function Circle(args) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={args.color} className="bi bi-circle-fill" viewBox="0 0 16 16" style={{marginRight: "0.25rem"}}>
        <circle cx="8" cy="8" r="8"/>
    </svg>
  );
}

export default Circle;