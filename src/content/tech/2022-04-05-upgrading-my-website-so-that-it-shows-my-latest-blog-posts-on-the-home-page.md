---
layout: blog
title: Making this website show my latest blog posts on the home page
date: 2022-04-05T03:25:56.441Z
draft: false
category: tech
path: /tech/iReadABioTellingMeToStopConceptualizingAndInsteadJustDoIt
---
In this post I will try and explain as thoroughly as possible what exactly went through my head and on the computer as I implemented showing my latest blog posts on the home page of this website.

## Initialize

To start the implementation I needed to first setup my development environment. I did so in the steps below:

1. Open the codebase in my IDE of choice which is VS Code
2. Open the integrated terminal inside VS Code
3. In the terminal execute `git pull` to pull the latest codebase of my website from github
4. In the terminal execute `gatsby develop` to start the development environment
5. Open up `http://localhost:8000/` in the browser to see my website

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4f6fe26b-233b-469c-930d-1d60c89c2c1a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T033847Z&X-Amz-Expires=86400&X-Amz-Signature=ca42d8baa5061fc5b243094dbeee814a65401cc5e453232358852c55588546fb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Re-Learn

Since I made this website 2 years ago, and have since been working with a completely different tech stack; I needed to do a quick refresher on the inner workings of this site, specifically with react.js and graphql.

1. After about 15 minutes I was able to get a bit of an idea of what was actually happening with my codebase and what I needed to do to implement what I wanted to implement.
2. Lines 40-63 of `lifestyle.js` (which is the file for my lifestyle bog page) has exactly the implementation I needed to just copy and paste into `index.js` (which is the file for my home page); then make some modifications to have it fit what I had in my vision of what I wanted. Specifically a maximum of 3 blog posts shown and to show both my lifestyle and tech blog.

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/68cc4f74-b590-4b03-a494-406b0d0d2324/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T035007Z&X-Amz-Expires=86400&X-Amz-Signature=5d7591e59db080683ef1126ce79a7cae1d2da7a5cb82ca3e907b03a5270c7027&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Start The Implementation

Now that I had an understanding of what I had already created, now I just needed to implement on top of it and learn new things as I went along.

1. Line 40 refers to my graphql query defined on lines 72-106 of `lifestyle.js` and in particular starting at line 79. We can also see the type of data getting returned from that query on the left going to `localhost:8000/___graphql` and copying and pasting that query from lines 72-106 in.
2. Now remember, I want to do a similar implementation of `lifestyle.js` (lifestyle blog page) into the `index.js` (home page). The key difference is going to be the amount of data getting shown on the home page, I am going to need to limit the amount of data returned by the graphql query because the implementation on `lifestyle.js` is showing all blog posts.
3. After a quick google and a bit of guessing found out the limit can be achieved by simply adding line 8 in the graphql query

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4bffc70b-c98a-413a-9af0-94f3ecac532f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T035228Z&X-Amz-Expires=86400&X-Amz-Signature=2ab8148fae48b6d29585d1aca805cca898735c2d38bc403673cf72764dc45ce3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/18ce0b7a-92a6-40fd-9c88-72136754b836/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T035318Z&X-Amz-Expires=86400&X-Amz-Signature=d3cf40c300191b7994d31a7d36cd02e0a58492dd450cb2d09fa55c88542878af&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

4. Sick.... Now I think i just have to copy and paste some code from lifestyle.js into index.js, then change the headers and query :)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e18098d5-a44f-4d51-8de1-cb120c194f23/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T035528Z&X-Amz-Expires=86400&X-Amz-Signature=81d4290fef9f26ef6769a697749672cc3779138d97dcd2ad7fac317957190bf3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

5. I am reminded it's never that easy...
6. Looking at the terminal I can see we have some undefined stuffs on lines 96-104 (the code i copied over into `index.js` from lifestyle.js). So it looks like I need to also copy and paste those stuffs :)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/62a53bae-1e72-4964-8a2d-400e94f29c71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T035652Z&X-Amz-Expires=86400&X-Amz-Signature=95414ab8a047e7c2e5e9de125552447d76d8a11d301db6d4be63fed39d3b4897&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

7. After copying over the missing stuffs into lines 6-21 of index.js we can now see that the page compiles with no errors!!
8. But somehow now the paragraph content looks ridiculously large... Something is happening around line 122 which is where this part is generated.
9. Found it... Because I had the entire thing surrounded by an h2 tag, you can see on line 126.

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/234ac584-a829-4629-8dc2-376b475c1c42/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T035913Z&X-Amz-Expires=86400&X-Amz-Signature=227fd9d624da3ad301e242275d9d2e6d615e1f3e7d5e5c8ddd1175d1a2042915&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Rinse and Repeat

At this point I have most of the implementation complete; From a learning perspective I have learned all I needed and the rest of the work is just a repeat of what I learned and what I previously already knew.

1. I have my latest lifestyle blog posts on my home page, but I also want a section for my tech blog posts (which is where i'm going to post this blog post).
2. In order to do that, I just need to copy and paste my implementation for the lifestyle and make minor changes to make it work for tech.
3. Yet again I am reminded it's never that easy and I am forced to do more research. I had to read this [article ](https://medium.com/analytics-vidhya/gatsby-tip-on-running-multiple-queries-graphql-aliases-dc978fe481da)for more insight on how to implement multiple graphql queries. And also watch this [video](https://www.youtube.com/watch?v=WmSJMj-gNKo) because the article wasn't enough.
4. Ì had to change the implementation slightly as shown in line 94, 119, 166, and 192. I also changed the header to match the tech section and increased limit of the queries to show 3 posts.

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b6fa680f-ef45-44c7-9b31-3a598db7b8bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T040505Z&X-Amz-Expires=86400&X-Amz-Signature=07ae5bb55d0c22dc44e5dc1c902924dc413ab6ddb2baf0e8193c720479cedf45&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Done! Time to Deploy

Now I just need to deploy the code onto the world wide web.
 To deploy the code I am simply going to stage the changes locally and then commit it up straight into my master branch because I'm a savage like that I like pushing things straight into production ;) - don't worry I don't do this at work.

1. `git status` to see the changes.
2. `git add .` to add changes to staging.
3. `git commit -m 'message here' to stage changes.
4. `git push` to push changes up to github, which is where my codebase is hosted.
5. Finally, I will check netlify, which is where my codebase gets built and deployed; and make sure it gets built properly

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f0f716a-d7e0-4601-b0f5-7ccc0ebdbbed/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T040930Z&X-Amz-Expires=86400&X-Amz-Signature=afa8299cd86374bbf8adaa16255caf6eb911aaf000252e687910ad8ae7aa3d7c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

6. And we're live!

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0f0016ce-649b-4ceb-b04a-602626f7e2b0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T040952Z&X-Amz-Expires=86400&X-Amz-Signature=dfea2cc311da9323d8c6f3a10ba444dfd179ebad728f13772cf619e12669b1b1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Conclusion

That was fun, I learned a lot and I feel like by sharing the process with the reader I gave myself a better change to retain those learnings. All in all I think it took me about 1 hour of coding, and 1 hour typing up this blog post!

If you'd like to see the exact code changes I made to make this happen check out this [commit](https://github.com/MarkDYabut/my-website/commit/82a247a29485ef1122202c8053fbb0c90052aff0).