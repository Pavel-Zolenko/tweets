import { useEffect , useState} from "react";
import UserItem from '../UserItem/UserItem';
import Skeleton from '../Skeleton/Skeleton';
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
    const [filter, setFilter] = useState('show all');
        
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

    const onFilterChange = event => {
        setFilter(event.target.value);
    };

    const showFilteredTweets = () => {
        if (filter === 'follow') {
            return dataUser.filter(tweet => tweet.following === false);
        } else if (filter === 'followings') {
            return dataUser.filter(tweet => tweet.following === true);
        } else {
            return dataUser;
        }
    };

    const showFilteredTweet = showFilteredTweets();
    
    const onUpdate = (id, isFollowing) => {
        setDataUser((prevUsers) =>
            prevUsers.map((user) =>
                user.id === id? { ...user, following: isFollowing } : user
            )
        );       
    };

    
    
    return (
        <>
            
            <div className={css.container}>
                
                <BackLink to={backLinkHref}> <HiArrowCircleLeft size="24" /> Back to Home</BackLink>
                <label className={css.label}>
                    Filter tweets:
                    <select value={filter} onChange={onFilterChange} className={css.select}>
                        <option value="show all">show all</option>
                        <option value="follow">follow</option>
                        <option value="followings">followings</option>
                    </select>
                </label>


                {isLoading && <ul className={css.listItems}>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </ul>}
        
                {!isLoading && (
                    <>
                        <ul className={css.listItems} >
                            {showFilteredTweet.slice(0, visible).map(({ id, tweets, followers, avatar, following }) => (
                                <UserItem key={id} id={id} tweets={tweets} followers={followers} avatar={avatar} following={following} onUpdate={onUpdate} isLoading={isLoading} />
                            ))}
                        </ul>

                        {visible < dataUser.length && <button onClick={showMoreItems} type="button" className={css.btnLoadMore}>Load More</button>}
                        {visible >= dataUser.length && <button onClick={showMoreItems} type="button" disabled className={css.btnDisabled}>Load More</button>}
                    </>
                )}
            </div>
           
        </>
    );
};

export default UserList;
