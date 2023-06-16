import css from './Home.module.css';
import image from '../../images/follow.png'

const Home = () => {
    return (
        <div className={ css.container}>
            <h1>Welcome </h1> 
            <img src={image } alt="logo" />
            
        </div>
    );
};

export default Home;