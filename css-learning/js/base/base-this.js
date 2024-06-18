// //this 永远指向调最后调用它的对象
// // 'use strict'
// var name = "windowsName";
// function a() {
//     var name = "Cherry";
//
//
//     console.log(this.name);          // windowsName
//
//     console.log("inner:" + this);    // inner: Window
// }
// a();//window的调用它的对象
// console.log("outer:" + this)         // outer: Window
//
// //改变第二个
// var name = "windowsName";
// var a = {
//     name: "Cherry",
//     fn : function () {
//         console.log(this.name);      // Cherry
//     }
// }
// a.fn();
//
// //a调用fn 指向a,fn打打印的是a里面的对象
//
//
//
// var name = "windowsName";
//
// function fn() {
//     var name = 'Cherry';
//     innerFunction();
//     function innerFunction() {
//         console.log(this.name);      // windowsName
//     }
// }
//
// fn()

// var arrayLike = {
//     0: 'OB',
//     1: 'Koro1',
//     length: 2
// }
// Array.prototype.push.call(arrayLike, '添加元素1', '添加元素2');
// console.log(arrayLike) // {"0":"OB","1":"Koro1","2":"添加元素1","3":"添加元素2","length":4}
//



let arr = [
    {name: 'realTimePreview', path: require('../../img/realTimePreview.png')},
    {name: 'featureRetrieval', path: require('../../img/featureRetrieval.png')},
    {name: 'realTimePreview', path: require('../../img/realTimePreview.png')},
    {name: 'electronicMap', path: require('../../img/electronicMap.png')},
    {name: 'faceRetrieval', path: require('../../img/faceRetrieval.png')},
    {name: 'keyPerson', path: require('../../img/keyPerson.png')},
    {name: 'oneMachine', path: require('../../img/oneMachine.png')},
    {name: 'caseMange', path: require('../../img/caseMange.png')}
]

let Obj = {}
arr.map(el=>{
    Obj = Object.assign(Obj,{el.name:el.path})
})