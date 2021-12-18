class NetworkService {
    fetchResult(coords, onSuccess, onFailure) {
        $.post("https://se.ifmo.ru/~s311703/web_lab1/php/main.php", coords)
            .done(function(data){ onSuccess(JSON.parse(JSON.stringify(data))); })
            .fail(function(xhr, status, error) { onFailure() });
    }
}