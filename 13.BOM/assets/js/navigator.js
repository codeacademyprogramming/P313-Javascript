console.log(window.navigator);

for (let key in window.navigator) {
    let value = window.navigator[key];
    console.log(key, value);
}