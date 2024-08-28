window.navigation.addEventListener("navigate", (event) => {
    ii();
})

function ii() {
    const url = window.location.href;

    // Regular expression to check if the URL ends with /users/<id>/osu
    const regex = /\/users\/\d+\/osu$/;

    // Test the URL against the regular expression
    if (regex.test(url))
        return

    setTimeout(function () {
        let pp = 0;
        let playtime = 0;

        const labels = document.querySelectorAll('.value-display__label');

        labels.forEach(label => {
            // Check if the label text is 'pp'
            if (label.textContent.trim() === 'pp') {
                // Find the corresponding value element next to the label
                const valueElement = label.nextElementSibling.querySelector('.value-display__value div');

                // Get the text content of the value element and remove commas
                pp = valueElement.textContent.replace(/,/g, '');

                // Convert to a number (optional)
                pp = parseInt(pp, 10);
            }
        });

        labels.forEach(label => {
            // Check if the label text is 'pp'
            if (label.textContent.trim() === 'Total Play Time') {
                // Find the corresponding value element next to the label
                const valueElement = label.nextElementSibling.querySelector('.value-display__value span');
                // Extract the 'data-orig-title' attribute value, which contains the total hours
                const totalHours = valueElement.getAttribute('title');

                // Parse the number of hours from the string
                playtime = parseInt(totalHours.split(' ')[0].replace(',', ''));

            }
        });

        // Compute expected playtime and the ratio
        let expectedPlaytime = 1.16e-3 * Math.pow(pp, 1.17);
        let ii = expectedPlaytime / (playtime / 24);

        updateElementStyles();
        updateElementGap('10px');

        // Select a parent element to append the new element to
        const parentElement = document.querySelector('.profile-detail__values--grid');

        const outerDiv = document.createElement('div');
        outerDiv.className = 'value-display value-display--plain';

        // Create the inner label div
        const labelDiv = document.createElement('div');
        labelDiv.className = 'value-display__label';
        labelDiv.textContent = 'ii';

        // Create the inner value div
        const valueDiv = document.createElement('div');
        valueDiv.className = 'value-display__value';
        valueDiv.textContent = ii.toFixed(2) + "x";

        // Append the label and value divs to the outer div
        outerDiv.appendChild(labelDiv);
        outerDiv.appendChild(valueDiv);

        parentElement.appendChild(outerDiv)
    }, 1500)
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

