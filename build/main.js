webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/falconcyber/workdir/ionic/portofolio/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Biodata<hr>\n        </ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-5>Nama</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Rahmat Adi Putra</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Tempat, Tanggal Lahir</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Palu, 11 Oktober 1995</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Email</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>rahmat.adi.putra.21@gmail.com</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>No. Telp</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>+6282344846769</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Jenis Kelamin</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Laki - laki</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Agama</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Islam</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Status</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Belum Nikah</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Tinggi/Berat Badan</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>160/55</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Golongan Darah</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>AB</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Kewarganegaraan</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Indonesia</ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Riwayat Pendidikan<hr>\n        </ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-5>2001 - 2008</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>SDN 8 Mamboro, Kota Palu, Sulawesi Tengah</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>2008 - 2011</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>SMPN 18 Palu, Kota Palu, Sulawesi Tengah</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>2011 - 2014</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>SMKN 6 Palu, Kota Palu, Sulawesi Tengah</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>2014 - 2018</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Program Studi Sistem Informasi STMIK AKAKOM Yogyakarta</ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Pengalaman Kerja / Organisasi<hr>\n        </ion-card-title>\n        <ion-grid>\n        <ion-row>\n            <ion-col col-5>2012 - 2012</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Praktek Kerja Lapangan di STMIK AKAKOM Yogyakrta</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>2015 - 2018</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Anggota UKM Informatika dan Komputer STMIK AKAKOM Yogyakrta</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>2016 - 2017</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Departemen Humas UKM Informatika dan Komputer STMIK AKAKOM Yogyakrta</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>2017 - 2018</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Dewan Penasehat Organisasi UKM Informatika dan Komputer STMIK AKAKOM Yogyakrta</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>01 Agustus 2017 - 31 Agustus 2017</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Praktek Kerja Lapangan di PT. Solution 247 Cabang Yogyakarta</ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Skills<hr>\n        </ion-card-title>\n        <ion-grid>\n        <ion-row>\n            <ion-col col-5>PHP</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>10%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Java</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>5%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>MySQL</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>30%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>MongoDB</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>5%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Framework Yii</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>7%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Framework CodeIgniter</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>5%</ion-col>\n        </ion-row><ion-row>\n            <ion-col col-5>Framework Ionic</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>5%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Node Js</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>5%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Android Studio</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>1%</ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Galeri Foto<hr>\n        </ion-card-title>\n        <ion-grid>\n        <ion-row>\n            <ion-col col-4></ion-col>\n            <ion-col col-4></ion-col>\n            <ion-col col-4></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-4></ion-col>\n            <ion-col col-4></ion-col>\n            <ion-col col-4></ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Projects<hr>\n        </ion-card-title>\n        <ion-grid>\n        <ion-row>\n            <ion-col col-5>Sistem Informasi Presensi</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>localhost</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Sistem Informasi Keanggotaan UKM Informatika & Komputer</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>ukm-ik.akakom.ac.id/keanggotaan</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Portal UKM Informatika & Komputer</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>ukm-ik.akakom.ac.id/portal</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Apps Info Kampus AKAKOM</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>bit.ly/AppMobileAkakom</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Apps Mobile AKAKOM</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>https://github.com/RahmatAdiPutra/TugasAkhirMobile</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Document Management Sistem</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>localhost</ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="primary">\n    <div text-center>\n      <b style="color: white;">Curriculum Vitae</b>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/falconcyber/workdir/ionic/portofolio/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiodataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BiodataPage = BiodataPage_1 = (function () {
    function BiodataPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    BiodataPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(BiodataPage_1, {
            item: item
        });
    };
    return BiodataPage;
}());
BiodataPage = BiodataPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-biodata',template:/*ion-inline-start:"/home/falconcyber/workdir/ionic/portofolio/src/pages/biodata/biodata.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Biodata</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Biodata<hr>\n        </ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-5>Nama</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Rahmat Adi Putra</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Tempat, Tanggal Lahir</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Palu, 11 Oktober 1995</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Email</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>rahmat.adi.putra.21@gmail.com</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>No. Telp</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>+6282344846769</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Jenis Kelamin</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Laki - laki</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Agama</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Islam</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Status</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Belum Nikah</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Tinggi/Berat Badan</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>160/55</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Golongan Darah</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>AB</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>Kewarganegaraan</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Indonesia</ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="primary">\n    <div text-center>\n      <b style="color: white;">Curriculum Vitae</b>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/falconcyber/workdir/ionic/portofolio/src/pages/biodata/biodata.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], BiodataPage);

