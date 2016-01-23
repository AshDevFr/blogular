(function() {
  'use strict';

  angular
    .module('blogularApp-articles')
    .controller('ArticlesController', ArticlesController);

  ArticlesController.$inject = [];

  function ArticlesController() {
    var vm = this;

    vm.articles = [
      {
        id         : 'YgTD2rF1XSAfR77lKtxrTwuR+azzbzQhUxfiRyg1u0w=_15268dcd129:9bdc0f:31e992ea',
        title      : 'Skype Finally Hides Your IP Address',
        published  : '2016-01-22T10:16:05.000Z',
        author     : 'Jamie Condliffe',
        categories : [
          'Social'
        ],
        pictureUrl : 'assets/images/sx8qioi9siejkrws79h9.jpg',
        content    : 'Way back in 2012, it came to light that a flaw in Skype made it easy for hackers to acquire your IP address. Now, finally, Microsoft has updated the software so those details are hidden by default.Skype has offered the option to hide your IP address for a little while, but the update ,which is being rolled out today, means that it’s a standard feature. Previously, it was possible to expose a perso...'
      },
      {
        id         : 'YgTD2rF1XSAfR77lKtxrTwuR+azzbzQhUxfiRyg1u0w=_15268b0ccb8:7c9da5:ab4bea13',
        title      : 'One of the World\'s Leading VR Professors Now Works for Apple',
        published  : '2016-01-22T09:27:00.000Z',
        author     : 'Jamie Condliffe',
        categories : [
          'Technology'
        ],
        pictureUrl : 'assets/images/hfvcajeeki0z5berk92w.jpg',
        content    : 'Apple is playing virtual catch-up. It’s just hired Doug Bowman, an expert in VR who was until now the Director of the Center for Human-Computer Interaction at Virginia Tech.The Financial Times reports that Bowman has joined Apple after taking a sabbatical from his position at Virginia Tech. His research is said to be focused on “three-dimensional user interface design and the benefits of immersion...'
      },
      {
        id         : 'YgTD2rF1XSAfR77lKtxrTwuR+azzbzQhUxfiRyg1u0w=_152688a6ada:7999cf:31e992ea',
        title      : 'Netflix Is Already Blocking US Content Streamed via VPN in Australia',
        published  : '2016-01-22T08:43:01.000Z',
        author     : 'Jamie Condliffe',
        categories : [
          'Media'
        ],
        pictureUrl : 'assets/images/cxodm0dgtypbakhn75xc.jpg',
        content    : 'Earlier this month, Netflix announced that it was cracking down on VPNs and proxies used to access video in other countries. It wasn’t an empty threat: the company has started blocking US content that’s accessed that way from Australia.uFlix, a company that allows people in Australia to change their IP address and DNS settings to circumnavigate geographical restrictions, reports that some of its u...'
      },
      {
        id         : 'YgTD2rF1XSAfR77lKtxrTwuR+azzbzQhUxfiRyg1u0w=_15267f0e6a0:44e232:31e992ea',
        title      : 'This Drone Video of Hong Kong Is Truly Spectacular',
        published  : '2016-01-21T18:41:00.000Z',
        author     : 'Casey Chan on Sploid, shared by Casey Chan to Gizmodo',
        categories : [
          'Technology'
        ],
        pictureUrl : 'assets/images/wvrku4oys0efyl3gq73n.gif',
        content    : 'Because of the city’s history and because of its unique geography and because of the towering buildings and because of the cramped quarters and because of all the greenery nearby and because of the water pushed up against the city, Hong Kong is a pretty magnificent place to photograph. Taking pictures of what’s above and what’s around and what’s below is always pretty to look at. This drone view o...'
      },
      {
        id         : 'YgTD2rF1XSAfR77lKtxrTwuR+azzbzQhUxfiRyg1u0w=_15267b8948b:355c97:31e992ea',
        title      : 'Seeing the Migration of Thousands of Reindeers in the Winter Is Totally Majestic',
        published  : '2016-01-21T15:08:00.000Z',
        author     : 'Casey Chan on Sploid, shared by Casey Chan to Gizmodo',
        categories : [
          'Technology'
        ],
        pictureUrl : 'assets/images/kx6peoagaxn0cqpugirp.gif',
        content    : 'Here’s absolutely gorgeous footage of a huge herd of reindeers making their way across Norway during winter from photographer Jan Helmer Olsen. Seeing all those reindeers walk through the snow in search for warmth is especially beautiful because of the aerial drone view. Their movement is almost balletic from up there.SPLOID is delicious brain candy. Follow us on Facebook, Twitter, and YouTube....'
      },
      {
        id         : 'YgTD2rF1XSAfR77lKtxrTwuR+azzbzQhUxfiRyg1u0w=_1526785953e:22e93a:ab4bea13',
        title      : 'Some Twisted Microsoft Developer Made This Awful Alarm Clock App From Hell',
        published  : '2016-01-22T04:00:00.000Z',
        author     : 'Chris Mills',
        categories : [
          'Technology'
        ],
        pictureUrl : 'assets/images/ougubgemuqs6g6cjnfom.jpg',
        content    : 'The morning and I have a hate-hate relationship that has seen more than one alarm clock shatter against an unyielding wall, so I don’t really know why a Microsoft developer would feel the need to code an alarm app that forces you to play unnecessarily ‘quirky’ and ‘fun’ games to turn it off. Mimicker is a free download on the Play Store, and it’s not exactly a complicated concept: set your alarm, ...'
      },
      {
        id         : 'YgTD2rF1XSAfR77lKtxrTwuR+azzbzQhUxfiRyg1u0w=_1526785953e:22e939:ab4bea13',
        title      : 'Watch This Toy Car Reach Speeds of 204 MPH',
        published  : '2016-01-21T17:35:00.000Z',
        author     : 'Casey Chan on Sploid, shared by Casey Chan to Gizmodo',
        categories : [
          'Technology'
        ],
        pictureUrl : 'assets/images/uv3aklryrp5ccgguekyw.gif',
        content    : 'This ain’t no regular car model car because this speed model car can hit speeds of up to 204mph on the track. Watch it build up to that speed and just zip around and around until it starts smoking and becomes a total whir.SPLOID is delicious brain candy. Follow us on Facebook, Twitter and YouTube....'
      }
    ];
  }
})();
