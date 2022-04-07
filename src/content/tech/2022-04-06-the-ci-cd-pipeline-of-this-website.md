---
layout: blog
title: The CI/CD pipeline of this website
date: 2022-04-06T00:43:52.531Z
draft: false
category: tech
path: /tech/thatGirlGotMeFdUp
---
## What even is a CI/CD pipeline?

*Continuous Integration / Continuous Delivery is a method to frequently deliver apps to customers by introducing automation into the stages of app development.* If you want to read the continuation of what I just copied and pasted click [here](https://www.redhat.com/en/topics/devops/what-is-ci-cd).

## The infrastructure of this website

Below I explain at a high level what happens when I need to make any changes to the codebase; this can be changes to the actual structure of the website or changes to the content. CI/CD occur’s after I do my `git push` command which starts the entire pipeline; at this point assuming all goes well and nothing fails I do not need to do anything else. I can monitor this progress by looking at the logs of the services i’m using; in particular my build service which is Netlify.

![Untitled](/img/cicdpipeline1.png)

Luckily I was able to abstract out the process of making content changes outside of the codebase and I can simply log onto my website from anywhere (even my phone) and make changes to the content or even add new content. This is done through a really awesome content management system called Netlify CMS which I was able to build right into my hosted codebase. This stuff is really a black box (maybe grey) in relation to my understanding but I will try and draw it out as per my understanding.

![Untitled](/img/cicdpipeline2.png)

## Conclusion

There goes an 1.5 hours of my time 🙂. 

A good re-visit to one of my earlier accomplishments and how it relates to a CI/CD pipeline.

Hope it was an interesting read!