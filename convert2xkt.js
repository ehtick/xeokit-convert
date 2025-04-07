#!/usr/bin/env node

// This file is for backward compatibility with older versions
// It delegates to the shared CLI implementation

// Set up polyfills and environment
import { TextEncoder, TextDecoder } from 'node:util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
import '@loaders.gl/polyfills';
import { installFilePolyfills } from '@loaders.gl/polyfills';
installFilePolyfills();

// Import dependencies
import WebIFC from "web-ifc/web-ifc-api-node.js";
import fs from 'node:fs';

// Import converter functionality
import { convert2xkt } from './src/convert2xkt.js';
import defaultConfigs from './bin/convert2xkt.conf.js';

// Import shared CLI functionality
import {
    setupCLI,
    validateOptions,
    createLogger,
    mainConvert
} from './bin/cli.js';

// Setup environment
const packageInfo = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Setup CLI
const program = setupCLI(packageInfo);
program.parse(process.argv);
const options = program.opts();

// Validate options
validateOptions(options, program);

// Create logger
const log = createLogger(options);

// Run conversion
mainConvert({
    options,
    configs: defaultConfigs,
    log,
    WebIFC,
    convert2xkt,
    packageInfo
}).catch(err => {
    console.error('Error:', err);
    process.exit(1);
});