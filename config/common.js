const home = process.env.location === 'home';

module.exports = {
  secret: {
    token: 'wechat123456',
    appid: 'wx8ebaaf46e5f6295e',
    secret: '107f52be408d8de3b4d8d0a9f41d8513',
    encodingAESKey: 'qKZrS7ClCedpfB8ovtIXaOUlnUyd4JhDH44v3STxPyq'
  },
  server: 'http://www.chengdusa.com',
  uiServer: 'http://ui.chengdusa.com',
  templates: {
    Featured: '04zVisr--LdimrcGC6qNbExIkUyrn0e3tAYQRbrtvF8',
    NewBlog: 'ZKAOh-mi-r-SV7cHjxJQEyt1UUWgXD8VRyAMvV_KJCQ',
    NewReply: '3H-Kha_OaUbPRx9LK974YLaGRMJk-1KIvMjRNycxHuI',
    Purchase: 'gkFwdlLk6K54t50eDYY9f-c6c75aSmTruNUB90WLW4I'
  }
};
