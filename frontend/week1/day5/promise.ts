//* Promise - It represents the future result, either sucess or failed.
let promise: Promise<string> = new Promise((resolve, reject) => {
    let success: boolean = false;

    if(success){
        resolve("Data received!");
    }else{
        reject("Error occured");
    }
});

//* then() - for success
promise.then((result: string) => {
    console.log(result);
});
//* catch() - for error
promise.catch((error: string) => {
    console.log("Error");
});

//* async and await - used for cleaner way to handle the promise (modern way)

function getData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data received");
        }, 2000);
    });
}

async function fetchData() {
    let resu = await getData();
    console.log(resu);
}
fetchData();


//? Examples
function step1() {
  return Promise.resolve("Step 1 done");
}

function step2() {
  return Promise.resolve("Step 2 done");
}

async function process() {
  let res1 = await step1();
  console.log(res1);

  let res2 = await step2();
  console.log(res2);
}

process();
