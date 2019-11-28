Array.prototype.implode = function (delimiter =" ") {
    return this.join(delimiter);
}

Array.prototype.first = function () {
    return this.valueOf()[0];
}

Array.prototype.last = function () {
    return this.valueOf()[this.length - 1];
}

Array.prototype.remove = function (key) {
    let items = this.valueOf();
    let index = this.indexOf(key);

    if (index > -1) {
        items.splice(index, 1);
    }

    return items;
}
