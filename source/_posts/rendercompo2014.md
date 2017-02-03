---
title: Rendering Competition 2014
date: 2014-04-01 00:00:00
summary: Physically-based renderer written as a semester project for the ETHZ course "Image Synthesis" in 2014.
---
{% image rendercompo2014.jpg "Rendering Competition 2014" %}

# Rendering Competition 2014

This image was my entry for the rendering competition of the "Image Synthesis" course at ETHZ in 2014. It won 2nd place. The renderer was written in C++ from scratch and implements the following features:

- GUI for scene editing and tweaking
- Unidirectional Path Tracing
- Various camera models (pinhole, thin lens)
- Various BSDFs (diffuse, phong, rough diffuse, conductor, rough conductor, dielectric, rough dielectric, plastic, diffuse transmission, blending)
- Various light sources (point, area, environment maps)
- Texture and bump mapping (bitmap and procedural noise based textures)
- Volumetric path tracing for both homogeneous and heterogeneous media

For more information please see the [project report](/rendercompo2014/report/).
