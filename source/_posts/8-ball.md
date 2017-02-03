---
title: 8 Ball
date: 2013-08-24 00:00:00
summary: GPU path tracer written in GLSL as a 4k executable graphics entry released at DemoDays 2013.
nav: portfolio
---

{% image 8-ball.jpg "8 Ball" %}

# 8 Ball

8 Ball is a [4k executable graphics](http://www.pouet.net/prodlist.php?order=thumbup&type%5B%5D=procedural+graphics&platform%5B%5D=Windows&page=1) entry that I have written for the DemoDays 2013 demo party. People seem to have liked it and it won 1st place. The goal in 4k executable graphics is to write a small program, with a maximum size of 4096 bytes, that generates a single image when executed. My idea was to implement forward path tracing on the GPU using GLSL to render a realistic image. Due to the size limitation, I chose to create a pool table scene, which only consists of simple primitives such as spheres and planes. Most of the effort was spent on the rendering algorithm, which implements the following techniques:

- Forward path tracing
- Mixed diffuse and specular BRDF using fresnel law for the pool balls
- Bitmap and procedural textures (numbers, scratches, cloth)
- Lighting from a procedural environment map
- Simulation of an actual camera lens system by tracing rays through multiple spherical lens elements

More information can be found on [Pouet](http://www.pouet.net/prod.php?which=61791).
