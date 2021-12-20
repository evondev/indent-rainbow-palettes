// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "indent-rainbow-palettes" is now active!'
  );

  function displayMessage() {
    const cta = "Reload to apply";
    vscode.window
      .showInformationMessage("Updated Indent Rainbow patlettes", cta)
      .then((selection) => {
        if (selection === cta) {
          vscode.commands.executeCommand("workbench.action.reloadWindow");
        }
      });
  }
  const configuration = vscode.workspace.getConfiguration();
  let disposable1 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes1",
    function () {
      // The code you place here will be executed every time your command is executed
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(3, 4, 94,0.15)",
          "rgba(2, 62, 138,0.15)",
          "rgba(0, 119, 182, 0.15)",
          "rgba(0, 150, 199,0.15)",
          "rgba(0, 180, 216,0.15)",
          "rgba(72, 202, 228,0.15)",
          "rgba(144, 224, 239,0.15)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable2 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes2",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(53, 52, 53,0.15)",
          "rgba(42, 51, 136,0.15)",
          "rgba(94, 45, 144, 0.15)",
          "rgba(123, 28, 125,0.15)",
          "rgba(218, 18, 75,0.15)",
          "rgba(239, 83, 61,0.15)",
          "rgba(246, 140, 31,0.15)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable3 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes3",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(247, 37, 133,0.15)",
          "rgba(181, 23, 158,0.15)",
          "rgba(114, 9, 183, 0.15)",
          "rgba(86, 11, 173,0.15)",
          "rgba(72, 12, 168,0.15)",
          "rgba(58, 12, 163,0.15)",
          "rgba(63, 55, 201,0.15)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable4 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes4",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(109, 104, 117,0.15)",
          "rgba(181, 131, 141,0.15)",
          "rgba(229, 152, 155, 0.15)",
          "rgba(255, 180, 162,0.15)",
          "rgba(255, 205, 178,0.15)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable5 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes5",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(115, 93, 120,0.15)",
          "rgba(179, 146, 172,0.15)",
          "rgba(209, 179, 196, 0.15)",
          "rgba(232, 194, 202,0.15)",
          "rgba(247, 209, 205,0.15)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable6 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes6",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(234, 105, 139,0.15)",
          "rgba(213, 93, 146,0.15)",
          "rgba(192, 82, 153, 0.15)",
          "rgba(172, 70, 161,0.15)",
          "rgba(151, 58, 168,0.15)",
          "rgba(130, 47, 175,0.15)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable7 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes7",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(24, 78, 119,0.15)",
          "rgba(30, 96, 145,0.15)",
          "rgba(26, 117, 159, 0.15)",
          "rgba(22, 138, 173,0.15)",
          "rgba(52, 160, 164,0.15)",
          "rgba(82, 182, 154,0.15)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable8 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes8",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(38, 70, 83,0.15)",
          "rgba(42, 157, 143,0.15)",
          "rgba(233, 196, 106, 0.15)",
          "rgba(244, 162, 97,0.15)",
          "rgba(231, 111, 81,0.15)",
        ],
        true
      );
    }
  );

  context.subscriptions.push(
    disposable1,
    disposable2,
    disposable3,
    disposable4,
    disposable5,
    disposable6,
    disposable7,
    disposable8
  );
  vscode.commands.executeCommand("indent-rainbow-palettes.palettes8");
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
