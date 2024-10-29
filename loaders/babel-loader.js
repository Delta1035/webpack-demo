
/**
 * babel-loader作用是调用babel-core
 * babel-core只提供一个过程管理功能，把源代码转换成抽象语法树，进行遍历和生成，
 * 他本身也不知道具体要转换什么语法，以及语法怎么转换
 * @param {*} source 源文件字符串
 */
function loader(source) {

}

/**
 * 1. 先把es6转换成es6语法树
 * 2. 使用preset-env把es6语法树转换成es5语法树
 * 3. 再使用babel-core把es5语法树生es5代码 
 */