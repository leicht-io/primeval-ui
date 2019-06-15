import {UIModal} from "../src/components/UIModal";
import {DOM} from "../src/@core/utils/DOM";
import "../src/@core/styles/@theme.scss";
import {UIGallery} from "../src/components/UIGallery";
import {UIMenu} from "../src/components/UIMenu";

export class App {

    constructor() {
        new UIMenu();

        DOM.query("#showModal").addEventListener("click", () => {
            new UIModal({
                container: "body",
                title: "IFRAME with Wikipedia",
                iframe: "https://en.wikipedia.org/wiki/Ardbeg_distillery"
            });
        });

        DOM.query("#showModalWithHtml").addEventListener("click", () => {
            new UIModal({container: "body", title: "HTML", content: "<p>hej</p>"});
        });

        const response: any = {
            "id": 1,
            "title": "Landscape & Nature",
            "description": "Landscape & Nature",
            "slug": "landscape-nature",
            "createdAt": "2019-03-20T13:49:28.000Z",
            "updatedAt": "2019-03-21T12:35:23.000Z",
            "photos": [{
                "id": 2,
                "title": "Burned Moorland",
                "description": "Burned Moorland",
                "fullSizePath": "burned_moorland.bb20c3047bec88a5137ff3a3098463b589f7ac93_original.jpg",
                "smallThumbPath": "burned_moorland.bb20c3047bec88a5137ff3a3098463b589f7ac93_small.jpg",
                "mediumThumbPath": "burned_moorland.bb20c3047bec88a5137ff3a3098463b589f7ac93_medium.jpg",
                "largeThumbPath": "burned_moorland.bb20c3047bec88a5137ff3a3098463b589f7ac93_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:17:44.000Z",
                "updatedAt": "2019-03-20T14:17:44.000Z"
            }, {
                "id": 3,
                "title": "Backlight in Spiders Web",
                "description": "Backlight in Spiders Web",
                "fullSizePath": "backlight_spiders_web.12038b43f52d78d11a2cba3076db2525ad3c03cc_original.jpg",
                "smallThumbPath": "backlight_spiders_web.12038b43f52d78d11a2cba3076db2525ad3c03cc_small.jpg",
                "mediumThumbPath": "backlight_spiders_web.12038b43f52d78d11a2cba3076db2525ad3c03cc_medium.jpg",
                "largeThumbPath": "backlight_spiders_web.12038b43f52d78d11a2cba3076db2525ad3c03cc_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:18:49.000Z",
                "updatedAt": "2019-03-20T14:18:49.000Z"
            }, {
                "id": 5,
                "title": "Common European Viper",
                "description": "Common European Viper",
                "fullSizePath": "common_european_viper.1320c1ad920854c73ba9d06d5c506268ab0356f5_original.jpg",
                "smallThumbPath": "common_european_viper.1320c1ad920854c73ba9d06d5c506268ab0356f5_small.jpg",
                "mediumThumbPath": "common_european_viper.1320c1ad920854c73ba9d06d5c506268ab0356f5_medium.jpg",
                "largeThumbPath": "common_european_viper.1320c1ad920854c73ba9d06d5c506268ab0356f5_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:32:09.000Z",
                "updatedAt": "2019-03-20T14:32:09.000Z"
            }, {
                "id": 6,
                "title": "Common European Viper 2",
                "description": "Common European Viper 2",
                "fullSizePath": "common_european_viper_2.b36d0237c418ca27e718bd4f4cc3c39ced5b72ca_original.jpg",
                "smallThumbPath": "common_european_viper_2.b36d0237c418ca27e718bd4f4cc3c39ced5b72ca_small.jpg",
                "mediumThumbPath": "common_european_viper_2.b36d0237c418ca27e718bd4f4cc3c39ced5b72ca_medium.jpg",
                "largeThumbPath": "common_european_viper_2.b36d0237c418ca27e718bd4f4cc3c39ced5b72ca_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:32:16.000Z",
                "updatedAt": "2019-03-20T14:32:16.000Z"
            }, {
                "id": 7,
                "title": "Early Spring",
                "description": "Early Spring",
                "fullSizePath": "early_spring.3a220ef41cdf8c9478a79f53b75aae0604863b4a_original.jpg",
                "smallThumbPath": "early_spring.3a220ef41cdf8c9478a79f53b75aae0604863b4a_small.jpg",
                "mediumThumbPath": "early_spring.3a220ef41cdf8c9478a79f53b75aae0604863b4a_medium.jpg",
                "largeThumbPath": "early_spring.3a220ef41cdf8c9478a79f53b75aae0604863b4a_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:32:48.000Z",
                "updatedAt": "2019-03-20T14:32:48.000Z"
            }, {
                "id": 8,
                "title": "Summerday at Feggesund",
                "description": "Summerday at Feggesund",
                "fullSizePath": "feggesund.d313e12320e244c8191f1bb7abfe1f8cc88cd313_original.jpg",
                "smallThumbPath": "feggesund.d313e12320e244c8191f1bb7abfe1f8cc88cd313_small.jpg",
                "mediumThumbPath": "feggesund.d313e12320e244c8191f1bb7abfe1f8cc88cd313_medium.jpg",
                "largeThumbPath": "feggesund.d313e12320e244c8191f1bb7abfe1f8cc88cd313_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:33:00.000Z",
                "updatedAt": "2019-03-21T14:52:35.000Z"
            }, {
                "id": 9,
                "title": "Small Fly",
                "description": "Small Fly",
                "fullSizePath": "fly.8c76cd9563eb2af0cc04bdf84fe7d48489fc055f_original.jpg",
                "smallThumbPath": "fly.8c76cd9563eb2af0cc04bdf84fe7d48489fc055f_small.jpg",
                "mediumThumbPath": "fly.8c76cd9563eb2af0cc04bdf84fe7d48489fc055f_medium.jpg",
                "largeThumbPath": "fly.8c76cd9563eb2af0cc04bdf84fe7d48489fc055f_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:33:13.000Z",
                "updatedAt": "2019-03-20T14:33:13.000Z"
            }, {
                "id": 10,
                "title": "Frozen Rose",
                "description": "Frozen Rose",
                "fullSizePath": "frozen_rose.132308fd05ce6cd1e7edad79df9b7d1d216ae3f6_original.jpg",
                "smallThumbPath": "frozen_rose.132308fd05ce6cd1e7edad79df9b7d1d216ae3f6_small.jpg",
                "mediumThumbPath": "frozen_rose.132308fd05ce6cd1e7edad79df9b7d1d216ae3f6_medium.jpg",
                "largeThumbPath": "frozen_rose.132308fd05ce6cd1e7edad79df9b7d1d216ae3f6_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:33:27.000Z",
                "updatedAt": "2019-03-20T14:33:27.000Z"
            }, {
                "id": 11,
                "title": "Ice Fishing at Julsø",
                "description": "Ice Fishing at Julsø",
                "fullSizePath": "ice_fishing_1.8d583953d39628c1b85e1324bd1fdef23625a1fe_original.jpg",
                "smallThumbPath": "ice_fishing_1.8d583953d39628c1b85e1324bd1fdef23625a1fe_small.jpg",
                "mediumThumbPath": "ice_fishing_1.8d583953d39628c1b85e1324bd1fdef23625a1fe_medium.jpg",
                "largeThumbPath": "ice_fishing_1.8d583953d39628c1b85e1324bd1fdef23625a1fe_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:33:45.000Z",
                "updatedAt": "2019-03-21T14:53:06.000Z"
            }, {
                "id": 12,
                "title": "Ice Fishing at Julsø",
                "description": "Ice Fishing at Julsø",
                "fullSizePath": "ice_fishing_2.b8e7560b75c532b4361b02ae72fb843a5804aa60_original.jpg",
                "smallThumbPath": "ice_fishing_2.b8e7560b75c532b4361b02ae72fb843a5804aa60_small.jpg",
                "mediumThumbPath": "ice_fishing_2.b8e7560b75c532b4361b02ae72fb843a5804aa60_medium.jpg",
                "largeThumbPath": "ice_fishing_2.b8e7560b75c532b4361b02ae72fb843a5804aa60_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:33:49.000Z",
                "updatedAt": "2019-03-21T14:52:58.000Z"
            }, {
                "id": 13,
                "title": "Ice Fishing at Julsø",
                "description": "Ice Fishing at Julsø",
                "fullSizePath": "ice_fishing_3.fd9d5e44bd7c4a3fb3db2d6cad8bca703d38d055_original.jpg",
                "smallThumbPath": "ice_fishing_3.fd9d5e44bd7c4a3fb3db2d6cad8bca703d38d055_small.jpg",
                "mediumThumbPath": "ice_fishing_3.fd9d5e44bd7c4a3fb3db2d6cad8bca703d38d055_medium.jpg",
                "largeThumbPath": "ice_fishing_3.fd9d5e44bd7c4a3fb3db2d6cad8bca703d38d055_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:33:54.000Z",
                "updatedAt": "2019-03-21T14:53:01.000Z"
            }, {
                "id": 14,
                "title": "Kalø Ruins",
                "description": "Kalø Ruins",
                "fullSizePath": "kaloe_ruins.5378b48467f3e7370f3a2fb4ff8a88bc6d66f3f9_original.jpg",
                "smallThumbPath": "kaloe_ruins.5378b48467f3e7370f3a2fb4ff8a88bc6d66f3f9_small.jpg",
                "mediumThumbPath": "kaloe_ruins.5378b48467f3e7370f3a2fb4ff8a88bc6d66f3f9_medium.jpg",
                "largeThumbPath": "kaloe_ruins.5378b48467f3e7370f3a2fb4ff8a88bc6d66f3f9_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:34:08.000Z",
                "updatedAt": "2019-03-20T14:34:08.000Z"
            }, {
                "id": 15,
                "title": "Kalø Ruins",
                "description": "Kalø Ruins",
                "fullSizePath": "kaloe_ruins_2.05da01a11d1d0ea1c260ce7768d2b43d85c2e742_original.jpg",
                "smallThumbPath": "kaloe_ruins_2.05da01a11d1d0ea1c260ce7768d2b43d85c2e742_small.jpg",
                "mediumThumbPath": "kaloe_ruins_2.05da01a11d1d0ea1c260ce7768d2b43d85c2e742_medium.jpg",
                "largeThumbPath": "kaloe_ruins_2.05da01a11d1d0ea1c260ce7768d2b43d85c2e742_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:34:13.000Z",
                "updatedAt": "2019-03-20T14:34:13.000Z"
            }, {
                "id": 16,
                "title": "Lodbjerg Lighthouse",
                "description": "Lodbjerg Lighthouse",
                "fullSizePath": "lodbjerg_lighthouse.af1ba1333ec9d8c4fb0f2effa92c6e9ae4237856_original.jpg",
                "smallThumbPath": "lodbjerg_lighthouse.af1ba1333ec9d8c4fb0f2effa92c6e9ae4237856_small.jpg",
                "mediumThumbPath": "lodbjerg_lighthouse.af1ba1333ec9d8c4fb0f2effa92c6e9ae4237856_medium.jpg",
                "largeThumbPath": "lodbjerg_lighthouse.af1ba1333ec9d8c4fb0f2effa92c6e9ae4237856_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:34:30.000Z",
                "updatedAt": "2019-03-20T14:34:30.000Z"
            }, {
                "id": 17,
                "title": "Mushrooms",
                "description": "Mushrooms",
                "fullSizePath": "mushrooms.9cca386f93201f00d2a12733db9cb06e0102df02_original.jpg",
                "smallThumbPath": "mushrooms.9cca386f93201f00d2a12733db9cb06e0102df02_small.jpg",
                "mediumThumbPath": "mushrooms.9cca386f93201f00d2a12733db9cb06e0102df02_medium.jpg",
                "largeThumbPath": "mushrooms.9cca386f93201f00d2a12733db9cb06e0102df02_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:39:00.000Z",
                "updatedAt": "2019-03-20T14:39:00.000Z"
            }, {
                "id": 18,
                "title": "Windy Day at the North Sea",
                "description": "Windy Day at the North Sea",
                "fullSizePath": "north_sea.b82c4b7067fbaf5b4231a75d8e9fa74f867f65d4_original.jpg",
                "smallThumbPath": "north_sea.b82c4b7067fbaf5b4231a75d8e9fa74f867f65d4_small.jpg",
                "mediumThumbPath": "north_sea.b82c4b7067fbaf5b4231a75d8e9fa74f867f65d4_medium.jpg",
                "largeThumbPath": "north_sea.b82c4b7067fbaf5b4231a75d8e9fa74f867f65d4_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:39:10.000Z",
                "updatedAt": "2019-03-21T14:53:26.000Z"
            }, {
                "id": 19,
                "title": "Blue Hour at the North Sea",
                "description": "Blue Hour at the North Sea",
                "fullSizePath": "north_sea_2.8942abc1114d3a8b0fb3079c9b07d91f01be7d85_original.jpg",
                "smallThumbPath": "north_sea_2.8942abc1114d3a8b0fb3079c9b07d91f01be7d85_small.jpg",
                "mediumThumbPath": "north_sea_2.8942abc1114d3a8b0fb3079c9b07d91f01be7d85_medium.jpg",
                "largeThumbPath": "north_sea_2.8942abc1114d3a8b0fb3079c9b07d91f01be7d85_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:39:15.000Z",
                "updatedAt": "2019-03-21T14:53:34.000Z"
            }, {
                "id": 20,
                "title": "North Sea",
                "description": "North Sea",
                "fullSizePath": "north_sea_3.2b5b1deb3e62385ba50bdc57a607ae32a957ddd7_original.jpg",
                "smallThumbPath": "north_sea_3.2b5b1deb3e62385ba50bdc57a607ae32a957ddd7_small.jpg",
                "mediumThumbPath": "north_sea_3.2b5b1deb3e62385ba50bdc57a607ae32a957ddd7_medium.jpg",
                "largeThumbPath": "north_sea_3.2b5b1deb3e62385ba50bdc57a607ae32a957ddd7_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:39:19.000Z",
                "updatedAt": "2019-03-20T14:39:19.000Z"
            }, {
                "id": 21,
                "title": "North Sea",
                "description": "North Sea",
                "fullSizePath": "north_sea_4.b468975b85cd052035d31f7cdcd2ace2ccdce682_original.jpg",
                "smallThumbPath": "north_sea_4.b468975b85cd052035d31f7cdcd2ace2ccdce682_small.jpg",
                "mediumThumbPath": "north_sea_4.b468975b85cd052035d31f7cdcd2ace2ccdce682_medium.jpg",
                "largeThumbPath": "north_sea_4.b468975b85cd052035d31f7cdcd2ace2ccdce682_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:39:29.000Z",
                "updatedAt": "2019-03-20T14:39:29.000Z"
            }, {
                "id": 22,
                "title": "Sand Lizard",
                "description": "Sand Lizard",
                "fullSizePath": "sand_lizard.fbd29e441e99b0774f4bbc54c467870d7e3f3f4e_original.jpg",
                "smallThumbPath": "sand_lizard.fbd29e441e99b0774f4bbc54c467870d7e3f3f4e_small.jpg",
                "mediumThumbPath": "sand_lizard.fbd29e441e99b0774f4bbc54c467870d7e3f3f4e_medium.jpg",
                "largeThumbPath": "sand_lizard.fbd29e441e99b0774f4bbc54c467870d7e3f3f4e_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:39:41.000Z",
                "updatedAt": "2019-03-20T14:39:41.000Z"
            }, {
                "id": 23,
                "title": "Sand Lizard",
                "description": "Sand Lizard",
                "fullSizePath": "sand_lizard_2.307e7cec02ec3f32a3fda2d44a409876c033c6ba_original.jpg",
                "smallThumbPath": "sand_lizard_2.307e7cec02ec3f32a3fda2d44a409876c033c6ba_small.jpg",
                "mediumThumbPath": "sand_lizard_2.307e7cec02ec3f32a3fda2d44a409876c033c6ba_medium.jpg",
                "largeThumbPath": "sand_lizard_2.307e7cec02ec3f32a3fda2d44a409876c033c6ba_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:39:46.000Z",
                "updatedAt": "2019-03-20T14:39:46.000Z"
            }, {
                "id": 24,
                "title": "Sika Deer",
                "description": "Sika Deer",
                "fullSizePath": "sika_deer.c44884c330b99d5af85c3ca1e2110eca84fb13c9_original.jpg",
                "smallThumbPath": "sika_deer.c44884c330b99d5af85c3ca1e2110eca84fb13c9_small.jpg",
                "mediumThumbPath": "sika_deer.c44884c330b99d5af85c3ca1e2110eca84fb13c9_medium.jpg",
                "largeThumbPath": "sika_deer.c44884c330b99d5af85c3ca1e2110eca84fb13c9_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:39:58.000Z",
                "updatedAt": "2019-03-20T14:39:58.000Z"
            }, {
                "id": 25,
                "title": "The Sky Mountain",
                "description": "The Sky Mountain",
                "fullSizePath": "sky_mountain.5c5821878914b9c7e3686e91bdcf247afe3fa588_original.jpg",
                "smallThumbPath": "sky_mountain.5c5821878914b9c7e3686e91bdcf247afe3fa588_small.jpg",
                "mediumThumbPath": "sky_mountain.5c5821878914b9c7e3686e91bdcf247afe3fa588_medium.jpg",
                "largeThumbPath": "sky_mountain.5c5821878914b9c7e3686e91bdcf247afe3fa588_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:40:17.000Z",
                "updatedAt": "2019-03-20T14:40:17.000Z"
            }, {
                "id": 26,
                "title": "Sletterhage Lighthouse",
                "description": "Sletterhage Lighthouse",
                "fullSizePath": "sletterhage_lighthouse.1682b42ef9a6059c078e9cb93b6f8b21eb524931_original.jpg",
                "smallThumbPath": "sletterhage_lighthouse.1682b42ef9a6059c078e9cb93b6f8b21eb524931_small.jpg",
                "mediumThumbPath": "sletterhage_lighthouse.1682b42ef9a6059c078e9cb93b6f8b21eb524931_medium.jpg",
                "largeThumbPath": "sletterhage_lighthouse.1682b42ef9a6059c078e9cb93b6f8b21eb524931_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:40:34.000Z",
                "updatedAt": "2019-03-20T14:40:34.000Z"
            }, {
                "id": 27,
                "title": "Sundews",
                "description": "Sundews",
                "fullSizePath": "sundews.9769b6d15cba2ba6f0fbe416dea39132ad949e09_original.jpg",
                "smallThumbPath": "sundews.9769b6d15cba2ba6f0fbe416dea39132ad949e09_small.jpg",
                "mediumThumbPath": "sundews.9769b6d15cba2ba6f0fbe416dea39132ad949e09_medium.jpg",
                "largeThumbPath": "sundews.9769b6d15cba2ba6f0fbe416dea39132ad949e09_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:40:46.000Z",
                "updatedAt": "2019-03-20T14:40:46.000Z"
            }, {
                "id": 28,
                "title": "Sunrise at Sallingsund",
                "description": "Sunrise at Sallingsund",
                "fullSizePath": "sunrise_at_sallingsund.4fed1bc5416500f5b4c9506a96786587860c700b_original.jpg",
                "smallThumbPath": "sunrise_at_sallingsund.4fed1bc5416500f5b4c9506a96786587860c700b_small.jpg",
                "mediumThumbPath": "sunrise_at_sallingsund.4fed1bc5416500f5b4c9506a96786587860c700b_medium.jpg",
                "largeThumbPath": "sunrise_at_sallingsund.4fed1bc5416500f5b4c9506a96786587860c700b_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:41:00.000Z",
                "updatedAt": "2019-03-20T14:41:00.000Z"
            }, {
                "id": 29,
                "title": "Sunrise at Højriis",
                "description": "Sunrise at Højriis",
                "fullSizePath": "sunrise_hojriis.3c21e47543c1d049f655b39478eef440e5a52c97_original.jpg",
                "smallThumbPath": "sunrise_hojriis.3c21e47543c1d049f655b39478eef440e5a52c97_small.jpg",
                "mediumThumbPath": "sunrise_hojriis.3c21e47543c1d049f655b39478eef440e5a52c97_medium.jpg",
                "largeThumbPath": "sunrise_hojriis.3c21e47543c1d049f655b39478eef440e5a52c97_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:41:12.000Z",
                "updatedAt": "2019-03-20T14:41:12.000Z"
            }, {
                "id": 30,
                "title": "Sunrise at the North Sea",
                "description": "Sunrise at the North Sea",
                "fullSizePath": "sunrise_north_sea.41039c627e37064e2984e080fb777bdb48988ad3_original.jpg",
                "smallThumbPath": "sunrise_north_sea.41039c627e37064e2984e080fb777bdb48988ad3_small.jpg",
                "mediumThumbPath": "sunrise_north_sea.41039c627e37064e2984e080fb777bdb48988ad3_medium.jpg",
                "largeThumbPath": "sunrise_north_sea.41039c627e37064e2984e080fb777bdb48988ad3_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:41:23.000Z",
                "updatedAt": "2019-03-20T14:41:23.000Z"
            }, {
                "id": 31,
                "title": "Sunset at Feggeklit",
                "description": "Sunset at Feggeklit",
                "fullSizePath": "sunset_feggeklit.90238d8d3fba65a90cfd8d60beab1e230da73ed7_original.jpg",
                "smallThumbPath": "sunset_feggeklit.90238d8d3fba65a90cfd8d60beab1e230da73ed7_small.jpg",
                "mediumThumbPath": "sunset_feggeklit.90238d8d3fba65a90cfd8d60beab1e230da73ed7_medium.jpg",
                "largeThumbPath": "sunset_feggeklit.90238d8d3fba65a90cfd8d60beab1e230da73ed7_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:41:42.000Z",
                "updatedAt": "2019-03-20T14:41:42.000Z"
            }, {
                "id": 32,
                "title": "Sunset at Hanklit",
                "description": "Sunset at Hanklit",
                "fullSizePath": "sunset_hanklit.b8678d43c9c66a633d108f3e4f2d3cc1fa7ced03_original.jpg",
                "smallThumbPath": "sunset_hanklit.b8678d43c9c66a633d108f3e4f2d3cc1fa7ced03_small.jpg",
                "mediumThumbPath": "sunset_hanklit.b8678d43c9c66a633d108f3e4f2d3cc1fa7ced03_medium.jpg",
                "largeThumbPath": "sunset_hanklit.b8678d43c9c66a633d108f3e4f2d3cc1fa7ced03_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:41:52.000Z",
                "updatedAt": "2019-03-20T14:41:52.000Z"
            }, {
                "id": 33,
                "title": "Sunset at Kalø",
                "description": "Sunset at Kalø",
                "fullSizePath": "sunset_kaloe.34af0caa00ad06dacc6a578f5bc30bd748d10e1a_original.jpg",
                "smallThumbPath": "sunset_kaloe.34af0caa00ad06dacc6a578f5bc30bd748d10e1a_small.jpg",
                "mediumThumbPath": "sunset_kaloe.34af0caa00ad06dacc6a578f5bc30bd748d10e1a_medium.jpg",
                "largeThumbPath": "sunset_kaloe.34af0caa00ad06dacc6a578f5bc30bd748d10e1a_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:42:01.000Z",
                "updatedAt": "2019-03-20T14:42:01.000Z"
            }, {
                "id": 34,
                "title": "Sunset at Mols",
                "description": "Sunset at Mols",
                "fullSizePath": "sunset_mols.7b7b36a351688b5b3f0c897830caca3dc6637c4a_original.jpg",
                "smallThumbPath": "sunset_mols.7b7b36a351688b5b3f0c897830caca3dc6637c4a_small.jpg",
                "mediumThumbPath": "sunset_mols.7b7b36a351688b5b3f0c897830caca3dc6637c4a_medium.jpg",
                "largeThumbPath": "sunset_mols.7b7b36a351688b5b3f0c897830caca3dc6637c4a_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:42:10.000Z",
                "updatedAt": "2019-03-20T14:42:10.000Z"
            }, {
                "id": 35,
                "title": "Svinkløvene",
                "description": "Svinkløvene",
                "fullSizePath": "svinklovene.1772676ed7cbcd39650fafc736d58a6d395b26a6_original.jpg",
                "smallThumbPath": "svinklovene.1772676ed7cbcd39650fafc736d58a6d395b26a6_small.jpg",
                "mediumThumbPath": "svinklovene.1772676ed7cbcd39650fafc736d58a6d395b26a6_medium.jpg",
                "largeThumbPath": "svinklovene.1772676ed7cbcd39650fafc736d58a6d395b26a6_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:42:23.000Z",
                "updatedAt": "2019-03-20T14:42:23.000Z"
            }, {
                "id": 36,
                "title": "The Wadden Sea",
                "description": "The Wadden Sea",
                "fullSizePath": "wadden_sea.0039e6c00cf93aed50f037fcfbdfa31f5517546e_original.jpg",
                "smallThumbPath": "wadden_sea.0039e6c00cf93aed50f037fcfbdfa31f5517546e_small.jpg",
                "mediumThumbPath": "wadden_sea.0039e6c00cf93aed50f037fcfbdfa31f5517546e_medium.jpg",
                "largeThumbPath": "wadden_sea.0039e6c00cf93aed50f037fcfbdfa31f5517546e_large.jpg",
                "galleryId": 1,
                "createdAt": "2019-03-20T14:42:35.000Z",
                "updatedAt": "2019-03-20T14:42:35.000Z"
            }]
        };
        new UIGallery(".ui-gallery", {baseUrl: "https://ni.leicht.io/"}, response);
    }

}

new App();