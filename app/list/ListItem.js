'use client';

import { useSnapshot } from 'valtio';
import listStore from '../store/list';

export default function ListItem({ item, idx }) {
    const { count } = useSnapshot(listStore);

    const onPlusClick = () => {
        listStore.count++;
    };

    return (
        <div>
            <img src={`/images/food${idx}.png`} alt='음식' />
            <h3>{item}</h3>
            <span>{count}</span>
            <button onClick={onPlusClick}>+</button>
        </div>
    );
}
