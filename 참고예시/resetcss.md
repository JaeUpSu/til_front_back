    # reset.css

    - html, css 하면서 자동으로 설정된 default 값이 있습니다.
        (ex) margin 같은경우

    - 웹브라우저 마다 default 값이 적용되어있기 때문에
      브라우저마다 기본 default 스타일 값이 아니라 동일한
      css 스타일을 보여주기 위해 "default 값을 초기화" 한다.


    1. 구글에 "Reset CSS" 라고 검색을 하고 초기화 코드를 찾는다.

    2. 사용하는 웹 편집기로 돌아와 CSS 폴더에
       reset.css 파일 생성 후 복붙한다.

    3. 작업하던 style.css 파일에 @import "reset.css"; 추가
    or
    3. <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">

---

[reset.css]

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/_ HTML5 display-role reset for older browsers _/
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
