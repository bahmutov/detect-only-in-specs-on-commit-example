# detect-only-in-tests

How to stop committing test files with `it.only` in BDD tests?

1. Use [eslint][eslint] with whatever rules you want
2. Add [eslint-plugin-no-only-tests][eslint-plugin-no-only-tests] and maybe set
  it as a warning by default

```json
{
  "plugins": [
    "no-only-tests"
  ],
  "rules": {
    "no-only-tests/no-only-tests": 1
  }
  }
```

3. Use [husky][husky] and [lint-staged][lint-staged] to grab changed files
  before commit
4. Enable "no-only-tests" rule in the `lint-staged` command from command
  line using [eslint --rule][eslint --rule] to enable the rule.
  The `package.json` should define a script name invoked by the linter

```json
"scripts": {
  "test": "eslint src/*.js",
  "precommit-lint": "eslint --fix --rule 'no-only-tests/no-only-tests: 2'",
  "precommit": "lint-staged"
},
"lint-staged": {
  "src/*.js": ["precommit-lint", "git add"],
  "verbose": false
}
```

Try committing JS file with `it.only` block and it reports and error

```sh
$ git commit -m "try commit"

> husky - npm run -s precommit
> husky - node v6.8.1

 ❯ Running tasks for src/*.js
   ✖ precommit-lint
     git add
 ↓ Running tasks for verbose [skipped]
   → No staged files match verbose
🚫 precommit-lint found some errors. Please fix them and try committing again.

/Users/git/detect-only-in-specs/src/foo-spec.js
  2:6  error  it.only not permitted  no-only-tests/no-only-tests

✖ 1 problem (1 error, 0 warnings)

> husky - pre-commit hook failed (add --no-verify to bypass)
> husky - to debug, use 'npm run precommit'
```

[eslint]: http://eslint.org/
[eslint-plugin-no-only-tests]: https://github.com/levibuzolic/eslint-plugin-no-only-tests
[eslint --rule]: http://eslint.org/docs/user-guide/command-line-interface#--rule
[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged#readme
