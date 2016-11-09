app.controller("loginController", function ($scope, $state, PlacesAroundFactory) {

	$scope.usuario = {};

	$scope.fazerLogin = function() {
		$scope.usuarioEmBranco = (!$scope.usuario.login);
		$scope.senhaEmBranco = (!$scope.usuario.senha);
		$scope.contemErros = (!$scope.usuario.login || !$scope.usuario.senha);
		if (!$scope.contemErros) {
			$scope.loginNaoEncontrado = true;	
			PlacesAroundFactory.buscarLogin($scope.usuario).then(function () {
				$scope.loginNaoEncontrado = false;	
				$state.go("timeline");
			});
			$scope.contemErros = ($scope.loginNaoEncontrado);	
		}
	}

	$scope.cadastrar = function() {
		$state.go("cadastro");
	}

});