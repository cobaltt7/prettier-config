# `@redguy12/prettier-config`

My Prettier style guide

## Adding To A Project

1. Install the config by running:

    ```bash
    npm install @redguy12/prettier-config prettier --save-dev --save-exact
    ```

2. Add the following to your `package.json`:

    ```json
    "prettier": "@redguy12/prettier-config",
    "scripts": { "format": "prettier --write \"**\" \"!./dist\" --ignore-unknown --cache" }
    ```

3. To format your code, simply run

    ```bash
    node --run format
    ```

Congrats!
You've successfully integrated Prettier into your project with `@redguy12/prettier-config`!
