module CanvasTest {
  fun canvas (
    ctx : Test.Context(Dom.Element),
    fn : Function(Dom.Element, Bool)
  ) {
    case Dom.getElementBySelector("canvas") {
      Maybe::Just(canvas) =>
        fn(canvas)

      =>
        false
    }
  }
}

suite "Canvas" {
  test "measureText" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        let width =
          Canvas.measureText(c, "Hello world")
          |> TextMetrics.width
          |> Math.floor

        width == 49
      })
  }

  test "setDirection | getDirection" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setDirection(c, CanvasDirection::RTL)
        Canvas.getDirection(c) == CanvasDirection::RTL
      })
  }

  test "setFillStyle | getFillStyle value" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setFillStyle(c, CanvasFillStyle::String("blue"))

        case Canvas.getFillStyle(c) {
          CanvasFillStyle::String(value) =>
            Canvas.getFillStyle(c) == CanvasFillStyle::String("#0000ff")

          =>
            false
        }
      })
  }

  test "setFillStyle | getFillStyle pattern" {
    true
  }

  test "setFilter | getFilter" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setFilter(c, "blur(4px)")
        Canvas.getFilter(c) == "blur(4px)"
      })
  }

  test "setFont | getFont" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setFont(c, "10px serif")
        Canvas.getFont(c) == "10px serif"
      })
  }

  test "setFontKerning | getFontKerning" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setFontKerning(c, CanvasFontKerning::Normal)
        Canvas.getFontKerning(c) == CanvasFontKerning::Normal
      })
  }

  test "setGlobalCompositeOpreation | getGlobalCompositeOpreation" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setGlobalCompositeOperation(c, CanvasGlobalCompositeOperation::Lighter)
        Canvas.getGlobalCompositeOperation(c) == CanvasGlobalCompositeOperation::Lighter
      })
  }

  test "setGlobalAlpha | getGlobalAlpha" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setGlobalAlpha(c, 0.5)
        Canvas.getGlobalAlpha(c) == 0.5
      })
  }

  test "setLetterSpacing | getLetterSpacing" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setLetterSpacing(c, 1)
        Canvas.getLetterSpacing(c) == 1
      })
  }

  test "setImageSmoothingEnabled | getImageSmoothingEnabled" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setImageSmoothingEnabled(c, false)
        Canvas.getImageSmoothingEnabled(c) == false
      })
  }

  test "setImageSmoothingQuality | getImageSmoothingQuality" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setImageSmoothingQuality(c, CanvasImageSmoothingQuality::High)
        Canvas.getImageSmoothingQuality(c) == CanvasImageSmoothingQuality::High
      })
  }

  test "setLineCap | getLineCap" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setLineCap(c, CanvasLineCap::Square)
        Canvas.getLineCap(c) == CanvasLineCap::Square
      })
  }

  test "setLineDash | getLineDash" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setLineDash(c, [10, 20])
        Canvas.getLineDash(c) == [10, 20]
      })
  }

  test "setLineDashOffset | getLineDashOffset" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setLineDashOffset(c, 2)
        Canvas.getLineDashOffset(c) == 2
      })
  }

  test "setLineJoin | getLineJoin" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setLineJoin(c, CanvasLineJoin::Miter)
        Canvas.getLineJoin(c) == CanvasLineJoin::Miter
      })
  }

  test "setLineWidth | getLineWidth" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setLineWidth(c, 3)
        Canvas.getLineWidth(c) == 3
      })
  }

  test "setMiterLimit | getMiterLimit" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setMiterLimit(c, 3)
        Canvas.getMiterLimit(c) == 3
      })
  }

  test "setShadowBlur | getShadowBlur" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setShadowBlur(c, 1)
        Canvas.getShadowBlur(c) == 1
      })
  }

  test "setShadowColor | getShadowColor" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setShadowColor(c, "blue")
        Canvas.getShadowColor(c) == "#0000ff"
      })
  }

  test "setTextAlign | getTextAlign" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setTextAlign(c, CanvasTextAlign::Center)
        Canvas.getTextAlign(c) == CanvasTextAlign::Center
      })
  }

  test "setTextBaseline | getTextBaseline" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setTextBaseline(c, CanvasTextBaseline::Hanging)
        Canvas.getTextBaseline(c) == CanvasTextBaseline::Hanging
      })
  }

  test "setShadowOffsetX | getShadowOffsetX" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setShadowOffsetX(c, 5)
        Canvas.getShadowOffsetX(c) == 5
      })
  }

  test "setShadowOffsetY | getShadowOffsetY" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setShadowOffsetY(c, -5)
        Canvas.getShadowOffsetY(c) == -5
      })
  }

  test "setWordSpacing | getWordSpacing" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setWordSpacing(c, 2)
        Canvas.getWordSpacing(c) == 2
      })
  }

  test "setStrokeStyle | getStrokeStyle" {
    <canvas/>
    |> Test.Html.start
    |> CanvasTest.canvas(
      (c : Dom.Element) {
        Canvas.setStrokeStyle(c, CanvasFillStyle::String("red"))
        Canvas.getStrokeStyle(c) == CanvasFillStyle::String("#ff0000")
      })
  }
}
