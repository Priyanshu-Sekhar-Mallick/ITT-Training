//* Promise - It represents the future result, either sucess or failed.
let dataFetchPromise: Promise<string> = new Promise((resolve, reject) => {
    let isSuccessful: boolean = false;

    if(isSuccessful){
        resolve("Data received!");
    }else{
        reject("Error occured");
    }
});

//* then() - for success
dataFetchPromise.then((responseMessage: string) => {
    console.log(responseMessage);
});
//* catch() - for error
dataFetchPromise.catch((errorMessage: string) => {
    console.log(errorMessage);
});

//* async and await - used for cleaner way to handle the promise (modern way)

function getData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data received");
        }, 2000);
    });
}

async function handleDataFetch() {
    let response  = await getData();
    console.log(response );
}
handleDataFetch();


//? Examples
function stepOne() {
  return Promise.resolve("Step 1 done");
}

function stepTwo() {
  return Promise.resolve("Step 2 done");
}

async function executeSteps() {
  let stepOneResult  = await stepOne();
  console.log(stepOneResult );

  let stepTwoResult  = await stepTwo();
  console.log(stepTwoResult );
}

executeSteps();
