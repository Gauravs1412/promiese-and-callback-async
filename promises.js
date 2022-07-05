const posts = [
    {title:"post one", body:"this is a post one", createdAt:new Date().getTime()},
    {title:"post two", body:"this is post two", createdAt:new Date().getTime()}
]
let intervalId = 0;

function getPosts(){
    return new Promise((resolve,reject) => {
        clearInterval(intervalId);
        intervalId = setInterval(() =>{
            let ouput = ''
            for(let i=0; i<posts.length; i++){
                ouput += `<li>${posts[i].title} - last updated ${Math.floor((new Date().getTime() - posts[i].createdAt)/1000)} seconds ago</li>`
            }
        
            document.body.innerHTML = ouput;
            resolve();
    

    })
  
    })
  
   
    
}

function createPosts(post){
    return new Promise((resolve,reject) =>{

        setTimeout(() =>{
            posts.push({...post, createdAt : new Date().getTime()});
            
            const error = false;

            if(!error){
                resolve()
            }
            else{
                reject('Error:Something went wrong')
            }
    
        }, 2000)

    })
   
}


function create4thPost(post){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push({...post, createdAt:new Date().getTime()});

            const error = false;

            if(!error){
                resolve()
            }else{
                reject('Error:Something went wrong')
            }
            
    
        },3000)

    })
   
}


function deleteItem(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            // if(posts.length)
            

            
            const error = false;

            if(!error){
                
                resolve(posts.pop())
            }else {
                reject('Error:Somethong went wrong')
            }
    
        
    
        }, 3000)

    },1000)
   
}

function updateLastUserActivity(){
    return new Promise((resolve,reject) => {
        createdAt = new Date().getTime()
        resolve(createdAt)

    },1000)
}

createPosts({title:"post three", body:"this is post three"}).then(()=> {
    getPosts().then(()=>deleteItem())
})


create4thPost({title:"post four", body:"this is post four"}).then(getPosts)






