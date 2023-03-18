import React, { createContext } from 'react'



export type ArthUser = {
    name: string
    email: string 
}


export const userContext = createContext(null)