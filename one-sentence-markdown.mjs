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
 * Adapted from
 * https://github.com/JoshuaKGoldberg/sentences-per-line/blob/main/src/sentences-per-line.ts.
 */
function visitLine(line, indentation = 0) {
	// Ignore headings
	if (/^\s*#/.test(line)) return line;

	// Ignore any starting list number, e.g. "1. " or " 1. "
	const listIndent = line.match(/^\s*(?:\d+\.|-)\s*/)?.[0].length ?? 0;
	let i = listIndent;

	for (; i < line.length - 2; i += 1) {
		i = getNextIndexNotInCode(line, i);
		if (i === undefined || i >= line.length - 2) return line;

		if (
			[".", "?", "!"].includes(line[i])
			&& line[i + 1].trim() === ""
			&& !isAfterIgnoredWord(line, i)
		) {
			const lineTwo = `${" ".repeat(listIndent + indentation)}${line.slice(i + 2).trimStart()}`;
			return `${line.slice(0, i + 1)}\n${visitLine(lineTwo, listIndent + indentation)}`;
		}
	}

	return line;
}

const ignoredWords = ["ie", "i.e", "eg", "e.g", "etc", "ex"];

function isAfterIgnoredWord(line, i) {
	for (const ignoredWord of ignoredWords) {
		if (ignoredWord === line.substring(i - ignoredWord.length, i).toLowerCase()) return true;
	}

	return false;
}

function getNextIndexNotInCode(line, i) {
	if (line[i] !== "`") return i;

	i += 1;

	// Get to the inside of this inline code segment
	while (line[i] === "`") {
		i += 1;
		if (i === line.length) return undefined;
	}

	// Get to the end of the inline code segment
	while (true) {
		i = line.indexOf("`", i);
		if (i === -1) return undefined;
		if (line[i - 1] !== "\\") break;
	}

	while (line[i] === "`") {
		i += 1;
		if (i === line.length) return undefined;
	}

	return i;
}
