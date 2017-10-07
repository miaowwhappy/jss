;(function($){
	var dialog2 = function(outConfig){
		var me = this;
		this.config = {
			width : 100,
			height : 300,
			delay : 200,
		};
		$.extend(this.config,outConfig);
		console.log(this.config);

		this.mask = $("<div class='mask'></div>");
		this.body = $("body");
		this.creat();
		this.mask.click(function(){
			me.close();
		})
	};

	dialog2.prototype = {
		creat:function(){
			var me = this,
				mask = this.mask,
				body = this.body;
			body.append(mask);
		},
		close:function(){
			this.mask.remove();
		}

	}
	window.dialog2 = dialog2;
})(jQuery);