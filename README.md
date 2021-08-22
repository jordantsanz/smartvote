# IvyHacks

## Check it out
Our project is deployed at https://smartvote.surge.sh/. 

(Note: due to Google Maps API billing, SmartVote unfortunately will not work for the time being, since we cannot afford to pay for the Google Maps API. However, check out a video of our demo for IvyHacks 2020 [here](https://devpost.com/software/votesmart-9eqn8l)!) 

## Inspiration
Our project was inspired by the experience of heading to the polls, excited to vote for your favorite headlining candidates but lacking any point of reference when it comes to the lesser-known local elections candidates. SmartVote hopes to help bridge this gap of knowledge through recommendations to our users based on the needs and values of the voter and the candidates - giving you the power to create your own voting guide.

## What it does
SmartVote starts by using your location and the Google Civic Information API to gather information about your upcoming elections and the candidates. Then, the user is prompted to either write a short paragraph about themselves or rate the personal importance of certain needs and values. Using this profile and candidates' campaign materials, SmartVote uses the IBM Watson Personality Insights API to create a personality profile for the voter and each of the candidates. Our algorithm then compares your profile with each of the candidates in a given race to provide a final recommendation. In addition to seeing the candidate that best fits your personal needs and values, SmartVote will show you how the other candidates line-up for any ranked-choice voting needs.

## How we built it
We used React, Redux, Javascript, HTML and CSS for the front end, and Node and Express for the backend of our project. In addition, we used a number of APIs to achieve the personalized functionality our website has. The Google Places, Google Maps, and Google Geocoding APIs helped us determine the user’s location. We then use the user’s location with the Google Civic Information API to determine which local elections the user is eligible to vote in. Finally, we pull information for the local candidates through their social media accounts and compare it with information about the user that we pull from the users’ social media accounts. Alternatively, the user can write about themselves or select which values/needs they prioritize. We then use the IBM Personality Insights API to compare the candidates’ information with the user’s information, to determine which candidates the user matches most with.

We built our API using two main endpoints, text-recommendations and slide-recommendations. These two endpoints return recommendations for which candidate most aligns with a user's needs and values based on a user's text input or self assessment. This is done using IBM's personality insights API. 

## Challenges we ran into
Our main challenge was the handling of the multiple asynchronous API calls, and making sure that we got the right timing. For a while, the calculations were correct but wouldn't update our return object correctly due to mismatches in timing. With some work on promises and awaits, and the help of IvyHacks mentor, we managed to tackle it.

Our other significant challenge was the inability to obtain a developer account/permission to work with Twitter and Facebook APIs. We hope to continue work on this product in the future which would allow us to use candidates' and users' real social media presences. In the meantime we are using 'dummy data' to simulate what the content might look like.

## Accomplishments that we're proud of
We are proud of our use of many different APIs - with each having its own niche purpose - and bringing them all together into this product. The IBM personality API in particular was really interesting and seamless to work with. The algorithm itself for calculating similarity, when planning it out, seemed pretty complicated, so we were proud that we were able to implement our idea. This is our first hackathon, and we are really satisfied with what we made in such a short amount of time.

We're also really proud of the designs that we created and the 1200+ lines of CSS that went into producing it in such a short time frame.

## What we learned
Technically speaking, we learned about the intricacies of promises and asynchronous functions, and learned how to use IBM Watson's API interface. More broadly, however, we learned that we had the ability to fully form a complex idea in such a short amount of time.

## What's next for VoteSmart
We want to make VoteSmart functional for the upcoming 2020 election, as there will be many local elections that people will vote in alongside the presidential election. Working closely with the Facebook API, Twitter API, and building a webscraper for candidates' websites would be part of this goal, as we were unable to receive permission in time for the hackathon.

But first, our team is going to get a **good night's sleep** tonight.

## The Team
Wylie Kasai - UI Design and 3D Models 🎨

Sathvika Korandla - Developer 💻

Catherine Parnell - Developer 💻

Jordan Sanz - Developer 💻

The entire team is a proud group of 22s from Dartmouth College. GBG 🌲
