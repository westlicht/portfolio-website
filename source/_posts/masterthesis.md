---
title: Master Thesis
date: 2016-09-21 00:00:00
summary: "\"Learning High-Order Scattering in Rendering from Data\""
nav: portfolio
---
{% image masterthesis.jpg "Master Thesis" %}

# Master Thesis

### Learning High-Order Scattering in Rendering from Data

Rendering of participating media is a well researched topic. Using Monte Carlo path tracing, participating media can be rendered in a physically accurate way. However, depending on the medium properties involved, the performance of this simple algorithm can degrade quickly. Rendering clouds in particular is a hard problem, as light can scatter many times inside the medium due to lack of absorption, leading to noisy images and slow convergence. We investigated methods for using machine learning techniques to predict the contribution of high-order scattering from ground truth data. We developed two models using neural networks, to predict light transport in participating media. We have implemented software to generate the datasets for learning and a renderer incorporating our models. We analyzed the performance and quality of our models and discuss further improvements and avenues for future research.

{% raw %}
<center><a class="button" href="/download/masterthesis.pdf">Download PDF</a></center>
{% endraw %}
