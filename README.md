![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&width=1000&height=200&section=header&text=Blockchain%20Calendar%20&fontSize=30&fontColor=black)

<!-- header is made with: https://github.com/kyechan99/capsule-render -->

[Stephane Masyn](https://www.linkedin.com/in/stephane-masyn-35b16817a/) [<img src="https://cdn2.auth0.com/docs/media/connections/linkedin.png" alt="LinkedIn -  Stephane Masyn" width=15/>](https://linkedin.com/in/stephane-masyn-35b16817a/)
                                 

---

### Table of Contents

* [Overview](#overview)
* [Requirements](#requirements)
* [Teck Stack](#tech-stack)
* [Visualization](#visualization)
* [User Experience](#user-experience)
* [License](#license)  

---

## Overview

If you’ve spent any time on Tech Twitter or Crypto Twitter lately, “web3” is the hot topic. There is currently a battle between proponents of web3 and its critics. Its proponents claim web3 is revolutionary and is the future of the Internet. Its critics think it is at best a buzzword and at worst – it will destroy planet Earth. As with most things these days, the extremes go a bit too far and the truth is probably somewhere in the middle.

Calendly as become a big part of our profetional lives and a new way to book your appointments or have clients book directly on your calendar. It's a great tool but something is missing from it out of the box. What if you could have the person setting up the appointment commit to it by paying when booking!

The creation of a Blockchain calendar used by profetionals, freelancers, consultants,... colecting their fee at the time of booking. This would resolve a few problems, including the No shows or fake booking wasting your time or taking away that particular time slot from someone else. 

The difference will be that the client will confirm the appointment directly when booking by commiting and paying in Ethereum. 

## Requirements

Hardhat is distributed as an npm (Node Package Manager) package and uses the Node.js ecosystem. First make sure we have a recent version of node and npm. Open a terminal and enter some commands to check:

```bash
  node -v
  npm -v
```
If you don’t already have the node command, download the nodejs LTS version for your operating system [Here](https://nodejs.org/en/). The npm command comes with nodejs.

Installing hardhat
```bash
  npm install --save-dev hardhat
```

## Tech Stack

#### Hardhat
Used to set up a local environment.

#### Solidity
Used for creating a smart contract to set the rate to charge for a meeting

#### Metamask
Clients will connect to the application using an Ethereum wallet. I used Metamask since it is the most popular and most developer-friendly.

#### Alchemy
I used Alchemy, a popular node provider, to deploy the smart contract.

#### React
I build a frontend using React, the most popular JavaScript library for building user interfaces. I first build the Connect Wallet screen, which is the sign-in experience for the application

#### Appointments and Payments. 
The owner of the calendar will receive payment in ether for each meeting. The cost of each meeting is calculated  based on its start and end time. The client will be charged when the meeting is scheduled and will store the meeting data in an array of structs.

#### Material UI
Material UI is a popular component library that we can use to add complex UI components without reinventing the wheel. We will customize a Scheduler component to display a weekly calendar to the client.

#### Ethers.js
We want to interact and call our smart contract from our UI.
