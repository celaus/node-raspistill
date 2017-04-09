import * as imageGenerator from 'js-image-generator';

let counter = 0;

function generateImage(): void {
    setTimeout(() => {
        imageGenerator.generateImage(
            800 + Math.floor(Math.random() * 20),
            600,
            40,
            function(err: any, image: any): void {
                counter++;
                if (counter <= 4) {
                    process.stdout.write(image.data);
                    generateImage();
                }
                if (err) {
                    throw err;
                }
            });
    }, 300);
}

generateImage();