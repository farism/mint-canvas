component SetImageSmoothingEnabled {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                case image {
                  Maybe::Just(img) =>
                    {
                      let dims =
                        Dom.getDimensions(img)

                      Dom.setStyle(img, "display", "none")

                      let imageData =
                        CanvasImageSource.fromImage(img)

                      el
                      |> Canvas.setFont("16px sans-serif")
                      |> Canvas.setTextAlign(CanvasTextAlign::Center)

                      el
                      |> Canvas.fillText("Source", dims.width * 0.5, 20)
                      |> Canvas.drawImage(imageData, 0, 24, dims.width, dims.height)

                      el
                      |> Canvas.fillText("Smoothing = TRUE", dims.width * 2.5, 20)
                      |> Canvas.setImageSmoothingEnabled(true)
                      |> Canvas.drawImage(imageData, dims.width, 24, dims.width * 3, dims.height * 3)

                      el
                      |> Canvas.fillText("Smoothing = FALSE", dims.width * 5.5, 20)
                      |> Canvas.setImageSmoothingEnabled(false)
                      |> Canvas.drawImage(imageData, dims.width * 4, 24, dims.width * 3, dims.height * 3)

                      ""
                    }

                  =>
                    ""
                }

              =>
                ""
            }
          }

        <>
          <img as image
            src={@asset(../../assets/star.png)}
            onLoad={draw}/>

          <canvas as canvas
            width="460"
            height="210"/>
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
