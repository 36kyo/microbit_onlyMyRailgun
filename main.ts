music.setTempo(143)
let tempo = music.tempo()
let tempoAdj = 4
let ZEN_1 = tempoAdj * music.beat(BeatFraction.Whole)
let BUN_2fu = tempoAdj * (music.beat(BeatFraction.Half) + music.beat(BeatFraction.Quarter))
let BUN_2 = tempoAdj * music.beat(BeatFraction.Half)
let BUN_4fu = tempoAdj * (music.beat(BeatFraction.Quarter) + music.beat(BeatFraction.Eighth))
let BUN_4 = tempoAdj * music.beat(BeatFraction.Quarter)
let BUN_8fu = tempoAdj * (music.beat(BeatFraction.Eighth) + music.beat(BeatFraction.Sixteenth))
let BUN_8 = tempoAdj * music.beat(BeatFraction.Eighth)
let BUN_16 = tempoAdj * music.beat(BeatFraction.Sixteenth)
let BUN_32 = tempoAdj * music.beat(BeatFraction.Sixteenth) / 2
let BUN_8_3ren = tempoAdj * music.beat(BeatFraction.Eighth) / 3
let BUN_4_6ren = BUN_8_3ren
let KYU_FU = 8
let DO_1 = 65
let DOU_1 = 69
let RE_1 = 73
let REU_1 = 78
let MI_1 = 82
let FA_1 = 87
let FAU_1 = 93
let SO_1 = 98
let SOU_1 = 104
let RA_1 = 110
let RAU_1 = 117
let SI_1 = 123
let DO_2 = 131
let DOU_2 = 139
let RE_2 = 147
let REU_2 = 156
let MI_2 = 165
let FA_2 = 175
let FAU_2 = 185
let SO_2 = 196
let SOU_2 = 208
let RA_2 = 220
let RAU_2 = 233
let SI_2 = 247
let DO_3 = 262
let DOU_3 = 277
let RE_3 = 294
let REU_3 = 311
let MI_3 = 330
let FA_3 = 349
let FAU_3 = 370
let SO_3 = 392
let SOU_3 = 415
let RA_3 = 440
let RAU_3 = 466
let SI_3 = 494
let DO_4 = 523
let DOU_4 = 554
let RE_4 = 587
let REU_4 = 622
let MI_4 = 659
let FA_4 = 698
let FAU_4 = 740
let SO_4 = 784
let SOU_4 = 831
let RA_4 = 880
let RAU_4 = 932
let SI_4 = 988
let DO_5 = 1047
let DOU_5 = 1109
let RE_5 = 1175
let REU_5 = 1245
let MI_5 = 1319
let FA_5 = 1397
let FAU_5 = 1480
let SO_5 = 1568
let SOU_5 = 1661
let RA_5 = 1760
let RAU_5 = 1865
let SI_5 = 1976
let DO_6 = 2093
let DOU_6 = 2217
let RE_6 = 2349
let REU_6 = 2489
let MI_6 = 2637
let FA_6 = 2794
let FAU_6 = 2960
let SO_6 = 3136
let SOU_6 = 3322
let RA_6 = 3520
let RAU_6 = 3729
let SI_6 = 3951
let DO_7 = 4186
let DOU_7 = 4435
let RE_7 = 4699
let REU_7 = 4978
let freqs = [SOU_3, SOU_4, 0, SOU_4, FAU_4, SOU_4, 0, SOU_4, FAU_4, 0, FAU_4, SOU_4, SOU_4, 0, SOU_4, 0, SOU_4, FAU_4, SOU_4, 0, SOU_4, FAU_4, 0, FAU_4, SOU_4, SOU_4, 0, SOU_4, 0, SOU_4, FAU_4, SOU_4, 0, SOU_4, FAU_4, 0, FAU_4, SOU_4, SOU_3, 0, SOU_3, 0, SOU_3, 0, SI_4, RAU_4, FAU_4, 0, FAU_4, SOU_4, 0, SOU_4, 0, FAU_4, 0, FAU_4, SOU_4, 0, SOU_4, 0, FAU_4, 0, FAU_4, SOU_4, 0, SOU_4, 0, SOU_4, 0, SOU_4, RAU_4, SI_4, DOU_5, RAU_4, FAU_4, MI_5, DOU_5, DOU_5, 0, DOU_5, REU_5, 0, SI_4, RAU_4, FAU_4, 0, FAU_4, SOU_4, 0, SOU_4, 0, FAU_4, 0, FAU_4, SOU_4, 0, SOU_4, 0, FAU_4, 0, FAU_4, SOU_4, 0, SOU_4, 0, SOU_4, 0, SOU_4, RAU_4, SI_4, DOU_5, SOU_4, 0, SOU_4, RAU_4, SI_4, DOU_5, RAU_4, FAU_4, REU_4, FAU_4, 0, FAU_4, SOU_4, 0, SOU_4, SI_4, RAU_4, FAU_4, REU_4, FAU_4, 0, FAU_4, SOU_4, 0, SOU_4, 0, 0, SOU_5, SOU_6, SOU_5, SOU_6, SOU_5, SOU_6, SOU_5, 0, SOU_5, SO_5, SOU_5, RAU_5, SOU_5, 0, SOU_5, SO_5, SOU_5, RAU_5, DO_6, 0, DO_6, DOU_6, DO_6, RAU_5, DO_6, RAU_5, SOU_5, REU_6, DO_6, RAU_5, SOU_5, 0, SOU_5, SO_5, SOU_5, RAU_5, SOU_5, 0, SOU_5, SO_5, SOU_5, RAU_5, DO_6, FA_5, RAU_5, SOU_5, SO_5, SOU_5, SO_5, FA_5, 0, FA_5, DO_6, 0, DO_6, 0, DO_6, 0, DO_6, 0, DO_6, 0, DO_6, RAU_5, SOU_5, SO_5, 0, SO_5, REU_6, 0, REU_6, 0, REU_6, 0, REU_6, 0, REU_6, DOU_6, DO_6, RAU_5, DOU_6, DO_6, RAU_5, SOU_5, SO_5, 0, SO_5, FA_5, SOU_5, SOU_5, 0, SOU_5, 0, SOU_5, 0, SOU_5, 0, SOU_5, 0, SOU_5, RAU_5, SI_5, RAU_5, 0, RAU_5, FAU_5, 0, FAU_5, 0, FAU_5, FA_5, 0, FA_5, REU_5, FA_5, SO_5, SOU_5, 0, SOU_5, 0, SOU_5, SO_5, FA_5, SO_5, SO_3, RAU_3, SO_3, RAU_3, REU_4, RAU_3, REU_4, SO_4, REU_4, SO_4, RAU_4, REU_5, 0, MI_5, 0, REU_5, 0, SI_5, RAU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, 0, SOU_5, 0, SOU_5, RAU_5, SI_5, DOU_6, RAU_5, FAU_5, MI_6, DOU_6, 0, DOU_6, 0, DOU_6, REU_6, 0, SI_5, RAU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, 0, SOU_5, 0, SOU_5, RAU_5, SI_5, DOU_6, SOU_5, 0, SOU_5, RAU_5, SI_5, DOU_6, RAU_5, FAU_5, REU_5, 0, SI_5, RAU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, 0, SOU_5, 0, SOU_5, RAU_5, SI_5, DOU_6, RAU_5, FAU_5, MI_6, DOU_6, 0, DOU_6, 0, DOU_6, REU_6, 0, SI_5, RAU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, 0, SOU_5, 0, SOU_5, RAU_5, SI_5, DOU_6, SOU_5, 0, SOU_5, RAU_5, SI_5, DOU_6, RAU_5, FAU_5, REU_5, FAU_5, FAU_5, SOU_5, 0, SOU_5, SI_5, RAU_5, FAU_5, REU_5, FAU_5, 0, FAU_5, SOU_5, 0, SOU_5, 0, SOU_4, 0, FAU_4, 0, SOU_4, 0]
let lengths = [BUN_8, BUN_8, KYU_FU, BUN_8, BUN_16, BUN_8, BUN_16, BUN_8, BUN_8, KYU_FU, BUN_16, BUN_16, BUN_16, BUN_16, BUN_8, KYU_FU, BUN_8, BUN_16, BUN_8, BUN_16, BUN_8, BUN_8, KYU_FU, BUN_16, BUN_16, BUN_16, BUN_16, BUN_8, KYU_FU, BUN_8, BUN_16, BUN_8, BUN_16, BUN_8, BUN_8, KYU_FU, BUN_16, BUN_16, BUN_8fu, KYU_FU, BUN_8fu, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, KYU_FU, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, KYU_FU, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, KYU_FU, BUN_8, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_4, BUN_4, BUN_4, BUN_4, BUN_8fu, KYU_FU, BUN_8fu, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, KYU_FU, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, KYU_FU, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, KYU_FU, BUN_8, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_4fu, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, BUN_4, BUN_4, BUN_4, BUN_4, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_2fu, BUN_16, BUN_4, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, BUN_2, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_2, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_2, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, BUN_4, BUN_4, BUN_2, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_2, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_4, BUN_4, BUN_8, BUN_8, BUN_8, BUN_8, BUN_4fu, BUN_8, KYU_FU, BUN_2, BUN_8, KYU_FU, BUN_16, KYU_FU, BUN_8, KYU_FU, BUN_16, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, BUN_4, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_4fu + BUN_16, KYU_FU, BUN_16, KYU_FU, BUN_16, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_16, BUN_8, BUN_8fu, BUN_8, BUN_8fu, KYU_FU, BUN_8fu, BUN_8, BUN_2, BUN_8, KYU_FU, BUN_16, KYU_FU, BUN_8, KYU_FU, BUN_16, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, BUN_4, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_4fu + BUN_16, KYU_FU, BUN_8, BUN_4, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_16, BUN_8fu, KYU_FU, BUN_8, KYU_FU, BUN_4fu, BUN_16, BUN_16, BUN_4_6ren, BUN_4_6ren, BUN_4_6ren, BUN_4_6ren, BUN_4_6ren, BUN_4_6ren, BUN_4_6ren, BUN_4_6ren, BUN_4_6ren, BUN_4_6ren, BUN_4_6ren, BUN_4_6ren, BUN_8, BUN_16, BUN_8, BUN_16, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, KYU_FU, BUN_8, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_4, BUN_4, BUN_4, BUN_4, KYU_FU, BUN_8fu, KYU_FU, BUN_8fu, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, KYU_FU, BUN_8, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_2, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8fu, BUN_8fu, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, KYU_FU, BUN_8, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_4, BUN_4, BUN_4, BUN_4, KYU_FU, BUN_8fu, KYU_FU, BUN_8fu, BUN_8, BUN_8, BUN_8, BUN_8, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, BUN_16, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, BUN_8fu, KYU_FU, BUN_8, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_2, KYU_FU, BUN_8, BUN_8, BUN_8, BUN_8, BUN_4, BUN_4, BUN_4, BUN_4, BUN_8, BUN_16, KYU_FU, BUN_8fu, BUN_8, BUN_8, BUN_16, BUN_8fu, BUN_8, KYU_FU, BUN_8, BUN_16, KYU_FU, ZEN_1 + BUN_4 + BUN_8, KYU_FU, BUN_8, BUN_16, BUN_8, BUN_16, ZEN_1 + BUN_8, BUN_8]
basic.showIcon(IconNames.EigthNote)
basic.showString("OnlyMyRailgun")
music.setVolume(64)
for (let index = 0; index <= freqs.length; index++) {
    if (freqs[index] == 0) {
        music.rest(lengths[index])
    } else {
        music.playTone(freqs[index], lengths[index])
    }
}
music.setBuiltInSpeakerEnabled(false)
basic.forever(function () {
	
})
