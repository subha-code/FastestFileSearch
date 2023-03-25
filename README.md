# fastest-file-share README

This is a VS Code extension that allows the user to easily share the link of the current file they are editing. The extension adds a command to the Command Palette, which can be triggered by pressing Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac) and typing "Share file link". The user can then choose to either copy the file link to the clipboard or open it in a web browser.

The extension uses the vscode module to access the active text editor and generate the file link using the vscode://file/ URI scheme. It also uses the opn package to open the file link in a web browser. Additionally, the extension leverages the VS Code QuickPick API to display a dropdown list of options for the user to choose from.

Overall, this extension provides a quick and convenient way for users to share their file links, making it easy to collaborate with others or simply access the file on different devices.

## Features

This VS Code extension for sharing file links has several useful features that make it easy and convenient for users to share the link to the current file they are editing.
There are some features in below

Quick access: The extension adds a command to the Command Palette, which can be accessed quickly by pressing Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac) and typing "Share file link"

Choice of options: When the command is triggered, a dropdown list of options is displayed using the VS Code QuickPick API, allowing the user to choose between copying the file link to the clipboard or opening it in a web browser. This provides flexibility for users to choose how they want to share the link.

URI scheme: The extension uses the vscode://file/ URI scheme to generate the file link, which is a standard way of referencing files in VS Code. This ensures that the link will work properly within VS Code, regardless of the platform or file system being used.

Browser support: The extension also allows the user to open the file link in a web browser using the opn package, making it easy to share the link with others who may not have access to VS Code.

Clipboard support: When the user chooses to copy the file link to the clipboard, the extension uses the vscode.env.clipboard.writeText method to write the link to the clipboard, making it easy to paste and share the link with others.


## Requirements
Dependencies:

1.vscode module: This is a built-in module in VS Code that provides APIs for accessing and manipulating the editor, including the active text editor and clipboard functionality.

2.opn package: This is a third-party package used to open the file link in a web browser. It must be installed using npm, the Node.js package manager, by running the command npm install opn in the terminal.


## Extension Settings

The extension uses the vscode.env.clipboard.writeText method to write the file link to the clipboard. The default behavior of this method is to append the text to the clipboard, but this can be changed by modifying the VS Code setting clipboardMode. The possible values for clipboardMode are "replace" and "append", and can be set in the user or workspace setting


## Working with Markdown

Here are some useful editor keyboard shortcuts:

1.Open a Markdown file in VS Code.

2.Position the cursor in the section of code that you want to share.

3.Trigger the "Share file link" command by pressing Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac) and typing "Share file link" in the Command Palette.

4.Select "Copy file link to clipboard" or "Open file link in browser" from the dropdown list of options.

5.If you selected "Copy file link to clipboard", the file link will be copied to the clipboard and can be pasted into any text field or document.

6.If you selected "Open file link in browser", the file link will be opened in the default web browser.


