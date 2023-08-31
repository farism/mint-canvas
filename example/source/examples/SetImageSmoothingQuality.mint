component SetImageSmoothingQuality {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(canvasEl) =>
                case image {
                  Maybe::Just(imageEl) =>
                    {
                      let imageSource =
                        CanvasImageSource.fromImage(imageEl)

                      Dom.setStyle(imageEl, "display", "none")

                      canvasEl
                      |> Canvas.setImageSmoothingQuality(CanvasImageSmoothingQuality::Low)
                      |> Canvas.drawImage(imageSource, 0, 0, 300, 150)

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

          <canvas as canvas/>
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
