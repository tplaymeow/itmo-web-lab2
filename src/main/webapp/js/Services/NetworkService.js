class NetworkService {
    fetchResult(coords, onSuccess, onFailure) {
        $.get({
            url: "https://se.ifmo.ru/~s311703/web_lab1/php/main.php",
            contentType: "application/json;charset=utf-8",
            data: coords,
            success: (data) => {
                console.log(data);
                onSuccess(JSON.parse(JSON.stringify(data)));
            },
            error: onFailure
        })
    }
}