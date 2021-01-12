enum AST_NODE_TYPES {
  ArrayExpression = 'ArrayExpression',
  ArrayPattern = 'ArrayPattern',
  ArrowFunctionExpression = 'ArrowFunctionExpression',
  AssignmentExpression = 'AssignmentExpression',
  AssignmentPattern = 'AssignmentPattern',
  AwaitExpression = 'AwaitExpression',
  BinaryExpression = 'BinaryExpression',
  BlockStatement = 'BlockStatement',
  BreakStatement = 'BreakStatement',
  CallExpression = 'CallExpression',
  CatchClause = 'CatchClause',
  ChainExpression = 'ChainExpression',
  ClassBody = 'ClassBody',
  ClassDeclaration = 'ClassDeclaration',
  ClassExpression = 'ClassExpression',
  ClassProperty = 'ClassProperty',
  ConditionalExpression = 'ConditionalExpression',
  ContinueStatement = 'ContinueStatement',
  DebuggerStatement = 'DebuggerStatement',
  Decorator = 'Decorator',
  DoWhileStatement = 'DoWhileStatement',
  EmptyStatement = 'EmptyStatement',
  ExportAllDeclaration = 'ExportAllDeclaration',
  ExportDefaultDeclaration = 'ExportDefaultDeclaration',
  ExportNamedDeclaration = 'ExportNamedDeclaration',
  ExportSpecifier = 'ExportSpecifier',
  ExpressionStatement = 'ExpressionStatement',
  ForInStatement = 'ForInStatement',
  ForOfStatement = 'ForOfStatement',
  ForStatement = 'ForStatement',
  FunctionDeclaration = 'FunctionDeclaration',
  FunctionExpression = 'FunctionExpression',
  Identifier = 'Identifier',
  IfStatement = 'IfStatement',
  ImportDeclaration = 'ImportDeclaration',
  ImportDefaultSpecifier = 'ImportDefaultSpecifier',
  ImportExpression = 'ImportExpression',
  ImportNamespaceSpecifier = 'ImportNamespaceSpecifier',
  ImportSpecifier = 'ImportSpecifier',
  JSXAttribute = 'JSXAttribute',
  JSXClosingElement = 'JSXClosingElement',
  JSXClosingFragment = 'JSXClosingFragment',
  JSXElement = 'JSXElement',
  JSXEmptyExpression = 'JSXEmptyExpression',
  JSXExpressionContainer = 'JSXExpressionContainer',
  JSXFragment = 'JSXFragment',
  JSXIdentifier = 'JSXIdentifier',
  JSXMemberExpression = 'JSXMemberExpression',
  JSXOpeningElement = 'JSXOpeningElement',
  JSXOpeningFragment = 'JSXOpeningFragment',
  JSXSpreadAttribute = 'JSXSpreadAttribute',
  JSXSpreadChild = 'JSXSpreadChild',
  JSXText = 'JSXText',
  LabeledStatement = 'LabeledStatement',
  Literal = 'Literal',
  LogicalExpression = 'LogicalExpression',
  MemberExpression = 'MemberExpression',
  MetaProperty = 'MetaProperty',
  MethodDefinition = 'MethodDefinition',
  NewExpression = 'NewExpression',
  ObjectExpression = 'ObjectExpression',
  ObjectPattern = 'ObjectPattern',
  PrivateIdentifier = 'PrivateIdentifier',
  Program = 'Program',
  Property = 'Property',
  RestElement = 'RestElement',
  ReturnStatement = 'ReturnStatement',
  SequenceExpression = 'SequenceExpression',
  SpreadElement = 'SpreadElement',
  Super = 'Super',
  SwitchCase = 'SwitchCase',
  SwitchStatement = 'SwitchStatement',
  TaggedTemplateExpression = 'TaggedTemplateExpression',
  TemplateElement = 'TemplateElement',
  TemplateLiteral = 'TemplateLiteral',
  ThisExpression = 'ThisExpression',
  ThrowStatement = 'ThrowStatement',
  TryStatement = 'TryStatement',
  UnaryExpression = 'UnaryExpression',
  UpdateExpression = 'UpdateExpression',
  VariableDeclaration = 'VariableDeclaration',
  VariableDeclarator = 'VariableDeclarator',
  WhileStatement = 'WhileStatement',
  WithStatement = 'WithStatement',
  YieldExpression = 'YieldExpression',
  /**
   * TS-prefixed nodes
   */
  TSAbstractClassProperty = 'TSAbstractClassProperty',
  TSAbstractKeyword = 'TSAbstractKeyword',
  TSAbstractMethodDefinition = 'TSAbstractMethodDefinition',
  TSAnyKeyword = 'TSAnyKeyword',
  TSArrayType = 'TSArrayType',
  TSAsExpression = 'TSAsExpression',
  TSAsyncKeyword = 'TSAsyncKeyword',
  TSBigIntKeyword = 'TSBigIntKeyword',
  TSBooleanKeyword = 'TSBooleanKeyword',
  TSCallSignatureDeclaration = 'TSCallSignatureDeclaration',
  TSClassImplements = 'TSClassImplements',
  TSConditionalType = 'TSConditionalType',
  TSConstructorType = 'TSConstructorType',
  TSConstructSignatureDeclaration = 'TSConstructSignatureDeclaration',
  TSDeclareFunction = 'TSDeclareFunction',
  TSDeclareKeyword = 'TSDeclareKeyword',
  TSEmptyBodyFunctionExpression = 'TSEmptyBodyFunctionExpression',
  TSEnumDeclaration = 'TSEnumDeclaration',
  TSEnumMember = 'TSEnumMember',
  TSExportAssignment = 'TSExportAssignment',
  TSExportKeyword = 'TSExportKeyword',
  TSExternalModuleReference = 'TSExternalModuleReference',
  TSFunctionType = 'TSFunctionType',
  TSImportEqualsDeclaration = 'TSImportEqualsDeclaration',
  TSImportType = 'TSImportType',
  TSIndexedAccessType = 'TSIndexedAccessType',
  TSIndexSignature = 'TSIndexSignature',
  TSInferType = 'TSInferType',
  TSInterfaceBody = 'TSInterfaceBody',
  TSInterfaceDeclaration = 'TSInterfaceDeclaration',
  TSInterfaceHeritage = 'TSInterfaceHeritage',
  TSIntersectionType = 'TSIntersectionType',
  TSLiteralType = 'TSLiteralType',
  TSMappedType = 'TSMappedType',
  TSMethodSignature = 'TSMethodSignature',
  TSModuleBlock = 'TSModuleBlock',
  TSModuleDeclaration = 'TSModuleDeclaration',
  TSNamedTupleMember = 'TSNamedTupleMember',
  TSNamespaceExportDeclaration = 'TSNamespaceExportDeclaration',
  TSNeverKeyword = 'TSNeverKeyword',
  TSNonNullExpression = 'TSNonNullExpression',
  TSNullKeyword = 'TSNullKeyword',
  TSNumberKeyword = 'TSNumberKeyword',
  TSObjectKeyword = 'TSObjectKeyword',
  TSOptionalType = 'TSOptionalType',
  TSParameterProperty = 'TSParameterProperty',
  TSParenthesizedType = 'TSParenthesizedType',
  TSPrivateKeyword = 'TSPrivateKeyword',
  TSPropertySignature = 'TSPropertySignature',
  TSProtectedKeyword = 'TSProtectedKeyword',
  TSPublicKeyword = 'TSPublicKeyword',
  TSQualifiedName = 'TSQualifiedName',
  TSReadonlyKeyword = 'TSReadonlyKeyword',
  TSRestType = 'TSRestType',
  TSStaticKeyword = 'TSStaticKeyword',
  TSStringKeyword = 'TSStringKeyword',
  TSSymbolKeyword = 'TSSymbolKeyword',
  TSTemplateLiteralType = 'TSTemplateLiteralType',
  TSThisType = 'TSThisType',
  TSTupleType = 'TSTupleType',
  TSTypeAliasDeclaration = 'TSTypeAliasDeclaration',
  TSTypeAnnotation = 'TSTypeAnnotation',
  TSTypeAssertion = 'TSTypeAssertion',
  TSTypeLiteral = 'TSTypeLiteral',
  TSTypeOperator = 'TSTypeOperator',
  TSTypeParameter = 'TSTypeParameter',
  TSTypeParameterDeclaration = 'TSTypeParameterDeclaration',
  TSTypeParameterInstantiation = 'TSTypeParameterInstantiation',
  TSTypePredicate = 'TSTypePredicate',
  TSTypeQuery = 'TSTypeQuery',
  TSTypeReference = 'TSTypeReference',
  TSUndefinedKeyword = 'TSUndefinedKeyword',
  TSUnionType = 'TSUnionType',
  TSUnknownKeyword = 'TSUnknownKeyword',
  TSVoidKeyword = 'TSVoidKeyword',
}

export { AST_NODE_TYPES };

// Below is a special type-only test which ensures that we don't accidentally leave unused keys in this enum
// eslint-disable-next-line import/first -- purposely down here to colocate it with this hack of a test
import type { Node } from './ts-estree';

type GetKeys<T extends AST_NODE_TYPES> = keyof Extract<Node, { type: T }>;

type AllKeys = {
  readonly [T in AST_NODE_TYPES]: GetKeys<T>;
};

type TakesString<T extends Record<string, string>> = T;

// @ts-expect-error: purposely unused
type _Test =
  // forcing the test onto a new line so it isn't covered by the expect error
  // If there are any enum members that don't have a corresponding TSESTree.Node, then this line will error with "Type 'string | number | symbol' is not assignable to type 'string'."
  void | TakesString<AllKeys>;
