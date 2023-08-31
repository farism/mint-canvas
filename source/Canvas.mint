enum CanvasLineCap {
  /* The ends of lines are squared off at the endpoints. Default value. */
  Butt

  /* The ends of lines are rounded. */
  Round

  /* The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness. */
  Square
}

enum CanvasLineJoin {
  /* Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width. */
  Bevel

  /* Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment. */
  Round

  /* Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the miterLimit property. Default value. */
  Miter
}

enum CanvasFillRule {
  /* The [non-zero winding rule](https://en.wikipedia.org/wiki/Nonzero-rule). Default rule. */
  Nonzero

  /* The [even-odd winding rule](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule). */
  EvenOdd
}

enum CanvasGlobalCompositeOperation {
  /* Displays the source over the destination */
  SourceOver

  /* Displays the source on top of the destination. The part of the source image that is outside the destination is not shown */
  SourceAtop

  /* Displays the source in the destination. Only the part of the source that is INSIDE the destination is shown, and the destination is transparent */
  SourceIn

  /* Displays the source out of the destination. Only the part of the source that is OUTSIDE the destination is shown, and the destination is transparent */
  SourceOut

  /* Displays the destination over the source */
  DestinationOver

  /* Displays the destination on top of the source. The part of the destination that is outside the source is not shown */
  DestinationAtop

  /* Displays the destination in the source. Only the part of the destination that is INSIDE the source is shown, and the source is transparent */
  DestinationIn

  /* Displays the destination out of the source. Only the part of the destination that is OUTSIDE the source is shown, and the source is transparent */
  DestinationOut

  /* Displays the source + the destination */
  Lighter

  /* Displays the source. The destination is ignored */
  Copy

  /* The source is combined by using an exclusive OR with the destination */
  Xor
}

enum CanvasTextBaseline {
  /* The text baseline is the top of the em square. */
  Top

  /* The text baseline is the hanging baseline. (Used by Tibetan and other Indic scripts.) */
  Hanging

  /* The text baseline is the middle of the em square. */
  Middle

  /* The text baseline is the normal alphabetic baseline. Default value. */
  Alphabetic

  /* The text baseline is the ideographic baseline; this is the bottom of the body of the characters, if the main body of characters protrudes beneath the alphabetic baseline. (Used by Chinese, Japanese, and Korean scripts.) */
  Ideographic

  /* The text baseline is the bottom of the bounding box. This differs from the ideographic baseline in that the ideographic baseline doesn't consider descenders. */
  Bottom
}

enum CanvasTextAlign {
  /* The text is left-aligned. */
  Left

  /* The text is right-aligned. */
  Right

  /* The text is centered. */
  Center

  /* The text is aligned at the normal start of the line (left-aligned for left-to-right locales, right-aligned for right-to-left locales). Default Value */
  Start

  /* The text is aligned at the normal end of the line (right-aligned for left-to-right locales, left-aligned for right-to-left locales). */
  End
}

enum CanvasDirection {
  /* The text direction is left-to-right. */
  LTR

  /* The text direction is right-to-left. */
  RTL

  /* The text direction is inherited from the `<canvas>` element or the `Document` as appropriate. Default value. */
  Inherit
}

enum CanvasImageSmoothingQuality {
  /* Low quality. */
  Low

  /* Medium quality. */
  Medium

  /* High quality. */
  High
}

enum CanvasFontKerning {
  /* The browser determines whether font kerning should be used or not. For example, some browsers will disable kerning on small fonts, since applying it could harm the readability of text. */
  Auto

  /* Font kerning information stored in the font must be applied. */
  Normal

  /* Font kerning information stored in the font is disabled. */
  None
}

enum CanvasPatternRepeat {
  /* Repeat in both directions */
  Repeat

  /* Repeat horizontally */
  RepeatX

  /* Repeat vertically */
  RepeatY

  /* No repeat */
  NoRepeat
}

enum CanvasFillStyle {
  String(String)
  Gradient(CanvasGradient)
  Pattern(CanvasPattern)
}

module Canvas {
  /*
  Creates a circular arc centered at `(x, y)` with a radius of `radius`.

  The path starts at `startAngle`, ends at `endAngle`, and travels in the direction given by `counterclockwise`.
  */
  fun arc (
    el : Dom.Element,
    x : Number,
    y : Number,
    radius : Number,
    startAngle : Number,
    endAngle : Number,
    counterclockwise : Bool = false
  ) {
    `#{el}.getContext('2d').arc(#{x}, #{y}, #{radius}, #{startAngle}, #{endAngle}, #{counterclockwise})`
    el
  }

  /*
  Adds a circular arc to the current sub-path, using the given control points and radius.

  The arc is automatically connected to the path's latest point with a straight line, if necessary for the specified parameters.

  This method is commonly used for making rounded corners.
  */
  fun arcTo (
    el : Dom.Element,
    x1 : Number,
    y1 : Number,
    x2 : Number,
    y2 : Number,
    radius : Number
  ) : Dom.Element {
    `#{el}.getContext('2d').arcTo(#{x1}, #{y1}, #{x2}, #{y2}, #{radius})`
    el
  }

  /* Starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path. */
  fun beginPath (el : Dom.Element) {
    `#{el}.getContext('2d').beginPath()`
    el
  }

  /*
  Adds a cubic Bézier curve to the current sub-path.

  It requires three points: the first two are control points and the third one is the end point.

  The starting point is the latest point in the current path, which can be changed using `moveTo()` before creating the Bézier curve.
  */
  fun bezierCurveTo (
    el : Dom.Element,
    cp1x : Number,
    cp1y : Number,
    cp2x : Number,
    cp2y : Number,
    x : Number,
    y : Number
  ) : Dom.Element {
    `#{el}.getContext('2d').bezierCurveTo(#{cp1x}, #{cp1y}, #{cp2x}, #{cp2y}, #{x}, #{y})`
    el
  }

