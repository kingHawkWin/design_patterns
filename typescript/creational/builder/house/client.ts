import {House} from "./house";

export function client(house: House) {
  console.log(house.location)
  console.log(`￥${house.price}`)
  console.log(`${house.area} m2`)
  console.log(`￥${house.total}`)
  console.log(`${house.level} 层`)
  console.log(`${house.bedRoom} 个卧室`)
  console.log(`${house.restRoom} 个卫生间`)
  console.log(`${house.isBalcony ? '有' : '没有'} 阳台`)
  console.log(`${house.isDuplex ? '是' : '不是'} 复式`)
  console.log(`${house.isVilla ? '别墅' : '普通住宅'}`)
  console.log(`${house.isPool ? '带泳池' : ''}`)
  console.log(`${house.isPlants ? '带绿化': ''}`)
}
