module.exports = {
  post: (url, payload) => {
    if (url === 'login') {
      switch (payload.username) {
        case 'Alex':
          // should succeed resolving
          // {
          //   data: {
          //     token: 'the-token',
          //     username: 'Alex',
          //   }
          // }

        default:
        // should fail rejecting
        // {
        //   message: 'Invalid Credentials',
        // }
      }
    }
  },
};
