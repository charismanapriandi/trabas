module.exports = {
  reactStrictMode: true,
  async rewrite() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
};
