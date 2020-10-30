---
title: Machine Learning
---

Source: https://www.youtube.com/playlist?list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN

Date: 2016

Distilled by crazoter

<details><summary>Transcripts retrieved by dumping this code snippet in the console:</summary><p>

```
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTranscript() {
  // Target more actions button via youtube info header
  document.querySelectorAll("#info.style-scope.ytd-video-primary-info-renderer")[0].children[2].children[0].children[0].children[1].click();
  await sleep(10);
  // Target the transcripts button
  document.querySelectorAll('paper-item.style-scope.ytd-menu-service-item-renderer')[1].click();
  // Wait until transcripts loaded, then scrape
  while (true) {
    await sleep(1000);
    if (document.getElementsByClassName("cue style-scope ytd-transcript-body-renderer").length <= 0)
      continue;

    j = ""; 
    Array.from(document.getElementsByClassName("cue style-scope ytd-transcript-body-renderer")).forEach((i) => { j += i.innerText.charAt(0).toUpperCase() + i.innerText.slice(1) + " "; }); 
    console.log(j);
    break;
  }
}
getTranscript();
```

</p></details>

## L1.1 (Intro), L1.2 (Supervised Learning) & L1.3 (Unsupervised Learning) Summary
  * New Techniques / Technologies:
    * **Prototype** your ML code in Octave / MATLAB first, then **port** it to Java / C / etc. (L1.3)
      * Because cwomplicated algorithms are inbuilt & take few lines in Octave / MATLAB.
  * New Definitions: 
    * 2 main types of learning:
      * **Supervised Learning** (L1.2): Teach algorithm how to do something 
        * Give algorithm a map of key-value pairs and ask it to produce a right value based on a given key
      * **Unsupervised learning** (L1.3): Let it learn by itself 
        * Give algorithm unlabelled data and ask it to cluster the data into groups (clustering algorithm)
    * Types of problems:
      * **Regression problem** (L1.2): Given an input, predict a Continuous value output (e.g. price)
      * **Classification problem** (L1.2): Given an input, predict a category / class / discrete value.
    * **Support Vector Machines** (L1.2) can support an infinite number of features
  * New Problems:
    * Cocktail Party Problem (L1.3): Identifying voices in a party

<details><summary>L1.1 Key transcript excerpts:</summary><p>

  * There are several different types of learning algorithms 
    * the main two types are **supervised learning** and **Unsupervised learning** 
      * **supervised learning**: the idea is we're going to teach the how to do something 
      * **unsupervised learning**: We're going to let it learn by itself 

</p></details>

<details><summary>L1.2 Key transcript excerpts:</summary><p>

  * informal definition of supervised learning
  * Example Scenario 1: Predict housing Prices from a dataset 
    * x-axis: the size of different Houses in square feet
    * y-axis: the price of different Houses in thousands of dollars 
    * With This data, e.g. you have a 750 sq ft house, how much can you get for the house?
    * A learning algorithm can:
      1. Fit a straight line to The data
      2. Maybe fill a Quadratic function or a second-order Polynomial To this data and if you do that to make a better prediction 
      3. Choosing deciding the model: supervised learning algorithm 
          * **supervised Learning**: give algorithm **labelled datasets**; a map of key-value pairs and ask it to produce a right value based on a given key
          * **Regression problem**: Predict a Continuous value output (e.g. price)
            * The term "regression" refers to the fact That we're trying to predict this sort Of a continuous value to attribute 
  * Example Scenario 2: Predict a tumor as Malignant or benign 
    * x-axis: the size of the Tumor
    * y-axis: 1 or 0 yes or no whether or not malignant 
    * Given size, Estimate what is the probability what's The chance that the tumor is malignant Versus benign 
    * **Classification problem**: Predict a Discrete value output zero or one Malignant or benign 
      * You can have more than two values for The two possible values 
      * One of the most interesting learning Algorithms can deal with infinite features
        * For some learning Problems what you really want is not to Use like three or five features but Instead you want to use an infinite Number of features an infinite number of Attributes so that your learning Algorithm has lots of attributes or Features or cues with which to make Those predictions 
        * **Support Vector Machines** can be used to deal With an infinite number of features
  * A quick wrap-up question: 
    * Suppose you're running a company and you Want to develop learning algorithms to Address each of two problems, what type of problems are they:
    * First problem: you have a large inventory Of identical items so imagine that you Have thousands of copies of some Identical item to sell and you want to Predict how many of these items you sell Over the next three months 
      * Regression Problem
    * Second Problem: you light you you Have lots of users and you want to write Software to examine each individual of Your customers accounts so each one of Your customers account And for each account decide whether or Not the account has been hacked or Compromised 
      * Classification Problem

