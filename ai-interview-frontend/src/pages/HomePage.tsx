import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Добро пожаловать в нашу компанию!</h1>
        <p>
          Если вы хотите стать частью нашего коллектива, пройдите интервью с
          нашим передовым ИИ. Желаем вам удачи!
        </p>
        <button className="btn btn-primary" onClick={() => navigate("/profile")}>
          Я готов
        </button>
      </div>
    </section>
  );
};

export default HomePage;
