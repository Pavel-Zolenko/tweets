import { useEffect , useState} from "react";
import  UserItem  from '../UserItem/UserItem';
import css from './UserList.module.css';
import axios from "axios";


import { useLocation } from 'react-router-dom';
import { BackLink } from '../../pages/Tweets/Tweets.styled';
import { HiArrowCircleLeft } from "react-icons/hi";

axios.defaults.baseURL = "https://648994ba5fa58521caafdd4d.mockapi.io";


const UserList = () => {
    const [dataUser, setDataUser] = useState([]);
    const [visible, setVisible] = useState(3);
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    const userFetch = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get("/users");
            return response.data;
        } catch (e) {
            return console.log(e);
        } finally {
            setIsLoading(false)
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
        <>
            {!isLoading && <div className={css.container}>
                
                <BackLink to={backLinkHref}> <HiArrowCircleLeft size="24" /> Back to Home</BackLink>
               
                <ul className={css.listItems} >
                    {dataUser.slice(0, visible).map(({ id, tweets, followers, avatar, following }) => (
                        <UserItem key={id} id={id} tweets={tweets} followers={followers} avatar={avatar} following={following} />
                    ))}
                </ul>
                
                {visible < dataUser.length && <button onClick={showMoreItems} type="button" className={css.btnLoadMore}>Load More</button>}
                {visible >= dataUser.length && <button onClick={showMoreItems} type="button" disabled className={css.btnDisabled}>Load More</button>}
           
            </div>}
           
        </>
    );
};

export default UserList;
