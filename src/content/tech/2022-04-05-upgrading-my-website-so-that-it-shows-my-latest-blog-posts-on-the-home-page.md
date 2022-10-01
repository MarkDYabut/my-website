---
layout: blog
title: Making this website show my latest blog posts on the home page
date: 2022-04-05T03:25:56.441Z
draft: false
category: tech
path: /tech/making-this-website-show-my-latest-blog-posts-on-the-home-page
---
In this post I will try and explain as thoroughly as possible what exactly went through my head and on the computer as I implemented showing my latest blog posts on the home page of this website.

## Initialize

To start the implementation I needed to first setup my development environment. I did so in the steps below:

1. Open the codebase in my IDE of choice which is VS Code
2. Open the integrated terminal inside VS Code
3. In the terminal execute `git pull` to pull the latest codebase of my website from github
4. In the terminal execute `gatsby develop` to start the development environment
5. Open up `http://localhost:8000/` in the browser to see my website

![](/img/1.png)

## Re-Learn

Since I made this website 2 years ago, and have since been working with a completely different tech stack; I needed to do a quick refresher on the inner workings of this site, specifically with react.js and graphql.

1. After about 15 minutes I was able to get a bit of an idea of what was actually happening with my codebase and what I needed to do to implement what I wanted to implement.
2. Lines 40-63 of `lifestyle.js` (which is the file for my lifestyle bog page) has exactly the implementation I needed to just copy and paste into `index.js` (which is the file for my home page); then make some modifications to have it fit what I had in my vision of what I wanted. Specifically a maximum of 3 blog posts shown and to show both my lifestyle and tech blog.

![](/img/2.png)

## Start The Implementation

Now that I had an understanding of what I had already created, now I just needed to implement on top of it and learn new things as I went along.

1. Line 40 refers to my graphql query defined on lines 72-106 of `lifestyle.js` and in particular starting at line 79. We can also see the type of data getting returned from that query on the left going to `localhost:8000/___graphql` and copying and pasting that query from lines 72-106 in.
2. Now remember, I want to do a similar implementation of `lifestyle.js` (lifestyle blog page) into the `index.js` (home page). The key difference is going to be the amount of data getting shown on the home page, I am going to need to limit the amount of data returned by the graphql query because the implementation on `lifestyle.js` is showing all blog posts.
3. After a quick google and a bit of guessing found out the limit can be achieved by simply adding line 8 in the graphql query

![](/img/3.png)

![](/img/4.png)

4. Sick.... Now I think i just have to copy and paste some code from lifestyle.js into index.js, then change the headers and query :)

![](/img/5.png)

5. I am reminded it's never that easy...
6. Looking at the terminal I can see we have some undefined stuffs on lines 96-104 (the code i copied over into `index.js` from lifestyle.js). So it looks like I need to also copy and paste those stuffs :)

![](/img/6.png)

7. After copying over the missing stuffs into lines 6-21 of index.js we can now see that the page compiles with no errors!!
8. But somehow now the paragraph content looks ridiculously large... Something is happening around line 122 which is where this part is generated.
9. Found it... Because I had the entire thing surrounded by an h2 tag, you can see on line 126.

![](/img/7.png)

## Rinse and Repeat

At this point I have most of the implementation complete; From a learning perspective I have learned all I needed and the rest of the work is just a repeat of what I learned and what I previously already knew.

1. I have my latest lifestyle blog posts on my home page, but I also want a section for my tech blog posts (which is where i'm going to post this blog post).
2. In order to do that, I just need to copy and paste my implementation for the lifestyle and make minor changes to make it work for tech.
3. Yet again I am reminded it's never that easy and I am forced to do more research. I had to read this [article ](https://medium.com/analytics-vidhya/gatsby-tip-on-running-multiple-queries-graphql-aliases-dc978fe481da)for more insight on how to implement multiple graphql queries. And also watch this [video](https://www.youtube.com/watch?v=WmSJMj-gNKo) because the article wasn't enough.
4. Ì had to change the implementation slightly as shown in line 94, 119, 166, and 192. I also changed the header to match the tech section and increased limit of the queries to show 3 posts.

![](/img/8.png)

## Done! Time to Deploy

Now I just need to deploy the code onto the world wide web.
 To deploy the code I am simply going to stage the changes locally and then commit it up straight into my master branch because I'm a savage like that I like pushing things straight into production ;) - don't worry I don't do this at work.

1. `git status` to see the changes.
2. `git add .` to add changes to staging.
3. `git commit -m 'message here' to stage changes.
4. `git push` to push changes up to github, which is where my codebase is hosted.
5. Finally, I will check netlify, which is where my codebase gets built and deployed; and make sure it gets built properly

![](/img/10.png)

6. And we're live!

![](/img/11.png)

## Conclusion

That was fun, I learned a lot and I feel like by sharing the process with the reader I gave myself a better change to retain those learnings. All in all I think it took me about 1 hour of coding, and 1 hour typing up this blog post!

If you'd like to see the exact code changes I made to make this happen check out this [commit](https://github.com/MarkDYabut/my-website/commit/82a247a29485ef1122202c8053fbb0c90052aff0).