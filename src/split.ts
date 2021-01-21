export const split = (source: Array<number>, partLenght: number): Array<Array<number>> => {
    const numberOfNewItems = Math.ceil(source.length / partLenght);
    const arrayTemplate = Array(numberOfNewItems).fill(null);

    return arrayTemplate.map((_item, index) => {
        const start = index * partLenght;
        return source.slice(start, start + partLenght);
    });
};
