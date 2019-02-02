module.exports = {
  hooks: {
    "pre-commit": "npm run lint && npm run lint:config",
    "pre-push": "npm run lint && npm run lint:config"
  }
};
