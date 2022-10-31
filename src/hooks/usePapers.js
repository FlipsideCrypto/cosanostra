const req = require.context("../../papers", true, /\.md$/);

const processContents = (files, contents) => {
    return files.map((file, index) => {
        // Get the attributes from the markdown file
        const parsedContents = contents[index].split("---");
        const attributes = parsedContents[0].split("\n");
        const attributesObject = {};
        attributes.forEach((attribute) => {
            const [key, value] = attribute.split(":");

            if (key && value) {
                attributesObject[key.trim()] = value.trim();
            }
        });

        // Get the content from the markdown file
        const content = parsedContents[1];

        return {
            filename: file.filename,
            attributes: attributesObject,
            content,
        };
    });
};

export const fetchPapers = async () => {
    // Get all markdown papers in /papers
    const files = req.keys().map((filename) => {
        const file = req(filename);
        filename = filename
            .replace("./", "")
            .replace(".md", "");

        return {
            filename,
            file,
        };
    });

    // Get the content of all the files
    const papers = Promise.all(
        files.map(async (file) => {
            return fetch(file.file).then((response) => response.text());
        })
    ).then((contents) => processContents(files, contents));

    return papers;
}

export const fetchPaper = async (query) => {
    // Import the specific paper

    const req = require.context("../../papers", true, /\.md$/);

    // Get the filename from the query
    const filename = query.queryKey[1];

    // Get the file
    const file = req(`./${filename}`);

    // Get the content of the file
    const paper = await fetch(file).then((response) => response.text());

    return processContents([file], [paper])[0];
}