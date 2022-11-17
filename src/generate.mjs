/*
    This is a main file to trigger README.md generation
    Execution cmd:
        node src/generate.mjs
*/

import { database } from "./database.mjs"
import { readFromFile, saveToFile } from "./utils/file.mjs";
import { escapeString, link, lowercaseArrayOfStrings, stringToArray, tableHeader, tableRow } from "./utils/misc.mjs";

export const normalizeEntry = (entry) => {
    const normalized = {
        name: entry.name,
        source_languages: stringToArray(entry.source_languages),
        target_languages: stringToArray(entry.target_languages),
        notes: entry.notes,
        links: {
            web: stringToArray(entry.links?.web),
            repo: stringToArray(entry.links?.repo),
            doc: stringToArray(entry.links?.doc)
        }
    }

    return normalized;
}

const database_normalized = database.map(normalizeEntry).sort((a, b) => { // sort ascending
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0
});

// pld - programming language description
const getTable = (pld_list) => {
    const table_content = pld_list.map(pld => {
        let name;
        if (pld.links.web.length) {
            name = link(pld.links.web[0], pld.name);
        } else {
            if (pld.links.repo.length) {
                name = link(pld.links.repo[0], pld.name);
            } else if (pld.links.doc.length) {
                name = link(pld.links.doc[0], pld.name);
            } else {
                name = pld.name;
            }
        }
    
        const languages_supported = pld.source_languages.join(", ");
        const targets_supported = pld.target_languages.join(", ");
        const notes = escapeString(pld.notes);
    
        const links = [
            pld.links.web.map(l => link(l, "web")).join(" "),
            pld.links.repo.map(l => link(l, "repo")).join(" "),
            pld.links.doc.map(l => link(l, "doc")).join(" "),
        ].filter(l => l).join(" ")
    
        return tableRow([
            name,
            languages_supported,
            targets_supported,
            notes,
            links
        ])
    
    }).join("\n")

    return tableHeader([
        "Name", "Supported languages", "Supported targets", "Notes", "Links"
    ]) + "\n" + table_content;
}

// ---

const readme_header = readFromFile("src/doc_pieces/README_header.md")
const pl_table = getTable(database_normalized)
const readme_footer = readFromFile("src/doc_pieces/README_footer.md")

saveToFile("README.md", [
    readme_header,
    pl_table,
    readme_footer
].join("\n"))
