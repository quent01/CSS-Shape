
# CSS Shapes

## I. Visualisation    
- Install dependencies (gulp + browserSync + gulp-less)
```   
npm install
```

- Build less files
```
gulp less
```   

- Launch the server
```
gulp serve
```   


## II. Utilisation
**Remarque** : Chaque forme possède une variable @bgColor qui permet de changer sa couleur

### Circle
```Less
.shape-circle{
    .circle(
        @width: 230px
    );
}
```   


### Comment-Bubble
```Less    
.shape-comment-bubble{
    .comment-bubble(
        @width          : 160px,
        @height         : 120px,
        @borderRadius   : 2px
    );
}
```


### Diamond
```Less
.shape-diamond{
    .diamond(
        @width      : 169px
    );
}
```


### Heart
```Less
.shape-heart{
    .heart(
        @width   : 135px, 
    );
}
```


### Infinity
```Less
.shape-infinity{
    .infinity(
        @width      : 229px,
    );
}
```


### Ovale
```Less
.shape-ovale{
    .ovale(
        @width      : 224px,
        @height     : 154px
    );
}
```


### Pacman
```Less
.shape-pacman{
    .pacman(
        @width : 173px
    );
}
```


### Parallelogram
```Less
.shape-parallelogram{
    .parallelogram(
        @width      : 220px,
        @height     : 182px,
        @angle      : 30deg
    );
}
```


### Pentagon
```Less
.shape-pentagon{
    .pentagon(
        @width:200px 
    );
}
```


### Hexagon
```Less
.shape-hexagon{
    .hexagon(
        @width:200px
    );
}
```


### Octogon
```Less
.shape-octogon{
     .octogon(
         @width : 200px,
         @bgColor : #c0392b
     );
}
```


### Rectangle
```Less
.shape-rectangle{
    .rectangle(
    );
}
```


### Square
```
.shape-square{
    .square(
        @width : 202px
    );
}
```


### Star Five
```Less
.shape-star-five{
    .star-five(
        @width : 200px,
        
    );
}
```


### Star Six
```Less
.shape-star-six{
    .star-six(
        @width : 200px
    );
}
```


### Trapezium
```Less
.shape-trapezium{
    .trapezium(
        @width      : 170px,
        @height     : 86px
    );
}
```


### Triangle Up
```Less
.shape-triangle-up{
    .triangle-up(
        @width      : 140px,
        @height     : 140px
    );      
}
```


### Triangle Down
```Less
.shape-triangle-down{
    .triangle-down(
        @width      : 140px,
        @height     : 140px
    );      
}
```


### Triangle Left
```Less
.shape-triangle-left{
    .triangle-left(
        @width      : 140px,
        @height     : 140px,
    );
}
```


### Triangle Right
```Less
.shape-triangle-right{
    .triangle-right(
        @width      : 140px,
        @height     : 140px
    );
}
```
