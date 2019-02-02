module.exports = {
  hooks: {
    "pre-commit": "npm run lint && npm run lint:config && npm run test",
    "pre-push": "npm run lint && npm run lint:config"
  }
};
