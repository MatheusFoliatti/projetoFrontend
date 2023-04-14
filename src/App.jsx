import style from "./App.module.css";

export function App() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80"
          alt="Cover"
        />
        <img
          className={style.avatar}
          src="https://github.com/MatheusFoliatti.png"
          alt="Avatar"
        />
        <p className={style.p1}>Matheus Foliatti</p>
        <p className={style.p2}>Assistente em TI</p>
        <div className={style.stack}>
          <span>#JavaScript</span>
          <span>#React</span>
          <span>#ReactNative</span>
          <span>#HTML</span>
          <span>#CSS</span>
          <span>#HUAWEI</span>
        </div>
      </div>
    </div>
  );
}