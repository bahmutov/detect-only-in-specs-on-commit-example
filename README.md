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
  line using [eslint --rule][eslint --rule]

[eslint]: http://eslint.org/
[eslint-plugin-no-only-tests]: https://github.com/levibuzolic/eslint-plugin-no-only-tests
[eslint --rule]: http://eslint.org/docs/user-guide/command-line-interface#--rule
[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged#readme
