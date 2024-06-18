// //函数组合默认是从右到左执行
//
//
// function compose1(f, g, x) {
//     return function (value) {
//         return f(g(x(value)))
//     }
// }
//
// const compose = (f, g, x) => value => f(g(x(value)))
// const reverse = (arr) => arr.reverse();
// const first = (arr) => arr[0]
// const toUpper = s => s.toUpperCase();
// // let f = compose(toUpper, first, reverse);
// // console.log(f(['assa', 'sassa', 'saassasasa']))
//
//
// //lodash 中的函数组合
// const _ = require('lodash');
// let f1 = _.flowRight(toUpper, first, reverse);
// console.log(f1(['assa', 'sassa', 'saassasasa']))
//
// //lodash 函数fp模块
//
// // auto-curried iteratee-first data-last
// const fp =  require('lodash/fp');
// const f2 = fp.flowRight(fp.join('-'),fp.map(fp.toLower),fp.split(' '))
//
// console.log(f2('NEVER SAY DIE'))
//
//
// console.log(fp.map(parseInt,['2121','32','32']))

//从url中获取图片名称
// let url = 'http://10.38.136.16:38498/image/efs_MFrt4j83_001/uploadfile_1_7009eda9889357b55c206410_face/archivefile1-2021-06-22-102758-C66D27AD6D00A8C0:27381760/23925.jpg"'
//
// const lodash = require('lodash/fp');
//
// const getImageAllName = str => str.split('/').slice(-1)[0];
// const imageName = str => str.split('.')[0];
//
// const getFinalImageName = lodash.flowRight(imageName, getImageAllName);
//
// console.log(getFinalImageName(url))
//
// let jsonStr = '{"caseName":"ssddssdds","resourceCode":"dsds","caseRecordIdx":"ds5","markCode":"45445","markType":""}';
// // console.log(JSON.parse(jsonStr));
//
// let object = {imageName: getFinalImageName(url)}
//
// let obj = Object.assign(object, JSON.parse(jsonStr))
// let array = []
// for (let i=0;i<30;i++) {
//     array.push(obj)
// }
//
// console.log(array)

const {flowRight} = require('lodash/fp');


let array1 = [
    {
        "targetObjId": "yyyyyyyyy1",
        "similarity": 941,
        "ds":2,
        "check": true
    },
    {
        "targetObjId": "yyyyyyyyy2",
        "similarity": 942,
        "ds":2,
        "check": false
    },
    {
        "targetObjId": "yyyyyyyyy3",
        "similarity": 943,
        "ds":2,
        "check": true
    },
    {
        "targetObjId": "yyyyyyyyy3",
        "similarity": 943,
        "ds":2
    }
]
// const getTrue = array =>array.filter(x=>x.check === true)
//
// const getExportParam = array => array.map(el => {
//     let obj = {};
//     obj.targetObjId = el.targetObjId;
//     obj.similarity = el.similarity;
//     return obj
// });
//
// let param = flowRight(getExportParam,getTrue)
// console.log(param(array1))


// const getExportParam = array => array.map(el => {
//     if(el.check) {
//         let obj = {};
//         obj.targetObjId = el.targetObjId;
//         obj.similarity = el.similarity;
//         return obj;
//     }
// });
//
let array2 = [];


array1.forEach(el=>{
    if (el.check) {
        let obj = {};
        obj.targetObjId = el.targetObjId;
        obj.similarity = el.similarity;
        array2.push(obj)
    }
})

console.log(array2)
