"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringTodate = void 0;
var dateStringTodate = function (date) {
    var dateParts = date.split('/').map(function (item) { return parseInt(item); });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringTodate = dateStringTodate;
