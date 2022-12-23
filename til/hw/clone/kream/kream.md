@ 클론코딩

HTML + CSS를 이용해 사이트를 만들어주세요
(이미지는 제공하지 않습니다. 🥲 )

- 메인 페이지만 만들어주시면 됩니다.

- 더보기, 로그인, 즐겨찾기 등 기능 구현은 안하셔도 됩니다.

- 전박적인 디자인 구도를 잡고 배운 기능으로 최대한 구현하는것을
  목표로 해주세요

- 필수는 아닙니다. 현재 과정에 이미 익숙하신 분들 또는 더 공부해보고
  싶은 수강생 분들을 위한 챌린지 입니다.

---

- 검사 버튼 눌러, 참고

클래스 명
기본 태그 타입은 Div
화면 크기 순서 (viewSize : 1g > md > mo > sm)

heaer(top(inner(list(item(link))))
/ main(inner(area(gnb(list(item(link))) / box(btn(icons))))
/ box(btn)))

# header (스크롤로 좀만 내릴시 : header is_scroll viewSize)

      top / main

      # top
          top_inner

              # top_inner
                  top_list(ul)
                    top_item(li)
                      top_link(a)

      # main
          main_inner

              # main_inner
                  (h1) / gnb_area $ 화면이 클때 / nav_btn_box $ 화면이 작을때

                    # gnb_area
                        gnb(nav) / search_btn_box

                            # gnb(nav)
                                gnb_list(ul)
                                  gnb_item(li)
                                    gnb_link(a)

                            # search_btn_box
                                btn_search(a)
                                  nav_search icon sprite-icons(svg)

                    # nav_btn_box
                        btn_search(button) / btn_menu(button)
                                        (svg)
                                          (use)

# container

      home / banner_bottom / btn_top


      # home
          download_banner / home_card_list

            # download_banner
                banner_box

                  # banner_box
                      thumb / banner_info / btn_class(a)

                          # thumb
                              logo_app icon sprite-icons(svg)
                                  (use)

                          # banner_info
                              banner_title(p)

                          # btn_close(a)
                              ico-nav-close icon sprite-icons(svg)
                                  (use)


            # home_card_list
                banner_slide slick-slider slick-initialized
                shorcut_collection / home_products / shortcut_collection
                banner / home_products / social_style_slide
                (banner / home_products) * 6

                 # banner_slide slick-slider slick-initialized
                    slick-list, slick-dots(ul)

                      # slick-list
                          slick-track

                            # slick-track
                                slick-slide , data-index(0~7)
                                  (div)
                                    banner
                                      banner_item
                                        item_inner
                                          img_box
                                            banner_img(img)


                       # slick-dots
                           (li) , slick-active(활성화된 li)
                              (button)

             # s

      # banner_botton
          top_inner

      # btn_top (최상단에선 display:none)
          top_inner

# footer

      inner

      # inner
        service_area / corporation_area / notice_area
