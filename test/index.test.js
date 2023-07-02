const process = require('process');
const cp = require('child_process');
const path = require('path');

test('test runs', () => {
    process.env['INPUT_MILLISECONDS'] = 100;
    const ip = path.join(__dirname, './src/index.js');

    console.log(ip)

    const result = cp.execSync(`node ${ip}`, { env: process.env }).toString();
    console.log(result);
})