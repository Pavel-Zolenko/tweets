
import { useEffect , useState} from "react";
import axios from "axios";
import css from './UserList.module.css';
import { UserItem } from '../UserItem/UserItem';

axios.defaults.baseURL = "https://648994ba5fa58521caafdd4d.mockapi.io";

export const UserList = () => {

    const [dataUser, setDataUser] = useState([]);

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
    }, [])


    return (
        <ul
            className={css.container}
        >
            {dataUser.map(({ id, tweets, followers, avatar, following}) => (
                <UserItem key={id} id={id} tweets={tweets} followers={followers} avatar={avatar} following={ following} />
            ))}
        </ul>
    );
};


