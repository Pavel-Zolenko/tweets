import { UserList } from './UserList/UserList';
import css from './App.module.css';


export const App = () => {
  return (
    <section className={css.containerApp}>

      <UserList />
      
    </section>
  );
};
