/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Sessions from '../api/sessions/sessions.model';
import Videos from '../api/videos/videos.model';

Videos.find({}).remove()
  .then(() => {
    Videos.create({
      name: 'Rick Roll',
      author: 'Rick Astley',
      youtube: 'http://www.youtube.com/embed/sWOXYDBbz0g',
      comments: [{
        author: 'Bogdan',
        message: 'BEST VIDEO AS ALWAYS!'
      }, {
        author: 'Lucy',
        message: 'Another shitty video, meh'
      }]
    }, {
      name: 'MC Hammer - U Cant Touch This',
      author: 'MC Hammer',
      youtube: 'http://www.youtube.com/embed/Z1ktxiqyiLA',
      comments: [{
        author: 'Bogdan',
        message: 'BEST VIDEO AS ALWAYS!'
      }, {
        author: 'Lucy',
        message: 'Another shitty video, meh'
      }]
    }, {
      name: 'MC Hammer - U Cant Touch This',
      author: 'MC Hammer',
      youtube: 'http://www.youtube.com/embed/kzcyGNsj858',
      comments: [{
        author: 'Bogdan',
        message: 'BEST VIDEO AS ALWAYS!'
      }, {
        author: 'Lucy',
        message: 'Another shitty video, meh'
      }]
    }, {
      name: 'MC Hammer - U Cant Touch This',
      author: 'MC Hammer',
      youtube: 'http://www.youtube.com/embed/DBjPIabiRNg',
      comments: [{
        author: 'Bogdan',
        message: 'BEST VIDEO AS ALWAYS!'
      }, {
        author: 'Lucy',
        message: 'Another shitty video, meh'
      }]
    }, {
      name: 'MC Hammer - U Cant Touch This',
      author: 'MC Hammer',
      youtube: 'http://www.youtube.com/embed/RL_2FnIBVgI',
      comments: [{
        author: 'Bogdan',
        message: 'BEST VIDEO AS ALWAYS!'
      }, {
        author: 'Lucy',
        message: 'Another shitty video, meh'
      }]
    }, {
      name: 'MC Hammer - U Cant Touch This',
      author: 'MC Hammer',
      youtube: 'http://www.youtube.com/embed/FIqXDNNBVv0',
      comments: [{
        author: 'Bogdan',
        message: 'BEST VIDEO AS ALWAYS!'
      }, {
        author: 'Lucy',
        message: 'Another shitty video, meh'
      }]
    }, {
      name: 'MC Hammer - U Cant Touch This',
      author: 'MC Hammer',
      youtube: 'http://www.youtube.com/embed/IR6smI_YJDE',
      comments: [{
        author: 'Bogdan',
        message: 'BEST VIDEO AS ALWAYS!'
      }, {
        author: 'Lucy',
        message: 'Another shitty video, meh'
      }]
    }, {
      name: 'MC Hammer - U Cant Touch This',
      author: 'MC Hammer',
      youtube: 'http://www.youtube.com/embed/tHbCkikFfDE',
      comments: [{
        author: 'Bogdan',
        message: 'BEST VIDEO AS ALWAYS!'
      }, {
        author: 'Lucy',
        message: 'Another shitty video, meh'
      }]
    }, {
      name: 'MC Hammer - U Cant Touch This',
      author: 'MC Hammer',
      youtube: 'http://www.youtube.com/embed/ws2X48zX3Dg',
      comments: [{
        author: 'Bogdan',
        message: 'BEST VIDEO AS ALWAYS!'
      }, {
        author: 'Lucy',
        message: 'Another shitty video, meh'
      }]
    }


    );
  });


Sessions.find({}).remove()
  .then(() => {
    Sessions.create({
      name: 'Sample session',
      info: 'Just simple session for testing.',
      members: [{
        name: 'Andrey'
      }, {
        name: 'Lucy'
      }, {
        name: 'Bogdan'
      }],
      url: 'http://randomurl.com',
      video: {
        youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        score: 5,
        messages: [{
          author: 'Bogdan',
          message: 'BEST VIDEO EVER'
        }, {
          author: 'Lucy',
          message: 'Meh, worst video EVER'
        }]
      }
    });
  });

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
            + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
            + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
            + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
            + 'tests alongside code. Automatic injection of scripts and '
            + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
            + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
            + 'payload, minifies your scripts/css/images, and rewrites asset '
            + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
            + 'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test',
      videos: [{
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        score: 5,
        comments: [{
          message: 'HELLO'
        },
        {
          message: 'HELLO AGAIN'
        }]
      }],
      sessions: [{
        url: 'uniq-url-test',
        name: 'PARTY HARD',
        videos: [
          {
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            score: 5
          }
        ]
      }]
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
