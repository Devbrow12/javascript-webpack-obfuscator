import { TExpression } from "../../types/TExpression";

import { INode } from "./INode";

export interface IExpressionStatementNode extends INode {
    expression: TExpression;
}
