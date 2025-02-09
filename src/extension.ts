// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log("Flutter Snippets Helper is now active!");

  // The extension is now active and snippets are automatically registered
  // through the package.json configuration
}

// This method is called when your extension is deactivated
export function deactivate() {}
