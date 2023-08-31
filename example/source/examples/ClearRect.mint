component ClearRect {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  let dims =
                    el
                    |> Dom.Canvas.toDomElement
                    |> Dom.getDimensions

                  // Draw yellow background
                  el
                  |> Canvas.beginPath
                  |> Canvas.setFillStyle(CanvasFillStyle::String("#ff6"))
                  |> Canvas.fillRect(0, 0, dims.width, dims.height)

                  // Draw blue triangle
                  el
                  |> Canvas.beginPath
                  |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
                  |> Canvas.moveTo(20, 20)
                  |> Canvas.lineTo(180, 20)
                  |> Canvas.lineTo(130, 130)
                  |> Canvas.closePath
                  |> Canvas.fill

                  // Clear part of the canvas
                  el
                  |> Canvas.clearRect(10, 10, 120, 100)

                  ""
                }

              Maybe::Nothing =>
                ""
            }
          }

        {
          await Timer.timeout(0)
          draw()
        }

        <canvas as canvas/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
