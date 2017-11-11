export class Storage {
}

Storage.StoreItem = (name, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            localStorage.setItem(name, JSON.stringify(value));
            resolve();
        }, 1000);

    })
}

Storage.GetItem = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            var item = JSON.parse(localStorage.getItem(name));
            resolve(item);
        }, 1000);

    })
} 

