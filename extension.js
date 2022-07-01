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
    // const cta = "Reload to apply";
    // vscode.window
    //   .showInformationMessage("Updated Indent Rainbow patlettes", cta)
    //   .then((selection) => {
    //     if (selection === cta) {
    //       vscode.commands.executeCommand("workbench.action.reloadWindow");
    //     }
    //   });
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
          "rgba(144, 224, 239,0.1)",
          "rgba(144, 224, 239,0.05)",
          "rgba(144, 224, 239,0.025)",
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
          "rgba(246, 140, 31,0.1)",
          "rgba(246, 140, 31,0.05)",
          "rgba(246, 140, 31,0.025)",
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
          "rgba(63, 55, 201,0.1)",
          "rgba(63, 55, 201,0.05)",
          "rgba(63, 55, 201,0.025)",
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
          "rgba(255, 205, 178,0.1)",
          "rgba(255, 205, 178,0.05)",
          "rgba(255, 205, 178,0.025)",
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
          "rgba(247, 209, 205,0.1)",
          "rgba(247, 209, 205,0.05)",
          "rgba(247, 209, 205,0.025)",
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
          "rgba(130, 47, 175,0.1)",
          "rgba(130, 47, 175,0.05)",
          "rgba(130, 47, 175,0.025)",
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
          "rgba(82, 182, 154,0.1)",
          "rgba(82, 182, 154,0.05)",
          "rgba(82, 182, 154,0.025)",
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
          "rgba(231, 111, 81,0.1)",
          "rgba(231, 111, 81,0.05)",
          "rgba(231, 111, 81,0.025)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable9 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes9",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(240, 128, 128,0.15)",
          "rgba(244, 151, 142,0.15)",
          "rgba(248, 173, 157, 0.15)",
          "rgba(251, 196, 171,0.15)",
          "rgba(255, 218, 185,0.15)",
          "rgba(255, 218, 185,0.1)",
          "rgba(255, 218, 185,0.05)",
          "rgba(255, 218, 185,0.025)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable10 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes10",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(239, 71, 111,0.15)",
          "rgba(255, 209, 102,0.15)",
          "rgba(6, 214, 160, 0.15)",
          "rgba(17, 138, 178,0.15)",
          "rgba(7, 59, 76,0.15)",
          "rgba(7, 59, 76,0.1)",
          "rgba(7, 59, 76,0.05)",
          "rgba(7, 59, 76,0.025)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable11 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes11",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(0, 129, 167,0.15)",
          "rgba(0, 175, 185,0.15)",
          "rgba(253, 252, 220, 0.15)",
          "rgba(254, 217, 183,0.15)",
          "rgba(240, 113, 103,0.15)",
          "rgba(240, 113, 103,0.1)",
          "rgba(240, 113, 103,0.05)",
          "rgba(240, 113, 103,0.025)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable12 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes12",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(3, 102, 102,0.15)",
          "rgba(20, 116, 111,0.15)",
          "rgba(36, 130, 119, 0.15)",
          "rgba(53, 143, 128,0.15)",
          "rgba(70, 157, 137,0.15)",
          "rgba(86, 171, 145,0.15)",
          "rgba(103, 185, 154,0.15)",
          "rgba(103, 185, 154,0.1)",
          "rgba(103, 185, 154,0.05)",
          "rgba(103, 185, 154,0.025)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable13 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes13",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(255, 128, 0,0.15)",
          "rgba(255, 140, 0,0.15)",
          "rgba(255, 153, 0, 0.15)",
          "rgba(255, 166, 0,0.15)",
          "rgba(255, 179, 0,0.15)",
          "rgba(255, 191, 0,0.15)",
          "rgba(255, 204, 0,0.15)",
          "rgba(255, 204, 0,0.1)",
          "rgba(255, 204, 0,0.05)",
          "rgba(255, 204, 0,0.025)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable14 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes14",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(242, 92, 84,0.15)",
          "rgba(242, 112, 89,0.15)",
          "rgba(244, 132, 95, 0.15)",
          "rgba(247, 157, 101,0.15)",
          "rgba(247, 178, 103,0.15)",
          "rgba(247, 178, 103,0.1)",
          "rgba(247, 178, 103,0.05)",
          "rgba(247, 178, 103,0.025)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable15 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes15",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(98, 71, 170,0.15)",
          "rgba(114, 81, 181,0.15)",
          "rgba(129, 90, 192, 0.15)",
          "rgba(145, 99, 203,0.15)",
          "rgba(160, 108, 213,0.15)",
          "rgba(177, 133, 219,0.15)",
          "rgba(193, 158, 224,0.15)",
          "rgba(193, 158, 224,0.1)",
          "rgba(193, 158, 224,0.05)",
          "rgba(193, 158, 224,0.025)",
        ],
        true
      );
      displayMessage();
    }
  );
  let disposable16 = vscode.commands.registerCommand(
    "indent-rainbow-palettes.palettes16",
    function () {
      // The code you place here will be executed every time your command is executed
      const configuration = vscode.workspace.getConfiguration();
      configuration.update(
        "indentRainbow.colors",
        [
          "rgba(255, 10, 84,0.15)",
          "rgba(255, 71, 126,0.15)",
          "rgba(255, 92, 138, 0.15)",
          "rgba(255, 112, 150,0.15)",
          "rgba(255, 133, 161,0.15)",
          "rgba(255, 153, 172,0.15)",
          "rgba(251, 177, 189,0.15)",
          "rgba(251, 177, 189,0.1)",
          "rgba(251, 177, 189,0.05)",
          "rgba(251, 177, 189,0.025)",
        ],
        true
      );
      displayMessage();
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
    disposable8,
    disposable9,
    disposable10,
    disposable11,
    disposable12,
    disposable13,
    disposable14,
    disposable15,
    disposable16
  );
  vscode.commands.executeCommand("indent-rainbow-palettes.palettes7");
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
