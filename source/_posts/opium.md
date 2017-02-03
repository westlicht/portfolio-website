---
title: Opium
date: 2013-03-30 00:00:00
summary: A modular software synthesizer for 64K intros.
nav: portfolio
---
{% image opium.jpg "Opium" %}

# Opium

Opium is a modular software synthesizer developed for 64k intros and was used in [Tensile](/tensile). After writing my first software synthesizer for [Wheels Within Wheels](/www), which featured a classical hard-wired synthesizer architecture, I wanted to explore a more modular approach into synthesis.

Opium is based around the concept of *operators*, each one performing a single task, very similar to modules in a [modular synthesizer](https://en.wikipedia.org/wiki/Modular_synthesizer). Operators are responsible for generating and processing both audio and control signals. Each operator generates a single output signal and takes signals from multiple inputs. Operators are connected together to generate complex audio signals. Opium provides the following operators:

- Band-limited virtual-analog oscillators (sine, saw, square, triangle)
- Frequency modulation oscillator
- Karplus-Strong oscillator
- Padsynth oscillator based on inverse FFTs
- Noise source
- Waveshaping and distortion
- State-variable and biquad filters
- Modulation sources including ADSR envelopes and LFOs
- Auxiliary operators to performa mathematical operations
- Compressor and limiter for dynamics processing
- Effects processors including delays, reverb and glitch effects

To minimize the size of the synthesizer engine, I have opted to use plain C code. Audio is processed in buffers of 32 samples to allow using SIMD and to generally reduce the function call overhead. The engine uses a stack-based approach, where each operator pops the input signals from the stack and pushes the output back to the stack. The operator graph is reduced into a serial list of operations. This allowed to keep the code for the runtime engine very small and simple.

During music composition, Opium is run as a VST plugin inside a digital audio workstation. The plugin is developed on top of the [JUCE](https://www.juce.com/) framework and features a graphical interface for editing the synthesizer patch. MIDI data is used to trigger the instruments. To export a song for use in a 64k intro, the plugin allows to record incoming MIDI data and generates a C header file containing all the note and patch data in a form that allows for good compression.
