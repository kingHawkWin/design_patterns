import {NormalMan} from "./normal_man";
import {Winter} from "./winter";
import {IronMan} from "./iron_man";

const normalMan = new NormalMan(177, 85, 'male')
console.log(normalMan.attributes())
console.log()
const winterMan = new Winter(normalMan)
console.log(winterMan.attributes())
console.log()
const ironMan = new IronMan(normalMan)
console.log(ironMan.attributes())
console.log()
const winterIronMan = new IronMan(winterMan)
console.log(winterIronMan.attributes())