  /*
  Clears the entire canvas.

  Same as calling clearRect(0, 0, width, height)
  */
  fun clear (el : Dom.Element) : Dom.Element {
    let dims =
      Dom.getDimensions(el)

    `#{el}.getContext('2d').clearRect(0, 0, #{dims.width}, #{dims.height})`
    el
  }

  /* Erases the pixels in a rectangular area by setting them to transparent black. */
  fun clearRect (
    el : Dom.Element,
    x : Number,
    y : Number,
    width : Number,
    height : Number
  ) : Dom.Element {
    `#{el}.getContext('2d').clearRect(#{x}, #{y}, #{width}, #{height})`
    el
  }

  /*
  Turns the current path into the current clipping region.

  The previous clipping region, if any, is intersected with the current or given path to create the new clipping region.
  */
  fun clip (
    el : Dom.Element,
    fillRule : CanvasFillRule = CanvasFillRule::Nonzero
  ) : Dom.Element {
    `#{el}.getContext('2d').clip(#{fillRuleToStr(fillRule)})`
    el
  }

  /*
  Turns the given path into the current clipping region.

  The previous clipping region, if any, is intersected with the current or given path to create the new clipping region.
  */
  fun clipPath (
    el : Dom.Element,
    path : Path2D,
    fillRule : CanvasFillRule = CanvasFillRule::Nonzero
  ) : Dom.Element {
    `#{el}.getContext('2d').clip(#{path}, #{fillRuleToStr(fillRule)})`
    el
  }

  /*
  Attempts to add a straight line from the current point to the start of the current sub-path.

  If the shape has already been closed or has only one point, this function does nothing.

  This method doesn't draw anything to the canvas directly. You can render the path using the `stroke()` or `fill()` methods.
  */
  fun closePath (el : Dom.Element) : Dom.Element {
    `#{el}.getContext('2d').closePath()`
    el
  }

  /*
  Creates a gradient around a point with given coordinates.

  This method returns a conic `CanvasGradient`. To be applied to a shape, the gradient must first be assigned to the `fillStyle` or `strokeStyle` properties.
  */
  fun createConicGradient (
    el : Dom.Element,
    startAngle : Number,
    x : Number,
    y : Number
  ) : CanvasGradient {
    `#{el}.getContext('2d').createConicGradient(#{startAngle}, #{x}, #{y})`
  }

  /* Creates a new, blank ImageData object with the specified dimensions. All of the pixels in the new object are transparent black. */
  fun createImageData (
    el : Dom.Element,
    width : Number,
    height : Number,
    colorSpace : String = "srgb"
  ) : ImageData {
    `#{el}.getContext('2d').createImageData(#{width}, #{height}, { colorSpace: #{colorSpace} })`
  }

  /*
  Creates a gradient along the line connecting two given coordinates.

  The gradient transitions colors along the gradient line, starting at point `x0`, `y0` and going to `x1`, `y1`, even if those points extend the gradient line beyond the edges of the element on which the gradient is drawn.

  This method returns a `CanvasGradient`. To be applied to a shape, the gradient must first be assigned to the `fillStyle` or `strokeStyle` properties.
  */
  fun createLinearGradient (
    el : Dom.Element,
    x0 : Number,
    y0 : Number,
    x1 : Number,
    y1 : Number
  ) : CanvasGradient {
    `#{el}.getContext('2d').createLinearGradient(#{x0}, #{y0}, #{x1}, #{y1})`
  }

  /*
  Creates a pattern using the specified image and repetition. This method returns a CanvasPattern.

  This method doesn't draw anything to the canvas directly. The pattern it creates must be assigned to the `fillStyle` or `strokeStyle` properties, after which it is applied to any subsequent drawing.
  */
  fun createPattern (
    el : Dom.Element,
    image : CanvasImageSource,
    repetition : CanvasPatternRepeat
  ) : Maybe(CanvasPattern) {
    let rep =
      patternRepeatToStr(repetition)

    `
    (() => {
      const $pattern = #{el}.getContext('2d').createPattern(#{image}, #{rep})

      if ($pattern !== null) {
        return #{Maybe::Just(`$pattern`)}
      } else {
        return #{Maybe::Nothing}
      }
    })()
    `
  }

  /*
  Creates a radial gradient using the size and coordinates of two circles.

  This method returns a `CanvasGradient`. To be applied to a shape, the gradient must first be assigned to the `fillStyle` or `strokeStyle` properties.
  */
  fun createRadialGradient (
    el : Dom.Element,
    x0 : Number,
    y0 : Number,
    r0 : Number,
    x1 : Number,
    y1 : Number,
    r1 : Number
  ) : CanvasGradient {
    `#{el}.getContext('2d').createRadialGradient(#{x0}, #{y0}, #{r0}, #{x1}, #{y1}, #{r1})`
  }

  fun directionFromStr (direction : String) : CanvasDirection {
    case direction {
      "ltr" =>
        CanvasDirection::LTR

      "rtl" =>
        CanvasDirection::RTL

      "inherit" =>
        CanvasDirection::Inherit

      =>
        CanvasDirection::LTR
    }
  }

  fun directionToStr (direction : CanvasDirection) : String {
    case direction {
      CanvasDirection::LTR =>
        "ltr"

      CanvasDirection::RTL =>
        "rtl"

      CanvasDirection::Inherit =>
        "inherit"
    }
  }

  /* Draws a CanvasImageSource to the canvas */
  fun drawFocusIfNeeded (
    el : Dom.Element,
    targetEl : Dom.Element,
    path : Maybe(Path2D)
    
  ) : Dom.Element {
    `#{el}.getContext('2d').drawFocusIfNeeded(#{targetEl})`
  }

