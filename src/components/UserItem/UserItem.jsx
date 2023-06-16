
import { useState } from 'react';
import axios from "axios";
import css from './UserItem.module.css';
import image from '../../images/picture1.png';
import logo from '../../images/logo.png';


const UserItem = ({ id, tweets, followers, avatar, following }) => {
    const [follower, setFollower] = useState(followers);
    const [isFollowing, setIsFollowing] = useState(following);

    const formatNunber = new Intl.NumberFormat('en-US').format(follower)

    const userUpdate = async ({ id, followers, following }) => {
        try {
            const response = await axios.put(`/users/${id}`, { followers, following });
            return response.data;
        } catch (e) {
            return console.log(e);
        }
    };

    const handleUpdate = (id, follower, isFollowing) => {
        if (isFollowing) {

            const decrFollowers = follower - 1;
            setFollower(decrFollowers)
            setIsFollowing(false)
            userUpdate({ id, followers: decrFollowers, following: false })
        } else {
            const incrFollowers = follower + 1;
            setFollower(incrFollowers)
            setIsFollowing(true)
            userUpdate({ id, followers: incrFollowers, following: true })
        }
    };

       
    return (
        <li className={css.container}>
            <img src={logo} alt={'question'} className={css.logo} />
            <div className={css.containerImg}>
                <img src={image} alt={'question'} className={css.img} />
            </div>
            <div className={css.border}>
                <div className={css.circle}>
                    <img src={avatar} alt={'avatar'} className={css.avatar} />
                </div>
            </div>
          
            <div className={css.containerContent}>
                <div className={css.wrarText}>
                    <p className={css.text}> {tweets} tweets</p>
                    <p className={css.text}> {formatNunber} Followers</p>
                </div>
                {!isFollowing && <button onClick={() => handleUpdate(id, follower, isFollowing)} type='button' className={css.btn}>Follow</button>}
                {isFollowing && <button onClick={() => handleUpdate(id, follower, isFollowing)} type='button' className={css.btnFollowing} >Following</button>}
                 
            </div>
        </li>
    );
};


export default UserItem;