var BiodataPage_1;
//# sourceMappingURL=biodata.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiwayatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RiwayatPage = RiwayatPage_1 = (function () {
    function RiwayatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    RiwayatPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(RiwayatPage_1, {
            item: item
        });
    };
    return RiwayatPage;
}());
RiwayatPage = RiwayatPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-riwayat',template:/*ion-inline-start:"/home/falconcyber/workdir/ionic/portofolio/src/pages/riwayat/riwayat.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Riwayat Pendidikan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Riwayat Pendidikan<hr>\n        </ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-5>2001 - 2008</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>SDN 8 Mamboro, Kota Palu, Sulawesi Tengah</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>2008 - 2011</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>SMPN 18 Palu, Kota Palu, Sulawesi Tengah</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>2011 - 2014</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>SMKN 6 Palu, Kota Palu, Sulawesi Tengah</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>2014 - 2018</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Program Studi Sistem Informasi STMIK AKAKOM Yogyakarta</ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="primary">\n    <div text-center>\n      <b style="color: white;">Curriculum Vitae</b>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/falconcyber/workdir/ionic/portofolio/src/pages/riwayat/riwayat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], RiwayatPage);

var RiwayatPage_1;
//# sourceMappingURL=riwayat.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengalamanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PengalamanPage = PengalamanPage_1 = (function () {
    function PengalamanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    PengalamanPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(PengalamanPage_1, {
            item: item
        });
    };
    return PengalamanPage;
}());
PengalamanPage = PengalamanPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pengalaman',template:/*ion-inline-start:"/home/falconcyber/workdir/ionic/portofolio/src/pages/pengalaman/pengalaman.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pengalaman Kerja / Organisasi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Pengalaman Kerja / Organisasi<hr>\n        </ion-card-title>\n        <ion-grid>\n        <ion-row>\n            <ion-col col-5>2012 - 2012</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Praktek Kerja Lapangan di STMIK AKAKOM Yogyakrta</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>2015 - 2018</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Anggota UKM Informatika dan Komputer STMIK AKAKOM Yogyakrta</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>2016 - 2017</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Departemen Humas UKM Informatika dan Komputer STMIK AKAKOM Yogyakrta</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>2017 - 2018</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Dewan Penasehat Organisasi UKM Informatika dan Komputer STMIK AKAKOM Yogyakrta</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>01 Agustus 2017 - 31 Agustus 2017</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>Praktek Kerja Lapangan di PT. Solution 247 Cabang Yogyakarta</ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="primary">\n    <div text-center>\n      <b style="color: white;">Curriculum Vitae</b>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/falconcyber/workdir/ionic/portofolio/src/pages/pengalaman/pengalaman.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], PengalamanPage);

var PengalamanPage_1;
//# sourceMappingURL=pengalaman.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillPage = SkillPage_1 = (function () {
    function SkillPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    SkillPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(SkillPage_1, {
            item: item
        });
    };
    return SkillPage;
}());
SkillPage = SkillPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-skill',template:/*ion-inline-start:"/home/falconcyber/workdir/ionic/portofolio/src/pages/skill/skill.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Skills</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Skills<hr>\n        </ion-card-title>\n        <ion-grid>\n        <ion-row>\n            <ion-col col-5>PHP</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>10%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Java</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>5%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>MySQL</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>30%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>MongoDB</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>5%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Framework Yii</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>7%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Framework CodeIgniter</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>5%</ion-col>\n        </ion-row><ion-row>\n            <ion-col col-5>Framework Ionic</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>5%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Node Js</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>5%</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Android Studio</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>1%</ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="primary">\n    <div text-center>\n      <b style="color: white;">Curriculum Vitae</b>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/falconcyber/workdir/ionic/portofolio/src/pages/skill/skill.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], SkillPage);

