---
title: Rendering Competition 2015
date: 2015-12-17 00:00:00
summary: Physically-based renderer written as a semester project for the ETHZ course "Computer Graphics" in 2015.
---
{% image rendercompo2015.jpg "Rendering Competition 2015" %}

# Rendering Competition 2015

This image was my entry for the rendering competition of the Computer Graphics course at ETHZ in 2015. It won 1st place. The renderer was written in C++11 on top of the [Nori](https://wjakob.github.io/nori/) framework and implements the following features:

- Unidirectional Path Tracing
- Various camera models (pinhole, thin lens, realistic camera model based on spherical elements)
- Various BSDFs (diffuse, rough diffuse, conductor, rough conductor, dielectric, blending)
- Disney BRDF for complex materials
- Various light sources (point, area, distant disk, environment maps)
- Texture and bump mapping
- Volumetric path tracing for both homogeneous and heterogeneous media
- Volumetric light emitters (black body emission)
- Sobol sampling
- Adaptive sampling
- Basic denoising

For more information please see the [project report](/rendercompo2015/report/).
