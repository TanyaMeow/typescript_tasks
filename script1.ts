// 1.Написать тип для функции, которая принимает один аргумент - число или строку. Если пришло число - возвращает {d: 1}, если пришла строка {z: 2}

// Comment. Нет смысла в этом интерфейсе, в ts есть тип object
interface Obj {
    [key: string]: number,
}

// Comment. Obj - это абсолютно любой объект
// FIXME. Задача решается через условную типизацию
type Func = (value: number | string) => Obj;

const stringOrNumber: Func = (value) => {
    return (typeof value === "number") ? {d: 1} : {z: 2};
}

// FIXME. Типизация реализована не верно. TS не понимает, что при передаче 2 будет доступно свойство d, а при 'string' z
const { d }: { d: number } = stringOrNumber(2);
const { z }: { z: number } = stringOrNumber('string');

// 2.Реализовать класс SomeClass (DONE)

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