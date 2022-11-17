import fs from "fs"

export const saveToFile = (file_path, content) => {
    fs.writeFileSync(file_path, content)
}

export const readFromFile = (file_path) => {
    return fs.readFileSync(file_path, "utf-8")
}
