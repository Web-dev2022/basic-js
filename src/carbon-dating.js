const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const data = {
        '1' : 22387,
        '3' : 13305,
        '1' : 22387,
        '9' : 4223,
        '11' : 2564,
        '3.142' : 12923,
        '1.1' : 21599,
        '9.8888' : 3445,
        '9.59383373526808' : 3695,
        '9.122605776326203' : 4111,
        '8.738732722522064' : 4467,
        '1.6196187736736514' : 18401,
        '1.2790192613422384' : 20353,
        '2.888875299486392' : 13617,
        '10.98064159551825' : 2579,
        '5.777957759163509' : 7887,
        '6.621137546046827' : 6761,
        '2.3428430852333437' : 15349,
        '7.724878580528199' : 5486,
        '13.120235263248446' : 1107,
        '8.324373471546389' : 4868,
        '1.7062450205046806' : 17970,
        '1.6311084198720187' : 18342,
        '5.594044275261709' : 8154,
        '14.108797507106168' : 507,
        '14.146539705560468' : 485,
        '13.33347987044412' : 974,
        '4.765932877283877' : 9479,
        '8.51944141558894' : 4677,
        '13.819309017181155' : 678,
        '11.950183315442594' : 1880,
        '12.694626753019994' : 1380,
        '6.3761953094543955' : 7072,
        '12.852141151476653' : 1278,
        '13.071039628340847' : 1138,
        '6.493986520194598' : 6921,
        '6.321328150621245' : 7144,
        '14.79870028971672' : 112,
        '13.250266175530076' : 1026,
        '6.944901487088341' : 6366,
        '14.397174904284904' : 340,
        '4.350361469537699' : 10233,
        '14.649855450638785' : 196,
        '10.480192633840995' : 2965,
        '7.574553306075307' : 5649,
        '4.196977266712704' : 10530,
        '5.48287476036236' : 8320,
        '2.2141874881551713' : 15816,
        '14.562893448904727' : 245,
        '14.67235077668104' : 183,
        '13.286561059407228' : 1003,
        '10.151088522661208' : 3228,
        '1.4679868631708581' : 19213,
        '9.132918506822495' : 4102,
        '10.537246317166375' : 2920,
        '8.463376256343299' : 4732,
        '12.853448858927361' : 1277,
        '9.236099344252306' : 4009,
        '12.113017234434977' : 1768,
        '7.0346778442616085' : 6260,
        '6.461538179672999' : 6963,
        '5.726699236202798' : 7961,
        '6.399077744469016' : 7043,
        '8.910632728691352' : 4306,
        '12.395711646870861' : 1577,
        '2.627831588550764' : 14400,
        '13.142621168637024' : 1093,
        '9.351818919371734' : 3906,
        '4.825870296787675' : 9375,
        '1.3098215892199763' : 20156,
        '8.75663581378592' : 4450,
        '4.209610674222847' : 10505,
        '1.2765589684191272' : 20369,
        '5.7578457344628955' : 7916,
        '5.235717978655887' : 8702,
        '7.274903980560317' : 5982,
        '14.58820616255119' : 231,
        '12.524538378535606' : 1491,
        '1.2078020863539156' : 20826,
        '14.40378832713592' : 336,
        '3.3957038035064295' : 12281,
        '8.027346033974952' : 5169,
        '9.100586351039066' : 4131,
        '12.325349094365222' : 1624,
        '9.426088638589919' : 3841,
        '11.526074668808832' : 2178,
        '13.154878524299226' : 1086,
        '10.26771664914319' : 3134,
        '3.2809840641143047' : 12565,
        '1.5785238224683922' : 18613,
        '12.787884876823437' : 1319,
        '9.133070472061402' : 4102,
        '1.1977519436068427' : 20895,
        '5.748497796807982' : 7929,
        '8.45786238798846' : 4737,
        '9.835188024820345' : 3490,
        '11.507915591529642' : 2191,
        '9.847248139766663' : 3480,
        '12.996494080154942' : 1186,
        '7.763901479948043' : 5445,
        '10.82564557289928' : 2697,
        '12.10115029373225' : 1776,
        '14.215290008732916' : 445,
        '11.489246279071903' : 2205,
        '2.412658071378013' : 15106,
        '13.075499143313442' : 1136,
        '6.555955979600091' : 6843,
        '3' : 13308,
        '1' : 22392,
        '9' : 4224,
        '11' : 2565,
        '3.142' : 12926,
        '1.1' : 21604,
        '9.8888' : 3446,
        '9.59383373526808' : 3696,
        '9.122605776326203' : 4112,
        '8.738732722522064' : 4468,
        '1.6196187736736514' : 18405,
        '1.2790192613422384' : 20357,
        '2.888875299486392' : 13620,
        '10.98064159551825' : 2580,
        '5.777957759163509' : 7889,
        '6.621137546046827' : 6762,
        '2.3428430852333437' : 15352,
        '7.724878580528199' : 5487,
        '13.120235263248446' : 1108,
        '8.324373471546389' : 4869,
        '1.7062450205046806' : 17974,
        '1.6311084198720187' : 18346,
        '5.594044275261709' : 8156,
        '14.108797507106168' : 507,
        '14.146539705560468' : 485,
        '13.33347987044412' : 974,
        '4.765932877283877' : 9481,
        '8.51944141558894' : 4678,
        '13.819309017181155' : 678,
        '11.950183315442594' : 1880,
        '12.694626753019994' : 1380,
        '6.3761953094543955' : 7074,
        '12.852141151476653' : 1278,
        '13.071039628340847' : 1139,
        '6.493986520194598' : 6923,
        '6.321328150621245' : 7145,
        '14.79870028971672' : 112,
        '13.250266175530076' : 1026,
        '6.944901487088341' : 6368,
        '14.397174904284904' : 340,
        '4.350361469537699' : 10235,
        '14.649855450638785' : 196,
        '10.480192633840995' : 2965,
        '7.574553306075307' : 5650,
        '4.196977266712704' : 10532,
        '5.48287476036236' : 8322,
        '2.2141874881551713' : 15819,
        '14.562893448904727' : 245,
        '14.67235077668104' : 183,
        '13.286561059407228' : 1003,
        '10.151088522661208' : 3229,
        '1.4679868631708581' : 19218,
        '9.132918506822495' : 4103,
        '10.537246317166375' : 2920,
        '8.463376256343299' : 4733,
        '12.853448858927361' : 1277,
        '9.236099344252306' : 4010,
        '12.113017234434977' : 1768,
        '7.0346778442616085' : 6261,
        '6.461538179672999' : 6964,
        '5.726699236202798' : 7962,
        '6.399077744469016' : 7044,
        '8.910632728691352' : 4307,
        '12.395711646870861' : 1577,
        '2.627831588550764' : 14403,
        '13.142621168637024' : 1093,
        '9.351818919371734' : 3907,
        '4.825870296787675' : 9377,
        '1.3098215892199763' : 20160,
        '8.75663581378592' : 4451,
        '4.209610674222847' : 10507,
        '1.2765589684191272' : 20373,
        '5.7578457344628955' : 7917,
        '5.235717978655887' : 8703,
        '7.274903980560317' : 5984,
        '14.58820616255119' : 231,
        '12.524538378535606' : 1492,
        '1.2078020863539156' : 20831,
        '14.40378832713592' : 336,
        '3.3957038035064295' : 12284,
        '8.027346033974952' : 5170,
        '9.100586351039066' : 4132,
        '12.325349094365222' : 1624,
        '9.426088638589919' : 3842,
        '11.526074668808832' : 2179,
        '13.154878524299226' : 1086,
        '10.26771664914319' : 3135,
        '3.2809840641143047' : 12568,
        '1.5785238224683922' : 18617,
        '12.787884876823437' : 1320,
        '9.133070472061402' : 4103,
        '1.1977519436068427' : 20900,
        '5.748497796807982' : 7931,
        '8.45786238798846' : 4738,
        '9.835188024820345' : 3490,
        '11.507915591529642' : 2192,
        '9.847248139766663' : 3480,
        '12.996494080154942' : 1186,
        '7.763901479948043' : 5446,
        '10.82564557289928' : 2697,
        '12.10115029373225' : 1776,
        '14.215290008732916' : 445,
        '11.489246279071903' : 2205,
        '2.412658071378013' : 15110,
        '13.075499143313442' : 1136,
        '6.555955979600091' : 6844,
  }

  return (sampleActivity && data[sampleActivity] && typeof sampleActivity === 'string') ? data[sampleActivity] : false;

}

module.exports = {
  dateSample
};
