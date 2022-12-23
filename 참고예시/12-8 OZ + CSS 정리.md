# HTML/CSS/JS

# TCP School => CSS

    TCP SCHOOL
        ! CSS

    기술블로그
        ! 입력
        ! display
        ! 함수선언 여러가지
        ! (none), var, let, const 변수 선언

        https://www.youtube.com/watch?v=qY9Nbj-SlGY
        ! 프론트앤드 로드맵
        ! 백엔드 로드맵
        ! 풀스택 로드맵

---

# HTML/CSS/JS

    @ JS

    - html 에서는 body 맨 밑에 <script> 위치함
        <script src="./abc.js">

    - 반복문, 비교연산자
    - 리스트 ( => ["A","B","C"]  )

    - HTML 태그 불러오기
        document.querySelector("선택자");
                                  ㄴ> 태그명, #id, .class

    - 태그.onclick = function(){...};
        ㄴ> 태그를 클릭하면 function 실행

    - confirm , 확인창 , alert 랑 다르게 응답의 값을 받을 수 있음
              , true   , false

    - prompt , 입력까지 가능
             , prompt("질문" , "초기값")

    - ★ document.write("<p> ~~~~ <p>")
            ㄴ> script 맨밑에 적용

    - console.log(input)
            ㄴ> input 값 콘솔창에 출력

    - 전위, 후위 연산자 (++a, a++)

    - 쌍따옴표 안에 쌍따옴표 하려면 => \"
        "1996\"~\"1996"

    - 비교연산자 "=="  자료형 안따짐    => 3 == "3" (true)
      비교연산자 "===" 자료형 따짐      => 3 == "3" (false)

    - 삼항 연산자
        a > 3 ? alert("3보다 크다") : alert("3보다 작다");

    - NOT 연산자  =>  !

    - switch case 문

    - parseInt => 정수로 타입 변경

    - while 반복문

    - break, continue 제어문

    - function 함수

        function 함수명() {

        }

    - var 로 변수 선언
        ㄴ> 함수 밖 : 전역
        ㄴ> 함수 안 : 지역

        var number = 3;


    - 그냥 변수 선언
        ㄴ> 함수 안,밖 모두 : 전역

        number = 3;


    - var 로 이미 선언한 변수 똑같이 선언
            ㄴ> 원래 논리라면 오류나야하는데 안나기 때문에 BAD
            ㄴ> 그래서 var 은 지양

    - let 은 동일하게 선언하면 오류메시지 뜸
            ㄴ> let 사용을 지향

    - return, 반환 명령어

    - ★ 익명함수 (재사용성이 적은 함수들 or 즉시실행)
            실행1.
                var a = function(b, c) {   return a+b;   }
                alert(a(5, 4));

            실행2.
                (function() {
                    ~~~
                }, (인수));

