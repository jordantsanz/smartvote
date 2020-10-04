/* eslint-disable max-len */
const Apify = require('apify');

Apify.client.setOptions({ token: 'HPHxehsbm8m2t4iEvWpu8sFeJ' });

const axios = require('axios');

let data = '';

const config = {
  method: 'get',
  url: 'https://api.apify.com/v2/acts/pocesar~facebook-pages-scraper/runs/last/dataset/items?token=HPHxehsbm8m2t4iEvWpu8sFeJ\n',
  headers: {
    Cookie: 'AWSALB=CJFq9Ff621KPwyrNjrbVdikBoCaXzEvywP4PU+TEED2YEJEufiqiHIJAhSUBW2ms67c1AebTxKBUC07L49dZ7HKeF4wersmImyHNVpMN6MrtIYQc5iEteMxFCd1r; AWSALBCORS=CJFq9Ff621KPwyrNjrbVdikBoCaXzEvywP4PU+TEED2YEJEufiqiHIJAhSUBW2ms67c1AebTxKBUC07L49dZ7HKeF4wersmImyHNVpMN6MrtIYQc5iEteMxFCd1r',
  },
  data,
};
/*
Apify.main(async () => {
  console.log('hello');
  const run = await Apify.call('pocesar/facebook-pages-scraper', {
    startUrls: [
      {
        url: 'https://www.facebook.com/TaylorSwift/',
      },
    ],
    language: 'en-US',
    maxPosts: 10,
    maxPostDate: '2019-01-01',
    maxPostComments: 0,
    maxCommentDate: '2020-01-01',
    maxReviews: 0,
    maxReviewDate: '2020-01-01',
    proxyConfiguration: {
      useApifyProxy: true,
    },
  });
  console.log('Actor finished, here is the output:');
  console.dir(run);
  // console.log(hello);
});

*/
let values = '';
axios(config)
  .then((response) => {
    data = JSON.stringify(response.data);
    const obj = JSON.parse(data)[0].posts;
    // console.log(obj);
    for (const each in obj) {
      if (each) {
        values += obj[each].postText;
      }
    }
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });

// get data from:
// https://api.apify.com/v2/acts/pocesar~facebook-pages-scraper/runs/last/dataset/items?token=HPHxehsbm8m2t4iEvWpu8sFeJ

// then we need to get postTest from each post, which is what we'll run through the IBM api
