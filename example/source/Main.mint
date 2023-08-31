component Main {
  connect App exposing { method }

  const DEMO_CONFIG_FUNCTIONS =
    Map.fromArray(
      [
        {"setDirection", () { <SetDirection/> }},
        {"setFillStyle", () { <SetFillStyle/> }},
        {"setFilter", () { <SetFilter/> }},
        {"setFont", () { <SetFont/> }},
        {"setFontKerning", () { <SetFontKerning/> }},
        {"setGlobalAlpha", () { <SetGlobalAlpha/> }},
        {"setGlobalCompositeOperation", () { <SetGlobalCompositeOperation/> }},
        {"setImageSmoothingEnabled", () { <SetImageSmoothingEnabled/> }},
        {"setImageSmoothingQuality", () { <SetImageSmoothingQuality/> }},
        {"setLetterSpacing", () { <SetLetterSpacing/> }},
        {"setLineCap", () { <SetLineCap/> }},
        {"setLineDashOffset", () { <SetLineDashOffset/> }},
        {"setLineJoin", () { <SetLineJoin/> }},
        {"setLineWidth", () { <SetLineWidth/> }},
        {"setMiterLimit", () { <SetMiterLimit/> }},
        {"setShadowBlur", () { <SetShadowBlur/> }},
        {"setShadowColor", () { <SetShadowColor/> }},
        {"setShadowOffsetX", () { <SetShadowOffsetX/> }},
        {"setShadowOffsetY", () { <SetShadowOffsetY/> }},
        {"setStrokeStyle", () { <SetStrokeStyle/> }},
        {"setTextAlign", () { <SetTextAlign/> }},
        {"setTextBaseline", () { <SetTextBaseline/> }},
        {"setWordSpacing", () { <SetWordSpacing/> }}
      ])

  const DEMO_DRAW_FUNCTIONS =
    Map.fromArray(
      [
        {"arc", () { <Arc/> }},
        {"arcTo", () { <ArcTo/> }},
        {"beginPath", () { <BeginPath/> }},
        {"bezierCurveTo", () { <BezierCurveTo/> }},
        {"clearRect", () { <ClearRect/> }},
        {"clip", () { <Clip/> }},
        {"clipPath", () { <ClipPath/> }},
        {"closePath", () { <ClosePath/> }},
        {"createConicGradient", () { <CreateConicGradient/> }},
        {"createImageData", () { <CreateImageData/> }},
        {"createLinearGradient", () { <CreateLinearGradient/> }},
        {"createPattern", () { <CreatePattern/> }},
        {"createRadialGradient", () { <CreateRadialGradient/> }},
        {"drawImage", () { <DrawImage/> }},
        {"ellipse", () { <Ellipse/> }},
        {"fill", () { <Fill/> }},
        {"fillPath", () { <FillPath/> }},
        {"fillRect", () { <FillRect/> }},
        {"fillText", () { <FillText/> }},
        {"isPointInPath", () { <IsPointInPath/> }},
        {"isPointInStroke", () { <IsPointInStroke/> }},
        {"lineTo", () { <LineTo/> }},
        {"measureText", () { <MeasureText/> }},
        {"moveTo", () { <MoveTo/> }},
        {"putImageData", () { <Arc/> }},
        {"quadraticCurveTo", () { <QuadraticCurveTo/> }},
        {"rect", () { <Rect/> }},
        {"reset", () { <Reset/> }},
        {"resetTransform", () { <ResetTransform/> }},
        {"restore", () { <Restore/> }},
        {"rotate", () { <Rotate/> }},
        {"roundRect", () { <RoundRect/> }},
        {"save", () { <Save/> }},
        {"scale", () { <Scale/> }},
        {"setLineDash", () { <SetLineDash/> }},
        {"setTransform", () { <SetTransform/> }},
        {"stroke", () { <Stroke/> }},
        {"strokeRect", () { <StrokeRect/> }},
        {"strokeText", () { <StrokeText/> }},
        {"transform", () { <Transform/> }},
        {"translate", () { <Translate/> }}
      ])

  fun isActive (href : String) {
    if Window.isActiveURL(href) {
      "active"
    } else {
      ""
    }
  }

  fun render : Html {
    <article>
      <div class="page">
        <div class="guide guide--wide">
          <div class="toc">
            <div class="toc__wrapper">
              <div class="page__package">
                <strong>"mint-canvas"</strong>
                <p/>
              </div>

              <div class="toc__section">
                "Config Functions"
              </div>

              <div
                class="toc__pages"
                id="sidebar">

                <div class="sidebar">
                  <div>
                    for api of Map.entries(DEMO_CONFIG_FUNCTIONS) {
                      <div data-id="version-item">
                        <a
                          class={isActive(api[0])}
                          href="/#{api[0]}">

                          <{ api[0] }>

                        </a>
                      </div>
                    }
                  </div>
                </div>

              </div>

              <div class="toc__section">
                "Draw Functions"
              </div>

              <div
                class="toc__pages"
                id="sidebar">

                <div class="sidebar">
                  <div>
                    for api of Map.entries(DEMO_DRAW_FUNCTIONS) {
                      <div data-id="version-item">
                        <a
                          class={isActive(api[0])}
                          href="/#{api[0]}">

                          <{ api[0] }>

                        </a>
                      </div>
                    }
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="guide-content">
            case Map.get(DEMO_CONFIG_FUNCTIONS, method) {
              Maybe::Just(content) =>
                content()

              =>
                Html.empty()
            }

            case Map.get(DEMO_DRAW_FUNCTIONS, method) {
              Maybe::Just(content) =>
                content()

              =>
                Html.empty()
            }
          </div>
        </div>
      </div>
    </article>
  }
}
