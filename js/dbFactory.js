app.factory('PlacesAroundFactory', function ($cordovaSQLite, $q) {

	return {
		salvarUsuario : function(usuario) {
			var query = "insert into usuario (nome, idade, sexo, login, senha)" +
			        "values (?, ?, ?, ?, ?)";
			var parameters = [usuario.nome, usuario.idade, usuario.sexo, usuario.login, usuario.senha];
			return $cordovaSQLite.execute(db, query, parameters);
		},
		buscarUsuario : function(usuario) {
			var query = "select nome from usuario where login = ?";
			var q = $q.defer();
			var parameters = [usuario.login];
			$cordovaSQLite.execute(db, query, parameters).then(function (result) {
				var output = [];
				for (var i = 0; i < result.rows.length; i++) {
					output.push(result.rows.item(i));
				}
				q.resolve(output);
			});
			return q.promise;
		},
		buscarLogin : function(usuario) {
			var query = "select nome, idade, sexo from usuario where login = ? and senha = ?";
			var parameters = [usuario.login, usuario.senha];
			var q = $q.defer();
			$cordovaSQLite.execute(db, query, parameters).then(function (result) {
				var output = [];
				for (var i = 0; i < result.rows.length; i++) {
					output.push(result.rows.item(i));
				}
				q.resolve(output);
			});
			return q.promise;
		},
		editarUsuario : function(usuario) {
			var query = "update usuario set nome = ?, idade = ?, sexo = ?, senha = ?" +
				        "where login = ?";
			var parameters = [usuario.nome, usuario.idade, usuario.sexo, usuario.senha, usuario.login];
			return $cordovaSQLite.execute(db, query, parameters);				
		}		
	}
});