function greet(name) {
  return `Hello ${name}`
  return `Another hello`
}

const greetMsg1 = greet()
const greetMsg2 = greet('John', 'Jane', 'Jonas')
console.log(greetMsg1, greetMsg2);

function* generator() {
  console.log('before 10')
  yield ('10')
  console.log('after 10')
  yield ([20])
  console.log('after 20')
  yield ((function () { return 'hello' })())
  console.log('after 30')
  yield (40)
  console.log('after 40')
  yield (50)
  console.log('after 50')
}

const genObj = generator();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());

const newGen = generator();

for (const v of newGen) {
  console.log(v);
}

// es6 ~ es2015 ECMAScript
// pending, rejected, resolved
const anAsyncFunc = (flag) => {
  const promiseCB = (resolve, reject) => {
    try {
      resolve('I am resolved');
    } catch (error) {
      reject('I am rejected');
    }
  }
  const promise = new Promise(promiseCB)
  return promise;
}

anAsyncFunc(true).then((value) => {
  console.log('Then', value)
}).catch((error) => {
  console.log('Catch', error)
}).finally(() => {
  console.log('Finally, I will always run')
})

async function fun() {
  try {
    anAsyncFunc().then((value) => {
      console.log(value);
    });
    console.log('first');
  } catch (error) {
    console.error(error)
  } finally {
    console.log('finally')
  }
} 

fun();
