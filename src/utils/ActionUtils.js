const core = require("@actions/core");

module.exports = class ActionUtils {

    static getInputAsArray(name, options) {

        return core
            .getInput(name, options)
            .split("\n")
            .map(s => s.trim())
            .filter(x => x !== "");
    }

    static getInput(name, options = {}) {

        let input = core.getInput(name, options);

        if (input) {
            input = input.trim();
        }

        return input;
    }
}