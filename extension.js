// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.reset', function () {
		// The code you place here will be executed every time your command is executed
		const editor = vscode.window.activeTextEditor;
		if(editor){
			const document =editor.document;
			const oldcode = new vscode.Range(
				document.positionAt(0),
				document.positionAt(document.getText().length)
			); 

			const scaffold = `#include <bits/stdc++.h>
using namespace std;
#define elif else if
#define nl endl
#define ll long long
#define ull unsigned long long
#define db double


	int main() {
	ios::sync_with_stdio(false);
	cin.tie(0);

		int t;
		cin>>t;
		while(t--){

		}
	}`

								editor.edit(editBuilder => {
									editBuilder.replace(oldcode, scaffold);
								});
		}
	});

	let button = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    button.text = "$(sync~spin) Reset Code";
    button.command = 'extension.reset';
    button.tooltip = 'Resets the code to default boilerplate code';
    button.show();

	context.subscriptions.push(button);
	context.subscriptions.push(disposable);
}


// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
