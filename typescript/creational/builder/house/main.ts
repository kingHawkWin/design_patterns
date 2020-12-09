import {client} from "./client";
import {China} from "./china";
import {Director} from "./director";

const director = new Director()

const dongfangyuejuBuilder = new China()
director.setBuilder(dongfangyuejuBuilder)
director.dongfangyueju()
const dongfangyueju = dongfangyuejuBuilder.getHouse()
client(dongfangyueju)

const jingyaoBuilder = new China()
director.setBuilder(jingyaoBuilder)
director.jingyao()
const jingyao = jingyaoBuilder.getHouse()
client(jingyao)

const tangchenyipinBuilder = new China()
director.setBuilder(tangchenyipinBuilder)
director.tangchenyipin()
const tangchenyipin = tangchenyipinBuilder.getHouse()
client(tangchenyipin)
