(function solve() {
    String.prototype.ensureStart = function (str) {
        return this.slice(0, str.length) === str ? this.toString() : str + this;
    };

    String.prototype.ensureEnd = function (str) {
        return this.slice(-str.length) === str ? this.toString() : this + str;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (n === 0) {
            return '';
        }

        if (this.length <= n) {
            return this.toString();
        }

        let newString = '';
        for (const el of this.split(' ')) {
            if (!newString) {
                newString += el;
                continue;
            }
            if (newString.length + el.length <= n - 3) {
                newString += ' ' + el;
                continue;
            }
            break;
        }
        return (newString + '...').slice(-n);
    };

    String.format = function (string, ...params) {
        let n = params.length;
        let regEx = new RegExp(`{[0-${n}]+}`, 'g');
        return string.replace(regEx, (match) => {
            let index = Number(match.slice(1, -1));
            return params[index] === undefined ? match : params[index];
        });
    };
})();