const spritesmith = require('spritesmith');
const fs = require('fs');
const path = require('path');


module.exports = function(source) {
    const callback = this.async();
    const imgs = source.match(/url\((\S*)\?_sprite\)/g);
    const matchImgs = [];

    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i].match(/url\((\S*)\?_sprite\)/)[1];
        matchImgs.push(path.join(__dirname, img));
    }
    
    spritesmith.run({
        src: matchImgs
    }, function(err, result) {
        console.log(111, result)
        fs.writeFileSync(path.join(process.cwd(), 'dist/sprite.jpg'), result.image);
        source = source.replace(/url\((\S*)\?_sprite\)/g, (match) => {
            return `url('dist/sprite.jpg')`;
        })
        fs.writeFileSync(path.join(process.cwd(), 'dist/index.css'), source);
        callback(null, source);
    })
}