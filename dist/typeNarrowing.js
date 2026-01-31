function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `Chai order : ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving chai: ${msg}`;
    }
    return "Serving plain chai";
}
function serveChai(size) {
    if (size === "small") {
        return "Serving small chai";
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`;
    }
    return `Serving order ${size}`;
}
class KulhadChai {
    serve() {
        return "Serving chai in kulhad";
    }
}
class Cutting {
    serve() {
        return "Serving cutting chai";
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} spoons of sugar`;
    }
    return `Serving ${item} chai`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala chai`;
            break;
        case "elaichi":
            return `Masala chai`;
            break;
        case "GingerChai":
            return `Masala chai`;
            break;
    }
}
function brew(order) {
    if ("spiceLevel" in order) {
        //
    }
}
function isStringArray(arr) {
}
export {};
//# sourceMappingURL=typeNarrowing.js.map