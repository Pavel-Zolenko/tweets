import { UserList } from './UserList/UserList';
import css from './App.module.css';


export const App = () => {
  return (
    <div className={css.container}>

      <UserList />
      
    </div>
  );
};
