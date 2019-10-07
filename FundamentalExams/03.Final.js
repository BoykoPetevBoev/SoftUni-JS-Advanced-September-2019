function solve(input) {
    let followers = {
    }
    let totalLikes = {
    }
    for (let line of input) {
        if(line === 'Log out'){
            break;
        }
        let [cmd, username, likes] = line.split(': ');
        likes = Number(likes);
        if (cmd === 'New follower') {
            addFollower(username);
        }
        else if (cmd === 'Like') {
            addFollower(username);
            addLikes(username, likes);
        }
        else if (cmd === 'Comment') {
            addFollower(username);
            addComment(username);
        }
        else if (cmd === 'Blocked') {
            blockUsername(username);
        }
    }
    let sortedFollowers = sortFollowers();
    printResult();
    function addFollower(username) {
        if (!followers.hasOwnProperty(username)) {
            followers[username] = 0;
            totalLikes[username] = 0;
        }
    }
    function addLikes(username, likes) {
        followers[username] += likes;
        totalLikes[username] += likes;
    }
    function addComment(username) {
        followers[username] += 1;
    }
    function blockUsername(username) {
        if (followers.hasOwnProperty(username)) {
            delete followers[username];
            delete totalLikes[username];
        }
        else {
            console.log(`${username} doesn't exist.`);
        }
    }
    function sortFollowers() {
        let arr = Object.keys(followers)
            .sort((a, b) => a.localeCompare(b))
            .sort((a, b) => totalLikes[b] - totalLikes[a]);
        return arr;
    }
    function printResult() {
        let countFollowers = sortedFollowers.length;
        console.log(`${countFollowers} followers`);
        for(let name of sortedFollowers){
            console.log(`${name}: ${followers[name]}`);
        }
    }
}

solve([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
]);
solve([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
]);