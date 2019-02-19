try {
	var clinicalApp = angular.module('bahmni.clinical');

	clinicalApp.directive('a', function () {
		var link = function ($scope, element, attrs, ngModel) {
			if(element.context.className === 'grid-row-element button orderBtn ng-binding ng-scope'){
				if($scope.test.name.display.substring(0,19) == 'Lab Group Separator'){
					element.removeClass('grid-row-element');
					element.removeClass('buttonss');
					element.removeAttr('ng-click');
					element.attr('ng-disabled','1');
					element.removeClass('orderBtn');
					element.css('min-width','94%');
					element.css('margin-bottom','10px');
					element.css('border','none');
					element.css('margin-left','0');
					element.css('padding-left','0');
					element.css('background','#ccc');
					element.css('pointer-events','none');
				}
			}
		};
		return { link: link };
	});
} catch(e) {
    console.log('App not initialized... [bahmni.clinical]');
}
