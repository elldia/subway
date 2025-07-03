function Item({...props}){
    return(<ul>
        <li><img src={props.src} alt="" /></li>
        <li>주문메뉴명 : {props.name}</li>
        <li>빵 : {props.bread}</li>
        <li>치즈 : {props.cheese}</li>
        <li>고기 : {props.meats}</li>
        <li>야채 : {props.veggies}</li>
        <li>소스 : {props.sauces}</li>
    </ul>)
}
export default Item;