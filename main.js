var CSList = /** @class */ (function () {
    function CSList() {
        this.Content = [];
    }
    CSList.prototype.Add = function (item) {
        if (!this.Content.includes(item))
            this.Content.push(item);
    };
    CSList.prototype.Remove = function (item) {
        for (var i = 0; i < this.Count(); i++) {
            if (this.Content[i] == item) {
                this.Content.splice(i, 1);
                break;
            }
        }
    };
    CSList.prototype.RemoveAt = function (index) {
        if (this.Count() > 0)
            this.Content.splice(index, 1);
    };
    CSList.prototype.Count = function () {
        return this.Content.length;
    };
    return CSList;
}());
var CSDictionary = /** @class */ (function () {
    function CSDictionary() {
        this.Content = [[], []];
    }
    Object.defineProperty(CSDictionary.prototype, "Keys", {
        get: function () {
            var content = [];
            for (var i = 0; i < this.Content[0].length; i++) {
                content.push(this.Content[0][i]);
            }
            return content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSDictionary.prototype, "Values", {
        get: function () {
            var content = [];
            for (var i = 0; i < this.Content[1].length; i++) {
                content.push(this.Content[1][i]);
            }
            return content;
        },
        enumerable: false,
        configurable: true
    });
    CSDictionary.prototype.Add = function (Key, Value) {
        if (!this.Content[0].includes(Key)) {
            this.Content[0].push(Key);
            this.Content[1].push(Value);
        }
    };
    CSDictionary.prototype.Remove = function (Key) {
        for (var i = 0; i < this.Content[0].length; i++) {
            if (this.Content[0][i] == Key) {
                this.Content[0].splice(i, 1);
                this.Content[1].splice(i, 1);
                break;
            }
        }
    };
    CSDictionary.prototype.RemoveAt = function (index) {
        if (this.Count() > 0) {
            this.Content[0].splice(index, 1);
            this.Content[1].splice(index, 1);
        }
    };
    CSDictionary.prototype.Count = function () {
        return this.Content[0].length;
    };
    return CSDictionary;
}());
