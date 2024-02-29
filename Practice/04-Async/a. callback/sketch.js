// JavaScript is synchronous.  
// Execute the code in order after hoisting.
// hoisting: var, function declaration


console.log('1');
/*
setTimeout(function(){
    console.log('2');
},1000);
*/
setTimeout(() => console.log('2'),1000);
console.log('3');

// Synchronous callback 
function printImmediately(print){
    print();
} // 함수선언이 제일 상단으로 가게 됨
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printwithDelay(print, timeout){
    setTimeout(print, timeout);
}
printwithDelay( () => console.log('async call black'), 2000);


// Callback Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(() =>
        {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                pmError(new Error('not found'));
            }

        }, 2000);
    }
    
    getRoles(user,onSuccess, onError){
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('endter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);