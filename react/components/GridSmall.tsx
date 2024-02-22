import React from 'react'
import { GridSmallSchema } from '../typings/Grid';
import styles from './styles.css'

const GridSmall = ({ elementOne, elementTwo }: GridSmallSchema) => {
    return <div className={styles.grid__small}>
        {elementOne}
        {elementTwo}
    </div>
}

export default GridSmall;