module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/quiz/general',
        destination: '/quiz/general/0',
        permanent: true,
      },
      {
        source: '/quiz/combination',
        destination: '/quiz/combination/0',
        permanent: true,
      },
      {
        source: '/quiz/airbrakes',
        destination: '/quiz/airbrakes/0',
        permanent: true,
      },
    ]
  },
}
