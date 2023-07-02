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

    core.info(`include: ${include}`);
    core.info(`exclude: ${exclude}`);
    core.info(`find: ${find}`);
    core.info(`replace: ${replace}`);

    const files = FileUtils.searchFiles(include, exclude);

    core.info(`Found ${files.size} file(s). Checking them:`);

    let modifiedFiles = 0;

    files.forEach(file => {

        core.info(`Processing: ${file}`);

    });

    core.info("Done. All files checked");

    core.setOutput("modifiedFiles", modifiedFiles);
}

run();