var SkillPage_1;
//# sourceMappingURL=skill.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GaleriPage = GaleriPage_1 = (function () {
    function GaleriPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    GaleriPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(GaleriPage_1, {
            item: item
        });
    };
    return GaleriPage;
}());
GaleriPage = GaleriPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-galeri',template:/*ion-inline-start:"/home/falconcyber/workdir/ionic/portofolio/src/pages/galeri/galeri.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Galeri</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Galeri Foto<hr>\n        </ion-card-title>\n        <ion-grid>\n        <ion-row>\n            <ion-col col-4></ion-col>\n            <ion-col col-4></ion-col>\n            <ion-col col-4></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-4></ion-col>\n            <ion-col col-4></ion-col>\n            <ion-col col-4></ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="primary">\n    <div text-center>\n      <b style="color: white;">Curriculum Vitae</b>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/falconcyber/workdir/ionic/portofolio/src/pages/galeri/galeri.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], GaleriPage);

var GaleriPage_1;
//# sourceMappingURL=galeri.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectPage = ProjectPage_1 = (function () {
    function ProjectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ProjectPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ProjectPage_1, {
            item: item
        });
    };
    return ProjectPage;
}());
ProjectPage = ProjectPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-project',template:/*ion-inline-start:"/home/falconcyber/workdir/ionic/portofolio/src/pages/project/project.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Projects</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n          Projects<hr>\n        </ion-card-title>\n        <ion-grid>\n        <ion-row>\n            <ion-col col-5>Sistem Informasi Presensi</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>localhost</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Sistem Informasi Keanggotaan UKM Informatika & Komputer</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>ukm-ik.akakom.ac.id/keanggotaan</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Portal UKM Informatika & Komputer</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>ukm-ik.akakom.ac.id/portal</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Apps Info Kampus AKAKOM</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>bit.ly/AppMobileAkakom</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Apps Mobile AKAKOM</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>https://github.com/RahmatAdiPutra/TugasAkhirMobile</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5>Document Management Sistem</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-6>localhost</ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="primary">\n    <div text-center>\n      <b style="color: white;">Curriculum Vitae</b>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/falconcyber/workdir/ionic/portofolio/src/pages/project/project.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ProjectPage);

var ProjectPage_1;
//# sourceMappingURL=project.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_biodata_biodata__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_riwayat_riwayat__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pengalaman_pengalaman__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_skill_skill__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_galeri_galeri__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_project_project__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_biodata_biodata__["a" /* BiodataPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_riwayat_riwayat__["a" /* RiwayatPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pengalaman_pengalaman__["a" /* PengalamanPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_skill_skill__["a" /* SkillPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_galeri_galeri__["a" /* GaleriPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_project_project__["a" /* ProjectPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_biodata_biodata__["a" /* BiodataPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_riwayat_riwayat__["a" /* RiwayatPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pengalaman_pengalaman__["a" /* PengalamanPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_skill_skill__["a" /* SkillPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_galeri_galeri__["a" /* GaleriPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_project_project__["a" /* ProjectPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_biodata_biodata__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_riwayat_riwayat__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pengalaman_pengalaman__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_skill_skill__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_galeri_galeri__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_project_project__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Biodata', component: __WEBPACK_IMPORTED_MODULE_5__pages_biodata_biodata__["a" /* BiodataPage */] },
            { title: 'Riwayat Pendidikan', component: __WEBPACK_IMPORTED_MODULE_6__pages_riwayat_riwayat__["a" /* RiwayatPage */] },
            { title: 'Pengalaman Kerja', component: __WEBPACK_IMPORTED_MODULE_7__pages_pengalaman_pengalaman__["a" /* PengalamanPage */] },
            { title: 'Skiils', component: __WEBPACK_IMPORTED_MODULE_8__pages_skill_skill__["a" /* SkillPage */] },
            { title: 'Galeri Foto', component: __WEBPACK_IMPORTED_MODULE_9__pages_galeri_galeri__["a" /* GaleriPage */] },
            { title: 'Projects', component: __WEBPACK_IMPORTED_MODULE_10__pages_project_project__["a" /* ProjectPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/falconcyber/workdir/ionic/portofolio/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/falconcyber/workdir/ionic/portofolio/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map