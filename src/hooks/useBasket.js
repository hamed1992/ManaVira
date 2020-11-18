import React , {useContext} from 'react'
import { basket } from './../components/layout/Layout'
function useBasket() {
    return useContext(basket)
}

export {useBasket}
