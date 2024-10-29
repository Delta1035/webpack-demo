// import React from 'react';
// import { createRoot } from 'react-dom/client';
// const root = createRoot(document.getElementById('app'));
// root.render(<h1>hello react!!!</h1>);
// // const app = <p>123</p>;
// // let sum = (a, b) => a + b;

/**
 * 
 * @param {*} target 装饰的目标
 * @param {*} key 装饰的key
 * @param {*} descriptor 属性描述对象
 */
function readonly(target, key, descriptor) {
    descriptor.writable = false;
}

class Person {
    @readonly PI = 3.14;

}

let p = new Person();
p.PI = 3.15;
console.log(p.PI);
