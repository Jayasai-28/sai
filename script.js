// console.log("sai")
// a="sai"
// marks=22
// is_happy=true
// console.log(a,marks,is_happy)


// apple=25
// Apple=133
// console.log("apple",apple)
// console.log("Apple",Apple)


// var fullname="Jayasai"
// console.log("fullname",fullname)


// {
//     let a="sai"
//     a="sabbu"
// }
// console.log(a)


// {
//     const a="sai"
//     a="sabbu"
    
// }
// console.log(a)

/**
 * data types
 * string
 * numbers
 * boolen
 * underfines
 * null
 * bigint
 * symbol
 */

// let name="sai"
// let age=25
// let is_topper=true
// let required;
// let g=null

// let mits={
//     name:"Mits",
//     classteacher:"usha",
//     cst_strength:210,
//     is_working:true
// }
// console.log(mits)

// let sai={
//     name:"sai royal",
//     email:"busettyjayasai@gmail.com",
//     connections:76,
//     is_working:true,
//     contact:9347274724
// }
// sai.connections=sai.connections+100000
// console.log(sai.connections)


/**
 * operators in js
 * arthematic
 * +
 * -
 * *
 * /
 * %
 * **
 * ++
 * 
 */
// let num1=10
// let num2=20

// console.log("num1 + num2=",num1+num2)
// console.log("num1 -num2=",num1-num2)
// console.log("num1 *num2=",num1*num2)
// console.log("num1 / num2=",num1/num2)
// console.log("num1 ** num2=",num1**num2)
// console.log("num1 +num2=",num1+num2)


// let name="sai"
// console.log(typeof(name))

// let number=24
// console.log(number==='25')
// let number1=76
// // console.log(number1!='76')
// // /**
//  * logical operators
//  * &&
//  * ||
//  * !
//  * 
//  */
// // let a=35
// let b=32
// console.log((a+b))


// let user_input=prompt("enter your name:")
// console.log("welcome",user_input)


// let n=prompt("enter your name:")
// let age=prompt("welcome",n)
// console.log("the",age,"is".age>=18?"eligible":"not eligible","to vote")
// let age=prompt("enter the age:")
//  if(age<=5 && age>=3){
//     console.log("half ticket")
// }
// else{
//     console.log("full ticket")
// }



// let product={
//     name:'charger',
//     price:800
// }
// console.log(`the product name is ${product.name} and its price is ${product.price}`)


// let n=prompt("enter the number:")
// if(n%5==0){
//     console.log("mutilple of 5")
// } 
// else{
//     console.log("not mutilple 5")
// }


// let n=prompt("enter the number:")
// if(n<=100 && n>=90){
//     console.log("A")
// }
// else if(n<=89 && n>=80){
//     console.log("B")
// }
// else if(n<=79 && n>=70){
//     console.log("C")
// }
// else if(n<=69 && n>=60){
//     console.log("D")
// }
// elif(n<=59 && n>=50){
//     console.log("E")
// }
// else{
//     console.log("F")
// }

// let u=prompt("Enter light or dark:")
// if(u=="light"){
//     console.log("Mode is light update with white colour")
// }
// else if(u=="dark"){
//     console.log("Mode is light update with white colour")
// }
// else{
//     console.log("Enter light or dark")
// }

// let n=prompt("enter a number")
// let s=0
// for(let i=0;i<=n;i++){
//     s+=i
// }
// console.log(s)


// let i=0;
// while(i<=4){
//     if(i%2==0){
//     console.log(`sai${i}`)
//     }
//     i++
// }

// let i=1;
// do{
// console.log('sai')
// console.log(i)
// i++
// }while(i<=4)

// i=1
// do{
//     if(i%2==0){
//     console.log(i)
//     }
//     i++
// }while(i<=100)
// i=1
// do{
//     if(i%19==0){
//         console.log(i)
//     }
//     i++
// }while(i<=200)

// let name="rama murthy"
// for(let i of name){
//     console.log(i)
// }

// let name="sai"
// s=0
// for(let i of name){
// s++
// }
// console.log(s)


/**
 * for in
 */

// let name={
//     name:'sai',
//     age:22,
//     place:'madanapalli',
//     // ref:function(){
//     //     console.log(`${this.name} is of age ${this.name}`)
//     // }
// }
//     for(let i in name){
//         console.log(i,name[i])
//     }


