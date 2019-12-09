// global session
var session = new QiSession(function(session) {}, function() {});

session.service("ALMemory").then(function(ALMemory) {
  ALMemory.getData('keyword').then(function(keyword){
        
        new Typed('#typed', {
          strings: [keyword],
          typeSpeed: 30,
          fadeOut: true,
        });

  });
  
});
