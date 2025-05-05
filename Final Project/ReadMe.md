## Echoes of Light - 2D Minimalist Puzzle Game

Echoes of Light is a 2D minimalist puzzle game where players control a beam of light that must navigate through increasingly complex environments. The game is designed with a focus on light-based mechanics, simplicity, and elegant visual design. As the player progresses through each level, they manipulate mirrors and shadows to solve environmental puzzles, gradually unlocking the path to the next area. The game is built using p5.js and draws inspiration from artistic games like Limbo and Monument Valley, focusing on a stripped-down aesthetic to bring the player into a contemplative, meditative world.

## Table of Contents

-Introduction
-Game Design
-Development Process
-Initial Concept
-Gameplay Mechanics
-Challenges
-Solutions
-Final Product
-Future Improvements

----------------------------------------------------------------------------

## Introduction

"Echoes of Light" is a puzzle game that centers around manipulating beams of light using mirrors to solve puzzles. The player must guide the light beam through various environments where the beam's path is obstructed by obstacles, and the goal is to use mirrors to reflect the beam and hit a target. Each level introduces new challenges, progressively making the puzzles more intricate and requiring creative use of mirrors.

The design of the game is minimalist, using a dark environment contrasted with the bright yellow of the light beam and the green of the target. The atmosphere is meant to evoke a meditative experience, with the puzzle-solving mechanics acting as the central focus.

----------------------------------------------------------------------------

## Game Design

---- Visual Design
The visual style is intentionally minimalist. The player controls a beam of light represented by a yellow line that can be reflected by mirrors, which are placed strategically in each level. The environment around the player is dark, which contrasts sharply with the light beam. The simplicity in the visuals is a key part of the game's design philosophy: to focus the player’s attention on the core gameplay mechanics.

---- Sound Design
The game features ambient background music to create a calming atmosphere. The sound of the beam traveling, hitting mirrors, and interacting with targets is subtle, allowing players to concentrate on the puzzle-solving process. The sound feedback is used sparingly to maintain the serene atmosphere.

----- Gameplay Mechanics
Beam Reflection: The player controls a beam of light that can be reflected off mirrors. The primary objective is to hit a target with the light beam. The game introduces new mechanics like rotating mirrors and progressively more complex puzzles.
Level Design: Each level is designed to increase in difficulty. The first levels are simple, with few mirrors and a straightforward path to the target. As the player progresses, new obstacles, mirror types, and puzzle elements are introduced.
Goal: The player must manipulate the beam of light to hit the target. When the target is hit, the player is prompted to move to the next level by pressing the space bar.

----------------------------------------------------------------------------

## Development Process

---- Initial Concept
The initial concept of "Echoes of Light" was to create a game that focused on light-based mechanics. Inspired by the aesthetic of games like Limbo and Monument Valley, I wanted to create a meditative experience that was simple, yet mentally engaging. The concept revolved around puzzles that required the player to reflect light beams off mirrors, with the target acting as the objective for each puzzle.

---- Gameplay Mechanics
Initially, I focused on the core gameplay loop: the player would rotate mirrors to reflect a beam of light onto a target. To start, I built basic mirror objects that could be rotated and reflected beams of light. The player would use the arrow keys to rotate the mirrors, and the space bar would be used to move on to the next level once the target was hit.

----------------------------------------------------------------------------

## Challenges
---- Beam Reflection Logic: One of the initial challenges was making sure the beam reflected off the mirrors properly. The math behind reflection angles had to be accurate for the game to feel satisfying.

---- Level Progression: As I introduced new levels, ensuring smooth progression in difficulty without making the game too overwhelming was tricky. Each level needed to introduce a new element or mechanic while still adhering to the minimalist design philosophy.

----------------------------------------------------------------------------

## Solutions
---- Reflection Accuracy: After several iterations, I used vector mathematics to calculate the reflection of the beam based on the angle of incidence. This allowed the light beam to reflect realistically off the mirrors.
---- Level Balancing: I carefully adjusted the number of mirrors, their angles, and the distance to the target in each level. Gradually increasing the difficulty allowed the player to feel challenged without becoming frustrated.

----------------------------------------------------------------------------

## Final Product

The final version of "Echoes of Light" includes three levels, each with increasing complexity. The player must manipulate mirrors to reflect the beam of light onto the target. Once the target is hit, the level ends, and the player can move on to the next level by pressing the space bar.

----------------------------------------------------------------------------

## Key Features:
---- Minimalist Visuals: The game has a stripped-down aesthetic, focusing on contrast between the light beam and the dark environment.
---- Engaging Puzzle Design: Each level offers a unique puzzle that gradually increases in difficulty.
---- Smooth Level Progression: The game introduces new mechanics and obstacles as the player advances.
---- Calming Atmosphere: The soundtrack and minimalistic design aim to create a meditative experience for the player.

----------------------------------------------------------------------------

## Achievements:
Successfully integrated beam reflection mechanics using vector math.
Designed and balanced multiple levels, each with increasing difficulty.
Created a calm, meditative atmosphere that complements the puzzle-solving experience.

----------------------------------------------------------------------------

## Future Improvements

While the game is functional and enjoyable, there are several areas for potential improvement:

---- Additional Levels: Adding more levels and varying types of mirrors would increase the game's replayability.
Advanced Mechanics: Introducing new mechanics, such as movable mirrors or more complex environments, could provide new challenges for the player.
---- Visual Enhancements: Adding subtle animations or particle effects could make the game feel more dynamic without compromising its minimalist style.
---- Sound Effects: More dynamic sound effects that react to player actions (e.g., beam reflections, mirror rotations) could enhance the immersive experience.
