"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = void 0;
const split = (source, partLenght) => {
    const numberOfNewItems = Math.ceil(source.length / partLenght);
    const arrayTemplate = Array(numberOfNewItems).fill(null);
    return arrayTemplate.map((_item, index) => {
        const start = index * partLenght;
        return source.slice(start, start + partLenght);
    });
};
exports.split = split;
