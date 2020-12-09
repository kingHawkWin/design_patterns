import { Logistics, RoadLogistics, SeaLogistics, SkyLogistics} from "./logistics";

function client(logistics: Logistics) {
  return logistics.createTransport()
}

client(new RoadLogistics)
client(new SeaLogistics)
client(new SkyLogistics)
