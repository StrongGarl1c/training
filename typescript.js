// interface Person {
//     name: string;
//     age: number
// }
function op(options) {
    console.log(options);
}
function go(_a) {
    var _b = _a.left, left = _b === void 0 ? 100 : _b, elementId = _a.elementId;
    op({ left: left, elementId: elementId });
}
go({});
go({ left: 300 });
go({ elementId: 'asd' });
