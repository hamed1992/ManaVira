import React , {useContext} from 'react'
import { basketDispatch } from './../components/layout/Layout'
function useBasketDispatch() {
    return useContext(basketDispatch)
}

export {useBasketDispatch}
