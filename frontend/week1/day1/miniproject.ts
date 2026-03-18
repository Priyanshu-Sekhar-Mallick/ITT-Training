let users: string[] = ["admin", "user", "guest"];
let loginUser: string = "admin";

for (let user of users) {
  if (user === loginUser) {
    console.log("Login successful");
    break;
  } else {
    console.log("Checking...");
  }
}