component SetLineDashOffset {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  el
                  |> Canvas.setLineDash([4, 16])

                  // Dashed line with no offset
                  el
                  |> Canvas.beginPath()
                  |> Canvas.moveTo(0, 50)
                  |> Canvas.lineTo(300, 50)
                  |> Canvas.stroke()

                  // Dashed line with offset of 4
                  el
                  |> Canvas.beginPath()
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("red"))
                  |> Canvas.setLineDashOffset(4)
                  |> Canvas.moveTo(0, 100)
                  |> Canvas.lineTo(300, 100)
                  |> Canvas.stroke()

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
