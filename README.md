# Game of Life

👾 Conway's Game of Life

## Rules

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

Concisely, we have

1. Any live cell with two or three live neighbours survives.
2. Any dead cell with three live neighbours becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

## Getting started

Clone the repository

```sh
git clone https://github.com/jsstrn/gol.git
```

Checkout the starter code in a new branch

```sh
git checkout tags/starter-code -b <my-branch-name>
```

## Run tests

Run all your tests once

```sh
npm test
```

Run all your tests with every change

```sh
npm run test:watch
```

Run test coverage report and visit [localhost:3000](http://localhost:3000/)

```
npm run test:report
```

## Development

To add a tag to a commit

```sh
git tag -a <your-tag-name>
```

Optionally include a comment in your tag

```sh
git tag -a <your-tag-name> -m "Your message for this tag"
```

To view all tags

```sh
git tag
```

To push all tags to remote repository

```sh
git push --tags
```