  /* Draws a CanvasImageSource to the canvas */
  fun drawImage (
    el : Dom.Element,
    image : CanvasImageSource,
    x : Number,
    y : Number,
    width : Number = 0,
    height : Number = 0,
    dx : Number = 0,
    dy : Number = 0,
    dWidth : Number = 0,
    dHeight : Number = 0
  ) : Dom.Element {
    if dx != 0 || dy != 0 || dWidth != 0 || dHeight != 0 {
      `#{el}.getContext('2d').drawImage(#{image}, #{x}, #{y}, #{width}, #{height}, #{dx}, #{dy}, #{dWidth}, #{dHeight})`
    } else if width != 0 || height != 0 {
      `#{el}.getContext('2d').drawImage(#{image}, #{x}, #{y}, #{width}, #{height})`
    } else {
      `#{el}.getContext('2d').drawImage(#{image}, #{x}, #{y})`
    }

    el
  }

  /*
  Adds a circular arc to the current sub-path, using the given control points and radius.

  The arc is automatically connected to the path's latest point with a straight line, if necessary for the specified parameters.

  This method is commonly used for making rounded corners.
  */
  fun ellipse (
    el : Dom.Element,
    x : Number,
    y : Number,
    radiusX : Number,
    radiusY : Number,
    rotation : Number,
    startAngle : Number,
    endAngle : Number,
    counterclockwise : Bool = false
  ) : Dom.Element {
    `#{el}.getContext('2d').ellipse(#{x}, #{y}, #{radiusX}, #{radiusY}, #{rotation}, #{startAngle}, #{endAngle}, #{counterclockwise})`
    el
  }

  /* Fills the current path with the current or given `fillRule`. */
  fun fill (
    el : Dom.Element,
    fillRule : CanvasFillRule = CanvasFillRule::Nonzero
  ) : Dom.Element {
    `#{el}.getContext('2d').fill(#{fillRuleToStr(fillRule)})`
    el
  }

  /* Fills given path with the current or given `fillRule`. */
  fun fillPath (
    el : Dom.Element,
    path : Path2D,
    fillRule : CanvasFillRule = CanvasFillRule::Nonzero
  ) : Dom.Element {
    `#{el}.getContext('2d').fill(#{path}, #{fillRuleToStr(fillRule)})`
    el
  }

  /*
  Draws a rectangle that is filled according to the current fillStyle.

  This method draws directly to the canvas without modifying the current path, so any subsequent fill() or stroke() calls will have no effect on it.
  */
  fun fillRect (
    el : Dom.Element,
    x : Number,
    y : Number,
    width : Number,
    height : Number
  ) : Dom.Element {
    `#{el}.getContext('2d').fillRect(#{x}, #{y}, #{width}, #{height})`
    el
  }

  fun fillRuleFromStr (fillRule : String) : CanvasFillRule {
    case fillRule {
      "nonzero" =>
        CanvasFillRule::Nonzero

      "evenodd" =>
        CanvasFillRule::EvenOdd

      =>
        CanvasFillRule::Nonzero
    }
  }

  fun fillRuleToStr (fillRule : CanvasFillRule) : String {
    case fillRule {
      CanvasFillRule::Nonzero =>
        "nonzero"

      CanvasFillRule::EvenOdd =>
        "evenodd"
    }
  }

  /*
  Draws a text string at the specified coordinates, filling the string's characters with the current `fillStyle`.

  An optional parameter allows specifying a maximum width for the rendered text, which the user agent will achieve by condensing the text or by using a lower font size.

  This method draws directly to the canvas without modifying the current path, so any subsequent `fill()` or `stroke()` calls will have no effect on it.

  The text is rendered using the font and text layout configuration as defined by the `font`, `textAlign`, `textBaseline`, and `direction` properties.
  */
  fun fillText (
    el : Dom.Element,
    text : String,
    x : Number,
    y : Number,
    maxWidth : Number = -1
  ) : Dom.Element {
    `#{el}.getContext('2d').fillText(#{text}, #{x}, #{y}, #{maxWidth} === -1 ? undefined : #{maxWidth} )`
    el
  }

  fun fontKerningFromStr (fontKerning : String) : CanvasFontKerning {
    case fontKerning {
      "auto" =>
        CanvasFontKerning::Auto

      "normal" =>
        CanvasFontKerning::Normal

      "none" =>
        CanvasFontKerning::None

      =>
        CanvasFontKerning::Auto
    }
  }

  fun fontKerningToStr (fontKerning : CanvasFontKerning) : String {
    case fontKerning {
      CanvasFontKerning::Auto =>
        "auto"

      CanvasFontKerning::Normal =>
        "normal"

      CanvasFontKerning::None =>
        "none"
    }
  }

  /*  */
  fun getContextAttributes (el : Dom.Element) : String {
    `#{el}.getContext('2d').getContextAttributes()` as String
  }

  fun getDirection (el : Dom.Element) : CanvasDirection {
    `#{el}.getContext('2d').direction`
    |> directionFromStr
  }

  fun getFillStyle (el : Dom.Element) : CanvasFillStyle {
    `
    (() => {
      const $fillStyle = #{el}.getContext('2d').fillStyle

      if (typeof $fillStyle === 'string') {
        return #{CanvasFillStyle::String(`$fillStyle`)}
      } else if ($fillStyle instanceof CanvasGradient) {
        return #{CanvasFillStyle::Gradient(`$fillStyle`)}
      } else if ($fillStyle instanceof CanvasPattern) {
        return #{CanvasFillStyle::Pattern(`$fillStyle`)}
      }
    })()
    `
  }

  fun getFilter (el : Dom.Element) : String {
    `#{el}.getContext('2d').filter`
  }

  fun getFont (el : Dom.Element) : String {
    `#{el}.getContext('2d').font`
  }

  fun getFontKerning (el : Dom.Element) : CanvasFontKerning {
    `#{el}.getContext('2d').fontKerning`
    |> fontKerningFromStr
  }

  fun getGlobalAlpha (el : Dom.Element) {
    `#{el}.getContext('2d').globalAlpha`
  }

  fun getGlobalCompositeOperation (el : Dom.Element) : CanvasGlobalCompositeOperation {
    `#{el}.getContext('2d').globalCompositeOperation`
    |> globalCompositeOperationFromStr
  }

