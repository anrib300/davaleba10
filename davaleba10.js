//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
 
function nums(m, n) {
    if (m > n) {
        return m;
    } else if (m < n) {
        return n;
    } else return 0;
}
console.log(nums(4, 5));
 
//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
 
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 3));
 
//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს( ფუნქციას არ აქვს პარამეტრი)
 
function Name() {
    let name = 'Anri Bardavelidze';
    console.log(name);
}
Name()
 
//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
 
function fullName(firstname, lastname) {
    return firstname + lastname;
}
console.log(fullName('Anri ', 'Bardavelidze'));
 
//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. Უნდა გამოიყენოთ თქვენთვის სასურველი ციკლი)
 
function numbs(n) {
    for (var i = 1; i < n; i++) {}
    return i * n;
}
console.log(numbs(7));
 
//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
 
let person = {
    firstname: 'Anri',
    lastname: 'Bardavelidze',
    age: 27,
    scores: [4, 7, 5, 3, 2],
    Method() {
        console.log(this.firstname + ' ' + this.lastname);
    }
}
person.Method();
 
//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
 
let object = {
    firstname: 'Anri',
    lastname: 'Bardavelidze',
    age: 27,
    scores: [4, 7, 5, 3, 2],
}
 
 
function Sum() {
    let sum = 0;
    for (let i = 0; i < object.scores.length; i++) {
        sum += object.scores[i];
    }
    return sum;
}
console.log(Sum());
 
//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
 
let MyName = {
    firstname: 'Anri',
    lastname: 'Bardavelidze',
    age: 27,
    Method() {
        console.log(this.firstname + ' ' + this.age);
    }
}
MyName.Method();
