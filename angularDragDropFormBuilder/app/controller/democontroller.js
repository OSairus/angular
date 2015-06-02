demo.controller('democontroller', ['$compile','$scope','$sce',function ($compile,$scope,$sce) {
    "use strict";
$scope.options={helper:'clone',appendTo:'body',containment:'window'};
$scope.components=[
    {id:0,name:'textbox',html:$sce.trustAsHtml('<input type="text"/>')},
    {id:1,name:'button',html:$sce.trustAsHtml('<button type="text">test button</button>')}
];

    $scope.dispcomponents=[];

    $scope.ComponentDropped=function(event,ui,currentcolumn)
    {

        if(ui.draggable.data('controlid')!==undefined)
        {

            var compid=parseInt(ui.draggable.data('controlid'));

            var comp={
                html:$scope.components[compid].html
            }
            $scope.dispcomponents.push(comp);
        }
    };

}]);
