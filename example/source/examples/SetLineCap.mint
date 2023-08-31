component SetLineCap {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  el
                  |> Canvas.beginPath()
                  |> Canvas.moveTo(20, 20)
                  |> Canvas.setLineWidth(15)
                  |> Canvas.setLineCap(CanvasLineCap::Round)
                  |> Canvas.lineTo(100, 100)
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
