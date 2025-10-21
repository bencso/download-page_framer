"use server";

import fs from "fs";

export async function getFiles() {
  const fileFolder = process.cwd() + "/public/docs";
  const files = fs.readdirSync(fileFolder);
  return files || [];
}

export async function getLastPachNote() {
  const lastFile = (await getFiles()).at(-1)?.toString();
  return lastFile && "Version " + lastFile?.split("-")[0].split("").join(".");
}