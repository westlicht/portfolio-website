---
title: Tsunami
date: 2015-12-16 00:00:00
summary: SPH fluid simulator written as a semester project for the ETHZ course "Physically-based Simulation" in 2015.
nav: portfolio
---

{% youtube tsunami.jpg "Tsunami" "3de4YLqlMFQ" %}

# Tsunami

For the semester project of the ETHZ course "Physically-based Simulation", I have implemented a basic Smoothed Particle Hydrodynamics (SPH) fluid simulator. I have implemented simple 2D versions of the same algorithm in the past, but wanted to take it a step further during this project. The main objective has been to implement stable simulation of fluids consisting of millions of particles at reasonable performance. For simplicity and easier debugging, I opted for a CPU-only solution written in C++11. The following features have been implemented:

- Interactive GUI with basic OpenGL visualization
- JSON based scene description
- Wavefront OBJ support
- Index-sorted uniform grid for neighbour search
- [WCSPH](http://cg.informatik.uni-freiburg.de/publications/2007_SCA_SPH.pdf) and [PCISPH](https://graphics.ethz.ch/~sobarbar/papers/Sol09/Sol09.pdf) solvers
- PCISPH with [adaptive time-stepping](http://cg.informatik.uni-freiburg.de/publications/2010_VRIPHYS_boundaryHandling.pdf)
- Boundaries using [boundary particles](http://cg.informatik.uni-freiburg.de/publications/2012_SIGGRAPH_rigidFluidCoupling.pdf)
- [Surface tension forces](http://cg.informatik.uni-freiburg.de/publications/2013_SIGGRAPHASIA_surfaceTensionAdhesion.pdf)
- Fluid mesh generation using marching cubes
- Cache system to cache particles and meshes
- Render application using either OpenGL visualization or SmallLuxGPU4

Source code and additional information is available on [GitHub](https://github.com/westlicht/pbsproject).
