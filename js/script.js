
function main()
{
    //===== D A T A ============================================================

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

        this.print = function()
        {
            console.log(this.name() + ", " + this.src() + ", " + this.clicks());
        }
    }

    //===== V I E W - M O D E L ================================================

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
                vm.cats()[i].print();
                i++;
            }
        })();

        vm.current_cat = ko.observable(vm.cats()[0]);

        vm.display_cat = function()
        {
            vm.current_cat = ko.observable(this);
            console.log("Clicked cat link: " + vm.current_cat().name());
        }

        vm.register_click = function()
        {
            console.log("Clicked cat image: " + this.name());
            this.clicks(this.clicks() + 1);
        }
    }

    ko.applyBindings(new ViewModel());

    //--------------------------------------------------------------------------

    /*var controller = {

        display_cat_index : -1,

        init : function()
        {
            model.init();
            view_1.init();
            view_2.init();
        },

        get_cats : function()
        {
            return model.cats;
        },

        get_cat : function(index)
        {
            return model.cats[index];
        },

        display_cat: function(index)
        {
            if(index != this.display_cat_index)
            {
                view_2.render_cat(model.cats[index]);
                this.display_cat_index = index;
                /**/ /*console.log("Clicked link: " + this.display_cat_index);
            }
        },

        register_click: function()
        {
            /**/ /*console.log("Clicked photo: " + controller.display_cat_index);
            model.cats[this.display_cat_index].clicks++;
            view_2.render_clicks(model.cats[this.display_cat_index].clicks);
        }
    };*/


    //===== V I E W - 1 ========================================================

    /*var view_1 = {

        init : function()
        {
            this.render_catLinks(controller.get_cats())
        },

        render_catLinks : function(cats)
        {
            for(var i=0; i<cats.length; i++)
            {
                var id = 'cat_link_' + i;
                var list_element = '<li id="' + id + '">'
                    + cats[i].name
                    + '</p>';
                $("#cat-links").append(list_element);
                $("#" + id).click(
                    (
                        function(index)
                        {
                            return(
                                function()
                                {
                                    controller.display_cat(index);
                                }
                            );
                        }
                    )(i)
                );
            }
        }
        
    }


    //===== V I E W - 2 ========================================================

    var view_2 = {

        init: function()
        {
            $("#cat-img").click(this.register_click);
        },

        register_click : function()
        {
            controller.register_click();
        },

        render_clicks: function(clicks)
        {
            $("#clicks").text("Number of clicks: " + clicks);
        },

        render_cat : function(cat)
        {
            var $_cat_img = $("#cat-img");

            $("#cat-name").text(cat.name);
            $_cat_img.attr("alt", cat.name);
            $_cat_img.attr("src", cat.src);

            this.render_clicks(cat.clicks);
        }
        
    }


    //===== S T A R T ==========================================================

    controller.init();*/
    //ViewModel();
}


$(document).ready(main);


/*window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}*/