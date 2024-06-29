const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
    'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 
    'An Old Dog'
];
function sortBands(bandsArray) {
    const ignoreWords = ['a', 'an', 'the'];
    function compare(a, b) {
        function trimIgnoreWords(str) {
            return str.toLowerCase().split(' ')
                .filter(word => !ignoreWords.includes(word))
                .join(' ').trim();
        }

        const bandA = trimIgnoreWords(a);
        const bandB = trimIgnoreWords(b);

        if (bandA < bandB) {
            return -1;
        }
        if (bandA > bandB) {
            return 1;
        }
        return 0;
    }
    return bandsArray.slice().sort(compare);
}
function displaySortedBands() {
    const sortedBands = sortBands(bands);
    const bandList = document.getElementById('band');
    bandList.innerHTML = '';
    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
}
document.addEventListener('DOMContentLoaded', displaySortedBands);