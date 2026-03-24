//* fetch Api - It is the way to fetch data from the server.

//* Example
type User ={
    name:string,
    id:number,
    email:String
};
async function fetchUsers(): Promise<void> {
    let apiResponse: any = await fetch("https://jsonplaceholder.typicode.com/users"); // this is a api and will return some fake data
    let userList: User[] = await apiResponse.json();
    // console.log(data); instead of return all data print only users name

    userList.forEach(user=> {
        console.log(user.name);
    });
}
fetchUsers();


//* Examples 2
type Post = {
    id:number,
    userId:number,
    title:string,
    body:string
};  

async function fetchPosts(): Promise<void> {
    let apiResponse: any = await fetch("https://jsonplaceholder.typicode.com/posts");
    let postList: Post[] = await apiResponse.json();

    postList.forEach((post: Post) => {
        console.log(post.title);
    });
}
fetchPosts();

