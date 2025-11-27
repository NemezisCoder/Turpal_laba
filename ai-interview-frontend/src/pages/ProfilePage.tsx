const ProfilePage = () => {
  return (
    <section className="profile-wrapper">
      <div className="profile-card">
        <h2>О вас</h2>
        <form className="form">
          <label className="form-field">
            <span>Ваш Grade</span>
            <input type="text" placeholder="Junior/Middle/Senior" />
          </label>
          <label className="form-field">
            <span>Навыки</span>
            <input
              type="text"
              placeholder="Python, Golang, Scala, C++, Java, TypeScript, Vue, Docker..."
            />
          </label>
          <label className="form-field">
            <span>Github</span>
            <input type="url" placeholder="https://github.com/user" />
          </label>
          <label className="form-field">
            <span>Что вас интересует в нашей компании?</span>
            <input type="text" />
          </label>
          <label className="form-field">
            <span>Ваши комментарии</span>
            <input type="text" />
          </label>
          <p className="profile-note">
            В зависимости от ваших ответов, наш ИИ будет подбирать подходящие
            для вас вопросы, а вы должны будете на них ответить. Просим вас не
            врать по поводу ваших навыков, дабы ваше интервью прошло без ошибок.
          </p>
          <button type="button" className="btn btn-primary form-submit">
            Готово
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProfilePage;