# TCP School => CSS

    "스타일 시트"

    @ CSS 선택자

        - HTML 요소 선택자
            ( h2 { ... } )
        - id 선택자
            ( #heading { ... } )
        - class 선택자
            ( .headings { ... } )
        - group 선택자
            ( h1, h2, p { ... } )


    @ 주석
        /* 주석 */


    @ CSS 적용방법

        - Inline style
            HTML 요소 내부에 style 속성을 사용해 적용
            유지보수가 어려워 될 수 있으면 지양
            ( <h2 style = "color:green; text-decoration:underline"> )

        - Internal style sheet
            해당 HTML 문서에만 적용 가능
            <head>
                <style>
                    body { ... }
                    .container { ... }
                </style>
            </haed>

        - External style sheet
            웹 사이트 전체의 스타일을 하나의 팔에서 변경 가능
            <head>
                <link rel="stylesheet" href="./anything.css">
            </head>

            anything.css
                body { ... }
                .container { ... }


    @ CSS 우선순위

        - 인라인
        - 내부/외부 스타일 시트
        - 웹 브라우저 기본 스타일


    @ CSS 색상

        - 색 이름으로 선언
            ( .blue { color : blue; } )
        - rgb 로 선언
            ( .blue { color : rgb(0,0,255); } )
        - 16 진수 색상값으로 표현
            ( .blue { color : #0000FF; } )


    @ CSS 배경

        - background-color
            ( body { background-color: lightblue; } )

        - background-image
            ( body { background-image: url("url 주소"); } )

        - background-repeat
            기본 설정 : 수직 수평 모두 반복
            repeat-x  : 수평 반복
            repeat-y  : 수직 반복
            no-repeat : 반복 X
            ( body { background-img: url("url 주소");
                        background-repeat: no-repeat } )

        - background-position
            "반복되지 않는" 배경 이미지의 상대 위치(relative position)

            키워드 조합  : left or right or center (top/center/bottom)
            ( body { ...; background-position: top right; } )

            직접 명시    : % or px
            ( body { ...; background-position: 100px 200px; } )

        - background-attachment
            "위치가 설정된" 배경이미지를 해당 위치에 고정(스크롤과 무관)
            ( body { ...; background-attachment: fixed; } )

        - background
            한번에 적용
            ( body { background: #FFCCCC url("url 주소") no-repeat
                                     left bottom fixed; } )


    @ CSS 텍스트

        -color
            텍스트의 색상을 설정

        -direction
            텍스트가 써지는 방향
            ( .rightToLeft { direction: rtl; } //오른쪽에서 왼쪽방향으로 )

        -letter-spacing
            글자사이 간격
            ( decLetterSpacing { letter-spacing: -3px; } )

        -word-spacing
            단어사이 간격
            ( decWordSpacing { word-spacing: -3px; } )

        -text-indent
            첫 줄에 들여쓰기 설정(다른 줄에도 적용은 됨)
            ( .parentIndent { text-indent: 30px; } )

        -text-align
            텍스트 수평 방향 정렬 설정
            ( h2 { text-align: left; } )

        -text-decoration
            여러가지 효과를 설정 혹은 제거
            (overline,line-through,underline,none)

            ( h2 { text-decoration: overline; })
            ( h2 { text-decoration: none; })

        -text-transform
            영문자 대소문자 설정
            (uppercase,lowercase,capitalize)

            ( h2 { text-transform: uppercase; })

        -line-height
            텍스트 줄 간격 설정
            ( h2 { line-height: 1.8; } )

        -text-shadow
            텍스트 그림자 효과 설정
            ( h2 { text-shadow: 2px 1px #3399CC; } )


    @ CSS 글꼴

        - font-family
            특정 글꼴 집합
            사용자의 컴에 해당 글꼴이 존재하면 해당 글꼴로 표시
            순서대로 적용

            ( .serif { font-family: Arial, Helvectica, sans-serif } )

        - font-style
            normal, italic, oblique 사용(주로 italic 때문에 사용)

        - font-varient
            font-varient: small-caps
            크기가 작은 대문자 글꼴로 변경

        - font-weight
            텍스트를 얼마나 두껍게 표현할지 설정
            lighter, normal, bold, bolder
            ( font-weight: bolder )

        - font-size
            텍스트의 크기 설정
            (제목을 위해 크게할때는 이거 사용말고 h1~6 사용)

            - 절대크기
                어느 웹 브라우저에서 같은 크기로 표현
                픽셀 단위(px)

            - 상대크기
                백분율 단위(%) => 기본크기 100%로 놓고, 그에대한 상대 크기
                배수 단위(em) => 기본크기 1em로 놓고, 그에대한 상대 크기


    @ CSS 링크 (이벤트 효과 느낌)

        - link
            기본상태, 사용자가 아직 한번도 해당 링크를 통해
                      연결된 페이지를 방문하지 않은 상태
        - visited
            방문한 상태

        - hover
            커서가 링크 위에 올라가 있는 상태

        - active
            링크를 클릭한 상태

        - focus
            키보드나 마우스의 이벤트 또는 다른 형태로 해당 요소가
            포커스를 가진 상태

        - 링크를 활용한 버튼
            a:link, a:visited {
                background-color: #FFA500;
                color: maroon;
                padding: 15px 25px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
            }

    @ CSS 리스트

        - list-style-type
            리스트 요소 앞에 위치한 숫자나 기호 설정
            ( circle, square, upper-alpha, lower-roman )

        - list-style-image
            마커에 이미지 설정
            ( list-style-image: url("url 주소"); )

        - list-style-position
            리스트 요소의 위치 설정
            기본값 : outside
            ( outside, inside )

        - list-style
            한번에 적용
            ( ul { list-style: square inside url("url주소"); } )


    @ CSS 테이블

        - border
            테두리 설정 (기본값: 빈 테두리)
            ( border : 2px solid orange; )

        - border-collapse
            테이블의 테두리는 한줄로 표현(기본값: 모든 요소별 테두리 표현)
            ( border-collapse : collapse; )

        - border-spacing
            테이블 요소간 여백 설정
            ( border-spacing: 20px 30px; )

        - text-align
            테이블 요소 th, td 내부에서 텍스트의 수평 방향 정렬 설정
            ( 기본값: th - 가운데 , td - 왼쪽 )

        - vertical-align 속성
            테이블 요소 th, td 내부에서 텍스트의 수직 방향 정렬 설정
            ( 기본값: 둘다 가운데 )

        - caption-side
            테이블의 캡션 설정

        - empty-side
            테이블 내의 빈셀들의 테두리 및 배경색 표현할지 설정

        - table-layout
            테이블에 사용되는 레이아웃 알고리즘 설정


    @ 크기 단위


            - 절대크기
                픽셀 단위(px) => 스크린의 픽셀을 기준

            - 상대크기
                백분율 단위(%) => 기본크기 100%로 놓고, 그에대한 상대 크기
                배수 단위(em) => 기본 font 크기 1em로 놓고,
                                             그에대한 상대 크기


    @ 크기

        - height
        - width

        - max-width
        - max-height
        - min-width
        - min-height
            max 최대 크기를 설정
            min 최소 크기를 설정
            (기본값 : none)


    @ 박스 모델

        - padding
        - border
        - margin
        - content

        [margin [border [padding [content ] ] ] ]

        content 는 height, width 로 크기 설정
        ! padding, border, margin 의 크기는 height, width 포함되지 않다.
        ! 위 모두를 설정할때 크기는 각 박스모델의 설정값을 모두 더해준다.

        - padding / margin
            한번에 가능, 각 부위별로 가능
            ( top, bottom, left, right )

        - border
            border-style
                dotted/dashed/solid/double/groove/ridge/inset
                outset/none/hidden

            border-width
                CSS 크기 단위로 설정 가능
                thin, medium, thick 설정 가능

            border-color
                테두리 색 설정(기본값: 투명)

            border 개별 설정
                border-top-style : dotted 이런식

            border
                한번에 가능

        - margin
            속성값에 auto 설정해야 하는이유
                ㄴ> 웹 브라우저가 수평방향 마진 값을 자동 설정
                    정중앙에 위치하게 됨


    @ 아웃라인
        HTML 요소를 둘러싼 가장 바깥 부분
        (전체 크기에 포함x , border랑 다름)

        outline       (=== 쓰임새 border 유사)
        outline-style (=== 쓰임새 border 유사)
        outline-width (=== 쓰임새 border 유사)
        outline-color (=== 쓰임새 border 유사)
        outline-offset
            border 와 outline 사이의 여백 설정


    @ Display (★)

        Block
            언제나 새로운 라인에서 시작
            해당 라인의 모든 너비 차지
            (div, h1~h4, p, ul, ol, form, ...)

        Inline
            해당 요소의 content 만큼만 차지
            (span, a, img, ...)

        display
            속성값을 통해 반대로 설정가능
            ( li { display: inline; } )

            inline-block
                해당 요소 자체는 Inline 처럼 동작
                해당 요소 내부는 Block  처럼 동작
                너비와 높이 설정 가능
                margin을 이용해 여백 지정 가능

            none
                해당 요소 숨기기

        visibility
            visible     웹페이지에 나타남
            hidden      웹페이지에 나타나지 않지만 존재
            collapse    동적인 테이블만 적용 가능, 테두리 한줄

        opacity
            투명도 설정(0.0 ~ 1.0)
            0에 가까울 수록 투명


    @ Position (★)

        1. 정적위치 => static
            top, left, right, bottom 영향 X
            웹페이지 흐름대로 차례대로 위치
            기본 설정값

        2. 상대위치 => relative
            HTML 기본위치 기준으로 설정


        3. 고정위치 => fixed
            뷰표트를 기준으로 위치 설정

            웹페이지 스크롤 되어도 고정 위치로 지정된요소는
            항상 같은 곳 위치


        4. 절대위치 => absolute
            고정위치와 비슷하게 동작
            다른점, 뷰포트 기준이 아닌 조상요소를 기준으로 위치 설정
                    없다면 body 기준


        5. z-index
            위치를 설정하게 되면 어떤 요소들은 설정된 위치 및 방식에
            따라 서로 겨칠 수 있음

            겹친 요소들이 쌓이는 스택의 순서를 설정

            숫자가 클수록 앞쪽에 위치, 작을수록 뒤에 위치


    @ float

        HTML 요소가 주변의 다른 요소들과 자연스럽게 어울리도록 설정
        레이아웃 작성할때 자주 사용

        clear 속성
            float 이 적용된 이후 나타나는 요소들의 동작을 조절
            (float 의 영향을 받지 않도록)

        overflow 속성
            float 속성이 적용된 HTML 요소가 자신을 감싸고 있는
            컨테이너 요소보다 크면, 해당요소의 일부가 밖으로 흘러넘침

            overflow 속성값을 auto 로하면 자동으로
            내부의 요소를 감쌀 수 있을 만큼 커짐

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>CSS Float</title>
        <style>
            div.page {
                border: 3px solid #CD5C5C;
                overflow: auto;
            }
            h2 { text-align: center; }
            header{ border: 3px solid #FFD700; }
            nav {
                border: 3px solid #FF1493;
                width: 150px;
                float: left;
            }
            section {
                border: 3px solid #00BFFF;
                margin-left: 156px;
            }
            footer{ border: 3px solid #00FA9A; }
        </style>
    </head>
    <body>
        <h1>float 속성을 이용한 레이아웃</h1>
        <div class="page">     
            <header>
                <h2>header 영역</h2>
            </header>
            <nav>
                <h2>nav 영역</h2>
                <p>여기에는 보통 메뉴가 들어갑니다.</p>
            </nav>
            <section>
                <h2>section 영역</h2>
                <p>여기에는 페이지에 해당하는 내용이 들어갑니다.<br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare sapien suscipit tincidunt ullamcorper. Cras ac sem sed mauris maximus rhoncus vel in metus. Nam pharetra arcu sit amet dolor interdum, eget scelerisque libero finibus. Phasellus quis vulputate ante. Fusce sit amet viverra justo. Donec id elementum mauris. Nam id porttitor nisl, et suscipit nunc. Vestibulum sit amet volutpat quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis placerat sem eu facilisis ultricies.
                </p>
            </section>
            <footer>
                <h2>footer 영역</h2>
            </footer>
        </div>
    </body>
</html>

    @ 정렬

        margin 이용한 가운데 정렬
            속성값을 auto로 설정하면 컨테이너 기준
            수평방향 가운데 정렬
            해당 요소는 특정 너비를 가져야 함
            나머지 공간을 좌우로 균등하게 여백
            (div { width: 300px; margin auto; })

        position 이용한 좌우 정렬
            절대 위치는 다른 요소와 겹칠 수 있다
            이 특성을 이용하면 HTML 요소를 수평방향으로 좌우정렬 가능
            <body> 요소에 margin 과 padding 속성값 설정하는것이 좋다.

        float 이용한 좌우 정렬
            수평방향으로 좌우 정렬
            <body> 요소에 margin 과 padding 속성값 설정하는것이 좋다.

    @ 선택자

        전체, 태그명, 아이디, 클래스, 그룹
         *  ,  h1   ,  #id ,  .class, (h1, h2 {  })

    @ 자손 선택자

        div p { }

    @ 자식 선택자

        div > p { }

    @ 동위 선택자

        div ~ p { }
        div 보다 뒤에있는 동위관계의 모든 P 선택

    @ 인접 동위 선택자

        div + p { }
        div 보다 뒤에있는 동위관계의 바로 뒤의 P 선택


    @ 의사 클래스 (★)

        선택자:의사클래스이름 {속성: 속성값}
        선택자.클래스이름:의사클래스이름 {속성: 속성값}
        선택자#아이디이름:의사클래스이름 {속성: 속성값}

        - 동적 의사 클래스
            link, visited, hover, active, focus
        - 상태 의사 클래스
            checked, enabled, disabled
        - 구조 의사 클래스
            first-child, last-child, nth-child, nth-last-child
            first-of-type, nth-of-type, last-of-type, nth-last-of-type
        - 기타 의사 클래스
            not, lang

    @ 상태 의사 클래스

        - checked
        체크된 상태의 input 요소 선택

        - enabled, disabled
        사용할 수 있는 input 과 없는 input 선택


    @ 구조 의사 클래스

        - first-child
        첫번째 자식 요소 모두 선택

        - last-child
        마지막 자식 요소 모두 선택

        - nth-child(2n)
        n 번째 위치하는 자식 요소 모두 선택(2배수)

        - nth-last-child(3n)
        뒤에서 부터 n 번째 위치하는 자식 요소 모두 선택(3의배수)

        - p: first-of-type
        모든 자식 요소중 맨처음으로 등장하는 특정 타입 요소 모두 선택(p)

        - ...

        - only-child
        - only-of-type
        - empty
        - root


    @ 의사 요소

        - 선택자::의사요소이름 {속성 : 속성값;}

        - first-letter
            ㄴ> 텍스트의 첫글자만 선택
            ㄴ> 블록타입만 가능
            ㄴ> 사용 가능 속성
                    font / color / background / margin
                    padding / border / text-decoration
                    text-transform / line-height
                    float / clear / vertical-align(float none 일때만)

        - first-line
            ㄴ> 첫라인만 선택
            ㄴ> 블록타입만 가능
            ㄴ> 사용 가능 속성
                    font / color / background / word-spacing
                    letter-spacing / text-decoration
                    text-transform / line-height
                    clear / vertical-align

        - before
            ㄴ> 특정 요소의 content 부분 바로 앞에 다른 요소 삽입할 때
            ㄴ> (p::before { content: url("url 주소"); })

        - after
            ㄴ> 특정 요소의 content 부분 바로 뒤에 다른 요소 삽입할 때
            ㄴ> (p::after { content: url("url 주소"); })

        - selection
            ㄴ> 의사요소는 해당 요소에서 사용자가
                선택한 부분만을 선택할때 사용

        - 의사요소, 동시적용 가능


    @ 속성 선택자

        - [속성이름]선택자
        - [속성이름="속성값"]선택자

        - ([title] { ~~ })
        - ([title="first h2"] { ~~ })

        - [속성이름~="속성값"] 선택자
            특정 문자열로 이루어진 하나의 단어를 포함하는 요소 모두 선택
            (띄어쓰기 기준으로 인식되는 특정 단어만 OK)
                ㄴ> (   first-h2(X) , first h2(O)   )

        - [속성이름|="속성값"] 선택자
            특정 속성의 속성값이 특정 문자열로 이루어진 하나의 단어로
            시작하는 요소 모두 선택
            (하이픈(-) 기준으로 인식되는 특정 단어만 OK)
                ㄴ> (   first-h2(O) , first h2(X)   )

        - [속성이름^="속성값"] 선택자
            특정 속성의 속성값이 특정 문자열로 시작하는 요소 모두 선택

        - [속성이름$="속성값"] 선택자
            특정 속성의 속성값이 특정 문자열로 끝나는 요소 모두 선택

        - [속성이름*="속성값"] 선택자
            특정 속성의 속성값에 특정 문자열을 포함하는 요소 모두 선택


    @ 기타 의사 클래스

        not
            선택자는 모든 선택자와 함께 사용 가능
            반대로 적용
            (input:not {~~})
        lang
            HTML 요소를 사용자 컴퓨터의 언어 설정에 따라
            다르게 표현할때 사용
            (:lang(en) {~~} :lang(fr) {~~})



    - 밑줄 , p { text-decoration: underline; }
    - 굵게 , p { font-weight: bold; }
