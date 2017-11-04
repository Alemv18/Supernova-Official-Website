var test =   {
    "id": 1,
    "urlName": "balance-at-work",
    "organization": "Balance at Work",
    "customerLocations": "across Australia, Pacific and Oceania",
    "willWorkRemotely": true,
    "website": "http://www.balanceatwork.com.au/",
    "services": "At Balance at Work, we want to help you make work a joy for your employees and you! We specialize in leadership development, talent management and career coaching, and use Spidergap as one of our tools to help employees focus their development and achieve more.",
    "offices": [
      {
        "location": "Sydney, Australia",
        "address": "Suite 1308, 109 Pitt St \nSydney 2000",
        "coordinates": "-33.8934219,151.20404600000006"
      }
    ]
  };

var obj = JSON.parse(test);

var urlName = test.urlName;

console.log(urlName);