  /*
  Returns an `ImageData` object representing the underlying pixel data for a specified portion of the canvas.

  This method is not affected by the canvas's transformation matrix. If the specified rectangle extends outside the bounds of the canvas, the pixels outside the canvas are transparent black in the returned `ImageData` object.
  */
  fun getImageData (
    el : Dom.Element,
    x : Number,
    y : Number,
    width : Number,
    height : Number
  ) : ImageData {
    `#{el}.getContext('2d').getImageData(#{x}, #{y}, #{width}, #{height})`
    ImageData.create()
  }

  fun getImageSmoothingEnabled (el : Dom.Element) : Bool {
    `#{el}.getContext('2d').imageSmoothingEnabled`
  }

  fun getImageSmoothingQuality (el : Dom.Element) : CanvasImageSmoothingQuality {
    `#{el}.getContext('2d').imageSmoothingQuality`
    |> imageSmoothingFromStr
  }

  fun getLetterSpacing (el : Dom.Element) : Number {
    let ls =
      `#{el}.getContext('2d').letterSpacing` as String

    case Number.fromString(String.replace(ls, "px", "")) {
      Maybe::Just(val) => val
      => 0
    }
  }

  fun getLineCap (el : Dom.Element) : CanvasLineCap {
    `#{el}.getContext('2d').lineCap`
    |> lineCapFromStr
  }

  fun getLineDash (el : Dom.Element) : Array(Number) {
    `#{el}.getContext('2d').getLineDash()` as Array(Number)
  }

  fun getLineDashOffset (el : Dom.Element) : Number {
    `#{el}.getContext('2d').lineDashOffset`
  }

  fun getLineJoin (el : Dom.Element) : CanvasLineJoin {
    lineJoinFromStr(`#{el}.getContext('2d').lineJoin`)
  }

  fun getLineWidth (el : Dom.Element) : Number {
    `#{el}.getContext('2d').lineWidth`
  }

  fun getMiterLimit (el : Dom.Element) : Number {
    `#{el}.getContext('2d').miterLimit`
  }

  fun getShadowBlur (el : Dom.Element) : Number {
    `#{el}.getContext('2d').shadowBlur`
  }

  fun getShadowColor (el : Dom.Element) : String {
    `#{el}.getContext('2d').shadowColor`
  }

  fun getShadowOffsetX (el : Dom.Element) : Number {
    `#{el}.getContext('2d').shadowOffsetX`
  }

  fun getShadowOffsetY (el : Dom.Element) : Number {
    `#{el}.getContext('2d').shadowOffsetY`
  }

  fun getStrokeStyle (el : Dom.Element) : CanvasFillStyle {
    `
    (() => {
      const $strokeStyle = #{el}.getContext('2d').strokeStyle

      if (typeof $strokeStyle === 'string') {
        return #{CanvasFillStyle::String(`$strokeStyle`)}
      } else if ($strokeStyle instanceof CanvasGradient) {
        return #{CanvasFillStyle::Gradient(`$strokeStyle`)}
      } else if ($strokeStyle instanceof CanvasPattern) {
        return #{CanvasFillStyle::Pattern(`$strokeStyle`)}
      }
    })()
    `
  }

  fun getTextAlign (el : Dom.Element) : CanvasTextAlign {
    `#{el}.getContext('2d').textAlign`
    |> textAlignFromStr
  }

  fun getTextBaseline (el : Dom.Element) : CanvasTextBaseline {
    `#{el}.getContext('2d').textBaseline`
    |> textBaselineFromStr
  }

  fun getTransform (el : Dom.Element) : DOMMatrix {
    `#{el}.getContext('2d').getTransform()` as DOMMatrix
  }

  fun getWordSpacing (el : Dom.Element) : Number {
    let ws =
      `#{el}.getContext('2d').wordSpacing` as String

    case Number.fromString(String.replace(ws, "px", "")) {
      Maybe::Just(val) => val
      => 0
    }
  }

  fun globalCompositeOperationFromStr (globalCompositeOperation : String) : CanvasGlobalCompositeOperation {
    case globalCompositeOperation {
      "source-over" =>
        CanvasGlobalCompositeOperation::SourceOver

      "source-atop" =>
        CanvasGlobalCompositeOperation::SourceAtop

      "source-in" =>
        CanvasGlobalCompositeOperation::SourceIn

      "source-out" =>
        CanvasGlobalCompositeOperation::SourceOut

      "destination-over" =>
        CanvasGlobalCompositeOperation::DestinationOver

      "destination-atop" =>
        CanvasGlobalCompositeOperation::DestinationAtop

      "destination-in" =>
        CanvasGlobalCompositeOperation::DestinationIn

      "destination-out" =>
        CanvasGlobalCompositeOperation::DestinationOut

      "lighter" =>
        CanvasGlobalCompositeOperation::Lighter

      "copy" =>
        CanvasGlobalCompositeOperation::Copy

      "xor" =>
        CanvasGlobalCompositeOperation::Xor

      =>
        CanvasGlobalCompositeOperation::SourceOver
    }
  }

  fun globalCompositeOperationToStr (
    globalCompositeOperation : CanvasGlobalCompositeOperation
  ) : String {
    case globalCompositeOperation {
      CanvasGlobalCompositeOperation::SourceOver =>
        "source-over"

      CanvasGlobalCompositeOperation::SourceAtop =>
        "source-atop"

      CanvasGlobalCompositeOperation::SourceIn =>
        "source-in"

      CanvasGlobalCompositeOperation::SourceOut =>
        "source-out"

      CanvasGlobalCompositeOperation::DestinationOver =>
        "destination-over"

      CanvasGlobalCompositeOperation::DestinationAtop =>
        "destination-atop"

      CanvasGlobalCompositeOperation::DestinationIn =>
        "destination-in"

      CanvasGlobalCompositeOperation::DestinationOut =>
        "destination-out"

      CanvasGlobalCompositeOperation::Lighter =>
        "lighter"

      CanvasGlobalCompositeOperation::Copy =>
        "copy"

      CanvasGlobalCompositeOperation::Xor =>
        "xor"
    }
  }

