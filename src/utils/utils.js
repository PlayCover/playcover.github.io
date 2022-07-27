// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function fetchJson(url, success, fail, method = 'POST', log = false) {
    fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(json => success(json))
        .catch(e => {
            if (e === undefined)
                return;
            if(log)
                console.error(e);

            if(fail !== undefined)
                fail(e)
        });
}

export function capitalize(s, all = true) {
    return s === undefined || s[0] === undefined ? undefined : (all ? s.split(" ").map((word) => word[0].toUpperCase() + word.substring(1)).join(" ") : s[0].toUpperCase() + s.substring(1));
}
