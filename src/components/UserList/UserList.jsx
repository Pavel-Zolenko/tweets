
import { useEffect , useState} from "react";
import axios from "axios";
import css from './UserList.module.css';
import { UserItem } from '../UserItem/UserItem';
import { LoadMore } from '../LoadMore/LoadMore';

axios.defaults.baseURL = "https://648994ba5fa58521caafdd4d.mockapi.io";

export const UserList = () => {
    const [dataUser, setDataUser] = useState([]);
    const [visible, setVisible] = useState(3);

    const userFetch = async () => {
        try {
            const response = await axios.get("/users");
            return response.data;
        } catch (e) {
            return console.log(e);
        }
    };
    
    useEffect(() => {
        userFetch().then(data => {
            setDataUser(data)
        }).catch(error => console.log(error))
    }, []);
    
    
    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 3)
    };

    
    return (
        <div className={css.container}>
            <ul
                className={css.listItems}
            >
                {dataUser.slice(0, visible).map(({ id, tweets, followers, avatar, following }) => (
                    <UserItem key={id} id={id} tweets={tweets} followers={followers} avatar={avatar} following={following} />
                ))}
            </ul>
            { visible < dataUser.length &&  <button onClick={showMoreItems} type="button" className={css.btnLoadMore}>LoadMore</button>}
            { visible >= dataUser.length && <button onClick={showMoreItems} type="button" disabled className={css.btnDisabled}>LoadMore</button>  }
        </div>
    );
};