  fun imageSmoothingFromStr (imageSmoothing : String) : CanvasImageSmoothingQuality {
    case imageSmoothing {
      "low" =>
        CanvasImageSmoothingQuality::Low

      "medium" =>
        CanvasImageSmoothingQuality::Medium

      "high" =>
        CanvasImageSmoothingQuality::High

      =>
        CanvasImageSmoothingQuality::Low
    }
  }

  fun imageSmoothingToStr (imageSmoothing : CanvasImageSmoothingQuality) : String {
    case imageSmoothing {
      CanvasImageSmoothingQuality::Low =>
        "low"

      CanvasImageSmoothingQuality::Medium =>
        "medium"

      CanvasImageSmoothingQuality::High =>
        "high"
    }
  }

  /* Returns whether or not the specified point is contained in the given path (if passed) or current path. */
  fun isPointInPath (
    el : Dom.Element,
    x : Number,
    y : Number,
    fillRule : CanvasFillRule = CanvasFillRule::Nonzero,
    path : Maybe(Path2D) = Maybe::Nothing
  ) : Bool {
    case path {
      Maybe::Just(p) =>
        `#{el}.getContext('2d').isPointInPath(#{p}, #{x}, #{y}, #{fillRuleToStr(fillRule)})` as Bool

      Maybe::Nothing =>
        `#{el}.getContext('2d').isPointInPath(#{x}, #{y}, #{fillRuleToStr(fillRule)})` as Bool
    }
  }

  /* Returns whether or not the specified point is inside the area contained by the stroking of a path. */
  fun isPointInStroke (
    el : Dom.Element,
    x : Number,
    y : Number,
    path : Maybe(Path2D) = Maybe::Nothing
  ) : Bool {
    case path {
      Maybe::Just(p) =>
        `#{el}.getContext('2d').isPointInStroke(#{x}, #{y}, #{p})` as Bool

      Maybe::Nothing =>
        `#{el}.getContext('2d').isPointInStroke(#{x}, #{y})` as Bool
    }
  }

  fun lineCapFromStr (lineCap : String) : CanvasLineCap {
    case lineCap {
      "butt" =>
        CanvasLineCap::Butt

      "round" =>
        CanvasLineCap::Round

      "square" =>
        CanvasLineCap::Square

      =>
        CanvasLineCap::Round
    }
  }

  fun lineCapToStr (lineCap : CanvasLineCap) : String {
    case lineCap {
      CanvasLineCap::Butt =>
        "butt"

      CanvasLineCap::Round =>
        "round"

      CanvasLineCap::Square =>
        "square"
    }
  }

  fun lineJoinFromStr (lineJoin : String) : CanvasLineJoin {
    case lineJoin {
      "bevel" =>
        CanvasLineJoin::Bevel

      "round" =>
        CanvasLineJoin::Round

      "miter" =>
        CanvasLineJoin::Miter

      =>
        CanvasLineJoin::Round
    }
  }

  fun lineJoinToStr (lineJoin : CanvasLineJoin) : String {
    case lineJoin {
      CanvasLineJoin::Bevel =>
        "bevel"

      CanvasLineJoin::Round =>
        "round"

      CanvasLineJoin::Miter =>
        "miter"
    }
  }

  /*
  Adds a straight line to the current sub-path by connecting the sub-path's last point to the specified `(x, y)` coordinates.

  Like other methods that modify the current path, this method does not directly render anything.

  To draw the path onto a canvas, you can use the `fill()` or `stroke()` methods.
  */
  fun lineTo (el : Dom.Element, x : Number, y : Number) : Dom.Element {
    `#{el}.getContext('2d').lineTo(#{x}, #{y})`
    el
  }

  /* Returns a `TextMetrics` object that contains information about the measured text (such as its width, for example). */
  fun measureText (el : Dom.Element, text : String) : TextMetrics {
    `#{el}.getContext('2d').measureText(#{text})` as TextMetrics
  }

  /* Begins a new sub-path at the point specified by the given `(x, y)` coordinates. */
  fun moveTo (el : Dom.Element, x : Number, y : Number) : Dom.Element {
    `#{el}.getContext('2d').moveTo(#{x}, #{y})`
    el
  }

  fun patternRepeatFromStr (patternRepeat : String) : CanvasPatternRepeat {
    case patternRepeat {
      "repeat" =>
        CanvasPatternRepeat::Repeat

      "repeat-x" =>
        CanvasPatternRepeat::RepeatX

      "repeat-y" =>
        CanvasPatternRepeat::RepeatY

      "no-repeat" =>
        CanvasPatternRepeat::NoRepeat

      =>
        CanvasPatternRepeat::NoRepeat
    }
  }

  fun patternRepeatToStr (patternRepeat : CanvasPatternRepeat) : String {
    case patternRepeat {
      CanvasPatternRepeat::Repeat =>
        "repeat"

      CanvasPatternRepeat::RepeatX =>
        "repeat-x"

      CanvasPatternRepeat::RepeatY =>
        "repeat-y"

      CanvasPatternRepeat::NoRepeat =>
        "no-repeat"
    }
  }

  /* Paints data from the given ImageData object onto the canvas. This method is not affected by the canvas transformation matrix. */
  fun putImageData (
    el : Dom.Element,
    imageData : ImageData,
    x : Number,
    y : Number
  ) : Dom.Element {
    `#{el}.getContext('2d').putImageData(#{imageData}, #{x}, #{y})`
    el
  }

  /* Paints data from the given ImageData object onto the canvas. Only paints pixels from the defined rectangle. This method is not affected by the canvas transformation matrix. */
  fun putImageDataRect (
    el : Dom.Element,
    imageData : ImageData,
    x : Number,
    y : Number,
    rectX : Number,
    rectY : Number,
    rectWidth : Number,
    rectHeight : Number
  ) : Dom.Element {
    `#{el}.getContext('2d').putImageData(#{imageData}, #{x}, #{y}, #{rectX}, #{rectY}, #{rectWidth}, #{rectHeight})`
    el
  }

