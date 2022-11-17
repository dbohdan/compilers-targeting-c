export const stringToArray = (string) => {
    if (!string) return []
    if (Array.isArray(string)) return string.map(s => s.trim());
    return string.split("|").map(s => s.trim())
}

export const lowercaseArrayOfStrings = (array_of_strings) => {
    return array_of_strings.map(s => s.toLowerCase())
}

export const escapeString = (string) => {
    if (!string) return "";
    return string.replace(/\|/g, "\\|")
}

export const link = (link, description) => {
    if (description) {
        return `[${escapeString(description)}](${link})`
    }
    return link
}

export const tableRow = (items) => `| ${ items.join(" | ") } |`
export const tableHeader = (items) => tableRow(items) + "\n| " + items.map(i => "---").join(' | ') + " |"
