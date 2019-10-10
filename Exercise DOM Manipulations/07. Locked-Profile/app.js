function lockedProfile() {

    const profiles = document.getElementsByClassName('profile')
    Object.values(profiles).map(p => p.addEventListener('click', function (x) {
        const elements = p.children;
        if (elements[2] === x.target) {
            lockAndUnlock(elements[2], elements[4]);
        }
        if (elements[4] === x.target) {
            lockAndUnlock(elements[4], elements[2]);
        }
        if (elements[4].checked === true && x.target === elements[10]) {
            if (elements[9].style.display === 'block') {
                elements[9].style.display = 'none';
                elements[10].textContent = 'Show more';
            }
            else {
                elements[9].style.display = 'block';
                elements[10].textContent = 'Hide it';
            }
        }
        function lockAndUnlock(lock, unlock) {
            lock.checked = true;
            unlock.checked = false;
        }
    }));
}