  /*
  Adds a quadratic Bézier curve to the current sub-path.

  It requires two points: the first one is a control point and the second one is the end point.

  The starting point is the latest point in the current path, which can be changed using `moveTo()` before creating the quadratic Bézier curve.
  */
  fun quadraticCurveTo (
    el : Dom.Element,
    cpx : Number,
    cpy : Number,
    x : Number,
    y : Number
  ) : Dom.Element {
    `#{el}.getContext('2d').quadraticCurveTo(#{cpx}, #{cpy}, #{x}, #{y})`
    el
  }

  /*
  Adds a rectangle to the current path.

  Like other methods that modify the current path, this method does not directly render anything. To draw the rectangle onto a canvas, you can use the `fill()` or `stroke()` methods.
  */
  fun rect (
    el : Dom.Element,
    x : Number,
    y : Number,
    width : number,
    height : number
  ) : Dom.Element {
    `#{el}.getContext('2d').rect(#{x}, #{y}, #{width}, #{height})`
    el
  }

  /*
  Resets the rendering context to its default state, allowing it to be reused for drawing something else without having to explicitly reset all the properties.

  Resetting clears the backing buffer, drawing state stack, any defined paths, and styles. This includes the current transformation matrix, compositing properties, clipping region, dash list, line styles, text styles, shadows, image smoothing, filters, and so on.
  */
  fun reset (el : Dom.Element) : Dom.Element {
    `#{el}.getContext('2d').reset()`
    el
  }

  /* Resets the current transform to the identity matrix. */
  fun resetTransform (el : Dom.Element) : Dom.Element {
    `#{el}.getContext('2d').resetTransform()`
    el
  }

  /* Restores the most recently saved canvas state by popping the top entry in the drawing state stack. If there is no saved state, this method does nothing. */
  fun restore (el : Dom.Element) : Dom.Element {
    `#{el}.getContext('2d').restore()`
    el
  }

  /* Adds a rotation to the transformation matrix. */
  fun rotate (el : Dom.Element, angle : Number) : Dom.Element {
    `#{el}.getContext('2d').rotate(#{angle})`
    el
  }

  /*
  Adds a rounded rectangle to the current path.

  The radii of the corners can be specified in much the same way as the CSS border-radius property.

  Like other methods that modify the current path, this method does not directly render anything. To draw the rounded rectangle onto a canvas, you can use the fill() or stroke() methods.
  */
  fun roundRect (
    el : Dom.Element,
    x : Number,
    y : Number,
    width : Number,
    height : Number,
    radii : Array(Number)
  ) : Dom.Element {
    `#{el}.getContext('2d').roundRect(#{x}, #{y}, #{width}, #{height}, #{radii})`
    el
  }

  /* Saves the entire state of the canvas by pushing the current state onto a stack. */
  fun save (el : Dom.Element) : Dom.Element {
    `#{el}.getContext('2d').save()`
    el
  }

  /*
  Adds a scaling transformation to the canvas units horizontally and/or vertically.

  By default, one unit on the canvas is exactly one pixel. A scaling transformation modifies this behavior.

  For instance, a scaling factor of `0.5` results in a unit size of `0.5` pixels; shapes are thus drawn at half the normal size.

  Similarly, a scaling factor of `2.0` increases the unit size so that one unit becomes two pixels; shapes are thus drawn at twice the normal size.
  */
  fun scale (el : Dom.Element, x : Number, y : Number) : Dom.Element {
    `#{el}.getContext('2d').scale(#{x}, #{y})`
    el
  }

  /* Specifies the current text direction used to draw text. */
  fun setDirection (el : Dom.Element, direction : CanvasDirection) : Dom.Element {
    `#{el}.getContext('2d').direction = #{directionToStr(direction)}`
    el
  }

  /* Specifies the color, gradient, or pattern to use inside shapes. The default style is `#000` (black). */
  fun setFillStyle (el : Dom.Element, fillStyle : CanvasFillStyle) : Dom.Element {
    case fillStyle {
      CanvasFillStyle::String(value) =>
        `#{el}.getContext('2d').fillStyle = #{value}`

      CanvasFillStyle::Gradient(gradient) =>
        `#{el}.getContext('2d').fillStyle = #{gradient}`

      CanvasFillStyle::Pattern(pattern) =>
        `#{el}.getContext('2d').fillStyle = #{pattern}`
    }

    el
  }

  /* Provides filter effects such as blurring and grayscaling. It is similar to the CSS filter property and accepts the same values. */
  fun setFilter (el : Dom.Element, filter : String) : Dom.Element {
    `#{el}.getContext('2d').filter = #{filter}`
    el
  }

  /* Specifies the current text style to use when drawing text. This string uses the same syntax as the [CSS font](https://developer.mozilla.org/en-US/docs/Web/CSS/font) specifier. */
  fun setFont (el : Dom.Element, font : String) : Dom.Element {
    `#{el}.getContext('2d').font = #{font}`
    el
  }

  /*
  Specifies how font kerning information is used.

  Kerning adjusts how adjacent letters are spaced in a proportional font, allowing them to edge into each other's visual area if there is space available. For example, in well-kerned fonts, the characters AV, Ta and We nest together and make character spacing more uniform and pleasant to read than the equivalent text without kerning.

  The property corresponds to the font-kerning CSS property.
  */
  fun setFontKerning (el : Dom.Element, fontKerning : CanvasFontKerning) : Dom.Element {
    `#{el}.getContext('2d').fontKerning = #{fontKerningToStr(fontKerning)}`
    el
  }

  /* Specifies the alpha (transparency) value that is applied to shapes and images before they are drawn onto the canvas. */
  fun setGlobalAlpha (el : Dom.Element, globalAlpha : Number) : Dom.Element {
    `#{el}.getContext('2d').globalAlpha = #{globalAlpha}`
    el
  }

