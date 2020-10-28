export enum NodeTransformer {
    BooleanLiteralTransformer = 'BooleanLiteralTransformer',
    BlockStatementControlFlowTransformer = 'BlockStatementControlFlowTransformer',
    BlockStatementSimplifyTransformer = 'BlockStatementSimplifyTransformer',
    CommentsTransformer = 'CommentsTransformer',
    CustomCodeHelpersTransformer = 'CustomCodeHelpersTransformer',
    DeadCodeInjectionTransformer = 'DeadCodeInjectionTransformer',
    EscapeSequenceTransformer = 'EscapeSequenceTransformer',
    EvalCallExpressionTransformer = 'EvalCallExpressionTransformer',
    ExportSpecifierTransformer = 'ExportSpecifierTransformer',
    ExpressionStatementsMergeTransformer = 'ExpressionStatementsMergeTransformer',
    FunctionControlFlowTransformer = 'FunctionControlFlowTransformer',
    IfStatementSimplifyTransformer = 'IfStatementSimplifyTransformer',
    LabeledStatementTransformer = 'LabeledStatementTransformer',
    MemberExpressionTransformer = 'MemberExpressionTransformer',
    MetadataTransformer = 'MetadataTransformer',
    MethodDefinitionTransformer = 'MethodDefinitionTransformer',
    NumberLiteralTransformer = 'NumberLiteralTransformer',
    NumberToNumericalExpressionTransformer = 'NumberToNumericalExpressionTransformer',
    ObfuscatingGuardsTransformer = 'ObfuscatingGuardsTransformer',
    ObjectExpressionKeysTransformer = 'ObjectExpressionKeysTransformer',
    ObjectExpressionTransformer = 'ObjectExpressionTransformer',
    ObjectPatternPropertiesTransformer = 'ObjectPatternPropertiesTransformer',
    ParentificationTransformer = 'ParentificationTransformer',
    RenamePropertiesTransformer = 'RenamePropertiesTransformer',
    ScopeIdentifiersTransformer = 'ScopeIdentifiersTransformer',
    ScopeThroughIdentifiersTransformer = 'ScopeThroughIdentifiersTransformer',
    SplitStringTransformer = 'SplitStringTransformer',
    StringArrayTransformer = 'StringArrayTransformer',
    StringArrayScopeCallsWrapperTransformer = 'StringArrayScopeCallsWrapperTransformer',
    TemplateLiteralTransformer = 'TemplateLiteralTransformer',
    VariableDeclarationsMergeTransformer = 'VariableDeclarationsMergeTransformer',
    VariablePreserveTransformer = 'VariablePreserveTransformer'
}
