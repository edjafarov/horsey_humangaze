const fs = require('fs');
const path = require('path');

function slugify(folderName) {
  return folderName
    .toLowerCase()
    .replace(/[:.]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function generateGalleryData() {
  const galleriesPath = path.join(process.cwd(), 'public', 'galleries');
  const outputPath = path.join(process.cwd(), 'lib', 'gallery-data.json');

  const entries = fs.readdirSync(galleriesPath, { withFileTypes: true });
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

  const galleries = entries
    .filter(entry => entry.isDirectory())
    .map(entry => {
      const folderName = entry.name;
      const galleryPath = path.join(galleriesPath, folderName);
      const files = fs.readdirSync(galleryPath);

      const images = files
        .filter(file => {
          const ext = path.extname(file).toLowerCase();
          return imageExtensions.includes(ext);
        })
        .map(file => `/galleries/${folderName}/${file}`);

      return {
        name: folderName,
        slug: slugify(folderName),
        images: images
      };
    });

  fs.writeFileSync(outputPath, JSON.stringify(galleries, null, 2));
  console.log(`Generated gallery data: ${galleries.length} galleries`);
}

generateGalleryData();
