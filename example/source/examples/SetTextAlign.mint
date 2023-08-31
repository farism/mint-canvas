component SetTextAlign {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  let x =
                    175

                  el
                  |> Canvas.beginPath()
                  |> Canvas.moveTo(x, 0)
                  |> Canvas.lineTo(x, 150)
                  |> Canvas.stroke()

                  el
                  |> Canvas.setFont("30px serif")

                  el
                  |> Canvas.setTextAlign(CanvasTextAlign::Left)
                  |> Canvas.fillText("left-aligned", x, 40)

                  el
                  |> Canvas.setTextAlign(CanvasTextAlign::Center)
                  |> Canvas.fillText("center-aligned", x, 85)

                  el
                  |> Canvas.setTextAlign(CanvasTextAlign::Right)
                  |> Canvas.fillText("right-aligned", x, 130)

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

        <canvas as canvas width="350"/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
