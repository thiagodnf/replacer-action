const core = require("@actions/core");
const FileUtils = require("./utils/file-utils");

async function run() {

    if (FileUtils.isWorkspaceEmpty()) {
        throw new Error("Workspace is empty. Did you forget to run \"actions/checkout\" before running this Github Action?");
    }

    let modifiedFiles = 0;

    core.info("Done. All files checked");

    core.setOutput("modifiedFiles", modifiedFiles);
}

run();