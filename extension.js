const vscode = require('vscode');
const opn = require('opn');

function activate(context) {
    let disposable = vscode.commands.registerCommand('fastest-file-share.shareFile', function() {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        /*z2g76zmbetunlsbubk3dmrnehg6d5llezpkqfkb7kf2l7v6dg77q*/
        vscode.window.showQuickPick(['Share file link', 'Open file link in browser']).then((selection) => {
            if (selection === 'Share file link') {
                const fileName = editor.document.fileName;
                const fileUri = vscode.Uri.file(fileName);
                const fileLink = `vscode://file/${fileUri.path}`;

                vscode.env.clipboard.writeText(fileLink);

                vscode.window.showInformationMessage('File link copied to clipboard');
            } else if (selection === 'Open file link in browser') {
                const fileName = editor.document.fileName;
                const fileUri = vscode.Uri.file(fileName);
                const fileLink = `file://${fileUri.path}`;

                opn(fileLink);
            }
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};