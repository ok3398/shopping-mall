import {CartType} from "../../graphql/cart";
import CartItem from "./item";
import {createRef, forwardRef, SyntheticEvent, useRef} from "react";

const CartList = ({ items}: {items: CartType[]}) => {
    const formRef = useRef<HTMLFormElement>(null)
    const checkboxRefs = items.map(() => createRef<HTMLInputElement>())

    const handleCheckboxChanged = (e: SyntheticEvent) => {
        if(!formRef.current) return
        //const checkboxes = formRef.current.querySelectorAll('.cart-item__checkbox')
        const targetInput = e.target as HTMLInputElement;
        const data = new FormData(formRef.current)
        const selectedCount = data.getAll('select-item').length
        //console.dir([...data.entries()])

        if(targetInput.classList.contains('select-all')) {
          //select-all 선택시
          const allChecked = targetInput.checked
            // checkboxes.forEach(inputElem => {
            //     inputElem.checked = allChecked
            // })
            checkboxRefs.forEach(inputElem => {
                inputElem.current!.checked = allChecked
            })

        } else {
          // 개별 아이템 선택 시
            const allChecked = selectedCount === items.length
            console.log(selectedCount)
            formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked = allChecked

        }
    }
    return (
        <form ref={formRef} onChange={handleCheckboxChanged}>
            <label><input className='select-all' name="select-all" type="checkbox"/>전체선택</label>
            <ul className="cart">
                {items.map((item,i) => <CartItem {...item} key={item.id} ref={checkboxRefs[i]}/>)}
            </ul>
        </form>
    )
}

export default CartList
