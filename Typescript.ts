// let num1 = 1;

// function calculate(num1: number, num2: number) {
//     return num1 + num2;
// }

// console.log(calculate(num1, 3));

// function getTotal(numbers: Array<number>) {
//     return numbers.reduce((acc, item) => {
//         return acc + item;
//     }, 0);
// }

// console.log(getTotal([3, 2, 1]));

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     role: 'professor',
// };
// console.log(user);

// number
// string
// arr[]
// boolean

// Type alias

// type User = {
//     name: string;
//     age: number;
//     address?: string;
// };

// function login(userData: User): User {
//     return userData;
// }

// const user = {
//     name: 'Rakesh K',
//     age: 30,
// };

// console.log(login(user));

// type ID = number | string;

// const userId: ID = '123';
// Interfaces
// interface Transaction {
//     payerAccountNumber: number;
//     payeeAccountNumber: number;
// }

// interface BankAccount {
//     accountNumber: number;
//     accountHolder: string;
//     balance: number;
//     isActive: boolean;
//     transactions: Transaction[];
// }

// const transaction1: Transaction = {
//     payerAccountNumber: 123,
//     payeeAccountNumber: 455,
// };

// const transaction2: Transaction = {
//     payerAccountNumber: 123,
//     payeeAccountNumber: 456,
// };

// const bankAccount: BankAccount = {
//     accountNumber: 123,
//     accountHolder: 'John Doe',
//     balance: 4000,
//     isActive: true,
//     transactions: [transaction1, transaction2],
// };

// Extend
// interface Book {
//     name: string;
//     price: number;
// }

// interface EBook extends Book {
//     // name: string;
//     // price: number;
//     fileSize: number;
//     format: string;
// }

// interface AudioBook extends EBook {
//     // name: string;
//     // price: number;
//     // fileSize: number;
//     // format: string;
//     duration: number;
// }

// const book: AudioBook = {
//     name: 'Atomic habits',
//     price: 1200,
//     fileSize: 300,
//     format: 'pdf',
//     duration: 4,
// };

// Merge
// interface Book {
//     name: string;
//     price: number;
// }

// interface Book {
//     size: number;
// }

// const book: Book = {
//     name: 'Atomic habits',
//     price: 1200,
//     size: 45,
// };

// type Book = {
//     name: string;
//     price: number;
// }

// type Book = {
//     size: number;
// }
