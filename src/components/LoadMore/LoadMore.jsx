import css from './LoadMore.module.css';


export const LoadMore = () => { 
    const showMoreItems = () => { 
        console.log('bebebe')
    }

    return (
        <button onClick={showMoreItems} type="button" className={css.btn }>LoadMore</button>
    )
}