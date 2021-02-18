---
title: Message Broker in VEVE world
created: 08.02.2021
---

- microservices became popular several years ago
- connection between them create a bigger issue
- Fallacies of distributed computing -> assumption which leads to common errors
- CAP theorem 2 out of 3 at any given point of time
- our services are stateless so it's not a usual problem we have but it influence which tools and patterns are we using for solving our problem. E.g. Mongodb w: majority
- Network always has issues even in private network
- redeployment, bugs, system updates and etc.
- Partition tolerance almost everywhere is selected so we have only choice between C and A
- when system evolve the new connections are introduced and old could be removed