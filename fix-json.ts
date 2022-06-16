import fs from "fs";

(async () => {
    for (let i = 0; i < 3000; i += 1) {
        const json: any = JSON.parse(fs.readFileSync(`json/${i}.json`).toString());
        json.name = `yabaigoblin #${i}`;
        json.description = "Wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
        json.image = `https://storage.googleapis.com/klubs/contents/yabai-goblin/images/${i}.png`;
        delete json.dna;
        delete json.edition;
        delete json.date;
        delete json.compiler;
        fs.writeFileSync(`json/${i}.json`, JSON.stringify(json));
    }
})();