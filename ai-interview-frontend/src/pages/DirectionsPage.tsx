const DirectionsPage = () => {
  const mockDirections = [
    "Backend (Python, FastAPI)",
    "Frontend (React, TypeScript)",
    "Data Science",
    "DevOps / SRE",
    "Mobile (Kotlin / Swift)",
  ];

  return (
    <section className="page-wrapper">
      <div className="page-content">
        <h2>Список направлений</h2>
        <p className="page-subtitle">
          Выберите направление, по которому хотите пройти техническое интервью.
        </p>

        <ol className="directions-list-numbered">
          {mockDirections.map((d, i) => (
            <li key={i} className="directions-item-numbered">
              {d}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default DirectionsPage;
