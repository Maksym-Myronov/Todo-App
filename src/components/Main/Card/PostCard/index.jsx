import { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { fetchTodo } from '../../../../reducers/todosSlice';
import Input from '../Input';
//Images
import Edit from '../../../../assets/images/Edit Square.svg';
import Trash from '../../../../assets/images/Vector (1).svg';
//Styles
import styles from './index.module.scss';

const PostCard = ({ title, completed}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])



    return (
        <div className={styles.card}>
            <div className={styles.card__container}>
                <div className={styles.card__checked}>
                    <Input 
                        value={completed}
                        // onChange={handleChange} 
                    />
                    <p style={(completed) ? {textDecoration: 'line-through', color: 'blue'} : null}>
                        {title}
                    </p>
                </div>
                <div className={styles.card__edit}>
                    <div className={styles.card__data}>
                        <p>May 20, 2020</p>
                    </div>
                    <div className={styles.card__btn}>
                        <button className={styles.card__button} ><img src={Edit} alt="edit" /></button>
                        <button className={styles.card__buttons} ><img src={Trash} alt="trash" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard 
