import React from 'react'
import { GridBigSchema } from '../typings/Grid';
import styles from './styles.css'

const GridBig = ({ element }: GridBigSchema) => {
    return <div className={styles.grid__big}>
        {element}
    </div>
}

export default GridBig;