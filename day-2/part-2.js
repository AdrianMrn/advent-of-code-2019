// [ command, pos input 1, pos input 2, pos result ]

function getParams(array, index) {
    const command = array[index];
    const input1 = array[array[index + 1]];
    const input2 = array[array[index + 2]];
    const resultIndex = array[index + 3];

    return { command, input1, input2, resultIndex };
}

function compute(array) {
    for (i = 0; i < array.length; i = i + 4) {
        const { command, input1, input2, resultIndex } = getParams(array, i);

        switch (command) {
            case 1:
                array[resultIndex] = input1 + input2;
                break;
            case 2:
                array[resultIndex] = input1 * input2;
                break;
            case 99:
                return array;
            default:
                console.error(`Incorrect command at index ${i}: ${array[i]} in array ${array}`);
                break;
        }
    }
}

const input =
    '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,5,23,1,23,9,27,2,27,6,31,1,31,6,35,2,35,9,39,1,6,39,43,2,10,43,47,1,47,9,51,1,51,6,55,1,55,6,59,2,59,10,63,1,6,63,67,2,6,67,71,1,71,5,75,2,13,75,79,1,10,79,83,1,5,83,87,2,87,10,91,1,5,91,95,2,95,6,99,1,99,6,103,2,103,6,107,2,107,9,111,1,111,5,115,1,115,6,119,2,6,119,123,1,5,123,127,1,127,13,131,1,2,131,135,1,135,10,0,99,2,14,0,0';

const array = input.split(',').map(i => parseInt(i));

function getCommandsForResult(result) {
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            const arr = [...array];
            arr[1] = noun;
            arr[2] = verb;

            const result = compute(arr);

            if (result[0] === 19690720) {
                return { noun, verb };
            }
        }
    }
}

const { noun, verb } = getCommandsForResult(19690720);

console.log(100 * noun + verb);
