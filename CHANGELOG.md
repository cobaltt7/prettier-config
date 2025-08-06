# Changelog

We use semantic versioning (SemVer).
[More information here](https://semver.org/).

## [v3.4.4](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.4.4) (2025-08-06) - **Latest**

- Ignore tables when condensing Markdown
- Bump dependencies, fixing the following notable issues:
    - Error on Prettier 3.6 when formatting files with JSDoc
    - Error when formatting .d.ts files, skipping import sorting

## [v3.4.3](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.4.3) (2025-05-03)

- Fix issues with one sentence Markdown formatting

## [v3.4.2](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.4.2) (2025-05-03)

- Publish missing file

## [v3.4.1](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.4.1) (2025-05-03)

## [v3.4.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.4.0) (2025-05-03)

- Add `prettier-plugin-organize-attributes`
- Enforce one sentence per line in Markdown
- Remove `prettier-plugin-ini`
- Set `jsdocPrintWidth` to inherit from `printWidth` (100)
- Bump dependencies

## [v3.3.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.3.0) (2025-04-18)

- Set `htmlWhitespaceSensitivity` to `strict`
- Set `objectWrap` to `collapse`
- Set `experimentalOperatorPosition` to `start`
- Remove shrinkwrap file
- Bump dependencies

## [v3.2.1](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.2.1) (2024-11-29)

- Widen Prettier peer dependency range

## [v3.2.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.2.0) (2024-11-29)

- Add `prettier-plugin-css-order`
- Bump dependencies

## [v3.1.1](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.1.1) (2024-10-26)

- Fix dev dependencies

## [v3.1.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.1.0) (2024-10-26)

- Add `@ianvs/prettier-plugin-sort-imports`
- Bump dependencies

## [v3.0.2](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.0.2) (2024-06-15)

- Wrap prose in Markdown files
- Bump dependencies

## [v3.0.1](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.0.1) (2024-03-26)

- Revert `printWidth` change

## [v3.0.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.0.0) (2024-03-21)

- Use Prettier v3
- Update various format options
- Bump dependencies

## [v2.0.2](https://www.npmjs.com/package/@redguy12/prettier-config/v/2.0.2) (2022-11-27)

- Bump prettier-plugin-packagejson and @types/prettier.

## [v2.0.1](https://www.npmjs.com/package/@redguy12/prettier-config/v/2.0.1) (2022-11-26)

- Bump Prettier and prettier-plugin-jsdoc.

## [v2.0.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/2.0.0) (2022-08-09)

Breaking change:

- Replace `prettier-package-json` with `prettier-plugin-packagejson`.

Upgrade guide:

- Uninstall `prettier-package-json` with `npm rm prettier-package-json`.
- Remove the `prettier-package-json` field from your `package.json`.
- Remove the `&& prettier-package-json --write` portion of the `lint:prettier` NPM script.

## [v1.2.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/1.2.0) (2022-07-29)

- Version bump only.

## [v1.1.2](https://www.npmjs.com/package/@redguy12/prettier-config/v/1.1.2) (2022-07-29)

- Bump the `jsdocPrintWidth` to 140.
- Enable `jsdocPreferCodeFences`.
- Enable `--cache`.
- Bump dependencies.
- Format code.

## [v1.1.1](https://www.npmjs.com/package/@redguy12/prettier-config/v/1.1.1) (2022-07-29)

- Fix typo in README.
- Update dependencies.
- Fix crash.

## [v1.1.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/1.1.0) (2022-02-13)

- Explicitly enable `embeddedLanguageFormatting`.
- Always quote properties in JSONC files.
- Parse all files under `.vscode/` as JSONC.
- Encourage using alongside `prettier-package-json`.

## [v1.0.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/1.0.0) (2022-01-10)

- Initial release.
