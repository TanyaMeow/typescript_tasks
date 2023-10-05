// 1.Написать тип для функции, которая принимает один аргумент - число или строку. Если пришло число - возвращает {d: 1}, если пришла строка {z: 2}
interface Obj {
    [key: string]: number,
}

type Func = (value: number | string) => Obj;

const stringOrNumber: Func = (value) => {
    return (typeof value === "number") ? {d: 1} : {z: 2};
}

const d = stringOrNumber(2).d;
const z = stringOrNumber('string').z;


// 2.Реализовать класс SomeClass

interface Methods {
    runMethodOne: number,
    runMethodTwo: void,
    runMethodThree: string
}
class SomeClass<T> {
    run<K extends keyof T>(key: K, value: T[K]) {};
}

const some = new SomeClass<Methods>();
some.run('runMethodOne', 1);
some.run('runMethodTwo', null);
some.run('runMethodThree', '');