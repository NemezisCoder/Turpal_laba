# AI Interview Frontend

Фронтенд-часть проекта **«ИИ-платформа для прохождения технических собеседований»**.

---

## Технологии

* React 18
* TypeScript
* Vite
* React Router v6
* CSS (без UI-библиотек)

---

## Структура проекта

```
src/
  main.tsx
  App.tsx
  index.css

  layouts/
    MainLayout.tsx

  components/
    Navbar.tsx
    Footer.tsx

  pages/
    HomePage.tsx
    LoginPage.tsx
    RegisterPage.tsx
    ProfilePage.tsx
    DirectionsPage.tsx
    AboutPage.tsx
```

---

## Маршруты

| Путь          | Описание           |
| ------------- | ------------------ |
| `/`           | Главная            |
| `/login`      | Вход               |
| `/register`   | Регистрация        |
| `/profile`    | Раздел «О вас»     |
| `/directions` | Список направлений |
| `/about`      | О нас              |

Все страницы выводятся через общий layout (`Navbar`, `Footer` и `<Outlet />`).

---

## Реализованные компоненты

* Навигационная панель
* Главная страница
* Формы входа и регистрации
* Страница профиля
* Список направлений
* Страница «О нас»

Верстка выполнена в соответствии с макетом Figma.

---

## Запуск

```bash
npm install
npm run dev
```

Открыть в браузере: `http://localhost:5173/`
