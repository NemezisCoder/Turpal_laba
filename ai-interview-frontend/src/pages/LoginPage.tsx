const LoginPage = () => {
  return (
    <section className="auth-wrapper">
      <div className="auth-card">
        <h2>Вход</h2>
        <form className="form">
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

export default LoginPage;
