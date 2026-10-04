import fs from 'fs';
import path from 'path';
import https from 'https';

const assetsDir = path.resolve('./src/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b9c2b97b-25d6-441b-9e4c-c113f82103c4';

// 1. Copy generated images
const localCopies = [
  { src: 'hero_fashion_girls_1791093850806.jpg', dest: 'hero-banner.png' },
  { src: 'sale_girl_hoodie_1791093872313.jpg', dest: 'sale-banner.png' },
  { src: 'men_shirts_rack_1791093917666.jpg', dest: 'product-1.png' },
  { src: 'dress_black_couture_1791093937072.jpg', dest: 'product-2.png' },
  { src: 'boy_blue_tee_model_1791094021475.jpg', dest: 'product-4.png' },
  { src: 'blue_boy_tshirt_1791093895565.jpg', dest: 'product-detail.png' },
  { src: 'blue_boy_tshirt_1791093895565.jpg', dest: 'detail-thumb-1.png' },
  { src: 'blue_boy_tshirt_1791093895565.jpg', dest: 'cart-item.png' },
];

for (const item of localCopies) {
  const fullSrc = path.join(brainDir, item.src);
  const fullDest = path.join(assetsDir, item.dest);
  if (fs.existsSync(fullSrc)) {
    fs.copyFileSync(fullSrc, fullDest);
    console.log(`Copied ${item.src} to ${item.dest}`);
  }
}

// 2. Fetch specific matching product photos from high quality Unsplash fashion photos
const remoteImages = [
  // Product 3: folded black & white t-shirts
  { url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80', file: 'product-3.png' },
  // Product 5: girls party / sparkle dresses hanging
  { url: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=80', file: 'product-5.png' },
  // Product 6: men's denim trousers / pants
  { url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80', file: 'product-6.png' },
  // Steals 1: men's fashionable white/light shirts hanging
  { url: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80', file: 'steal-1.png' },
  // Steals 2: girls white dress by window
  { url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80', file: 'steal-2.png' },
  // Steals 3: t-shirts folded black and grey
  { url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80', file: 'steal-3.png' },
  // Steals 4: boys shoes / cap / folded tee flat lay
  { url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80', file: 'steal-4.png' },
  // Steals 5: women fashionable dresses on hanger
  { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80', file: 'steal-5.png' },
  // Steals 6: men's denim / trousers
  { url: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80', file: 'steal-6.png' },
  // Detail thumbnails (angles of blue shirt)
  { url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80', file: 'detail-thumb-2.png' },
  { url: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80', file: 'detail-thumb-3.png' },
  { url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80', file: 'detail-thumb-4.png' },
  // Customer Avatars
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', file: 'avatar-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', file: 'avatar-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', file: 'avatar-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', file: 'avatar-4.jpg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        console.warn(`Failed ${url}: ${res.statusCode}`);
        return resolve(false);
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${dest}`);
        resolve(true);
      });
    }).on('error', (err) => {
      console.warn(`Error downloading ${url}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  for (const item of remoteImages) {
    const dest = path.join(assetsDir, item.file);
    if (!fs.existsSync(dest)) {
      await download(item.url, dest);
    }
  }
  console.log('Assets setup completed!');
}

run();
