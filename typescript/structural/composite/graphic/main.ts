import {ImageEditor} from "./image_editor";
import {Dot} from "./dot";
import {Circle} from "./circle";

const imageEditor = new ImageEditor()

// imageEditor.load()
let components = []
components.push(new Dot(32, 2422))
components.push(new Circle(432, 2342, 565666))
imageEditor.groupSelected(components)
components.push(new Dot(3, 111))
components.push(new Circle(43, 23, 586))
imageEditor.groupSelected(components)
