app.controller('cadastroController', function($ionicPlatform, $scope, $state, PlacesAroundFactory) {

	$scope.usuario = {};
	$scope.contemErros = false;
	
	$scope.cadastrar = function() {

		$scope.usuarioEmBranco = (!$scope.usuario.login);
		$scope.sexoEmBranco = (!$scope.usuario.sexo);
		$scope.idadeEmBranco = (!$scope.usuario.idade);
		$scope.nomeEmBranco = (!$scope.usuario.nome);
		$scope.senhaEmBranco = (!$scope.usuario.senha);

		$scope.contemErros = (!$scope.usuario.login || !$scope.usuario.senha || !$scope.usuario.sexo || !$scope.usuario.idade || !$scope.usuario.nome);

		if (!$scope.contemErros) {
			PlacesAroundFactory.buscarUsuario($scope.usuario).then(function () {
				$scope.loginEmUso = true;
				$scope.contemErros = true;
			});			

			if (!$scope.contemErros) {
				PlacesAroundFactory.salvarUsuario($scope.usuario).then(function () {
					$state.go("timeline");
				});
			}
		}
	}

});