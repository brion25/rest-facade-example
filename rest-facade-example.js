var rest = require('rest-facade'),
    POST_ID = 1,
    Posts = new rest.Client('http://jsonplaceholder.typicode.com/posts/:id'),
    CommentsPerPost = new rest.Client('http://jsonplaceholder.typicode.com/posts/:id/comments');

Posts
    .get({id:POST_ID})
    .then(function(post){
        console.log("--- POST ---");
        console.log(post);
    });

CommentsPerPost
    .get({id:POST_ID})
    .then(function(comments){
        console.log('--- COMMENTS FOR POST '+POST_ID+' ---');
        console.log(comments);
    });
    
Posts
    .create({
        userId: 1,
        title: "Rest Facade Example!",
        body: "Follow me!!! @bartsis..."
    })
    .then(function(post){
        console.log('--- POST CREATION ---');
        console.log(post);
    })
    .catch(function(error){
        console.log(error);
    });

Posts
    .update({id:POST_ID},{
        title:'Brion Rules!'
    })
    .then(function(){
        console.log('--- POST UPDATE ---');
    })
    .catch(function(error){
        console.log('Something went wrong...');
    });

Posts
    .delete({id:(POST_ID + 1)})
    .then(function(){
        console.log('--- POST DELETE ---');
    })
    .catch(function(error){
        console.log(error);
    });