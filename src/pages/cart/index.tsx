import {graphqlFetcher, QueryKeys} from "../../queryClient";
import {CartType, GET_CART} from "../../graphql/cart";
import {useQuery} from "react-query";
import CartList from "../../components/cart";
import GET_PRODUCTS, {Products} from "../../graphql/products";

const Cart = () => {
    const {data} = useQuery<CartType>(QueryKeys.CART, () =>
        graphqlFetcher(GET_CART), {staleTime: 0, cacheTime: 1000}
    )

    const cartItems = Object.values(data || {}) as CartType[]

    if(!cartItems.length) return <div>장바구니가 비었어요.</div>

    return <CartList items={cartItems} />
}
export default Cart

