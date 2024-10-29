
function loader(source) {
    return `module.exports = ${JSON.stringify(source)}`;
}

module.exports = loader;