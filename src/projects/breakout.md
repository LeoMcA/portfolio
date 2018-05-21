---
description: "a breakout clone created in c, using an arduino as a controller and ncurses to draw the game on screen"
image: |
  <div class="wrapper-16by9">
    <iframe src="https://www.youtube-nocookie.com/embed/FtQ3F7vpyic?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
languages:
 - "C"
frameworks:
 - "arduino"
 - "ncurses"
type: "uni"
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
