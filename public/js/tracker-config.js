console.log("tracker-config");
const MAUTIC_FORMSET = {
  "37619fremontblvd205_sl": ["pf37619fremontblvd205sl", "73"],
  "37619fremontblvd205": ["pf37619fremontblvd205", "72"],
  hotlist_wsr_fb_pd: ["pfhotlistwsrfbpd", "28"],
  hotlist_wsr_fbm_scl: ["pfhotlistwsrfbmscl", "54"], //id is 54 on my.thrivebrokers.com
  hotlist_wsr_fbp_scl: ["pfhotlistwsrfbpscl", "55"], //id is 55 on my.thrivebrokers.com
  hotlist_wsr_cl_scl: ["pfhotlistwsrclscl", "57"], //id is 57 on my.thrivebrokers.com
  showcase: ["pfshowcase", "32"],
  bayrentals: ["pfbayrentals", "33"],
  bestbuys: ["pfbestbuys", "34"],
  organic_bd: ["pforganicbd", "121"], //this form is for branded pages only
  phtb: ["pfphtb", "42"],
  guaranteedsale: ["pfguaranteedsale", "51"],
  "1925fallbrook": ["pf1925fallbrook", "52"],
  bd: ["pfbd", "58"],
  stop_renting_yt_pd: ["pfstoprentingytpd", "75"],
  bletter_wsr_25feb22_mail: ["pfbletterwsr25feb22mail", "84"],
  justsold_wsr_north: ["pfjustsoldwsrnorth22apr22postcard", "101"],
  justsold_sr_preserve: ["pfjustsoldsrpreserve25apr22postcard", "102"],
  justsold_sr_preserve_21may22_mail: ["pfjustsoldsrpreserve21may22mail", "104"],
  nlannaira3171: ["pfnlannaira3171", "103"],
  rderemnalla7741_21Jun22_postcard: ["pfrderemnalla774121jun22postcard", "105"],
  doowelra004_12oct22_postcard: ["pfdoowelra00412oct22postcard", "118"],
  doowelra004_fb_pd: ["pfdoowelra004fbpd", "108"],
  yawnavonod0212_fb_pd: ["pfyawnavonod0212fbpd", "109"],
  yawnavonod0212_22aug22_postcard: ["pfyawnavonod021222aug22postcard", "110"],
  bletter_trivalley_ecw_27aug22_mail: [
    "pfblettertrivalleyecw27aug22mail",
    "111",
  ],
  yawnavonod0212: ["pfyawnavonod0212", "112"],
  doowelra004: ["pfdoowelra004", "113"],
  yawnavonod0212_scl_cl: ["pfyawnavonod0212sclcl", "114"],
  yawnavonod0212_scl_fbm: ["pfyawnavonod0212sclfbm", "115"],
  aletter_trivalley_ecw: ["pfalettertrivalleyecw03oct22mail", "116"],
  aletter_windemere_ivyhill: ["pfaletterwindemereivyhill28nov22mail", "122"],
  nocampaign: ["pfnocampaign", "123"],
  newconstruction_fb_pd: ["pfnewconstructionfbpd", "125"],
  homewardbound: ["pfhomewardboundlp", "120"],
  premarket_fb_pd: ["pfpremarketfbpd", "126"],
  stop_renting: ["pfstoprenting", "127"],
  seminar_13costs: ["pfseminar13costs", "128"],
  buyertraps: ["pfbuyertraps", "129"],
  trade_up: ["pftradeup", "130"],
  buyer_mistakes: ["pfbuyermistakes", "131"],
  seller_mistakes: ["pfsellermistakes", "132"],
  "27tips": ["pf27tips", "133"],
  inspection: ["pfinspection", "134"],
  silver_fsbo: ["pfsilverfsbo", "135"],
  coaching_legal: ["pfcoachinglegal", "136"],
  seminar_divorce: ["pfseminardivorce", "137"],
  coaching_emptynest: ["pfcoachingemptynest", "138"],
  b12tpardekalhtron164: ["pfb12tpardekalhtron164", "139"],
  s12tpardekalhtron164: ["pfs12tpardekalhtron164", "141"],
  aletter_windemere_nes: ["pfaletterwindemerenes28mar23mail", "140"],
  tour_of_homes_sr: ["pftourofhomessr", "196"],
  gold_distress: ["pfgolddistress", "142"],
  vip_buyer: ["pfvipbuyer", "143"],
  zerodown: ["pfzerodown", "144"],
  savethousands: ["pfsavethousands", "145"],
  seminar_newhomes: ["pfseminarnewhomes", "146"],
  gc_fixermyths: ["pfgcfixermyths", "147"],
  gc_bestbuys: ["pfgcbestbuys", "148"],
  gc_firsttime: ["pfgcfirsttime", "149"],
  gc_upscale: ["pfgcupscale", "150"],
  gc_nomoneydown: ["pfgcnomoneydown", "151"],
  gc_fixerupper: ["pfgcfixerupper", "152"],
  coaching_bestfinancing: ["pfcoachingbestfinancing", "153"],
  gold_mortgageapp: ["pfgoldmortgageapp", "154"],
  agent_questions: ["pfagentquestions", "155"],
  homeeval: ["pfhomeeval", "156"],
  gold_findout: ["pfgoldfindout", "157"],
  sell_for_more: ["pfsellformore", "158"],
  seminar_expired: ["pfseminarexpired", "159"],
  gold_howlong: ["pfgoldhowlong", "160"],
  coaching_negotiating: ["pfcoachingnegotiating", "161"],
  coaching_setprice: ["pfcoachingsetprice", "162"],
  "27tips-bd": ["pf27tipsbd", "163"],
  "agent_questions-bd": ["pfagentquestionsbd", "164"],
  "buyer_mistakes-bd": ["pfbuyermistakesbd", "165"],
  "buyertraps-bd": ["pfbuyertrapsbd", "166"],
  "coaching_bestfinancing-bd": ["pfcoachingbestfinancingbd", "167"],
  "coaching_emptynest-bd": ["pfcoachingemptynestbd", "168"],
  "coaching_legal-bd": ["pfcoachinglegalbd", "169"],
  "coaching_negotiating-bd": ["pfcoachingnegotiatingbd", "170"],
  "coaching_setprice-bd": ["pfcoachingsetpricebd", "171"],
  "gc_bestbuys-bd": ["pfgcbestbuysbd", "172"],
  "gc_firsttime-bd": ["pfgcfirsttimebd", "173"],
  "gc_fixermyths-bd": ["pfgcfixermythsbd", "174"],
  "gc_fixerupper-bd": ["pfgcfixerupperbd", "175"],
  "gc_nomoneydown-bd": ["pfgcnomoneydownbd", "176"],
  "gc_upscale-bd": ["pfgcupscalebd", "177"],
  "gold_distress-bd": ["pfgolddistressbd", "178"],
  "gold_findout-bd": ["pfgoldfindoutbd", "179"],
  "gold_howlong-bd": ["pfgoldhowlongbd", "180"],
  "gold_mortgageapp-bd": ["pfgoldmortgageappbd", "181"],
  "homeeval-bd": ["pfhomeevalbd", "182"],
  "inspection-bd": ["pfinspectionbd", "183"],
  "savethousands-bd": ["pfsavethousandsbd", "184"],
  "sell_for_more-bd": ["pfsellformorebd", "185"],
  "seller_mistakes-bd": ["pfsellermistakesbd", "186"],
  "seminar_13costs-bd": ["pfseminar13costsbd", "187"],
  "seminar_divorce-bd": ["pfseminardivorcebd", "188"],
  "seminar_expired-bd": ["pfseminarexpiredbd", "189"],
  "seminar_newhomes-bd": ["pfseminarnewhomesbd", "190"],
  "silver_fsbo-bd": ["pfsilverfsbobd", "191"],
  "stop_renting-bd": ["pfstoprentingbd", "192"],
  "trade_up-bd": ["pftradeupbd", "193"],
  "vip_buyer-bd": ["pfvipbuyerbd", "194"],
  "zerodown-bd": ["pfzerodownbd", "195"],
  aletter_sanramon: ["pfalettersanramon30june23mail", "197"],
  aletter_windemere_south: ["pfaletterwindemeresouth", "198"],
  aletter_galeranch: ["pfalettergaleranch", "199"],
  findyourperfecthome: ["pffindyourperfecthome", "200"],
  unlistedhomes: ["pfunlistedhomes", "203"],
  unclaimedhomes: ["pfunclaimedhomes", "202"],
  "homewardbound-lp": ["pfhomewardboundlp", "120"],
  festivals: ["pffestivals", "204"],
};

let emailFormHeader = "Get this FREE report now:";
let phoneFormHeader = "Review Email. Best number to reach you?";
let popupForm = false;
let timeInterval = 3000;
let nTimes = 3;
let zDuration = 5000;

function setEmailFormHeader(formHeader) {
  if (formHeader) {
    emailFormHeader = formHeader;
  }
}

function setPhoneFormHeader(formHeader) {
  if (formHeader) {
    phoneFormHeader = formHeader;
  }
}
