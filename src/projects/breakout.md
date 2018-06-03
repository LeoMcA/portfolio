---
description: "a breakout clone created in c, using an arduino as a controller and ncurses to draw the game on screen"
header:
  video:
    source:
      -
        src: "./assets/breakout.webm"
        type: "video/webm; codecs=vp9"
      -
        src: "./assets/breakout.mp4"
        type: "video/mp4"
    poster: "./assets/breakout.png"
  ratio: "16:9"
languages:
 - "c"
frameworks:
 - "arduino"
 - "ncurses"
category: "university"
license: "mit"
source: "https://github.com/LeoMcA/breakout"
---

Wikipedia has [comprehensive documentation][2] of the original.

This clone implements a subset of its gameplay. Most importantly:
* You have 3 lives to destroy 8 rows of bricks with a ball
* The potentiometer attached to the Ardiuno controls the paddle
* The paddle can be used to deflect the ball back towards the bricks
* If the ball touches the bottom of the play area then you lose a life

There are extra rules concerning when the ball speeds up, how many points you get for destroying bricks, and what happens when the ball hits the top of the screen. Those can be worked out by extensively playing the game, or reading the source code.

[2]: https://en.wikipedia.org/wiki/Breakout_(video_game)#Gameplay
