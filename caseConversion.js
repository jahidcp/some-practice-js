let userName = "Jahidul Islam";
console.log(userName.toUpperCase())

let fullName = "JahidulislaM"

if( userName.toLowerCase() === fullName.toLowerCase()){
    console.log("This is a Valid User for Wallet Verified Requested.")
}
else{
    console.log("This is not a Valid User. Instantly Banned.")
}