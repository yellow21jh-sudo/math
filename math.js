(function () {
    if (!Entry) return;

    Entry.MathPlus = {
        name: 'MathPlus',
        template: {
            blocks: [
                'quadratic_root_plus',
                'quadratic_root_minus',
                'discriminant',
                'power_n',
                'nth_root',
                'factorial'
            ]
        },
        block: {
            quadratic_root_plus: {
                color: '#FF8A65',
                skeleton: 'basic_string_field',
                params: [
                    { type: 'Block', accept: 'number', defaultType: 'number' },
                    { type: 'Block', accept: 'number', defaultType: 'number' },
                    { type: 'Block', accept: 'number', defaultType: 'number' }
                ],
                paramsKeyMap: { A: 0, B: 1, C: 2 },
                class: 'MathPlus',
                func: function (sprite, script) {
                    const A = script.getNumberValue('A', script);
                    const B = script.getNumberValue('B', script);
                    const C = script.getNumberValue('C', script);
                    const D = B * B - 4 * A * C;
                    if (D < 0) return '허수';
                    return (-B + Math.sqrt(D)) / (2 * A);
                }
            },

            quadratic_root_minus: {
                color: '#FF7043',
                skeleton: 'basic_string_field',
                params: [
                    { type: 'Block', accept: 'number', defaultType: 'number' },
                    { type: 'Block', accept: 'number', defaultType: 'number' },
                    { type: 'Block', accept: 'number', defaultType: 'number' }
                ],
                paramsKeyMap: { A: 0, B: 1, C: 2 },
                class: 'MathPlus',
                func: function (sprite, script) {
                    const A = script.getNumberValue('A', script);
                    const B = script.getNumberValue('B', script);
                    const C = script.getNumberValue('C', script);
                    const D = B * B - 4 * A * C;
                    if (D < 0) return '허수';
                    return (-B - Math.sqrt(D)) / (2 * A);
                }
            },

            discriminant: {
                color: '#FFA726',
                skeleton: 'basic_string_field',
                params: [
                    { type: 'Block', accept: 'number', defaultType: 'number' },
                    { type: 'Block', accept: 'number', defaultType: 'number' },
                    { type: 'Block', accept: 'number', defaultType: 'number' }
                ],
                paramsKeyMap: { A: 0, B: 1, C: 2 },
                class: 'MathPlus',
                func: function (sprite, script) {
                    const A = script.getNumberValue('A', script);
                    const B = script.getNumberValue('B', script);
                    const C = script.getNumberValue('C', script);
                    return B * B - 4 * A * C;
                }
            },

            power_n: {
                color: '#AB47BC',
                skeleton: 'basic_string_field',
                params: [
                    { type: 'Block', accept: 'number', defaultType: 'number' },
                    { type: 'Block', accept: 'number', defaultType: 'number' }
                ],
                paramsKeyMap: { BASE: 0, EXP: 1 },
                class: 'MathPlus',
                func: function (sprite, script) {
                    const base = script.getNumberValue('BASE', script);
                    const exp = script.getNumberValue('EXP', script);
                    return Math.pow(base, exp);
                }
            },

            nth_root: {
                color: '#66BB6A',
                skeleton: 'basic_string_field',
                params: [
                    { type: 'Block', accept: 'number', defaultType: 'number' },
                    { type: 'Block', accept: 'number', defaultType: 'number' }
                ],
                paramsKeyMap: { VALUE: 0, N: 1 },
                class: 'MathPlus',
                func: function (sprite, script) {
                    const value = script.getNumberValue('VALUE', script);
                    const n = script.getNumberValue('N', script);
                    return Math.pow(value, 1 / n);
                }
            },

            factorial: {
                color: '#26C6DA',
                skeleton: 'basic_string_field',
                params: [
                    { type: 'Block', accept: 'number', defaultType: 'number' }
                ],
                paramsKeyMap: { N: 0 },
                class: 'MathPlus',
                func: function (sprite, script) {
                    let n = script.getNumberValue('N', script);
                    if (n < 0) return '오류';
                    let result = 1;
                    for (let i = 1; i <= n; i++) {
                        result *= i;
                    }
                    return result;
                }
            }
        }
    };

    Entry.block['MathPlus'] = Entry.MathPlus.block;
})();
