const core = require("@actions/core");

const FileUtils = require("./utils/FileUtils");
const ActionUtils = require("./utils/ActionUtils");
const ArrayUtils = require("./utils/ArrayUtils");

async function run() {

    if (FileUtils.isWorkspaceEmpty()) {
        throw new Error("Workspace is empty. Did you forget to run \"actions/checkout\" before running this Github Action?");
    }

    let find = ActionUtils.getInput("find", { required: true });
    let replace = ActionUtils.getInput("replace", { required: true });
    let include = ActionUtils.getInputAsArray("include", { required: false });
    let exclude = ActionUtils.getInputAsArray("exclude", { required: false });

    find = new RegExp(find, 'gm');
    replace = new RegExp(replace, 'gm');
    include = ArrayUtils.split(include, ",");
    exclude = ArrayUtils.split(exclude, ",");

    core.info(`include: ${JSON.stringify(include)}`);
    core.info(`exclude: ${JSON.stringify(exclude)}`);
    core.info(`find: ${find}`);
    core.info(`replace: ${replace}`);

    const files = FileUtils.searchFiles(include, exclude);

    core.info(`Found ${files.length} file(s). Checking them out:`);

    let modifiedFiles = 0;

    files.forEach(file => {

        core.info(`Processing: ${file}`);

        let content = FileUtils.readContent(file);

        content = content.replace(find, replace);

        core.info(`content: ${content}`);

        FileUtils.writeContent(file, content);
    });

    core.info("Done. All files checked");

    core.setOutput("modifiedFiles", modifiedFiles);
}

run();