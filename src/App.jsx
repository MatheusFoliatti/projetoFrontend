import style from "./App.module.css";

import { CardPerson } from "./components/CardPerson";

export function App() {

  const listStack = [{'JavaScript'}, {'React'}, {'ReactNative'}, {'HTML'}, {'CSS'}, {'HUAWEI'}]

  return (
    <div className={style.container}>
      <CardPerson 
      cover='https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80' 
      avatar='https://github.com/MatheusFoliatti.png' 
      name='Matheus Foliatti'
      office='Assistende de TI'
      stacks={listStack}
      />
    </div>
  );
}