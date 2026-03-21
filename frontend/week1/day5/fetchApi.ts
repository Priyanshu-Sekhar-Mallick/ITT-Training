//* fetch Api - It is the way to fetch data from the server.

//* Example
type User ={
    name:string,
    id:number,
    email:String
};
async function getUser(): Promise<void> {
    let response: any = await fetch("https://jsonplaceholder.typicode.com/users"); // this is a api and will return some fake data
    let data: User[] = await response.json();
    // console.log(data); instead of return all data print only users name

    data.forEach(user=> {
        console.log(user.name);
    });
}
getUser();


//* Examples 2
type Post = {
    id:number,
    userId:number,
    title:string,
    body:string
};  

async function getPost(): Promise<void> {
    let response: any = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data: Post[] = await response.json();

    data.forEach((post: Post) => {
        console.log(post.title);
    });
}
getPost();

