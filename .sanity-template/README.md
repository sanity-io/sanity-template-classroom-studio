
# Running the template (for developing the Starter)

This repository isn't your typical Sanity Studio. That exists inside the `/templates/studio` directory and is what you get from clicking the Create button. This is a template to create a [1-click Starter](https://sanity.io/create). If you want to help maintain this Starter, you'll need to install the `sanity-template` CLI.

```sh
npm i -g sanity-template
```

Then in the root directory, you can run a watcher with the CLI to watch the files in the `/template` directory for changes. The changes are then built in the `/build` directory. On first run, you'll need to run `sanity install` and `sanity start` in the `/build/studio` directory.

Adjust the variables in `template-values-development.json` to match a Sanity project you create and then run:

```sh
sanity-template watch --template-values template-values-development.json
```

### Working Directory: `/template/studio`
### Directory to run the Studio: `/build/studio`
