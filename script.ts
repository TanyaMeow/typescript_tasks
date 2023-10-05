'use script'

// TODO Enum

const actionMap: string[] = [
    'add', 'delete', 'update'
];

enum Enum {
    'ADD' = 'ADD',
    'DELETE' = 'DELETE',
    'UPDATE' = 'UPDATE'
}

const addMethod:Enum = Enum.ADD;
const deleteMethod:Enum = Enum.DELETE;
const updateMethod:Enum = Enum.UPDATE;

// TODO Interface

interface Func {
    (id: number, isActive: boolean, callback: () => void): (string | number) [][];
}

const func1: Func = (id, isActive, callback) => [['name', 123]];

function func(id: number, isActive: boolean, callback: () => void): (string | number) [][] {
    return [
        ['name', 123]
    ]
}

func(1, true, (): void => {});

// TODO Interface
interface People {
    id: number,
    name: string,
    items: People[];
}

const a: People = {
    id: 123,
    name: 'Eric',
    items: [
        {
            id: 55,
            name: 'Masha',
            items: []
        },
        {
            id: 34,
            name: 'Max',
            items: null
        }
    ]
};

// Ключ может оказаться любым. Нужно создать интерфейс, описывающий объект n (типизировать ключи и значения)

interface Obj {
    [key: string]: (arg: number) => string
}

const n: Obj = {
    smth: function (number) {
        return 'test';
    },
    smth2: function (number) {
        return 'test';
    },
    smth3: function (number) {
        return 'test';
    }
};