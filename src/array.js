const ArrayHelper = function (array) {
    return {
        implode (delimiter =" ") {
            return array.join(delimiter);
        },

        first () {
            return array.valueOf()[0];
        },

        last () {
            return array.valueOf()[array.length - 1];
        },

        remove (key) {
            let items = array.valueOf();
            let index = array.indexOf(key);

            if (index > -1) {
                items.splice(index, 1);
            }

            return items;
        }
    }
}

module.exports = ArrayHelper;
