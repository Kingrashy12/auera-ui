#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { logger } = require("stywind");

const componentsDir = [
  "components/Box",
  "components/Button",
  "components/Card",
  "components/Checkbox",
  "components/Drawer",
  "components/File",
  "components/menu",
  "components/Modal",
  "components/Input",
  "components/Select",
  "components/Provider",
  "components/Table",
];
const hooksDir = ["hook", "context"];
const insertFiles = [
  "auera-ui.es.js",
  "auera-ui.cjs",
  "components/loader/LoadIndicator.d.ts",
  "components/Tabs/Provider.d.ts",
  "components/Tabs/TabPanel.d.ts",
  "components/Tabs/Tabs.d.ts",
  "components/Toast/Toast.d.ts",
  "components/Switch/Switch.d.ts",
  "components/Collapse/Collapse.d.ts",
  "core/Provider.d.ts",
  "components/Breadcrumbs/DynamicBreadcrumb.d.ts",
  "components/Badge/Badge.d.ts",
];
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
  logger.success('\u2714 Modified with "use client".');
} else {
  console.error(`Directory ${Dir} does not exist.`);
}
