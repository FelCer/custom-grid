import { ReactNode } from "react"

export type GridSchema = {
    gridType: number
    children: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode]
}

export type GridBigSchema = {
    element: ReactNode
}

export type GridSmallSchema = {
    elementOne: ReactNode,
    elementTwo: ReactNode
}