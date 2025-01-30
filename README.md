# oii - osu! improvement indicator

A browser extension, that adds ii (improvement indicator, a metric that compares your pp to the average player with your playtime amount) to user profiles on the osu! website.


## General

ii is a value describing the relationship between the players playtime and the expected amount of playtime based on pp. Simply put: It describes a players improvement speed compared to the average.

$$
ii = \frac{expected playtime}{actual playtime} 
$$

The expected playtime describes the playtime the average player would need to reach the given pp. The function for this was modelled off of a trendline showing the relationship between playtime and pp on a dataset with a sample of 10.000 players.

$$
expected playtime = -3.94 + 0.067 \cdot pp + 6.78 \times 10^{-6} \cdot pp^2
$$

Thus the formula for calculating the ii value is as follows:

$$
ii = \frac{-3.94 + 0.067 \cdot pp + 6.78 \times 10^{-6} \cdot pp^2}{playtime_{hours}} 
$$


For more information, you can watch [this](https://www.youtube.com/watch?v=F8qqWkmtCG0) video. The data used to create the function can be found [here](https://docs.google.com/spreadsheets/d/1uiXBByPjOqOvEGd0QbGaDst6KkuVsww2Q0ropcMlTVY).

If you have any questions or want to contribute, feel free to join my [discord server](https://discord.com/invite/cT6vzbvpe8).

## How to install

This extension is currently only available for chrome and there are two ways to install it:

### For Chrome

This is not my project - I just ported it to Firefox. To install it on Chrome, go [here](https://github.com/ferryhmm/oii).

### For Firefox (Github)

Warning: The extension will not auto-update.

1. Download and unzip the repository
2. Navigate to the [extensions](chrome://extensions/) in your chrome browser
3. Enable developer mode (top right)
4. Click "Load unpacked" and select the osu!ii folder from step 1

For a more detailed explanation check out [this](https://www.youtube.com/watch?v=nmSpWQJuTaQ) video tutorial.


