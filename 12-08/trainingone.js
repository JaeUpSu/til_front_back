const sol = (year, zodiac) => {
    const animals = ["원숭이","닭","개","돼지","쥐","소"
                        ,"호랑이","토끼","용","뱀","말","양"];

    return animals[year % zodiac];
}
