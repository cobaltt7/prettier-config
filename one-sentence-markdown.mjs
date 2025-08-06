import markdown from "prettier/parser-markdown";

export const parsers = {
	markdown: {
		...markdown.parsers.markdown,
		preprocess(text) {
			return text
				.split("```")
				.map((section, index) => {
					if (index % 2 === 1) return section;
					return section
						.replaceAll(/(?<!\n)\n(?! *(?:$|\d+\.|[|>\n*+#-]|\[.+\]: ))/g, " ")
						.split("\n")
						.map(visitLine)
						.join("\n");
				})
				.join("```");
		},
	},
};

/**
 * @author Adapted From
 *   https://github.com/JoshuaKGoldberg/sentences-per-line/blob/main/src/sentences-per-line.ts.
 */
function visitLine(line, indentation = 0) {
	// Ignore headings
	if (/^\s*#/.test(line)) return line;

	// Ignore any starting list number, e.g. "1. " or " 1. "
	const listIndent = line.match(/^\s*(?:\d+\.|-)\s*/)?.[0].length ?? 0;
	let index = listIndent;

	for (; index < line.length - 2; index += 1) {
		index = getNextIndexNotInCode(line, index);
		if (index === undefined || index >= line.length - 2) return line;

		if (
			[".", "?", "!"].includes(line[index])
			&& line[index + 1].trim() === ""
			&& !isAfterIgnoredWord(line, index)
		) {
			const lineTwo = `${" ".repeat(listIndent + indentation)}${line.slice(index + 2).trimStart()}`;
			return `${line.slice(0, index + 1)}\n${visitLine(lineTwo, listIndent + indentation)}`;
		}
	}

	return line;
}

const ignoredWords = ["ie", "i.e", "eg", "e.g", "etc", "ex"];

function isAfterIgnoredWord(line, index) {
	for (const ignoredWord of ignoredWords) {
		if (ignoredWord === line.substring(index - ignoredWord.length, index).toLowerCase())
			return true;
	}

	return false;
}

function getNextIndexNotInCode(line, index) {
	if (line[index] !== "`") return index;

	index += 1;

	// Get to the inside of this inline code segment
	while (line[index] === "`") {
		index += 1;
		if (index === line.length) return undefined;
	}

	// Get to the end of the inline code segment
	while (true) {
		index = line.indexOf("`", index);
		if (index === -1) return undefined;
		if (line[index - 1] !== "\\") break;
	}

	while (line[index] === "`") {
		index += 1;
		if (index === line.length) return undefined;
	}

	return index;
}
