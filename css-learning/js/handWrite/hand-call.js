//hand - write -call
/*
实现思路:
    根据call的规则设置上下文对象,也就是this的指向。
    通过设置context的属性,将函数的this指向隐式绑定到context上
    通过隐式绑定执行函数并传递参数。
    删除临时属性，返回函数执行结果
 */
Object.prototype.myCall = function (context, ...args) {
    if (context === null || context === undefined) {
        // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
        context = window;
    } else {
        // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
        context = Object(context);
    }
    //临时存储函数,不同的对象都是唯一的不会冲突
    const specialProtoType = Symbol('特殊临时');
    //将函数的this绑定到context上
    context[specialProtoType] = this;
    // 通过隐式绑定执行函数并传递参数。
    let result = context[specialProtoType](...args);
    // 删除上下文对象的属性
    delete context [specialProtoType];
    return result;
}


//test
var obj = {0: 'OB'}

// Array.prototype.push.call(arrayLike, '添加元素1', '添加元素2');

function foo(...args) {
    console.log( obj,args);
}

let s = foo.myCall(obj,'4744','555')