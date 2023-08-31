# Mint Canvas

[Mint](https://mint-lang.com/) wrapper for browser Canvas APIs

# Simple Example

A simple example looks like this

```mint
component Main {
  fun componentDidMount {
    case canvas {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.rect(10, 20, 150, 100)
          |> Canvas.fill

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

  fun render : Html {
    <canvas as canvas/>
  }
}
```

# [Demo Website]()

Most of the examples on MDN's [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/) site have been ported to `mint-canvas` and can be viewed on the demo website.

# [Demo Examples folder](/example/source/examples/)

Or directly view the example source files.

# Patterns

## Chaining

Most `Canvas` APIs return the passed in canvas `Dom.Element`. This allows you to chain calls with `|>`.

```mint
canvasEl
|> Canvas.beginPath
|> Canvas.setFillStyle(CanvasFillStyle::String("#ff6"))
|> Canvas.fillRect(0, 0, dims.width, dims.height)
|> Canvas.beginPath
|> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
|> Canvas.moveTo(20, 20)
|> Canvas.lineTo(180, 20)
|> Canvas.lineTo(130, 130)
|> Canvas.closePath
|> Canvas.fill
|> Canvas.clearRect(10, 10, 120, 100)
```

## Setting properties

Instance properties become setter functions. Introduces enums where it makes sense.

```mint
canvasEl
|> Canvas.setLetterSpacing(10)
|> Canvas.setImageSmoothingQuality(CanvasImageSmoothingQuality::Low)
```

## Context2d

All APIs take `Dom.Element` as the first paramter. `getContext('2d)` is called under the hood.

```mint
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
```
