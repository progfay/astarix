import type {
  ErrorNode,
  ParseTree,
  ParseTreeVisitor,
  RuleNode,
} from "antlr4ts/tree";
import type { ParseResult } from "ts-mysql-parser";
import MySQLParser, {
  ColumnNameContext,
  MySQLQueryType,
  SqlMode,
  TableNameContext,
} from "ts-mysql-parser";
import { Table } from "../types";

class Visitor implements ParseTreeVisitor<void> {
  tableName = "";
  columns: string[] = [];

  visit(tree: ParseTree) {
    tree.accept(this);
  }

  visitChildren(node: RuleNode) {
    for (let i = 0; i < node.childCount; i++) {
      if (node instanceof TableNameContext) {
        this.tableName = node.text.replace(/`/g, "");
        continue;
      }

      if (node instanceof ColumnNameContext) {
        this.columns.push(node.text.replace(/`/g, ""));
        continue;
      }

      node.getChild(i).accept(this);
    }
  }

  visitTerminal() {
    return;
  }

  visitErrorNode(node: ErrorNode) {
    console.error("visitErrorNode:", node);
  }
}

const parseSchema = (parser: MySQLParser, schema: string): ParseResult[] => {
  return parser.splitStatements(schema).map(({ text }) => parser.parse(text));
};

export const getTablesFromSchema = (schema: string): Table[] => {
  const parser = new MySQLParser({
    version: "5.7.7",
    mode: SqlMode.AnsiQuotes,
  });

  return parseSchema(parser, schema)
    .filter(
      (result) => parser.getQueryType(result) === MySQLQueryType.QtCreateTable
    )
    .map<Table>((result) => {
      const visitor = new Visitor();
      result.tree.accept(visitor);
      return {
        tableName: visitor.tableName,
        columns: visitor.columns,
      };
    });
};
