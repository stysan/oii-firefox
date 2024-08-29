console.log("starting extension...")
setTimeout(function () {
    console.log("executing...")
    ii();
}, 2000)

window.navigation.addEventListener("navigate", (event) => {
    const regex = /\/users\/\d+\/osu$/;
    if (regex.test(event.destination.url))
        ii();
})

function ii() {
    setTimeout(function () {
        let pp = 0;
        let playtime = 0;

        const labels = document.querySelectorAll('.value-display__label');

        labels.forEach(label => {
            // Searches for pp, then gets playtime by sibling (bc pp is same in every language)
            if (label.textContent.trim() === 'pp') {
                const ppElement = label.nextElementSibling.querySelector('.value-display__value div');
                const playtimeElement = ppElement.parentElement.parentElement.nextElementSibling.querySelector('.value-display__value span');

                playtime = parseInt(playtimeElement.getAttribute('title').split(' ')[0].replace(',', ''));
                pp = parseInt(ppElement.textContent.replace(/[,.]/g, ''));
            }
        });

        // Compute expected playtime and ii
        let expectedPlaytime = 1.16e-3 * Math.pow(pp, 1.17);
        let ii = expectedPlaytime / (playtime / 24);

        // Insert ii on website
        updateElementStyles();
        updateElementGap('8px');

        const parentElement = document.querySelector('.profile-detail__values--grid');

        const outerDiv = document.createElement('div');
        outerDiv.className = 'value-display value-display--plain';

        const labelDiv = document.createElement('div');
        labelDiv.className = 'value-display__label';
        labelDiv.textContent = 'ii';

        const valueDiv = document.createElement('div');
        valueDiv.className = 'value-display__value';
        valueDiv.textContent = ii.toFixed(2) + "x";

        outerDiv.appendChild(labelDiv);
        outerDiv.appendChild(valueDiv);

        parentElement.appendChild(outerDiv)
    }, 2000)
}

// Function to update grid-template-columns for elements with the class
function updateElementStyles() {
    // Select all elements with the class 'profile-detail__values--grid'
    const elements = document.querySelectorAll('.profile-detail__values--grid');

    // Loop through each element and update its style
    elements.forEach(element => {
        element.style.gridTemplateColumns = 'repeat(5, 1fr)';
    });
}

function updateElementGap(newGap) {
    // Select all elements with the class 'profile-detail__values'
    const elements = document.querySelectorAll('.profile-detail__values');

    // Loop through each element and update its style
    elements.forEach(element => {
        element.style.gap = newGap;
    });
}

