# osu!ii - Improvement Indicator

A browser extension, that adds ii (improvement indicator, a metric that compares your pp to the average player with your playtime amount) to user profiles on the osu! website. This extension isn't stable yet and it is recommended to wait for the official release in the Chrome Web Store.


## General

ii is a value describing the relationship between the players playtime and the expected amount of playtime based on pp. Simply put: It describes a players improvement speed compared to the average.

$$
ii = \frac{expected playtime}{actual playtime} 
$$

The expected playtime describes the playtime the average player would need to reach the given pp. The function for this was modelled off of a trendline showing the relationship between playtime and pp on a dataset with a sample of 20.000 players.

$$
expected playtime = 0.0183 \times pp^{1.2}
$$

Thus the formula for calculating the ii value is as follows:

$$
ii = \frac{0.0183 \times pp^{1.2}}{playtime_{hours}} 
$$


For more information, you can watch this video [video](https://www.youtube.com/watch?v=F8qqWkmtCG0). The data used to measure the average ii value can be found here [here](https://docs.google.com/spreadsheets/d/1uiXBByPjOqOvEGd0QbGaDst6KkuVsww2Q0ropcMlTVY).

If you have any questions, feel free to join my discord server [here](https://discord.com/invite/cT6vzbvpe8).

## How to use (experimental)

1. Download and unzip the repository
2. Navigate to the [extensions](chrome://extensions/) in your chrome browser
3. Enable developer mode (top right)
4. Click "Load unpacked" and select the osu!ii folder from step 1

You can now visit osu! profiles and see the ii value next to your total playtime.
