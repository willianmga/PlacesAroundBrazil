angular.module('starter.factories', [])

.factory('RssFactory',function($cordovaSQLite, $q){
	return {
		salvarFonte : function(fonte){

			var query = "";
			var parameters = [];
			if(!fonte.id){
				query = "insert into fontes (url, nome) values (?,?)";
				parameters = [fonte.url, fonte.nome];
			} else {
				query = "update fontes set url=?, nome=? where id=?";
				parameters = [fonte.url, fonte.nome, fonte.id];
			}
			return $cordovaSQLite.execute(DB, query, parameters);

		},
		listarFontes : function(){
			
			var query = "select * from fontes";
			var q = $q.defer();
			$cordovaSQLite.execute(DB, query).then(function (result) {
			  	var output = [];
				for (var i = 0; i < result.rows.length; i++) {
				  output.push(result.rows.item(i));
				}
			  	q.resolve(output);
			});
			return q.promise;

		},
		removerFonte : function(fonte){

			var query = "delete from fontes where id=?";			
			var parameters = [fonte.id];
			return $cordovaSQLite.execute(DB, query, parameters);

		},
	}
});