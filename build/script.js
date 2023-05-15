"use strict";
class Solutions {
    solve(init) {
        let i = 0;
        let status = false;
        let open = 0;
        let close = 0;
        if (init == '') {
            return status = true;
        }
        for (i; i < init.length; i++) {
            if (init[0] == ')')
                return (status = false);
            if (init[i] == '(') {
                open += 1;
            }
            if (init[i] == ')') {
                close += 1;
            }
        }
        if (open == close) {
            status = true;
        }
        return status;
    }
}
const example = [
    {
        id: 'soal01', soal: '()'
    }, {
        id: 'soal02', soal: '()()'
    }, {
        id: 'soal03', soal: ')('
    }, {
        id: 'soal04', soal: ''
    }, {
        id: 'soal05', soal: '((()))'
    }, {
        id: 'soal06', soal: '(()'
    }
];
window.addEventListener('load', function () {
    for (let i = 0; i < example.length; i++) {
        const el = document.getElementById(example[i].id);
        var result = String(new Solutions().solve(example[i].soal));
        el.innerHTML = `contoh  ${i + 1} : ${result}`;
    }
});
