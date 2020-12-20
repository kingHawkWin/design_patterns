import {Context} from "./context";
import {StrategyAdd} from "./strategyAdd";
import {StrategySub} from "./strategySub";
import {StrategyMul} from "./strategyMul";
import {StrategyDiv} from "./strategyDiv";

const context = new Context(new StrategyAdd())
context.operation(3, 4)
context.setStrategy(new StrategySub())
context.operation(3, 4)
context.setStrategy(new StrategyMul())
context.operation(3, 4)
context.setStrategy(new StrategyDiv())
context.operation(3, 4)
