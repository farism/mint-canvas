component CreatePattern {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(canvasEl) =>
                case image {
                  Maybe::Just(imageEl) =>
                    {
                      let imageSource =
                        CanvasImageSource.fromImage(imageEl)

                      let pattern =
                        Canvas.createPattern(canvasEl, imageSource, CanvasPatternRepeat::Repeat)

                      Dom.setStyle(imageEl, "display", "none")

                      case pattern {
                        Maybe::Just(p) =>
                          {
                            canvasEl
                            |> Canvas.setFillStyle(CanvasFillStyle::Pattern(p))
                            |> Canvas.fillRect(0, 0, 300, 300)

                            ""
                          }

                        Maybe::Nothing =>
                          ""
                      }

                      ""
                    }

                  Maybe::Nothing =>
                    ""
                }

              Maybe::Nothing =>
                ""
            }
          }

        <>
          <img as image
            src={@asset(../../assets/canvas_createpattern.png)}
            onLoad={draw}/>

          <canvas as canvas
            width="300"
            height="300"/>
        </>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
