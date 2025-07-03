import Item from "./Item";
import menu1 from '../assets/images/sandwich001.jpg'
import menu2 from '../assets/images/sandwich002.jpg'

function Menu(){
    const sandwich = [{
        src:menu1,
        name:'이탈리안BMT',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    },{
        src:menu2,
        name:'에그샌드위치',
        bread:'허니 오트',
        cheese:'아메리칸 치즈',
        meats:'페퍼로니, 샬라미',
        veggies:'양상추, 토마토',
        sauces:'스위트 어니언',
    }]

    return(<>
        <h2>메뉴</h2>
        {/* <Item {...sandwich[0]} />
        <Item {...sandwich[1]} /> */}
        {/* 맵(map) 활용법(다수의 배열값 가져오기) */}
        {sandwich.map((menu, idx)=>(
            <Item key={idx} {...menu}  />
        ))}
    </>)
}
export default Menu;