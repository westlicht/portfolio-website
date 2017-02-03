---
title: Opium II
date: 2014-05-01 00:00:00
summary: Version 2 of my modular software synthesizer for 64K intros.
nav: portfolio
---
{% image opium2.jpg "Opium II" %}

# Opium II

Opium II is a complete rewrite of [Opium](/opium), my modular software synthesizer for 64k intros. My main motivation was to improve the quality of the sound engine and the usability of the plugin for music composition.

A major problem with [Opium](/opium), my previous synthesizer, was its monolithic design. While working in the DAW to compose music, only a single instance of the plugin was used to generate the sound for all the instruments in the song. Therefore, most of the functionality provided by the DAW, such as mixing, handling signal flow, automation etc. could not be utilized, degrading the DAW to a simple MIDI sequencer. In contrast, the Opium II plugin can be instantiated multiple times within the same project, each instance responsible for a single instrument or effect, much in the same way as one would use more traditional plugins for music production. Opium II also features a patch management system, such that typical patches for instruments and effects can be saved and reused easily.

Opium is based around the concept of *operators*, each one performing a single task, very similar to modules in a [modular synthesizer](https://en.wikipedia.org/wiki/Modular_synthesizer). Operators are responsible for generating and processing both audio and control signals. Each operator generates a single output signal and takes signals from multiple inputs. Operators are connected together to generate complex audio signals. The *operators* in Opium II have been designed with basic [physical modeling](https://en.wikipedia.org/wiki/Physical_modelling_synthesis) in mind, allowing to create sounds such as plucked and bowed strings, flutes and others. Opium II provides the following operators:

- Band-limited PolyBLEP virtual-analog oscillators (sine, saw, square, triangle)
- Super-saw oscillator
- Noise source
- Sample playback with custom audio compression algorithms
- Ring modulation
- Waveshaping, distortion and decimation
- One-pole, DC-blocking, biquad and state-variable filters
- Modulation sources including ADSR envelopes and LFOs
- Envelope follower
- Auxiliary operators to performa mathematical operations
- Compressor and limiter for dynamics processing
- Effects processors including delays, reverb and glitch effects

In contrast to the previous version, Opium II is written in C++ and processes audio directly within the operator graph. Feedback paths are replaced with buffering operators, such that the operator graph can be converted into directed acyclic graph, with its root node being the output. Audio is processed in buffers of 16 samples to allow using SIMD and keep delays short in feedback loops.

During music composition, Opium II is run as a VST plugin inside a digital audio workstation. The plugin is developed on top of the [JUCE](https://www.juce.com/) framework and features a graphical interface for editing the synthesizer patch. Exporting a song for use in a 64k intro is a bit more involved due to the fact that multiple instances of the plugin can be used during production. To solve this, I have developed a separate exporter application that is able to parse the project file of the DAW (Ableton Live). This allows to extract all the plugin instances and the operator graphs within them, as well as all the note and automation data used within the song. The converter assembles all the operator graphs of the individual plugin instances into a global operator graph, inserting additional operators for the tasks previously performed by the DAW, such as mixing and automation. As a final step, the exporter generates a single header file containing all the note and patch data in a form that allows for good compression.

{% image ableton.jpg "Ableton Live Project", "Screenshot of Ableton Live Project using Opium II." %}

{% image plugin.jpg "Opium II Plugin", "Screenshot of the Opium II Plugin." %}

{% image converter.jpg "Opium II Converter", "Screenshot of the Opium II converter application." %}
