#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const customChalk = require("./chalk.cjs");
const { logger } = require("stywind");

const componentsDir = [
  "components/Button",
  // 'components/Card',
  "components/Drawer",
  // 'components/Menu',
  // 'components/Tabs',
  "components/Modal",
  "components/Input",
  // 'components/FilePicker',
  // "components/Backdrop",
  "components/Provider",
  // 'components/Checkbox',
  // 'components/loaders/PageLoader',
];
const hooksDir = ["hook", "context", "core"];
const insertFiles = ["auera-ui.es.js", "auera-ui.cjs"];
const insertDir = [...componentsDir, ...hooksDir];

// Add "use client" to all files
const Dir = path.join(__dirname, "../dist/");
const fileDir = path.join(path.dirname(__filename), "../dist/");

function checkDir() {
  for (let i = 0; i < insertDir.length; i++) {
    const dir = insertDir[i];
    const fullPath = path.join(Dir, dir); // Create the full path
    if (fs.existsSync(fullPath)) {
      addUseClientToFiles(fullPath);
    } else logger.warning(`Path not found: ${fullPath}`);
  }
}

//Insert into each file
function insert(fullPath, file) {
  const stat = fs.statSync(fullPath);
  const fileExits = fs.existsSync(fullPath);

  if (stat.isDirectory()) {
    if (fileExits) {
      addUseClientToFiles(fullPath);
    } else logger.warning(`Path not found: ${fullPath}`);
  } else if (file.endsWith(".js") || file.endsWith(".ts")) {
    const content = fs.readFileSync(fullPath, "utf8");

    if (!content.startsWith('"use client";') && fileExits) {
      const newContent = `"use client";\n${content}`;
      fs.writeFileSync(fullPath, newContent, "utf8");
      console.log(`Added 'use client' to: ${fullPath}`);
    } else if (!fileExits) logger.warning(`Path not found: ${fullPath}`);
  }
}

function checkFile() {
  for (let i = 0; i < insertFiles.length; i++) {
    const dir = insertFiles[i];
    const fullPath = path.join(fileDir, dir);
    insert(fullPath, dir);
  }
}

function addUseClientToFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    insert(fullPath, file);
  });
}

if (fs.existsSync(Dir)) {
  checkDir();
  checkFile();
  console.log(customChalk.green('\u2714 Modified with "use client".'));
} else {
  console.error(customChalk.red(`Directory ${Dir} does not exist.`));
}