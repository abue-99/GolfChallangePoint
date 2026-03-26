/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore", "perf", "ci", "revert"],
    ],
    "scope-enum": [2, "always", ["web", "api", "infra", "docs", "scripts", "deps", ""]],
    "subject-max-length": [2, "always", 72],
  },
};
