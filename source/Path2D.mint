module Path2D {
  /* Adds a path to the current path. */
  fun addPath (
    path : Path2D,
    additionalPath : Path2D,
    transform : DOMMatrix = DOMMatrix.create()
  ) : Path2D {
    `#{path}.addPath(#{additionalPath})`
    path
  }

  /* Adds an arc to the path which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction by counterclockwise (defaulting to clockwise). */
  fun arc (
    path : Path2D,
    x : Number,
    y : Number,
    radius : Number,
    startAngle : Number,
    endAngle : Number,
    counterclockwise : Bool = false
  ) {
    `#{path}.arc(#{x}, #{y}, #{radius}, #{startAngle}, #{endAngle}, #{counterclockwise})`
    path
  }

  /* Adds a circular arc to the path with the given control points and radius, connected to the previous point by a straight line. */
  fun arcTo (
    path : Path2D,
    x1 : Number,
    y1 : Number,
    x2 : Number,
    y2 : Number,
    radius : Number
  ) : Path2D {
    `#{path}.arcTo(#{x1}, #{y1}, #{x2}, #{y2}, #{radius})`
    path
  }

  /* Adds a cubic Bézier curve to the path. It requires three points. The first two points are control points and the third one is the end point. The starting point is the last point in the current path, which can be changed using moveTo() before creating the Bézier curve. */
  fun bezierCurveTo (
    path : a,
    cp1x : Number,
    cp1y : Number,
    cp2x : Number,
    cp2y : Number,
    x : Number,
    y : Number
  ) : a {
    `#{path}.bezierCurveTo(#{cp1x}, #{cp1y}, #{cp2x}, #{cp2y}, #{x}, #{y})`
    path
  }

  /*
  Causes the point of the pen to move back to the start of the current sub-path. It tries to draw a straight line from the current point to the start.

  If the shape has already been closed or has only one point, this function does nothing.
  */
  fun closePath (path : Path2D) : Path2D {
    `#{path}.closePath()`
    path
  }

  fun create : Path2D {
    `new Path2D()` as Path2D
  }

  /* Adds an elliptical arc to the path which is centered at (x, y) position with the radii radiusX and radiusY starting at startAngle and ending at endAngle going in the given direction by counterclockwise (defaulting to clockwise). */
  fun ellipse (
    path : Path2D,
    x : Number,
    y : Number,
    radiusX : Number,
    radiusY : Number,
    rotation : Number,
    startAngle : Number,
    endAngle : Number,
    counterclockwise : Bool = false
  ) : Path2D {
    `#{path}.ellipse(#{x}, #{y}, #{radiusX}, #{radiusY}, #{rotation}, #{startAngle}, #{endAngle}, #{counterclockwise})`
    path
  }

  /* Connects the last point in the subpath to the (x, y) coordinates with a straight line. */
  fun lineTo (path : Path2D, x : Number, y : Number) : Path2D {
    `#{path}.lineTo(#{x}, #{y})`
    path
  }

  /* Moves the starting point of a new sub-path to the `(x, y)` coordinates. */
  fun moveTo (path : Path2D, x : Number, y : Number) : Path2D {
    `#{path}.moveTo(#{x}, #{y})`
    path
  }

  /* Adds a quadratic Bézier curve to the current path. */
  fun quadraticCurveTo (
    path : Path2D,
    cpx : Number,
    cpy : Number,
    x : Number,
    y : Number
  ) : Path2D {
    `#{path}.quadraticCurveTo(#{cpx}, #{cpy}, #{x}, #{y})`
    path
  }

  /* Creates a path for a rectangle at position (x, y) with a size that is determined by width and height. */
  fun rect (
    path : Path2D,
    x : Number,
    y : Number,
    width : number,
    height : number
  ) : Path2D {
    `#{path}.rect(#{x}, #{y}, #{width}, #{height})`
    path
  }

  /* Creates a path for a rounded rectangle at position (x, y) with a size that is determined by width and height and the radii of the circular arc to be used for the corners of the rectangle is determined by radii. */
  fun roundRect (
    path : Path2D,
    x : Number,
    y : Number,
    width : Number,
    height : Number,
    radii : Array(Number)
  ) : Path2D {
    `#{path}.roundRect(#{x}, #{y}, #{width}, #{height}, #{radii})`
    path
  }
}
