const posts = [
    {title:"post one", body:"this is a post one", createdAt:new Date().getTime()},
    {title:"post two", body:"this is post two", createdAt:new Date().getTime()}
]
let intervalId = 0;

function getPosts(){
    clearInterval(intervalId);
    intervalId = setInterval(() =>{
        let ouput = ''
        for(let i=0; i<posts.length; i++){
            ouput += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago</li>`
        }
    
        document.body.innerHTML = ouput;

    }, 1000)
  
   
    
}

function createPosts(post, callback){
    setTimeout(() =>{
        posts.push({...post, createdAt : new Date().getTime()});
        callback();

    }, 2000)
}


function create4thPost(post, callback){
    setTimeout(() => {
        posts.push({...post, createdAt:new Date().getTime()});
        callback()

    },3000)
}


createPosts({title:"post three", body:"this is post three"},getPosts)

create4thPost({title:"post four", body:"this is post four"},getPosts)

