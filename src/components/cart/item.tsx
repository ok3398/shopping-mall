import {CartType} from "../../graphql/cart";

const CartItem = ({
  id,
  imageUrl,
  price,
  title,
  amount
}: CartType) => (
    <li>
        {id} {imageUrl}
    </li>
)

export default CartItem
