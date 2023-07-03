const core = require("@actions/core");

const FileUtils = require("./utils/FileUtils");
const ActionUtils = require("./utils/ActionUtils");
const ArrayUtils = require("./utils/ArrayUtils");

async function run() {

    try {

        if (FileUtils.isWorkspaceEmpty()) {
            throw new Error("Workspace is empty");
        }

        let find = ActionUtils.getInput("find", { required: true });
        let replace = ActionUtils.getInput("replace", { required: true });
        let include = ActionUtils.getInputAsArray("include", { required: false });
        let exclude = ActionUtils.getInputAsArray("exclude", { required: false });

        find = new RegExp(find, 'gm');
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
            let newContent = content.replace(find, replace);

            if (content != newContent) {
                modifiedFiles++;
            }

            FileUtils.writeContent(file, newContent);
        });

        core.info("Done. All files checked");

        core.setOutput("modifiedFiles", modifiedFiles);

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();