  /*
  Sets the type of compositing operation to apply when drawing new shapes.

  See also [Compositing and clipping](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing) in the [Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial).
  */
  fun setGlobalCompositeOperation (
    el : Dom.Element,
    globalCompositeOperation : CanvasGlobalCompositeOperation
  ) : Dom.Element {
    `#{el}.getContext('2d').globalCompositeOperation = #{globalCompositeOperationToStr(globalCompositeOperation)}`
    el
  }

  /*
  Determines whether scaled images are smoothed (true, default) or not (false). On getting the imageSmoothingEnabled property, the last value it was set to is returned.

  This property is useful for games and other apps that use pixel art. When enlarging images, the default resizing algorithm will blur the pixels. Set this property to false to retain the pixels' sharpness.
  */
  fun setImageSmoothingEnabled (el : Dom.Element, imageSmoothingEnabled : Bool) : Dom.Element {
    `#{el}.getContext('2d').imageSmoothingEnabled = #{imageSmoothingEnabled}`
    el
  }

  /* Sets the image smoothing quality */
  fun setImageSmoothingQuality (
    el : Dom.Element,
    imageSmoothingQuality : CanvasImageSmoothingQuality
  ) : Dom.Element {
    `#{el}.getContext('2d').imageSmoothingQuality = #{imageSmoothingToStr(imageSmoothingQuality)}`
    el
  }

  /*
  Specifies the spacing between letters when drawing text.

  This corresponds to the CSS letter-spacing property.
  */
  fun setLetterSpacing (el : Dom.Element, letterSpacing : Number) : Dom.Element {
    let ls =
      "#{letterSpacing}px"

    `#{el}.getContext('2d').letterSpacing = #{ls}`
    el
  }

  /* Determines the shape used to draw the end points of lines. */
  fun setLineCap (el : Dom.Element, lineCap : CanvasLineCap) : Dom.Element {
    `#{el}.getContext('2d').lineCap = #{lineCapToStr(lineCap)}`
    el
  }

  /*
  Sets the line dash pattern used when stroking lines. It uses an array of values that specify alternating lengths of lines and gaps which describe the pattern.

  Segments is an Array of numbers that specify distances to alternately draw a line and a gap (in coordinate space units).

  If the number of elements in the array is odd, the elements of the array get copied and concatenated.

  For example, `[5, 15, 25]` will become `[5, 15, 25, 5, 15, 25]`.

  If the array is empty, the line dash list is cleared and line strokes return to being solid.
  */
  fun setLineDash (el : Dom.Element, segments : Array(Number)) : Dom.Element {
    `#{el}.getContext('2d').setLineDash(#{segments})`
    el
  }

  /* Sets the line dash offset, or "phase." */
  fun setLineDashOffset (el : Dom.Element, lineDashOffset : Number) : Dom.Element {
    `#{el}.getContext('2d').lineDashOffset = #{lineDashOffset}`
    el
  }

  /*
  Determines the shape used to join two line segments where they meet.

  This property has no effect wherever two connected segments have the same direction, because no joining area will be added in this case. Degenerate segments with a length of zero (i.e., with all endpoints and control points at the exact same position) are also ignored.
  */
  fun setLineJoin (el : Dom.Element, lineJoin : CanvasLineJoin) : Dom.Element {
    `#{el}.getContext('2d').lineJoin = #{lineJoinToStr(lineJoin)}`
    el
  }

  /* Sets the thickness of lines. */
  fun setLineWidth (el : Dom.Element, lineWidth : Number) : Dom.Element {
    `#{el}.getContext('2d').lineWidth = #{lineWidth}`
    el
  }

  /* Sets the miter limit ratio, in coordinate space units. Zero, negative, Infinity, and NaN values are ignored. The default value is `10.0`. */
  fun setMiterLimit (el : Dom.Element, miterLimit : Number) : Dom.Element {
    `#{el}.getContext('2d').miterLimit = #{miterLimit}`
    el
  }

  /* Specifies the amount of blur applied to shadows. The default is `0` (no blur). */
  fun setShadowBlur (el : Dom.Element, shadowBlur : Number) : Dom.Element {
    `#{el}.getContext('2d').shadowBlur = #{shadowBlur}`
    el
  }

  /*
  Specifies the color of shadows.

  Be aware that the shadow's rendered opacity will be affected by the opacity of the `fillStyle` color when filling, and of the `strokeStyle` color when stroking.
  */
  fun setShadowColor (el : Dom.Element, shadowColor : String) : Dom.Element {
    `#{el}.getContext('2d').shadowColor = #{shadowColor}`
    el
  }

  /*
  Specifies the distance that shadows will be offset horizontally.

  Positive values are to the right, and negative to the left. The default value is `0` (no horizontal offset). `Infinity` and `NaN` values are ignored.
  */
  fun setShadowOffsetX (el : Dom.Element, shadowOffsetX : Number) {
    `#{el}.getContext('2d').shadowOffsetX = #{shadowOffsetX}`
    el
  }

  /*
  Specifies the distance that shadows will be offset vertically.

  Positive values are down, and negative are up. The default value is `0` (no vertical offset). `Infinity` and `NaN` values are ignored.
  */
  fun setShadowOffsetY (el : Dom.Element, shadowOffsetY : Number) {
    `#{el}.getContext('2d').shadowOffsetY = #{shadowOffsetY}`
    el
  }

  /* Specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes. The default is `#000` (black). */
  fun setStrokeStyle (el : Dom.Element, strokeStyle : CanvasFillStyle) {
    case strokeStyle {
      CanvasFillStyle::String(value) =>
        `#{el}.getContext('2d').strokeStyle = #{value}`

      CanvasFillStyle::Gradient(gradient) =>
        `#{el}.getContext('2d').strokeStyle = #{gradient}`

      CanvasFillStyle::Pattern(pattern) =>
        `#{el}.getContext('2d').strokeStyle = #{pattern}`
    }

    el
  }

  /*
  Specifies the current text alignment used when drawing text.

  The alignment is relative to the x value of the fillText() method. For example, if textAlign is "center", then the text's left edge will be at x - (textWidth / 2).
  */
  fun setTextAlign (el : Dom.Element, textAlign : CanvasTextAlign) {
    `#{el}.getContext('2d').textAlign = #{textAlignToStr(textAlign)}`
    el
  }

