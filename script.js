var Colors;
(function (Colors) {
    Colors["RED"] = "red";
    Colors["BLUE"] = "blue";
    Colors["PURPLE"] = "purple";
    Colors["GREEN"] = "green";
    Colors["YELLOW"] = "yellow";
})(Colors || (Colors = {}));

var banana = {
    name: "Banana",
    size: "small",
    flavor: "sweet",
    colors: Colors.YELLOW,
    print: function () {
        console.log("The fruit is ".concat(this.name, ", it is ").concat(this.size, " in size\n        and it is ").concat(this.flavor, ", it is color ").concat(this.colors, "."));
    },
};

var apple = {
    name: "Apple",
    size: "medium",
    flavor: "crisp and tart",
    colors: Colors.RED,
    print: function () {
        console.log("The fruit is ".concat(this.name, ", it is ").concat(this.size, " in size\n        and it is ").concat(this.flavor, ", it is color ").concat(this.colors, "."));
    },
};
banana.print();
apple.print();