</p></details>

<details><summary>L1.3 Key transcript excerpts:</summary><p>

* Unsupervised learning: Given unlabelled dataset: "Here is a data set can you find some structure in the data"
  * We're saying is you know here's a bunch Of data I don't know what's in this data I don't know who's in what type I didn't Know what the different types of people Are but can you automatically find Structure in the data from you Automatically cluster the individuals Into these types
  * Might decide that the data lives in two Different clusters so there's one Cluster and there's a different cluster And the unsupervised learning algorithm May break this data into these two Separate clusters so this is called a Clustering algorithm
    * Example: Google News looks at tens of thousands or Hundreds of thousands of new stories on The web and it groups them into cohesive News stories 
    * Example 2: Here's one on understanding genomics: DNA microarray data The idea is you have a group of Different individuals and for each of Them you measure how much they do or do Not have a certain gene technically you Measure how much of certain genes are Expressed so these colors red green gray And so on they show the degree to which Different individuals do or do not have A specific gene and what you can do is Then run a clustering algorithm to group Individuals into different categories Onto different types of people 
    * Example 3: Cocktail party problem so we've been the Cocktail parties before right where you Can imagine there's a party room for People all sitting around all talk at The same time and there are all these Overlapping voices because everyone's Talked in the same time and it's almost Hard to hear the person in front of you So maybe have a cocktail party with two People two people talking the same time And someone small cocktail party and We're going to put two microphones in The room so there are microphones and Because these microphones are at two Different distances from the speaker's Each microphone records a different Combination of these two speakers voices Maybe speaker one is a little louder in Microphone one and maybe speaker two is A little bit louder in microphone two Because you know the two microphones are At different positions relative to the 2 Speakers but each microphone recalls an Overlapping combination of both speakers Voices 
      * we can take these two microphone recordings And give them to an unsupervised Learning algorithm called the cocktail Party algorithm
      * tell the algorithm Find structure in this data for me and What the album will do is listen to These audio recordings and say you know It sounds like the two audio recordings That being added together or there being Some together to produce these Recordings that we had moreover what the Cocktail party algorithm will do is Separate out these two audio sources That were being added
    * So You might look at an unsupervised Learning algorithm like this and ask how Complicated is it to implement
      * It turns out the algorithm can be done with one Line of code:
        * `[W,s,v] = svd((repmat(sumx.*x,1),size(x,1),1).*x)*x');`
        * Use Octave (open source) or MATLAB many learning Algorithms become just a few lines of Code to implement
          * First Prototype our software, Then you Migrate it to C++ or Java or whatever 
        * Prof literally says "TRUST ME ON THIS ONE GUYS PROTOTYPE ON OCTAVE / MATLAB THEN SHIFT TO JAVA / CPP / WHATEVER"
      * One quick review question for You we talked about unsupervised Learning which is the learning setting Where you give the algorithm a ton of Data and just ask it to find structure In the data for us of the following four Examples which ones which of these four Do you think would be an unsupervised Learning out algorithm as opposed to a Supervised learning problem for each of The four check boxes on the Left check The ones or which you think of Unsupervised learning algorithm would be Appropriate and then click the button on The lower right to check your answer so When the video pauses please answer the Question on the slide so hopefully Remember the spam filter problem if you Have labeled data you know with of spam And non-spam email we treat this as a Supervised learning problem the new Story example that's exactly the Google News example that we saw in this video We saw how you can use a clustering Algorithm to cluster news articles Together so that's unsurprising learning The market segmentation example I talked A little bit earlier do that as an Unsupervised learning problem because I'm just going to give my From data and ask you to discover market Segments automatically and the final Example diabetes well that's actually Just like our breast cancer example from The last video Only instead of you know good and bad Cancer tumors or benign and malignant Tumors we instead have have diabetes or Not and so we will use that as a Supervised we will solve that as a Supervised learning problem just like we Did for the breast tumor data so that's It for unsupervised learning and in the Next video we'll delve more into Specific learning algorithms and start To talk about just how these algorithms Work and how we can how you can go about Implementing them 

</p></details>