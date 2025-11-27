const RegisterPage = () => {
  return (
    <section className="auth-wrapper">
      <div className="auth-card">
        <h2>Регистрация</h2>
        <form className="form">
          <label className="form-field">
            <span>Имя</span>
            <input type="text" />
          </label>
          <label className="form-field">
            <span>Фамилия</span>
            <input type="text" />
          </label>
          <label className="form-field">
            <span>Email</span>
            <input type="email" placeholder="example@mail.ru" />
          </label>
          <label className="form-field">
            <span>Пароль</span>
            <input type="password" />
          </label>
          <button type="button" className="btn btn-primary form-submit">
            Готово
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
