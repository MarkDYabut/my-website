---
layout: blog
title: Learning about git forks
date: 2022-10-13T17:42:42.014Z
draft: false
category: tech
path: /tech/today-i-learn-about-git-forks
---
##Today I learn about git forks
Which are

> *Simply a copy of an existing repository in which the new owner disconnects the codebase from previous committers. A fork often occurs when a developer becomes dissatisfied or disillusioned with the direction of a project and wants to detach their work from that of the original project.* -- <a href="https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/command-line-GitHub-fork-CLI-terminal-shell#:~:text=A%20fork%20in%20Git%20is,that%20of%20the%20original%20project.">TheServerSide</a>

![git fork vs git branch](/img/screen-shot-2022-10-13-at-4.19.13-pm.png "git fork vs git branch")

###There is no `git fork` command
From the command line you are able to `git clone` a repo, but there is actually no `git fork` command in the command line interface CLI. The process is actually a bit different than your usual git interactions with the CLI.

###To fork your repo
You can create a fork simply by copying the git repository to a new folder and then removing any remote references in the git config file. Doing so will create an isolated and independent git fork that will no longer sync with the original repo that it was associated to.

##To be continued
Unfortunately at this point I realized a `git fork` is not what I want to do and I will instead just do a `git branch`. As I was trying to decide if i want to fork or branch my framework for it's individual implementations.
B﻿y doing a `git branch` I can easily switch between implementations when demonstrating the individual implementations with the use of `git checkout`
I﻿mplementations will be driven by the gherkin scenarios below, which mean that implementations would be driven by some sort of business logic (so that it is useful).

![Web Automation Application Framework](/img/screen-shot-2022-10-13-at-4.06.03-pm.png "Web Automation Application Framework").