# osu!ii - Improvement Indicator

A browser extention that adds the improvement indicator (ii) to osu! profile. The ii is a metric that compares your pp to the average player.


## General

The ii value is calculated by taking the average ii value of all players with the same playtime amount and multiplying it by your playtime amount. The formula for calculating the ii value is as follows:

$$
ii = \frac{0.0183 \times pp^{1.2}}{playtime_{hours}} 
$$


For more information, you can watch my video [video](https://www.youtube.com/watch?v=F8qqWkmtCG0). The data used to measure the average ii value can be found here [here](https://docs.google.com/spreadsheets/d/1uiXBByPjOqOvEGd0QbGaDst6KkuVsww2Q0ropcMlTVY).

If you have any questions, feel free to join my discord server [here](https://discord.com/invite/cT6vzbvpe8).

## How to use (experimental)

1. Download the repository
2. Navigate to the [extensions](chrome://extensions/) in your chrome browser
3. Enable developer mode (top right)
4. Click "Load unpacked" and select the unpacked osu!ii folder you downloaded in step 1

You can now visit  osu! profile and see the ii value next to your total playtime.
