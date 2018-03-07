//===== D A T A ================================================================

var cats_info = {

    "A": "images/a.png",
    "B": "images/b.png",
    "C": "images/c.png",
    "D": "images/d.png",
    "E": "images/e.png",
};

var cat = function(name, src)
{
    this.name = ko.observable(name);
    this.src = ko.observable(src);
    this.clicks = ko.observable(0);
}

//===== V I E W - M O D E L ====================================================

var ViewModel = function()
{
    var vm = this;

    vm.cats = ko.observableArray([]);

    (function()
    {
        i = 0;
        for(var name in cats_info)
        {
            var src = cats_info[name];
            var new_cat = new cat(name, src);
            vm.cats.push(new_cat);
            i++;
        }
    })();

    vm.current_cat = ko.observable(vm.cats()[0]);

    vm.display_cat = function()
    {
        vm.current_cat(this);
        console.log("Clicked cat link: " + vm.current_cat().name());
        console.log(vm.current_cat().src());
    }

    vm.register_click = function()
    {
        console.log("Clicked cat image: " + this.name());
        this.clicks(this.clicks() + 1);
    }
}

ko.applyBindings(new ViewModel());
