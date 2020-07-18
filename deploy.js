const ghpages = require('gh-pages');

ghpages.publish('out', {
  branch: 'gh-pages',
  repo: 'https://github.com/ghankerson/ghankerson.github.io.git'
}, () => {
  console.log('Deployed!');
});
