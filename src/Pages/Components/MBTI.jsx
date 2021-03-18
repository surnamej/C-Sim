export function calStr(list) {
    var i = 0
    var e = 0
    var s = 0
    var n = 0
    var t = 0
    var f = 0
    var j = 0
    var p = 0

    list[1] === 1 ? ++n : ++s;
    list[2] === 1 ? ++i : ++e;
    list[3] === 1 ? ++t : ++f;
    list[4] === 1 ? ++j : ++p;
    list[5] === 1 ? ++t : ++f;
    list[6] === 1 ? ++i : ++e;
    list[7] === 1 ? ++j : ++p;
    list[8] === 1 ? ++p : ++j;
    list[9] === 1 ? ++j : ++p;
    list[10] === 1 ? ++n : ++s;
    list[11] === 1 ? ++i : ++e;
    list[12] === 1 ? ++t : ++f;
    list[13] === 1 ? ++s : ++n;
    list[14] === 1 ? ++f : ++t;
    list[15] === 1 ? ++e : ++i;
    list[16] === 1 ? ++s : ++n;
    list[17] === 1 ? ++s : ++n;
    list[18] === 1 ? ++p : ++j;
    list[19] === 1 ? ++e : ++i;
    list[20] === 1 ? ++t : ++f;
    list[21] === 1 ? ++s : ++n;
    list[22] === 1 ? ++i : ++e;
    list[23] === 1 ? ++p : ++j;
    list[24] === 1 ? ++f : ++t;
    list[25] === 1 ? ++t : ++f;
    list[26] === 1 ? ++j : ++p;
    list[27] === 1 ? ++e : ++i;
    list[28] === 1 ? ++n : ++s;
    list[29] === 1 ? ++f : ++t;
    list[30] === 1 ? ++n : ++s;
    list[31] === 1 ? ++j : ++p;
    list[32] === 1 ? ++e : ++i;

    var x = 1
    i === e ? list[11] === 1 ? --i : --e : x = 0;
    s === n ? list[16] === 1 ? --s : --n : x = 0;
    f === t ? list[24] === 1 ? --f : --t : x = 0;
    p === j ? list[23] === 1 ? --p : --j : x = 0;

    var str = ''

    i > e ? str = str + 'I' : str = str + 'E';
    s > n ? str = str + 'S' : str = str + 'N';
    f > t ? str = str + 'F' : str = str + 'T';
    p > j ? str = str + 'P' : str = str + 'J';

    return str;
}