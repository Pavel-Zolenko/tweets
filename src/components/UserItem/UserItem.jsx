
import css from './UserItem.module.css';
import image from '../../images/picture1.png';
import axios from "axios";


export const UserItem = ({ id, tweets, followers, avatar }) => {
   
   

    const userUpdate = async ({ id, followers }) => {
        try {
            
            const response = await axios.patch(`/users/:${id}`, {followers}  );
            return response.data;
        } catch (e) {
            return console.log(e);
        }
    }

    const handleUpdate = (id, followers) => {
        const incrFollowers = followers + 1;
        // console.log({id, followers: incrFollowers })
         userUpdate({id, followers: incrFollowers}) 
    }

    
    return (
        <div className={css.container}>
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
                    <p className={css.text}> {tweets } tweets</p>
                    <p className={css.text}> {followers } Followers</p>
                </div>
                <button  onClick={() => handleUpdate(id, followers)} type='button' className={css.btn}>FOLLOW</button>
            </div>
        </div>
    );
};


