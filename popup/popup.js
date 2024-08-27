import { Client } from 'osu-web.js';
import { Auth } from 'osu-web.js';
import { buildUrl } from 'osu-web.js';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myButton').addEventListener('click', function () {
        authenticate();
    });
});

async function authenticate() {
    const url = buildUrl.authRequest(34467, "https://osu.ppy.sh/", 'public');
    window.location = url;


}