  /* Specifies the current text baseline used when drawing text. */
  fun setTextBaseline (el : Dom.Element, textBaseline : CanvasTextBaseline) {
    `#{el}.getContext('2d').textBaseline = #{textBaselineToStr(textBaseline)}`
    el
  }

  /*
  Resets the current transformation to the identity matrix, and then invokes a transformation described by the arguments of this method.

  This lets you scale, rotate, translate (move), and skew the context.
  */
  fun setTransform (
    el : Dom.Element,
    a : Number,
    b : Number,
    c : Number,
    d : Number,
    e : Number,
    f : Number
  ) : Dom.Element {
    `#{el}.getContext('2d').setTransform(#{a}, #{b}, #{c}, #{d}, #{e}, #{f})`
    el
  }

  /*
  Resets the current transformation to the identity matrix, and then invokes a transformation with the given transform matrix.

  This lets you scale, rotate, translate (move), and skew the context.
  */
  fun setTransformMatrix (el : Dom.Element, transform : DOMMatrix2D) : Dom.Element {
    `#{el}.getContext('2d').setTransform(#{transform})`
    el
  }

  /*
  Specifies the spacing between words when drawing text.

  This corresponds to the CSS word-spacing property.
  */
  fun setWordSpacing (el : Dom.Element, wordSpacing : Number) {
    let ws =
      "#{wordSpacing}px"

    `#{el}.getContext('2d').wordSpacing = #{ws}`
    el
  }

  /*
  Strokes (outlines) the current or given path with the current stroke style.

  Strokes are aligned to the center of a path; in other words, half of the stroke is drawn on the inner side, and half on the outer side.

  The stroke is drawn using the non-zero winding rule, which means that path intersections will still get filled.
  */
  fun stroke (
    el : Dom.Element,
    path : Maybe(Path2D) = Maybe::Nothing
  ) : Dom.Element {
    case path {
      Maybe::Just(p) =>
        `#{el}.getContext('2d').stroke(#{p})`

      Maybe::Nothing =>
        `#{el}.getContext('2d').stroke()`
    }

    el
  }

  /*
  Draws a rectangle that is stroked (outlined) according to the current `strokeStyle` and other context settings.

  This method draws directly to the canvas without modifying the current path, so any subsequent `fill()` or `stroke()` calls will have no effect on it.
  */
  fun strokeRect (
    el : Dom.Element,
    x : Number,
    y : Number,
    width : Number,
    height : Number
  ) : Dom.Element {
    `#{el}.getContext('2d').strokeRect(#{x}, #{y}, #{width}, #{height})`
    el
  }

  /*
  Strokes (outlines) the characters of a text string at the specified coordinates.

  An optional parameter allows specifying a `maxWidth` for the rendered text, which the user agent will achieve by condensing the text or by using a lower font size.

  This method draws directly to the canvas without modifying the current path, so any subsequent `fill()` or `stroke()` calls will have no effect on it.
  */
  fun strokeText (
    el : Dom.Element,
    text : String,
    x : Number,
    y : Number,
    maxWidth : Number = 0
  ) : Dom.Element {
    `#{el}.getContext('2d').strokeText(#{text}, #{x}, #{y}, #{maxWidth} > 0 ? #{maxWidth} : undefined)`
    el
  }

  fun textAlignFromStr (textAlign : String) : CanvasTextAlign {
    case textAlign {
      "left" =>
        CanvasTextAlign::Left

      "right" =>
        CanvasTextAlign::Right

      "center" =>
        CanvasTextAlign::Center

      "start" =>
        CanvasTextAlign::Start

      "end" =>
        CanvasTextAlign::End

      =>
        CanvasTextAlign::Left
    }
  }

  fun textAlignToStr (textAlign : CanvasTextAlign) : String {
    case textAlign {
      CanvasTextAlign::Left =>
        "left"

      CanvasTextAlign::Right =>
        "right"

      CanvasTextAlign::Center =>
        "center"

      CanvasTextAlign::Start =>
        "start"

      CanvasTextAlign::End =>
        "end"
    }
  }

  fun textBaselineFromStr (textBaseline : String) : CanvasTextBaseline {
    case textBaseline {
      "alphabetic" =>
        CanvasTextBaseline::Alphabetic

      "bottom" =>
        CanvasTextBaseline::Bottom

      "hanging" =>
        CanvasTextBaseline::Hanging

      "ideographic" =>
        CanvasTextBaseline::Ideographic

      "middle" =>
        CanvasTextBaseline::Middle

      "top" =>
        CanvasTextBaseline::Top

      =>
        CanvasTextBaseline::Alphabetic
    }
  }

  fun textBaselineToStr (textBaseline : CanvasTextBaseline) : String {
    case textBaseline {
      CanvasTextBaseline::Alphabetic =>
        "alphabetic"

      CanvasTextBaseline::Bottom =>
        "bottom"

      CanvasTextBaseline::Hanging =>
        "hanging"

      CanvasTextBaseline::Ideographic =>
        "ideographic"

      CanvasTextBaseline::Middle =>
        "middle"

      CanvasTextBaseline::Top =>
        "top"
    }
  }

  /*
  Multiplies the current transformation with the matrix described by the arguments of this method.

  This lets you scale, rotate, translate (move), and skew the context.
  */
  fun transform (
    el : Dom.Element,
    a : Number,
    b : Number,
    c : Number,
    d : Number,
    e : Number,
    f : Number
  ) : Dom.Element {
    `#{el}.getContext('2d').transform(#{a}, #{b}, #{c}, #{d}, #{e}, #{f})`
    el
  }

  /* Adds a translation transformation to the current matrix. */
  fun translate (el : Dom.Element, x : Number, y : Number) : Dom.Element {
    `#{el}.getContext('2d').translate(#{x}, #{y})`
    el
  }
}
