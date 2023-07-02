const core = require("@actions/core");
const fs = require("fs");
const path = require("path");
const process = require("process");
const { glob } = require("glob");

module.exports = class FileUtils {

    static isWorkspaceEmpty() {

        return FileUtils.isEmpty(FileUtils.getWorkspacePath());
    }

    static getWorkspacePath() {

        return process.env["GITHUB_WORKSPACE"] || "";
    }

    static exists(fileOrPath) {

        return fs.existsSync(fileOrPath);
    }

    static loadFiles(patterns = [], ignore = []) {

        core.debug("Loading all files");

        const files = new Set();

        patterns.forEach(pattern => {

            core.debug(`Processing: ${pattern}`);

            FileUtils.searchFiles(pattern, ignore).forEach(file => {
                files.add(file);
            });
        });

        return files;
    }

    static searchFiles(pattern = [], ignore = []) {

        pattern = Array.isArray(pattern) ? pattern : [pattern];
        ignore = Array.isArray(ignore) ? ignore : [ignore];

        const options = {
            cwd: FileUtils.getWorkspacePath(),
            ignore: ignore
        };

        return glob.sync(pattern, options);
    }

    static isEmpty(path) {

        if (!FileUtils.exists(path)) {
            throw new Error(`${path} does not exist`);
        }

        return fs.readdirSync(path).length === 0;
    }

    static readContent(file, encoding = "utf-8") {

        const filePath = path.join(FileUtils.getWorkspacePath(), file);

        return fs.readFileSync(filePath, { encoding });
    }

    static writeContent(file, content, encoding = "utf-8") {

        const filePath = path.join(FileUtils.getWorkspacePath(), file);

        return fs.writeFileSync(filePath, content, encoding);
    }
}