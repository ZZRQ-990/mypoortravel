define(["app"],function(t){return t.controller("BBS1Ctry",["$scope","baseUrl","$http",function(t,n,o){o.get(n+"bbsHot").then(function(n){t.addproducts=n.data.data},function(n){t.error=n})}])});