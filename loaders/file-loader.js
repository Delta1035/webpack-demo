
/**
 * loader.raw = true; loader得到的是一个二进制的buffer；
 * 
 *  = false; loader得到的是一个utf-8字符串
 * @param {*} source 文件内容 fs.readFile
 */
function loader(source) {
    // 1.向输出目录写入一个文件 this.emitFile(filename)
    // 2.返回一个js脚本
    return `module.exports = '/${filename}xxxx.png'`;

}

loader.raw = true;
module.exports = loader;