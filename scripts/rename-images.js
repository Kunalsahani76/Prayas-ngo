const fs = require('fs').promises;
const path = require('path');

async function renameFolder(folder) {
  const dir = path.join(process.cwd(), 'public', folder);
  try {
    const files = await fs.readdir(dir);
    if (files.length === 0) return console.log(`No files in ${folder}`);
    // Step 1: rename to tmp to avoid conflicts
    const tmpNames = [];
    for (let i = 0; i < files.length; i++) {
      const old = files[i];
      const ext = path.extname(old);
      const tmp = `tmp_${Date.now()}_${i}${ext}`;
      await fs.rename(path.join(dir, old), path.join(dir, tmp));
      tmpNames.push(tmp);
    }
    // Step 2: rename tmp files to image-#.ext sorted by name
    tmpNames.sort();
    for (let i = 0; i < tmpNames.length; i++) {
      const tmp = tmpNames[i];
      const ext = path.extname(tmp);
      const newName = `image-${i+1}${ext}`;
      await fs.rename(path.join(dir, tmp), path.join(dir, newName));
    }
    console.log(`Renamed ${tmpNames.length} files in ${folder}`);
  } catch (err) {
    console.error(`Error processing ${folder}:`, err.message);
  }
}

(async () => {
  const folders = ['krishna-vidya-bhawan','rainbow-school','sankalp-education'];
  for (const f of folders) {
    await renameFolder(f);
  }
})();
