import * as ESTree from 'estree';

export interface IManglePropertiesReplacer {
    /**
     * @param {ESTree.Identifier | ESTree.Literal} node
     * @returns {ESTree.Identifier | ESTree.Literal}
     */
    replace (node: ESTree.Identifier | ESTree.Literal): ESTree.Identifier | ESTree.Literal;
}
