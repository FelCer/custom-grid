import React from 'react'
import { GridSchema } from '../typings/Grid'
import GridBig from './GridBig'
import GridSmall from './GridSmall'
import styles from './styles.css'

const Grid = ({ gridType, children }: GridSchema) => {
    const gridTypeClass = `grid__${gridType}`
    return (
        <div className={styles[gridTypeClass]}>
            <GridBig element={children[0]} />
            <GridSmall
                elementOne={children[1]}
                elementTwo={children[2]}
            />
            <GridSmall
                elementOne={children[3]}
                elementTwo={children[4]}
            />
        </div>
    )
}

Grid.defaultProps = {
    gridType: 1
}

Grid.schema = {
    title: "Custom Grid",
    type: "object",
    properties: {
        gridType: {
            title: "Tipo de grilla",
            type: "number",
            enum: [
                1,
                2,
                3,
                4
            ]
        }
    }
}

export default Grid;