class NetworkService {
    redirectToResult(params) {
        $.redirect("controller", params, "POST", null, true);
    }
}