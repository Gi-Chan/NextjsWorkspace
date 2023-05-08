import { age, name } from './data.js'
import 하이 from './hello.js'
export default function Cart() {
  return (
    <div>
      <하이/>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명 {age}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}