
import css from './Skeleton.module.css';



const Skeleton = () => {
   
    return (
        
        <li className={`${css.container} ${css.shimmer}`}>
          <div className={css.skeleton}></div>  
        </li>
    );
};


export default Skeleton;


