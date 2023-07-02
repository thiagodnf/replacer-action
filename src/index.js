const core = require("@actions/core");
const FileUtils = require("./utils/FileUtils");
const ActionUtils = require("./utils/ActionUtils");

async function run() {

    if (FileUtils.isWorkspaceEmpty()) {
        throw new Error("Workspace is empty. Did you forget to run \"actions/checkout\" before running this Github Action?");
    }

    const include = ActionUtils.getInput("include", { required: false });
    const exclude = ActionUtils.getInput("exclude", { required: false });
    const find = ActionUtils.getInput("find", { required: true });
    const replace = ActionUtils.getInput("replace", { required: true });

    const files = FileUtils.loadFiles(include);

    core.info(`Found ${files.size} file(s). Checking them:`);

    let modifiedFiles = 0;

    files.forEach(file => {

        core.info(`Processing: ${file}`);

    });

    core.info("Done. All files checked");

    core.setOutput("modifiedFiles", modifiedFiles);
}

run();