// let i=prompt("Enter a number:")
// while(i>0){
//     u=prompt("Enter a number:")
//     if(i==u){
//         console.log("You guessed the number")
//         break
//     }
//     else{
//         console.log("Try again")
//     }
// }

// let str="hello everyone!"
// console.log(str.toUpperCase())

// let string="helllollolol"
// console.log(string.replaceAll('lo','p'))
// let u=prompt("enter a string")
// console.log(`@${u}${u.length}`)

// let marks=[89,63,99,36,90]
// marks.push(100)
// marks.pop()
// marks.unshift(100)
// marks.shift()
// marks.toLocaleString(marks.slice(0,2))
// console.log



// let array=[10,20,30,40,50]
// console.log(array.slice(3,5))


// let ar=[10,20,30,40,50]
// print(ar*2)

// let n=prompt("enter a number:")
// let n1=prompt("enter a number:")
// let n2=prompt("enter a number:")
// if(n==n1){
//     print("largest number")
// }
// else if(n1>=n2){
//     print("second largest")
// }

// let ar=[10,20,30,40,50]
// let arr=[]
// for(let i in ar){
//     arr.push(i*2)
// }
// let newArr=arr.reverse()
// console.log(newArr[1])
// let ar=[10,20,30,40,50]
// ar.forEach((el : number)=>{
//     return el*2
// })
// ar.reverse()
// console.log(ar)


// let nums=[1,2,3,5,2,582,85,52,5,25,22,232,3]
// let s=[]
// for (let i of nums){
//     if(i in s){
//         s[i]++
//     }
//     else{
//         s.push(i)
//     }
// }
// console.log(s)


// function greet(){
//     console.log("Welcome!")

// // }
// greet()
// function square(n){
//     return n**2
// console.log(square(25))}

// const greet=function(){
// console.log("hello world!")
// }
// greet()

// let matches=['csk','rcb','srh','mi','dc','pbks','lsg','gt','kkr','rr']
// for(let i=0;i<=matches.length;i++){
//     for(let j=i+1;j<=matches.length;j++){
//         console.log(`${matches[i]} vs ${matches[j]}`)
//     }
// }


// let n=prompt("enter the number:")
// if(i%n!=2){
//     console.log("its a prime")
// }
// else if(i%2==0){
//     console.log("its not")
// }

// let n=parseInt(prompt("Enter a number:"))
// function isPrime(n){
//     if(n<=1){
//         return false
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false
//         }
//     }
//     return true
// }
// function nearestprime(n){
//     let u=n+1
//     let l=n-1
//     while(true){
//         if(isPrime(u)){
//             return u
//         }
//         if(isPrime(l)){
//             return l
//         }
//         u++
//         l--
        
//     } 
// }
// if(isPrime(n)){
//     console.log(`The prime number to ${n}`)
// }
// else{
//     console.log(`The nearest prime number to ${n} is ${nearestprime(n)}`)
// }



// let n=(prompt("enter a number:"))
// function fibonnacci(n){
//     let a=0
//     let b=1
//     let c=0
//     for(let i=0;i<=n;i++){
//         console.log(a)
//         c=a+b
//         a=b
//         b=c
//     }
// }
// fibonnacci(n)


// let n=(prompt("enter a year:"))
// if(n%4==0){
//     console.log("its a leap year")
// }
// else{
//     console.log("its not a leap year")
// }

// let n=(prompt("enter a number:"))
// function factorial(n){
//     if(n==0 || n==1){
//         return 1
//     }
//     else{
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(n))

// let n=prompt("Enter a number:")
// function strong(n){
//     let s=0
//     let u=n
//     while(n>0){
//         let r=n%10
//         let f=1
//         for(let i=1;i<=r;i++){
//             f*=i
//         }
//         s+=f
//         n=Math.floor(n/10)
//     }
//     if(s==u){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(strong(n))


// let n=prompt("enter a number:")
// function armstrong(n){
//     let s=0
//     let u=n
//     while(n>=0){
//         let r=n%10
//         let f=1
//         for(let i=1;i<=r;i++){
//             f*=i
//         }
//         s+=f*s*u
//         Math.floor(n/10)
        
//     }
//     if(s==u){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(armstrong(n))


let n=prompt("enter a salary:")
let exp=2
bonus=0
if(n>exp){
    bonus=n*10
    if(bonus%10==0)
    console.log(bonus)
}
else{
    console.log("given salary and bonus")
}
