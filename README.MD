# subhuman.info

## What is this repository?

This is the public repository for the subhuman.info (my personal) web site. You may use any code in this repository for your very own projects.

If you find a bug or spelling mistake I would be glad if you could open a pull request with a fix.

## How to run the damn thing?

*Prerequisite:* You have node.js installed on your computer.

### For development

1. `git clone` the repository

2. `cd subhuman.info` into the cloned directory

3. Inside the directory run `npm install`

4. To make sure everything works fine also run `npm install -g gulp gulp-cli`

5. Run `gulp`

6. You are good to go. In development mode neither JavaScript nor CSS will be minified.

### For production

1. `git clone` the repository

2. `cd subhuman.info` into the cloned directory

3. Inside the directory run `npm install`

4. To make sure everything works fine also run `npm install -g gulp gulp-cli`

5. Run `gulp --type prod` or `gulp --type production`

6. You are good to go. In production mode JavaScript and CSS will be minified.

## License

MIT