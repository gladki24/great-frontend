webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Enums/EDialogType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EDialogType; });
var EDialogType;
(function (EDialogType) {
    EDialogType[EDialogType["Error"] = 0] = "Error";
    EDialogType[EDialogType["Information"] = 1] = "Information";
    EDialogType[EDialogType["Warning"] = 2] = "Warning";
})(EDialogType || (EDialogType = {}));


/***/ }),

/***/ "../../../../../src/app/Guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.user.getUserLogged()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/Interfaces/IPanel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EStatePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EPanel; });
var EStatePanel;
(function (EStatePanel) {
    EStatePanel[EStatePanel["open"] = 0] = "open";
    EStatePanel[EStatePanel["close"] = 1] = "close";
})(EStatePanel || (EStatePanel = {}));
var EPanel;
(function (EPanel) {
    EPanel[EPanel["left"] = 0] = "left";
    EPanel[EPanel["right"] = 1] = "right";
})(EPanel || (EPanel = {}));


/***/ }),

/***/ "../../../../../src/app/Pipes/hostname.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostnamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HostnamePipe = /** @class */ (function () {
    function HostnamePipe() {
    }
    HostnamePipe.prototype.transform = function (value, args) {
        return 'http://' + value.split('/')[2];
    };
    HostnamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'hostname'
        })
    ], HostnamePipe);
    return HostnamePipe;
}());



/***/ }),

/***/ "../../../../../src/app/Pipes/zloty-currency.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZlotyCurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ZlotyCurrencyPipe = /** @class */ (function () {
    function ZlotyCurrencyPipe() {
    }
    ZlotyCurrencyPipe.prototype.transform = function (value, args) {
        return value + ' zł';
    };
    ZlotyCurrencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'zlotyCurrency'
        })
    ], ZlotyCurrencyPipe);
    return ZlotyCurrencyPipe;
}());



/***/ }),

/***/ "../../../../../src/app/Services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signUp = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/user/add";
        return this.http.post(url, {
            email: data.email,
            password: data.password,
            nick: data.nick,
            birth: data.birth
        });
    };
    AuthService.prototype.signIn = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/user/login";
        return this.http.post(url, {
            email: data.email,
            password: data.password
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/collection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollectionService = /** @class */ (function () {
    function CollectionService(http, user) {
        this.http = http;
        this.user = user;
    }
    CollectionService.prototype.getItems = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].backendHostname + "/collection/get/" + id;
        return this.http.get(url);
    };
    CollectionService.prototype.saveItem = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].backendHostname + "/collection/addItem";
        return this.http.post(url, {
            productId: id,
            userId: this.user.getUserId()
        });
    };
    CollectionService.prototype.getCollectionTitle = function (id) {
        var sql = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].backendHostname + "/collection/title/" + id;
        return this.http.get(sql);
    };
    CollectionService.prototype.addItemToCollection = function (itemId, collectionId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].backendHostname + "/collection/add";
        return this.http.post(url, {
            productId: itemId,
            collectionId: collectionId
        });
    };
    CollectionService.prototype.removeProduct = function (collectionId, productId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].backendHostname + "/collection/remove";
        return this.http.post(url, {
            collectionId: collectionId,
            productId: productId
        });
    };
    CollectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], CollectionService);
    return CollectionService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Enums_EDialogType__ = __webpack_require__("../../../../../src/app/Enums/EDialogType.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogService = /** @class */ (function () {
    function DialogService() {
        this.message = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.style = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.message$ = this.message.asObservable();
        this.style$ = this.style.asObservable();
        this.style.next('hidden');
    }
    DialogService.prototype.showDialog = function (message, type) {
        this.message.next(message);
        var style = 'show ';
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_2__Enums_EDialogType__["a" /* EDialogType */].Information: {
                style += 'information';
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__Enums_EDialogType__["a" /* EDialogType */].Error: {
                style += 'error';
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__Enums_EDialogType__["a" /* EDialogType */].Warning: {
                style += 'warning';
                break;
            }
        }
        this.style.next(style);
    };
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/main-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainPageService = /** @class */ (function () {
    function MainPageService(http) {
        this.http = http;
    }
    MainPageService.prototype.getBrands = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/tile/brands";
        return this.http.get(url);
    };
    MainPageService.prototype.getCategories = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/tile/categories";
        return this.http.get(url);
    };
    MainPageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MainPageService);
    return MainPageService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/product-grid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGridService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductGridService = /** @class */ (function () {
    function ProductGridService(http) {
        this.http = http;
    }
    ProductGridService.prototype.getProducts = function (count, brand, category) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/" + count + "/" + brand + "/" + category;
        return this.http.get(url);
    };
    ProductGridService.prototype.searchProducts = function (count, type, query) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/search/" + count + "/" + type + "/" + query;
        return this.http.get(url);
    };
    ProductGridService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductGridService);
    return ProductGridService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/show-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowDetailsService = /** @class */ (function () {
    function ShowDetailsService(http) {
        this.http = http;
        // sources
        this.id = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        // streams
        this.id$ = this.id.asObservable();
    }
    ShowDetailsService.prototype.onShowDetails = function (id) {
        this.id.next(id);
    };
    ShowDetailsService.prototype.getDetails = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].backendHostname + "/detail/" + id;
        return this.http.get(url);
    };
    ShowDetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ShowDetailsService);
    return ShowDetailsService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/tag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagService = /** @class */ (function () {
    function TagService(http) {
        this.http = http;
    }
    TagService.prototype.get = function (product) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/tag/get/" + product;
        return this.http.get(url);
    };
    TagService.prototype.add = function (product, userId, tag) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/tag/add";
        return this.http.post(url, {
            user: userId,
            product: product,
            tag: tag
        });
    };
    TagService.prototype.vote = function (product, userId, tag) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/tag/vote";
        return this.http.post(url, {
            user: userId,
            product: product,
            tag: tag
        });
    };
    TagService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TagService);
    return TagService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.isUserLogged = false;
    }
    UserService.prototype.setUserLogged = function (id) {
        this.isUserLogged = true;
        this.userId = id;
        localStorage.setItem('user', id);
    };
    UserService.prototype.setUserLogout = function () {
        this.isUserLogged = false;
        this.userId = undefined;
        localStorage.clear();
    };
    UserService.prototype.getUserLogged = function () {
        return this.isUserLogged;
    };
    UserService.prototype.getUserId = function () {
        return this.userId;
    };
    UserService.prototype.getUserDetails = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/user/" + this.userId;
        return this.http.get(url);
    };
    UserService.prototype.saveUserDetails = function (form, id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/user/save";
        return this.http.post(url, {
            name: form.name,
            surname: form.surname,
            description: form.description,
            id: id
        });
    };
    UserService.prototype.getUserCollections = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/user/collection/" + id;
        return this.http.get(url);
    };
    UserService.prototype.addUserCollection = function (name) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/collection/new";
        return this.http.post(url, {
            name: name,
            id: this.userId
        });
    };
    UserService.prototype.deleteUserCollection = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/collection/delete";
        return this.http.post(url, {
            id: id
        });
    };
    UserService.prototype.delete = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].backendHostname + "/user/delete";
        return this.http.post(url, {
            id: id
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\" (window:scroll)=\"$event.stopPropagation()\">\n  <app-navigation (onLeftPanelClick)=\"panelMediator($event)\" (onRightPanelClick)=\"panelMediator($event)\"></app-navigation>\n  <app-left-panel></app-left-panel>\n  <app-right-panel></app-right-panel>\n  <router-outlet></router-outlet>\n  <app-dialog></app-dialog>\n  <footer>\n    <ul>\n      <li>\n        Seweryn Gładysz 2018 &copy;\n      </li>\n      <li>\n        <a href=\"https://github.com/gladki24\">\n          GitHub\n        </a>\n      </li>\n      <li>\n        <a href=\"https://www.facebook.com/seweryngla\">\n          Facebook\n        </a>\n      </li>\n      <li>\n        <a href=\"https://www.linkedin.com/in/seweryn-g%C5%82adysz-b00979160/\">\n          Linkedin\n        </a>\n      </li>\n    </ul>\n  </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  background-color: #F1F1F1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_component__ = __webpack_require__("../../../../../src/app/left-panel/left-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right_panel_right_panel_component__ = __webpack_require__("../../../../../src/app/right-panel/right-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Interfaces_IPanel__ = __webpack_require__("../../../../../src/app/Interfaces/IPanel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(user) {
        this.user = user;
        this.title = 'Great';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            this.user.setUserLogged(localStorage.getItem('user'));
        }
    };
    AppComponent.prototype.panelMediator = function (event) {
        if (event === __WEBPACK_IMPORTED_MODULE_3__Interfaces_IPanel__["a" /* EPanel */].left) {
            this.rightPanel.closePanel();
            this.leftPanel.togglePanel();
        }
        if (event === __WEBPACK_IMPORTED_MODULE_3__Interfaces_IPanel__["a" /* EPanel */].right) {
            this.leftPanel.closePanel();
            this.rightPanel.togglePanel();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_component__["a" /* LeftPanelComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_component__["a" /* LeftPanelComponent */])
    ], AppComponent.prototype, "leftPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__right_panel_right_panel_component__["a" /* RightPanelComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__right_panel_right_panel_component__["a" /* RightPanelComponent */])
    ], AppComponent.prototype, "rightPanel", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__Services_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__left_panel_left_panel_component__ = __webpack_require__("../../../../../src/app/left-panel/left-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__right_panel_right_panel_component__ = __webpack_require__("../../../../../src/app/right-panel/right-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_grid_product_grid_component__ = __webpack_require__("../../../../../src/app/product-grid/product-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_tile_product_tile_component__ = __webpack_require__("../../../../../src/app/product-tile/product-tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_tags_form_product_tags_form_component__ = __webpack_require__("../../../../../src/app/product-tags-form/product-tags-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tile_carousel_tile_carousel_component__ = __webpack_require__("../../../../../src/app/tile-carousel/tile-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__collection_collection_component__ = __webpack_require__("../../../../../src/app/collection/collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__filter_filter_component__ = __webpack_require__("../../../../../src/app/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Services_product_grid_service__ = __webpack_require__("../../../../../src/app/Services/product-grid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Services_show_details_service__ = __webpack_require__("../../../../../src/app/Services/show-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Services_main_page_service__ = __webpack_require__("../../../../../src/app/Services/main-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Services_dialog_service__ = __webpack_require__("../../../../../src/app/Services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Services_collection_service__ = __webpack_require__("../../../../../src/app/Services/collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Services_tag_service__ = __webpack_require__("../../../../../src/app/Services/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Pipes_zloty_currency_pipe__ = __webpack_require__("../../../../../src/app/Pipes/zloty-currency.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Pipes_hostname_pipe__ = __webpack_require__("../../../../../src/app/Pipes/hostname.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Guards_auth_guard__ = __webpack_require__("../../../../../src/app/Guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__tile_carousel_tile_scroll_directive__ = __webpack_require__("../../../../../src/app/tile-carousel/tile-scroll.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules





// Components















// Services








// Pipes


// Guards

// Directives

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__left_panel_left_panel_component__["a" /* LeftPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_8__right_panel_right_panel_component__["a" /* RightPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_9__product_grid_product_grid_component__["a" /* ProductGridComponent */],
                __WEBPACK_IMPORTED_MODULE_10__product_tile_product_tile_component__["a" /* ProductTileComponent */],
                __WEBPACK_IMPORTED_MODULE_28__Pipes_zloty_currency_pipe__["a" /* ZlotyCurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_29__Pipes_hostname_pipe__["a" /* HostnamePipe */],
                __WEBPACK_IMPORTED_MODULE_11__product_tags_form_product_tags_form_component__["a" /* ProductTagsFormComponent */],
                __WEBPACK_IMPORTED_MODULE_12__main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__tile_carousel_tile_carousel_component__["a" /* TileCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_14__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__collection_collection_component__["a" /* CollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_18__filter_filter_component__["a" /* FilterComponent */],
                __WEBPACK_IMPORTED_MODULE_31__tile_carousel_tile_scroll_directive__["a" /* TileScrollDirective */],
                __WEBPACK_IMPORTED_MODULE_19__search_search_component__["a" /* SearchComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__Services_product_grid_service__["a" /* ProductGridService */],
                __WEBPACK_IMPORTED_MODULE_21__Services_show_details_service__["a" /* ShowDetailsService */],
                __WEBPACK_IMPORTED_MODULE_22__Services_main_page_service__["a" /* MainPageService */],
                __WEBPACK_IMPORTED_MODULE_23__Services_dialog_service__["a" /* DialogService */],
                __WEBPACK_IMPORTED_MODULE_24__Services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_25__Services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_26__Services_collection_service__["a" /* CollectionService */],
                __WEBPACK_IMPORTED_MODULE_30__Guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_27__Services_tag_service__["a" /* TagService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__product_tile_product_tile_component__["a" /* ProductTileComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/collection/collection.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"collection\">\n  <h1>Okno kolekcji: <span *ngIf=\"title\">{{title}}</span></h1>\n  <table *ngIf=\"products && products.length > 0; else empty\">\n    <tr>\n      <th>Nazwa</th>\n      <th>Marka</th>\n      <th class=\"img\">Zdjęcie</th>\n      <th></th>\n    </tr>\n    <tr *ngFor=\"let product of products\">\n      <td (click)=\"showDetails(product.id)\">\n        <a>{{product.title | lowercase}}</a>\n      </td>\n      <td>{{product.brandName}}</td>\n      <td class=\"img\">\n        <img [alt]=\"product.title\" [src]=\"product.imgSource\">\n      </td>\n      <td *ngIf=\"userAuth\">\n        <button (click)=\"removeProduct(product.id)\">Usuń</button>\n      </td>\n    </tr>\n  </table>\n  <ng-template #empty>\n    <h2>Ta kolekcja jest pusta</h2>\n  </ng-template>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/collection/collection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".collection {\n  margin: 100px 0 0 0;\n  padding: 20px 40px 40px 40px;\n  font-size: 22px; }\n\ntable {\n  margin: 0 auto 0 auto; }\n\nimg {\n  width: 200px;\n  height: 200px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down; }\n\ntd {\n  padding: 30px;\n  border-top: 1px solid #247baf; }\n\ntd a {\n    cursor: pointer; }\n\nth {\n  font-size: 22px; }\n\n@media only screen and (max-width: 600px) {\n  .collection {\n    padding: 20px 10px 40px 10px; }\n  td {\n    padding: 10px; }\n  img {\n    width: 100px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down; } }\n\n@media only screen and (max-width: 450px) {\n  img {\n    display: none; }\n  .img {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/collection/collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_collection_service__ = __webpack_require__("../../../../../src/app/Services/collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_show_details_service__ = __webpack_require__("../../../../../src/app/Services/show-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_dialog_service__ = __webpack_require__("../../../../../src/app/Services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Enums_EDialogType__ = __webpack_require__("../../../../../src/app/Enums/EDialogType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(route, service, showDetailService, userService, dialog) {
        this.route = route;
        this.service = service;
        this.showDetailService = showDetailService;
        this.userService = userService;
        this.dialog = dialog;
        this.destroyComponent = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
    }
    CollectionComponent.prototype.ngOnInit = function () {
        this.createView();
    };
    CollectionComponent.prototype.ngOnDestroy = function () {
        this.destroyComponent.next();
        this.destroyComponent.complete();
    };
    CollectionComponent.prototype.showDetails = function (id) {
        this.showDetailService.onShowDetails(id);
    };
    CollectionComponent.prototype.removeProduct = function (productId) {
        var _this = this;
        this.service.removeProduct(this.id, productId).takeUntil(this.destroyComponent).subscribe(function (res) {
            if (res) {
                _this.dialog.showDialog('Usunięto', __WEBPACK_IMPORTED_MODULE_6__Enums_EDialogType__["a" /* EDialogType */].Warning);
                _this.createView();
            }
            else {
                _this.dialog.showDialog('Błąd', __WEBPACK_IMPORTED_MODULE_6__Enums_EDialogType__["a" /* EDialogType */].Error);
            }
        });
    };
    CollectionComponent.prototype.createView = function () {
        var _this = this;
        this.route.params.takeUntil(this.destroyComponent).subscribe(function (params) {
            _this.id = parseInt(params['id'], 0);
            _this.getItems(_this.id);
            _this.getCollectionTitle();
            _this.authUser();
        });
    };
    CollectionComponent.prototype.getItems = function (id) {
        var _this = this;
        this.service.getItems(id).takeUntil(this.destroyComponent).subscribe(function (res) {
            _this.products = res;
        });
    };
    CollectionComponent.prototype.getCollectionTitle = function () {
        var _this = this;
        this.service.getCollectionTitle(this.id).takeUntil(this.destroyComponent).subscribe(function (title) {
            _this.title = title.title;
        });
    };
    CollectionComponent.prototype.authUser = function () {
        var _this = this;
        if (this.userService.getUserLogged()) {
            this.userService.getUserCollections(this.userService.getUserId()).takeUntil(this.destroyComponent).subscribe(function (collections) {
                for (var _i = 0, collections_1 = collections; _i < collections_1.length; _i++) {
                    var collection = collections_1[_i];
                    if (collection.id === _this.id) {
                        _this.userAuth = true;
                        break;
                    }
                    else {
                        _this.userAuth = false;
                    }
                }
            });
        }
        else {
            this.userAuth = false;
        }
    };
    CollectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-collection',
            template: __webpack_require__("../../../../../src/app/collection/collection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/collection/collection.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__Services_collection_service__["a" /* CollectionService */],
            __WEBPACK_IMPORTED_MODULE_3__Services_show_details_service__["a" /* ShowDetailsService */],
            __WEBPACK_IMPORTED_MODULE_4__Services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__Services_dialog_service__["a" /* DialogService */]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.backendHostname = 'http://localhost:3000';
    return Config;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-box\" (click)=\"hideDialog()\" [class]=\"style\" *ngIf=\"message\">\n  <ul>\n    <li *ngFor=\"let line of message\">{{line}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  width: 100%;\n  font-size: 18px;\n  position: fixed;\n  bottom: 0;\n  padding: 20px;\n  text-align: center;\n  cursor: pointer;\n  z-index: 40; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\ni {\n  padding-left: 20px; }\n\n.show {\n  display: block; }\n\n.error {\n  background-color: #ff625f;\n  color: #c3261f;\n  border-top: 2px solid #c3261f; }\n\n.warning {\n  background-color: #ffe066;\n  color: #d8a300;\n  border-top: 2px solid #ffe066; }\n\n.information {\n  background-color: #247baf;\n  color: white;\n  border-top: 2px solid #0e42af; }\n\n.hidden {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_dialog_service__ = __webpack_require__("../../../../../src/app/Services/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(service) {
        var _this = this;
        this.service = service;
        this.service.message$.subscribe(function (message) {
            if (typeof message !== 'string') {
                _this.message = message;
            }
            else {
                var messages = [];
                messages.push(message);
                _this.message = messages;
            }
            setTimeout(function () {
                _this.hideDialog();
            }, 4000);
        });
        this.service.style$.subscribe(function (style) {
            _this.style = style;
        });
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.hideDialog = function () {
        this.style = 'hidden';
    };
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_dialog_service__["a" /* DialogService */]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filter\">\n  <form class=\"filter-form\" [formGroup]=\"filterForm\" (ngSubmit)=\"filter(filterForm.value)\" #form=\"ngForm\">\n    <table>\n      <tr>\n        <td>Kategoria</td>\n        <td>Marka</td>\n        <td>Ilość produktów na stronie</td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>\n          <select *ngIf=\"categoryList\" formControlName=\"category\">\n            <option value=\"0\">Dowolna</option>\n            <option *ngFor=\"let category of categoryList\"\n                    [value]=\"category.id\">\n              {{category.name}}\n            </option>\n          </select>\n        </td>\n        <td>\n          <select *ngIf=\"brandList\" formControlName=\"brand\">\n            <option value=\"0\">Dowolna</option>\n            <option *ngFor=\"let brand of brandList\"\n                    [value]=\"brand.id\">\n              {{brand.name}}\n            </option>\n          </select>\n        </td>\n        <td>\n          <select formControlName=\"number\">\n            <option [ngValue]=\"null\" disabled>Ilość na stronie: </option>\n            <option value=\"27\">27</option>\n            <option value=\"54\">54</option>\n            <option value=\"81\">81</option>\n          </select>\n        </td>\n        <td><input type=\"submit\" value=\"filtruj\" [disabled]=\"!form.valid\"></td>\n      </tr>\n    </table>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/filter/filter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter {\n  width: 850px;\n  margin: 100px auto 0 auto;\n  background-color: white;\n  padding: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\ntable {\n  text-align: center; }\n\nform {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n@media only screen and (max-width: 800px) {\n  .filter {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_main_page_service__ = __webpack_require__("../../../../../src/app/Services/main-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FilterComponent = /** @class */ (function () {
    function FilterComponent(mainPageService, formBuilder, router, route) {
        this.mainPageService = mainPageService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.destroyComponent = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.filterForm = this.formBuilder.group({
            category: [null],
            brand: [null],
            number: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.getParams();
        this.getCategories();
        this.getBrands();
    };
    FilterComponent.prototype.ngOnDestroy = function () {
        this.destroyComponent.next();
        this.destroyComponent.complete();
    };
    FilterComponent.prototype.getCategories = function () {
        var _this = this;
        this.mainPageService.getCategories().takeUntil(this.destroyComponent).subscribe(function (categories) {
            _this.categoryList = categories;
        });
    };
    FilterComponent.prototype.getBrands = function () {
        var _this = this;
        this.mainPageService.getBrands().takeUntil(this.destroyComponent).subscribe(function (brands) {
            _this.brandList = brands;
        });
    };
    FilterComponent.prototype.getParams = function () {
        var _this = this;
        this.route.params.takeUntil(this.destroyComponent).subscribe(function (params) {
            _this.params = params;
        });
    };
    FilterComponent.prototype.filter = function (form) {
        this.router.navigate(["/explore/" + form.brand + "/" + form.category + "/" + form.number]);
    };
    FilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-filter',
            template: __webpack_require__("../../../../../src/app/filter/filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/filter/filter.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_main_page_service__["a" /* MainPageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/left-panel/left-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<aside [class]=\"style\">\n  <h2>Menu</h2>\n  <nav>\n    <ul>\n      <li><i class=\"fas fa-home\"></i><a routerLink=\"\" (click)=\"closePanel()\">Strona Główna</a></li>\n      <li><i class=\"fas fa-compass\"></i><a routerLink=\"explore/0/0/27\" (click)=\"closePanel()\">Odkrywaj</a></li>\n      <li><i class=\"fas fa-user\"></i><a routerLink=\"user/1\" (click)=\"closePanel()\">Użytkownik</a></li>\n      <li *ngIf=\"user.getUserLogged()\">\n        <i class=\"fas fa-list\"></i>\n        <a routerLink=\"user/2\" (click)=\"closePanel()\">Kolekcje</a>\n      </li>\n    </ul>\n  </nav>\n</aside>\n\n<!--<div class=\"glass\"></div>-->\n"

/***/ }),

/***/ "../../../../../src/app/left-panel/left-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-panel {\n  position: fixed;\n  z-index: 30;\n  left: 0;\n  top: 60px;\n  bottom: 0;\n  width: 30%;\n  -webkit-transition: left 0.75s;\n  transition: left 0.75s;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  border-right: 1px solid #f25f5c;\n  border-top: 1px solid #f25f5c;\n  font-family: 'Caveat', 'cursive'; }\n\n.hidden-left-panel {\n  left: -30%; }\n\nh2 {\n  color: #f25f5c; }\n\nnav ul {\n  list-style: none;\n  margin-left: 30px; }\n\nnav ul li {\n    display: block;\n    width: 100%;\n    height: 50px;\n    border-top: 2px solid #F1F1F1; }\n\nnav ul li:last-child {\n      border-bottom: 2px solid #F1F1F1; }\n\nnav ul li i {\n      margin-right: 20px;\n      font-size: 20px; }\n\nnav ul li a {\n      position: relative;\n      line-height: 50px;\n      font-size: 26px;\n      -webkit-transition: 0.5s;\n      transition: 0.5s;\n      left: 0;\n      color: black;\n      text-decoration: none; }\n\nnav ul li a:hover {\n        color: #f25f5c;\n        left: 5px; }\n\n.glass {\n  position: fixed;\n  top: 50px;\n  width: 100vw;\n  height: 100vh;\n  z-index: 20;\n  background-color: #282828;\n  pointer-events: none;\n  opacity: 0.8; }\n\n@media only screen and (max-width: 800px) {\n  .left-panel {\n    width: 70%; }\n  .hidden-left-panel {\n    left: -70%; } }\n\n@media only screen and (max-width: 600px) {\n  .left-panel {\n    width: 100%; }\n  .hidden-left-panel {\n    left: -100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/left-panel/left-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Interfaces_IPanel__ = __webpack_require__("../../../../../src/app/Interfaces/IPanel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftPanelComponent = /** @class */ (function () {
    function LeftPanelComponent(user) {
        this.user = user;
    }
    LeftPanelComponent.prototype.ngOnInit = function () {
        this.style = 'left-panel hidden-left-panel';
        this.state = __WEBPACK_IMPORTED_MODULE_1__Interfaces_IPanel__["b" /* EStatePanel */].close;
    };
    LeftPanelComponent.prototype.togglePanel = function () {
        if (this.state) {
            this.openPanel();
        }
        else if (!this.state) {
            this.closePanel();
        }
    };
    LeftPanelComponent.prototype.closePanel = function () {
        this.style = 'hidden-left-panel left-panel';
        this.state = __WEBPACK_IMPORTED_MODULE_1__Interfaces_IPanel__["b" /* EStatePanel */].close;
    };
    LeftPanelComponent.prototype.openPanel = function () {
        this.style = 'left-panel';
        this.state = __WEBPACK_IMPORTED_MODULE_1__Interfaces_IPanel__["b" /* EStatePanel */].open;
    };
    LeftPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-left-panel',
            template: __webpack_require__("../../../../../src/app/left-panel/left-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/left-panel/left-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */]])
    ], LeftPanelComponent);
    return LeftPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login\">\n  <nav>\n    <ul>\n      <li><button (click)=\"showSection(1)\" [class.active]=\"visibleSection == 1\">Rejestracja</button></li>\n      <li><button (click)=\"showSection(2)\" [class.active]=\"visibleSection == 2\">Logowanie</button></li>\n    </ul>\n  </nav>\n  <section class=\"form-box\" *ngIf=\"visibleSection == 1\">\n    <h1><i class=\"fas fa-user-plus\"></i>Rejestracja</h1>\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"signUp(registerForm.value)\">\n\n        <div class=\"input-group\">\n          <input type=\"text\"\n                 formControlName=\"nick\"\n                 id=\"nick\"\n                 placeholder=\"Nazwa użytkownika: \">\n          <div class=\"error\" *ngIf=\"registerForm.controls['nick'].invalid && registerForm.controls['nick'].touched\">\n            Nazwa musi:\n            <ul>\n              <li>Być nie krótsza niż 4 znaki</li>\n              <li>Być nie dłuższa niż 15 znaków</li>\n              <li>Nie może zawierać polskich znaków</li>\n              <li>Składać się z małych liter</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"input-group\">\n          <input type=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"Adres e-mail: \">\n          <div class=\"error\" *ngIf=\"registerForm.controls['email'].invalid && registerForm.controls['email'].touched\">\n            E-mail musi:\n            <ul>\n              <li>Istnieć</li>\n              <li>Nie zawierać polskich znaków</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"input-group\">\n          <input type=\"password\" formControlName=\"password\" id=\"password\" placeholder=\"Twoje hasło: \">\n          <div class=\"error\"\n               *ngIf=\"registerForm.controls['password'].invalid && registerForm.controls['password'].touched\">\n            Hasło musi:\n            <ul>\n              <li>Być niekrótsze niż 6 znaków</li>\n              <li>Być niedłuższe niż 20 znaków</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"input-group\">\n          <input type=\"date\" formControlName=\"birth\" id=\"birth\">\n        </div>\n\n        <div class=\"input-group\">\n          <input type=\"checkbox\" formControlName=\"terms\" id=\"terms\">\n          <div class=\"error\">\n            Aby się zarejestrować musisz zaakceptować regulamin (którego jeszcze nie ma)\n            <a href=\"/assets/TODO.txt\">Regulamin</a>\n          </div>\n        </div>\n\n        <div class=\"input-group\">\n          <input type=\"submit\" value=\"Zarejestruj\" [disabled]=\"!registerForm.valid\">\n        </div>\n      </form>\n  </section>\n\n  <section class=\"form-box\" *ngIf=\"visibleSection == 2\">\n    <h1><i class=\"fas fa-sign-in-alt\"></i>Logowanie</h1>\n    <div class=\"form\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"signIn(loginForm.value)\">\n        <div class=\"input-group\">\n          <input type=\"email\" formControlName=\"email\" id=\"login-email\" placeholder=\"Adres e-mail: \">\n        </div>\n\n        <div class=\"input-group\">\n          <input type=\"password\" formControlName=\"password\" id=\"login-password\" placeholder=\"Twoje hasło: \">\n        </div>\n        <div class=\"input-group\">\n          <input type=\"submit\" value=\"Zaloguj\" [disabled]=\"!loginForm.valid\">\n        </div>\n      </form>\n      <div class=\"info\">\n        <h2>Dane do konta testowego</h2>\n        <ul>\n          <li>e-mail: test@test.com</li>\n          <li>hasło: test123</li>\n        </ul>\n      </div>\n    </div>\n  </section>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\n  margin: 100px 0px 100px 0px;\n  padding: 20px 50px 20px 50px;\n  min-height: 500px; }\n\nnav {\n  margin: 10px auto 10px auto; }\n\nnav ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\nnav ul li {\n      width: 50%; }\n\nnav ul li button {\n        width: 100%; }\n\n.form-box {\n  width: 100%;\n  padding: 0 50px 0 50px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 300px;\n  margin: 0 auto 0 auto; }\n\n.form-box:first-child {\n    border-right: 2px solid #E9E9E9; }\n\n.input-group {\n  padding: 5px 10px 5px 10px;\n  margin: 0 20px 0 20px; }\n\n.error {\n  background-color: #ff625f;\n  color: #c3261f;\n  margin: 20px;\n  padding: 10px; }\n\nh1 i {\n  font-size: 24px;\n  padding-right: 10px;\n  color: #484848; }\n\nbutton, input {\n  width: 100%; }\n\ninput[type=text], input[type=email], input[type=password], input[type=date] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-bottom: 1px solid #F1F1F1;\n  padding: 0 0 2px 0;\n  margin: 5px 0 5px 0; }\n\ninput[type=text]:focus, input[type=email]:focus, input[type=password]:focus, input[type=date]:focus {\n    border: none;\n    border-bottom: 1px solid #f25f5c; }\n\n.valid {\n  border-bottom: 1px solid #70c1b3; }\n\n@media only screen and (max-width: 600px) {\n  .login {\n    padding: 20px 10px 20px 10px; }\n  .form-box {\n    padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_dialog_service__ = __webpack_require__("../../../../../src/app/Services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_auth_service__ = __webpack_require__("../../../../../src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__ = __webpack_require__("../../../../../src/app/Enums/EDialogType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, dialog, router, auth, user) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.router = router;
        this.auth = auth;
        this.user = user;
        this.destroyComponent = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["a" /* Subject */]();
        this.visibleSection = 2;
        this.registerForm = formBuilder.group({
            'nick': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(15),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(/^[a-z0-9_-]{4,15}$/)
                ])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email,
                ])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(20)
                ])],
            'birth': '',
            'terms': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].requiredTrue]
        });
        this.loginForm = formBuilder.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email
                ])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.destroyComponent.next();
        this.destroyComponent.complete();
    };
    LoginComponent.prototype.showSection = function (number) {
        this.visibleSection = number;
    };
    LoginComponent.prototype.signUp = function (form) {
        var _this = this;
        console.log(form);
        this.auth.signUp(form).takeUntil(this.destroyComponent).subscribe(function (res) {
            _this.dialog.showDialog('Użytkownik dodany!', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Information);
            _this.signIn(form);
        }, function (err) {
            _this.dialog.showDialog('Użytkownik już istnieje', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Error);
        });
    };
    LoginComponent.prototype.signIn = function (form) {
        var _this = this;
        this.auth.signIn(form).takeUntil(this.destroyComponent).subscribe(function (res) {
            if (res !== null) {
                _this.user.setUserLogged(res.id);
                _this.dialog.showDialog('Zalogowano', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Information);
                _this.router.navigate(['/user']);
            }
            else {
                _this.dialog.showDialog('Błędny login lub hasło', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Error);
            }
        }, function (err) {
            _this.dialog.showDialog('Błąd serwera', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Error);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__Services_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__Services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__Services_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n\n  <app-search></app-search>\n\n  <section class=\"brands\" id=\"brands\">\n    <h1>Marki: </h1>\n    <app-tile-carousel [tilesData]=\"brands\" *ngIf=\"brands\" type=\"brand\"></app-tile-carousel>\n  </section>\n\n  <section class=\"categories\" id=\"categories\">\n    <h1>Kategorie: </h1>\n    <app-tile-carousel [tilesData]=\"categories\" *ngIf=\"categories\" type=\"category\"></app-tile-carousel>\n  </section>\n\n  <section class=\"user\" id=\"user\" *ngIf=\"userLogged && userDetails\">\n    <h1>Użytkownik: {{userDetails.nick}}</h1>\n    <div class=\"collection\">\n      <h2 *ngIf=\"collections\">Twoje kolekcje: </h2>\n      <ul>\n        <li *ngFor=\"let collection of collections\">\n          <a routerLink=\"/collection/{{collection.id}}\">{{collection.title}}</a>\n        </li>\n      </ul>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n  margin-top: 100px; }\n\nsection {\n  margin: 50px 0 50px 0;\n  width: 100%; }\n\nsection .collection {\n    padding: 20px; }\n\nul {\n  margin-left: 50px; }\n\nli {\n  list-style: circle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_main_page_service__ = __webpack_require__("../../../../../src/app/Services/main-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(service, user) {
        this.service = service;
        this.user = user;
        this.destroyComponent = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.getBrands();
        this.getCategories();
        this.userLogged = this.user.getUserLogged();
        if (this.userLogged) {
            this.getUserDetails();
            this.getCollections();
        }
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent.prototype.ngOnDestroy = function () {
        this.destroyComponent.next();
        this.destroyComponent.complete();
    };
    MainPageComponent.prototype.getBrands = function () {
        var _this = this;
        this.service.getBrands().takeUntil(this.destroyComponent).subscribe(function (brands) {
            _this.brands = brands;
        });
    };
    MainPageComponent.prototype.getCategories = function () {
        var _this = this;
        this.service.getCategories().takeUntil(this.destroyComponent).subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    MainPageComponent.prototype.getCollections = function () {
        var _this = this;
        this.user.getUserCollections(this.user.getUserId()).takeUntil(this.destroyComponent).subscribe(function (collections) {
            _this.collections = collections;
        });
    };
    MainPageComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.user.getUserDetails().takeUntil(this.destroyComponent).subscribe(function (details) {
            _this.userDetails = details;
        });
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-page',
            template: __webpack_require__("../../../../../src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-page/main-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_main_page_service__["a" /* MainPageService */],
            __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav [class]=\"navigationStyle\" (window:scroll)=\"toggleShadow()\">\n  <button class=\"left-panel-btn\" title=\"Menu\" (click)=\"toggleLeftPanel()\">\n    <i class=\"fas fa-bars\" style=\"font-size: 28px\"></i>\n  </button>\n  <a routerLink=\"/\">\n    <img src=\"../../assets/logo.svg\" alt=\"logo\">\n  </a>\n  <button class=\"right-panel-btn\" title=\"Product details\" (click)=\"toggleRightPanel()\" [disabled]=\"btnDisabled\">\n    <i class=\"fas fa-info-circle\"></i>\n  </button>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigation {\n  overflow: hidden;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 30;\n  width: 100%;\n  height: 60px;\n  background-color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid #70c1b3; }\n\n.nav-shadow {\n  -webkit-box-shadow: 0px 0px 8px 0px #484848;\n          box-shadow: 0px 0px 8px 0px #484848;\n  border-bottom: none; }\n\nimg {\n  height: 60px; }\n\n.left-panel-btn, .right-panel-btn {\n  position: relative;\n  border: none;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  width: 200px;\n  height: 60px;\n  background-color: white;\n  font-size: 28px; }\n\n.left-panel-btn {\n  padding: 5px 0 0 125px;\n  left: -50px;\n  border-right: 1px solid #F1F1F1; }\n\n.left-panel-btn:hover {\n    left: 0px;\n    background-color: #f25f5c;\n    color: white; }\n\n.right-panel-btn {\n  right: -50px;\n  padding: 5px 125px 0 0;\n  border-left: 1px solid #F1F1F1; }\n\n.right-panel-btn:hover {\n    right: 0px;\n    background-color: #ffe066;\n    color: white; }\n\n@media only screen and (max-width: 600px) {\n  .navigation {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .left-panel-btn, .right-panel-btn {\n    width: 100px;\n    padding: 10px; }\n  .right-panel-btn {\n    right: 0; }\n    .right-panel-btn:hover {\n      right: 0; }\n  .left-panel-btn {\n    left: 0; }\n    .left-panel-btn:hover {\n      left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Interfaces_IPanel__ = __webpack_require__("../../../../../src/app/Interfaces/IPanel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_show_details_service__ = __webpack_require__("../../../../../src/app/Services/show-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(showDetailsService) {
        var _this = this;
        this.showDetailsService = showDetailsService;
        this.onLeftPanelClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onRightPanelClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.navigationStyle = 'navigation';
        this.btnDisabled = true;
        showDetailsService.id$.subscribe(function () {
            _this.toggleRightPanel();
            _this.btnDisabled = false;
        });
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.toggleLeftPanel = function () {
        this.onLeftPanelClick.emit(__WEBPACK_IMPORTED_MODULE_1__Interfaces_IPanel__["a" /* EPanel */].left);
    };
    NavigationComponent.prototype.toggleRightPanel = function () {
        this.onRightPanelClick.emit(__WEBPACK_IMPORTED_MODULE_1__Interfaces_IPanel__["a" /* EPanel */].right);
    };
    NavigationComponent.prototype.toggleShadow = function () {
        if (window.scrollY === 0) {
            this.navigationStyle = 'navigation';
        }
        else {
            this.navigationStyle = 'navigation nav-shadow';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "onLeftPanelClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "onRightPanelClick", void 0);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_show_details_service__["a" /* ShowDetailsService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-grid/product-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<app-filter></app-filter>\n<main class=\"product-grid\" #container *ngIf=\"products && products.length > 0; else notFound\">\n  <app-product-tile *ngFor=\"let product of products\" [product]=\"product\"></app-product-tile>\n  <div [class]=\"modal\" title=\"Załaduj następne produkty\">\n    <div class=\"grid-modal-animation\"></div>\n  </div>\n  <button (click)=\"loadMoreProducts()\" *ngIf=\"!(products.length < productsNumber)\">\n    <div class=\"next-products\">\n      <i class=\"fas fa-arrow-down\"></i>\n    </div>\n  </button>\n</main>\n<ng-template #notFound>\n  <main class=\"not-found\">\n    <p>Nie odnaleziono produktów</p>\n  </main>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/product-grid/product-grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes rotation {\n  25% {\n    border: 2px solid #247baf;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  50% {\n    border: 2px solid #ffe066;\n    -webkit-transform: rotate(720deg);\n            transform: rotate(720deg); }\n  75% {\n    border: 2px solid #70c1b3;\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg); }\n  100% {\n    border: 2px solid #f25f5c;\n    -webkit-transform: rotate(1440deg);\n            transform: rotate(1440deg); } }\n\n@keyframes rotation {\n  25% {\n    border: 2px solid #247baf;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  50% {\n    border: 2px solid #ffe066;\n    -webkit-transform: rotate(720deg);\n            transform: rotate(720deg); }\n  75% {\n    border: 2px solid #70c1b3;\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg); }\n  100% {\n    border: 2px solid #f25f5c;\n    -webkit-transform: rotate(1440deg);\n            transform: rotate(1440deg); } }\n\nmain {\n  background: none; }\n\n.product-grid {\n  width: 900px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 25px auto 50px auto;\n  padding: 10px 0 0 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.grid-modal {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  top: 60px;\n  overflow: auto;\n  background-color: #F1F1F1;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  z-index: 10; }\n\n.grid-modal .grid-modal-animation {\n    position: relative;\n    top: 30%;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    -webkit-animation: 4s rotation infinite;\n            animation: 4s rotation infinite;\n    border: 2px solid #f25f5c; }\n\n.grid-modal .grid-modal-animation:before {\n      content: '';\n      left: -12.5px;\n      top: -12.5px;\n      position: relative;\n      display: block;\n      width: 60px;\n      height: 60px;\n      background-color: #F1F1F1; }\n\nbutton {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #F1F1F1;\n  border: none; }\n\nbutton:hover {\n    color: black; }\n\nbutton .next-products {\n    width: 70px;\n    height: 70px;\n    background-color: white;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-radius: 50%;\n    cursor: pointer; }\n\nbutton .next-products i {\n      font-size: 50px; }\n\nbutton .next-products:hover i {\n      color: #247baf; }\n\n.not-found {\n  width: 300px;\n  margin: 20px auto 80px auto; }\n\n.not-found p {\n    text-align: center; }\n\n@media only screen and (max-width: 850px) {\n  .product-grid {\n    width: 600px; } }\n\n@media only screen and (max-width: 600px) {\n  .product-grid {\n    width: 300px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-grid/product-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_product_grid_service__ = __webpack_require__("../../../../../src/app/Services/product-grid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductGridComponent = /** @class */ (function () {
    function ProductGridComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.destroyComponent = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.modal = 'grid-modal';
    }
    ProductGridComponent.prototype.ngOnInit = function () {
        this.createView();
    };
    ProductGridComponent.prototype.ngOnDestroy = function () {
        this.destroyComponent.next();
        this.destroyComponent.complete();
    };
    ProductGridComponent.prototype.onLoad = function () {
        this.modal = '';
    };
    ProductGridComponent.prototype.loadMoreProducts = function () {
        if (typeof this.brand === 'number' && typeof this.category === 'number') {
            this.router.navigate(["/explore/" + this.brand + "/" + this.category + "/" + (this.productsNumber += 12)]);
        }
        else {
            this.router.navigate(["/search/" + this.type + "/" + this.query + "/" + (this.productsNumber += 12)]);
        }
    };
    ProductGridComponent.prototype.getProducts = function (count, brand, category) {
        var _this = this;
        this.service.getProducts(count, brand, category).takeUntil(this.destroyComponent).subscribe(function (products) {
            _this.products = products;
            _this.onLoad();
        });
    };
    ProductGridComponent.prototype.searchProducts = function (count, type, query) {
        var _this = this;
        this.service.searchProducts(count, type, query).takeUntil(this.destroyComponent).subscribe(function (products) {
            _this.products = products;
            _this.onLoad();
        });
    };
    ProductGridComponent.prototype.createView = function () {
        var _this = this;
        this.route.params.takeUntil(this.destroyComponent).subscribe(function (params) {
            _this.productsNumber = parseInt(params['number'], 0);
            if (params['category'] && params['category']) {
                _this.brand = parseInt(params['brand'], 0);
                _this.category = parseInt(params['category'], 0);
                _this.getProducts(_this.productsNumber, _this.brand, _this.category);
            }
            else {
                _this.query = params['query'];
                _this.type = params['type'];
                _this.searchProducts(_this.productsNumber, _this.type, _this.query);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ProductGridComponent.prototype, "container", void 0);
    ProductGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-grid',
            template: __webpack_require__("../../../../../src/app/product-grid/product-grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-grid/product-grid.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_product_grid_service__["a" /* ProductGridService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProductGridComponent);
    return ProductGridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-tags-form/product-tags-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"tagForm\" (ngSubmit)=\"addTag(tagForm.value.tag)\">\n  <table>\n    <tr>\n      <th>\n        Tag\n      </th>\n      <th colspan=\"2\">\n        <i class=\"fas fa-thumbs-up\"></i>\n      </th>\n    </tr>\n    <tr *ngIf=\"user.getUserLogged()\">\n      <td>\n        <input type=\"text\" placeholder=\"Nazwa Tagu\" formControlName=\"tag\">\n      </td>\n      <td colspan=\"2\">\n        <input type=\"submit\" value=\"Dodaj\" [disabled]=\"tagForm.controls['tag'].invalid\">\n      </td>\n    </tr>\n    <tr *ngFor=\"let tag of tags\">\n      <td>\n        {{tag.id}}\n      </td>\n      <td class=\"center\">\n        {{tag.number}}\n      </td>\n      <td class=\"center\" *ngIf=\"user.getUserLogged()\">\n        <button (click)=\"vote(tag.id)\">\n          <i class=\"fas fa-plus\"></i>\n        </button>\n      </td>\n    </tr>\n  </table>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/product-tags-form/product-tags-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, tr, th, td {\n  font-size: 22px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto 0 auto; }\n\ntable {\n  min-width: 350px; }\n\ni {\n  font-size: 26px; }\n\ntr, td {\n  border-bottom: 1px solid #f25f5c;\n  padding: 5px; }\n\n.center {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-tags-form/product-tags-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTagsFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_tag_service__ = __webpack_require__("../../../../../src/app/Services/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_dialog_service__ = __webpack_require__("../../../../../src/app/Services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enums_EDialogType__ = __webpack_require__("../../../../../src/app/Enums/EDialogType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductTagsFormComponent = /** @class */ (function () {
    function ProductTagsFormComponent(service, user, dialog, formBuilder) {
        this.service = service;
        this.user = user;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.componentDestroy = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.tagForm = formBuilder.group({
            'tag': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].maxLength(20),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].pattern(/^[a-z0-9_-]{4,15}$/)
                ])]
        });
    }
    ProductTagsFormComponent.prototype.ngOnInit = function () {
        this.getTags();
    };
    ProductTagsFormComponent.prototype.ngOnDestroy = function () {
        this.componentDestroy.next();
        this.componentDestroy.complete();
    };
    ProductTagsFormComponent.prototype.ngOnChanges = function () {
        this.getTags();
    };
    ProductTagsFormComponent.prototype.getTags = function () {
        var _this = this;
        this.service.get(this.productId).takeUntil(this.componentDestroy).subscribe(function (res) {
            _this.tags = res;
        });
    };
    ProductTagsFormComponent.prototype.addTag = function (tag) {
        var _this = this;
        this.service.add(this.productId, this.user.getUserId(), tag).takeUntil(this.componentDestroy).subscribe(function (res) {
            if (res) {
                _this.dialog.showDialog('Dodano', __WEBPACK_IMPORTED_MODULE_4__Enums_EDialogType__["a" /* EDialogType */].Information);
                _this.getTags();
            }
        }, function (err) {
            _this.dialog.showDialog('Tag już istnieje', __WEBPACK_IMPORTED_MODULE_4__Enums_EDialogType__["a" /* EDialogType */].Warning);
        });
    };
    ProductTagsFormComponent.prototype.vote = function (tag) {
        var _this = this;
        this.service.vote(this.productId, this.user.getUserId(), tag).takeUntil(this.componentDestroy).subscribe(function (res) {
            if (res) {
                _this.dialog.showDialog('Zagłosowano', __WEBPACK_IMPORTED_MODULE_4__Enums_EDialogType__["a" /* EDialogType */].Information);
                _this.getTags();
            }
        }, function (err) {
            _this.dialog.showDialog('Już oddałeś głoś na ten tag', __WEBPACK_IMPORTED_MODULE_4__Enums_EDialogType__["a" /* EDialogType */].Warning);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ProductTagsFormComponent.prototype, "productId", void 0);
    ProductTagsFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-tags-form',
            template: __webpack_require__("../../../../../src/app/product-tags-form/product-tags-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-tags-form/product-tags-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_tag_service__["a" /* TagService */],
            __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__Services_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], ProductTagsFormComponent);
    return ProductTagsFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-tile/TileState.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NavVisibleState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavHiddenState; });
/* unused harmony export NavHiddingState */
/* unused harmony export NavDisplayState */
var NavVisibleState = /** @class */ (function () {
    function NavVisibleState() {
    }
    NavVisibleState.prototype.handle = function (context, click) {
        context.navState = new NavHiddingState();
        context.cssClass = 'tile-nav-index tile-nav-hide tile-nav';
    };
    return NavVisibleState;
}());

var NavHiddenState = /** @class */ (function () {
    function NavHiddenState() {
    }
    NavHiddenState.prototype.handle = function (context, click) {
        context.navState = new NavDisplayState();
        context.cssClass = 'tile-nav-index tile-nav';
    };
    return NavHiddenState;
}());

var NavHiddingState = /** @class */ (function () {
    function NavHiddingState() {
    }
    NavHiddingState.prototype.handle = function (context, click) {
        if (!click) {
            context.navState = new NavHiddenState();
            context.cssClass = 'tile-nav-index tile-nav-hide tile-nav';
        }
    };
    return NavHiddingState;
}());

var NavDisplayState = /** @class */ (function () {
    function NavDisplayState() {
    }
    NavDisplayState.prototype.handle = function (context, click) {
        if (!click) {
            context.navState = new NavVisibleState();
            context.cssClass = 'tile-nav';
        }
    };
    return NavDisplayState;
}());



/***/ }),

/***/ "../../../../../src/app/product-tile/product-tile.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"tile\" (click)=\"toggleNav()\" (dblclick)=\"showDetails()\">\n  <figure class=\"tile-figure\">\n    <img [src]=\"product.imgSource\" [alt]=\"product.title\" [style]=\"imgCSS\" (load)=\"onLoad()\">\n  </figure>\n  <div class=\"tile-title\">\n    <div class=\"tile-title-text\" title=\"{{product.title | lowercase}}\">{{ product.title | lowercase}}</div>\n    <nav [class]=\"cssClass\" (click)=\"$event.stopPropagation();\" (transitionend)=\"onTransition()\">\n      <button class=\"tile-nav-btn\" [disabled]=\"!user.getUserLogged()\" (click)=\"saveItem()\">\n        <i class=\"fas fa-plus\"></i>\n      </button>\n      <button class=\"tile-nav-btn\" (click)=\"showDetails()\">\n        <i class=\"fas fa-info-circle\"></i>\n      </button>\n    </nav>\n  </div>\n</article>\n"

/***/ }),

/***/ "../../../../../src/app/product-tile/product-tile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tile {\n  width: 250px;\n  cursor: pointer;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 25px 57.5px 25px;\n  background-color: #F1F1F1; }\n\n.tile-figure {\n  margin: 0;\n  padding: 15px 15px 50px 15px;\n  border-bottom: none;\n  background-color: white; }\n\n.tile-figure img {\n    width: 100%;\n    -webkit-filter: grayscale(0.5);\n            filter: grayscale(0.5);\n    pointer-events: none; }\n\n.tile-title {\n  position: relative;\n  height: 50px;\n  background-color: white; }\n\n.tile-title .tile-title-text {\n    margin-top: 15px;\n    height: 100%;\n    line-height: 50px;\n    text-align: center;\n    font-family: 'Caveat', 'cursive';\n    font-size: 20px;\n    padding: 0 5px 0 5px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    position: relative;\n    z-index: 2; }\n\n.tile-title .tile-nav {\n    width: 100%;\n    height: 50px;\n    position: relative;\n    border-bottom: 1px solid #247baf;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    background-color: white;\n    top: -4px; }\n\n.tile-title .tile-nav .tile-nav-btn {\n      width: 50%;\n      height: 100%;\n      background-color: white;\n      border: none;\n      font-size: 22px;\n      cursor: pointer; }\n\n.tile-title .tile-nav .tile-nav-btn:hover {\n        color: white;\n        background-color: #247baf; }\n\n.tile-title .tile-nav-hide {\n    top: -49px; }\n\n.tile-title .tile-nav-index {\n    z-index: 1; }\n\n.loading {\n  height: 270px;\n  width: 220px;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-tile/product-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TileState__ = __webpack_require__("../../../../../src/app/product-tile/TileState.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_show_details_service__ = __webpack_require__("../../../../../src/app/Services/show-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_collection_service__ = __webpack_require__("../../../../../src/app/Services/collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_dialog_service__ = __webpack_require__("../../../../../src/app/Services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Enums_EDialogType__ = __webpack_require__("../../../../../src/app/Enums/EDialogType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductTileComponent = /** @class */ (function () {
    function ProductTileComponent(showDetailService, collection, user, dialog) {
        this.showDetailService = showDetailService;
        this.collection = collection;
        this.user = user;
        this.dialog = dialog;
        this.componentDestroy = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["a" /* Subject */]();
        this.navState = new __WEBPACK_IMPORTED_MODULE_1__TileState__["a" /* NavHiddenState */]();
        this.cssClass = 'tile-nav-index tile-nav-hide tile-nav';
    }
    ProductTileComponent.prototype.ngOnInit = function () {
        this.imgCSS = 'loading';
    };
    ProductTileComponent.prototype.ngOnDestroy = function () {
        this.componentDestroy.next();
        this.componentDestroy.complete();
    };
    ProductTileComponent.prototype.onLoad = function () {
        this.imgCSS = '';
    };
    ProductTileComponent.prototype.onTransition = function () {
        this.navState.handle(this, false);
    };
    ProductTileComponent.prototype.toggleNav = function () {
        this.navState.handle(this, true);
    };
    ProductTileComponent.prototype.showDetails = function () {
        this.showDetailService.onShowDetails(this.product.id);
    };
    ProductTileComponent.prototype.saveItem = function () {
        var _this = this;
        this.collection.saveItem(this.product.id).takeUntil(this.componentDestroy).subscribe(function (res) {
            _this.dialog.showDialog('Zapisano produkt', __WEBPACK_IMPORTED_MODULE_6__Enums_EDialogType__["a" /* EDialogType */].Information);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductTileComponent.prototype, "product", void 0);
    ProductTileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-tile',
            template: __webpack_require__("../../../../../src/app/product-tile/product-tile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-tile/product-tile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_show_details_service__["a" /* ShowDetailsService */],
            __WEBPACK_IMPORTED_MODULE_4__Services_collection_service__["a" /* CollectionService */],
            __WEBPACK_IMPORTED_MODULE_3__Services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__Services_dialog_service__["a" /* DialogService */]])
    ], ProductTileComponent);
    return ProductTileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/right-panel/right-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<aside [class]=\"style\">\n  <article *ngIf=\"productDetail\" class=\"product-detail\">\n    <figure class=\"product-figure\">\n      <a [href]=\"productDetail.imgSource\" target=\"_blank\"><img class=\"product-image\" [src]=\"productDetail.imgSource\" alt=\"{{productDetail.title | lowercase }}\"></a>\n    </figure>\n    <div class=\"product-detail-description\">\n      <h2>{{productDetail.title | uppercase }}</h2>\n      <figure class=\"product-brand\">\n        <a alt=\"brand\" href=\"{{productDetail.link | hostname}}\"><img [src]=\"productDetail.logoSource\" [alt]=\"productDetail.brandName\"></a>\n      </figure>\n      <nav>\n        <ul>\n          <li>\n            <button (click)=\"showSection(1)\" [class.active]=\"visibleSection == 1\">\n              Informacje\n            </button>\n          </li>\n          <li *ngIf=\"user.getUserLogged()\">\n            <button (click)=\"showSection(2)\" [class.active]=\"visibleSection == 2\">\n              Kolekcje\n            </button>\n          </li>\n          <li>\n            <button (click)=\"showSection(3)\" [class.active]=\"visibleSection == 3\">\n              Tagi\n            </button>\n          </li>\n        </ul>\n      </nav>\n      <section *ngIf=\"visibleSection == 1\">\n        <ul>\n          <li class=\"product-price slash\">Cena: {{productDetail.price | zlotyCurrency}}</li>\n          <li class=\"product-category slash\">Kategoria: {{productDetail.categoryName}}</li>\n          <li class=\"product-link slash\">\n            <a class=\"product-link\" [href]=\"productDetail.link\" target=\"_blank\">Link do produktu</a>\n          </li>\n        </ul>\n      </section>\n      <section *ngIf=\"this.collections && visibleSection == 2\">\n        <h2>Dodaj produkt do kolekcji: </h2>\n        <select #select>\n          <option *ngFor=\"let collection of collections\" [value]=\"collection.id\">{{collection.title}}</option>\n        </select>\n        <button (click)=\"addToCollection(select.value)\">Dodaj do kolekcji</button>\n      </section>\n      <section *ngIf=\"visibleSection == 3\">\n        <h2>Tagi: </h2>\n        <app-product-tags-form [productId]=\"productId\"></app-product-tags-form>\n      </section>\n    </div>\n  </article>\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/right-panel/right-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right-panel {\n  position: fixed;\n  z-index: 30;\n  right: 0;\n  top: 60px;\n  bottom: 0;\n  width: 100%;\n  -webkit-transition: right 1s;\n  transition: right 1s;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  border-left: 1px solid #70c1b3;\n  border-top: 1px solid #70c1b3;\n  background-color: #E9E9E9; }\n\n.hidden-right-panel {\n  right: -100%; }\n\n.product-detail {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.product-detail .product-figure {\n    background-color: white;\n    width: 400px;\n    margin: 0;\n    padding: 40px 40px 60px 40px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n\n.product-detail .product-image {\n    width: 400px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto; }\n\n.product-detail .product-brand {\n    margin: 0; }\n\n.product-detail .product-brand img {\n      padding-top: 0;\n      display: block;\n      width: 150px;\n      margin-left: auto;\n      margin-right: auto; }\n\n.product-detail .product-detail-description {\n    padding: 0 40px 0 40px;\n    -webkit-box-flex: 4;\n        -ms-flex-positive: 4;\n            flex-grow: 4; }\n\n.product-detail .product-detail-description h2 {\n      color: #282828;\n      text-align: center;\n      font-size: 36px;\n      margin-bottom: 10px; }\n\n.product-detail ul {\n    list-style: none;\n    margin: 40px 0 0 0;\n    padding: 0; }\n\n.product-detail .slash {\n    font-size: 22px; }\n\n.product-detail .slash:before {\n      content: '# ';\n      color: #484848;\n      font-weight: bold;\n      padding-left: 20px;\n      font-size: 18px; }\n\n.product-detail .product-link {\n    text-decoration: none;\n    color: #f25f5c; }\n\n.product-detail .product-link:hover {\n      color: #d71511;\n      text-decoration: underline; }\n\n.product-detail select, .product-detail button {\n    font-family: Roboto;\n    font-size: 18px; }\n\n.product-detail select {\n    margin: 20px 0 0 20px; }\n\nsection {\n  min-width: 400px;\n  padding: 30px 10px 30px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\nnav {\n  margin: 10px 0 10px 0; }\n\nnav ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\nnav ul li {\n      width: 33%; }\n\nnav ul li button {\n        width: 100%;\n        overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/right-panel/right-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Interfaces_IPanel__ = __webpack_require__("../../../../../src/app/Interfaces/IPanel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_show_details_service__ = __webpack_require__("../../../../../src/app/Services/show-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_collection_service__ = __webpack_require__("../../../../../src/app/Services/collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_dialog_service__ = __webpack_require__("../../../../../src/app/Services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Enums_EDialogType__ = __webpack_require__("../../../../../src/app/Enums/EDialogType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RightPanelComponent = /** @class */ (function () {
    function RightPanelComponent(showDetailsService, user, collectionService, dialog) {
        var _this = this;
        this.showDetailsService = showDetailsService;
        this.user = user;
        this.collectionService = collectionService;
        this.dialog = dialog;
        this.destroyComponent = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["a" /* Subject */]();
        this.visibleSection = 1;
        this.showDetailsService.id$.subscribe(function (id) {
            _this.productId = id;
            _this.showDetailsService.getDetails(_this.productId).subscribe(function (product) {
                _this.productDetail = product[0];
            });
        });
    }
    RightPanelComponent.prototype.ngOnInit = function () {
        this.style = 'right-panel hidden-right-panel';
        this.state = __WEBPACK_IMPORTED_MODULE_1__Interfaces_IPanel__["b" /* EStatePanel */].close;
    };
    RightPanelComponent.prototype.ngOnDestroy = function () {
        this.destroyComponent.next();
        this.destroyComponent.complete();
    };
    RightPanelComponent.prototype.togglePanel = function () {
        if (this.state) {
            this.openPanel();
        }
        else if (!this.state) {
            this.closePanel();
        }
    };
    RightPanelComponent.prototype.closePanel = function () {
        this.style = 'hidden-right-panel right-panel';
        this.state = __WEBPACK_IMPORTED_MODULE_1__Interfaces_IPanel__["b" /* EStatePanel */].close;
    };
    RightPanelComponent.prototype.openPanel = function () {
        this.style = 'right-panel';
        this.state = __WEBPACK_IMPORTED_MODULE_1__Interfaces_IPanel__["b" /* EStatePanel */].open;
        if (this.user.getUserLogged()) {
            this.getCollections();
        }
    };
    RightPanelComponent.prototype.addToCollection = function (collectionId) {
        var _this = this;
        this.collectionService.addItemToCollection(this.productId, collectionId).takeUntil(this.destroyComponent).subscribe(function (res) {
            _this.dialog.showDialog('Dodano!', __WEBPACK_IMPORTED_MODULE_6__Enums_EDialogType__["a" /* EDialogType */].Information);
            console.log(res);
        }, function (err) {
            _this.dialog.showDialog('Produkt już jest w tej kolekcji', __WEBPACK_IMPORTED_MODULE_6__Enums_EDialogType__["a" /* EDialogType */].Warning);
        });
    };
    RightPanelComponent.prototype.showSection = function (section) {
        this.visibleSection = section;
    };
    RightPanelComponent.prototype.getCollections = function () {
        var _this = this;
        this.user.getUserCollections(this.user.getUserId()).takeUntil(this.destroyComponent).subscribe(function (collections) {
            _this.collections = collections;
        });
    };
    RightPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-right-panel',
            template: __webpack_require__("../../../../../src/app/right-panel/right-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/right-panel/right-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_show_details_service__["a" /* ShowDetailsService */],
            __WEBPACK_IMPORTED_MODULE_3__Services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__Services_collection_service__["a" /* CollectionService */],
            __WEBPACK_IMPORTED_MODULE_5__Services_dialog_service__["a" /* DialogService */]])
    ], RightPanelComponent);
    return RightPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_grid_product_grid_component__ = __webpack_require__("../../../../../src/app/product-grid/product-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Guards_auth_guard__ = __webpack_require__("../../../../../src/app/Guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collection_collection_component__ = __webpack_require__("../../../../../src/app/collection/collection.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var Routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: 'explore/:brand/:category/:number', component: __WEBPACK_IMPORTED_MODULE_3__product_grid_product_grid_component__["a" /* ProductGridComponent */] },
    { path: 'search/:type/:query/:number', component: __WEBPACK_IMPORTED_MODULE_3__product_grid_product_grid_component__["a" /* ProductGridComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'user/:section', canActivate: [__WEBPACK_IMPORTED_MODULE_7__Guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */] },
    { path: 'user', canActivate: [__WEBPACK_IMPORTED_MODULE_7__Guards_auth_guard__["a" /* AuthGuard */]], redirectTo: 'user/1' },
    { path: 'collection/:id', component: __WEBPACK_IMPORTED_MODULE_8__collection_collection_component__["a" /* CollectionComponent */] },
    { path: '**', redirectTo: '' }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(Routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"search(searchForm)\">\n    <input type=\"text\" placeholder=\"Szukaj...\" formControlName=\"text\">\n    <select formControlName=\"type\">\n      <option [ngValue]=\"null\" disabled>Szukaj po: </option>\n      <option value=\"1\">Nazwie</option>\n      <option value=\"2\">Tagu</option>\n    </select>\n    <input type=\"submit\" value=\"Szukaj\" [disabled]=\"searchForm.invalid\">\n  </form>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  width: 100%;\n  padding: 20px 0 20px 0; }\n\nform {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\nselect, input {\n  font-size: 20px;\n  padding: 5px;\n  border: 0;\n  border-bottom: 1px solid #247baf; }\n\nselect {\n  padding: 4px; }\n\ninput[type=text] {\n  width: 60%; }\n\ninput[type=submit]:hover {\n  background-color: #247baf; }\n\n@media only screen and (max-height: 600px) {\n  nav {\n    padding: 20px 0 20px 0; }\n  input[type=text] {\n    width: 50%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.searchForm = this.formBuilder.group({
            'text': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'type': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (form) {
        var type = parseInt(form.value.type, 0);
        this.router.navigate(["/search/" + type + "/" + form.value.text + "/24"]);
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tile-carousel/DirectionState.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LeftScroll */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SuspendScroll; });
var LeftScroll = /** @class */ (function () {
    function LeftScroll() {
    }
    LeftScroll.prototype.scroll = function (context) {
        context.scrollPosition < 0 ? context.directionState = new RightScroll() : context.scrollPosition -= 0.5;
    };
    return LeftScroll;
}());

var RightScroll = /** @class */ (function () {
    function RightScroll() {
    }
    RightScroll.prototype.scroll = function (context) {
        var width = context.width - context.element.nativeElement.clientWidth;
        context.scrollPosition > width ? context.directionState = new LeftScroll() : context.scrollPosition += 0.5;
    };
    return RightScroll;
}());

var SuspendScroll = /** @class */ (function () {
    function SuspendScroll() {
    }
    SuspendScroll.prototype.scroll = function (context) {
        clearInterval(context.interval);
        setTimeout(function () {
            context.interval = setInterval(function () {
                context.scroll();
            }, 1);
            context.scrollPosition = context.scrollLeft;
            context.directionState = new RightScroll();
        }, 5000);
    };
    return SuspendScroll;
}());



/***/ }),

/***/ "../../../../../src/app/tile-carousel/tile-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"carousel\">\n  <div class=\"carousel-inner\" *ngIf=\"tilesData\">\n    <ul appTileScroll [width]=\"width\">\n      <li *ngFor=\"let tile of tilesData\">\n        <a [routerLink]=\"createUrl(tile.id)\">\n          <div class=\"tile\" [title]=\"tile.name\">\n            <img *ngIf=\"tile.imgSource; else gradient\" [src]=\"tile.imgSource\" [alt]=\"tile.name\">\n            <ng-template #gradient>\n              <div class=\"gradient\">{{tile.name}}</div>\n            </ng-template>\n          </div>\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/tile-carousel/tile-carousel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel {\n  width: 100%; }\n\n.carousel-inner {\n  margin: 10px;\n  padding: 10px; }\n\n.gradient {\n  background: linear-gradient(45deg, #9400d3, #87cefa);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  font-size: 26px;\n  color: white;\n  font-weight: 700; }\n\nul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  overflow-x: scroll;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.tile {\n  display: block;\n  width: 200px;\n  height: 200px;\n  margin: 10px;\n  padding: 20px;\n  cursor: pointer;\n  background-color: #E9E9E9; }\n\n.tile:hover {\n    background-color: gainsboro; }\n\nimg {\n  width: 200px;\n  height: 200px;\n  -webkit-filter: grayscale(0.2);\n          filter: grayscale(0.2); }\n\na:hover {\n  text-decoration: none; }\n\nul::-webkit-scrollbar {\n  height: 10px;\n  background-color: #F1F1F1;\n  border-radius: 10px; }\n\nul::-webkit-scrollbar-button {\n  display: none; }\n\nul::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  border-radius: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tile-carousel/tile-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TileCarouselComponent = /** @class */ (function () {
    function TileCarouselComponent() {
    }
    TileCarouselComponent.prototype.ngOnInit = function () {
    };
    TileCarouselComponent.prototype.ngOnChanges = function () {
        this.width = this.tilesData.length * 260;
    };
    TileCarouselComponent.prototype.createUrl = function (id) {
        var url;
        switch (this.type) {
            case 'brand': {
                return url = "/explore/" + id + "/0/27";
            }
            case 'category': {
                return url = "/explore/0/" + id + "/27";
            }
            default: {
                return url = '/explore/0/0/27';
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], TileCarouselComponent.prototype, "tilesData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TileCarouselComponent.prototype, "type", void 0);
    TileCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tile-carousel',
            template: __webpack_require__("../../../../../src/app/tile-carousel/tile-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tile-carousel/tile-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TileCarouselComponent);
    return TileCarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tile-carousel/tile-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DirectionState__ = __webpack_require__("../../../../../src/app/tile-carousel/DirectionState.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TileScrollDirective = /** @class */ (function () {
    function TileScrollDirective(element) {
        this.element = element;
        this.directionState = new __WEBPACK_IMPORTED_MODULE_1__DirectionState__["a" /* RightScroll */]();
        this.scrollPosition = 0;
    }
    TileScrollDirective.prototype.ngOnChanges = function () {
        var _this = this;
        clearInterval(this.interval);
        this.interval = setInterval(function () {
            _this.scroll();
        }, 1);
    };
    TileScrollDirective.prototype.onUserScroll = function () {
        this.directionState = new __WEBPACK_IMPORTED_MODULE_1__DirectionState__["b" /* SuspendScroll */]();
    };
    TileScrollDirective.prototype.onScroll = function () {
        this.scrollLeft = event.srcElement.scrollLeft;
    };
    TileScrollDirective.prototype.scroll = function () {
        this.directionState.scroll(this);
        this.element.nativeElement.scrollTo(this.scrollPosition, 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TileScrollDirective.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('touchmove'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TileScrollDirective.prototype, "onUserScroll", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TileScrollDirective.prototype, "onScroll", null);
    TileScrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appTileScroll]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], TileScrollDirective);
    return TileScrollDirective;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\" *ngIf=\"userDetails\">\n  <h1>Panel Użytkownika</h1>\n  <nav>\n    <ul>\n      <li><button (click)=\"showSection(1)\" [class.active]=\"visibleSection == 1\">Dane</button></li>\n      <li><button (click)=\"showSection(2)\" [class.active]=\"visibleSection == 2\">Kolekcje</button></li>\n      <li><button (click)=\"showSection(3)\" [class.active]=\"visibleSection == 3\">Opcje</button></li>\n    </ul>\n  </nav>\n  <div>\n    <section class=\"user-details\" *ngIf=\"visibleSection == 1\">\n      <h2>Dane użytkownika: </h2>\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"changeUserDetails(userForm.value, userDetails.id)\">\n        <table>\n          <tr>\n            <td>Nazwa: </td>\n            <td>{{userDetails.nick}}</td>\n          </tr>\n          <tr>\n            <td>Imię: </td>\n            <td><input type=\"text\" [(ngModel)]=\"userDetails.name\" formControlName=\"name\"></td>\n          </tr>\n          <tr>\n            <td>Nazwisko: </td>\n            <td><input type=\"text\" [(ngModel)]=\"userDetails.surname\" formControlName=\"surname\"></td>\n          </tr>\n          <tr>\n            <td>E-mail: </td>\n            <td>{{userDetails.email}}</td>\n          </tr>\n          <tr>\n            <td>Data urodzin: </td>\n            <td>{{userDetails.birthDate | date:'MM.dd.yyyy'}}</td>\n          </tr>\n          <tr>\n            <td>Opis: </td>\n            <td>\n              <textarea [(ngModel)]=\"userDetails.description\" rows=\"5\" cols=\"20\" formControlName=\"description\">\n              </textarea>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\">\n              <input type=\"submit\" value=\"Zapisz\" class=\"button\">\n            </td>\n          </tr>\n        </table>\n      </form>\n    </section>\n    <section class=\"user-collections panel\" *ngIf=\"collections && visibleSection == 2\">\n      <h2>Lista kolekcji: </h2>\n      <table>\n        <tr>\n          <th>Nazwa kolekcji</th><th>Usuń</th>\n        </tr>\n        <tr *ngFor=\"let collection of collections\">\n          <td>\n            <a routerLink=\"/collection/{{collection.id}}\">{{collection.title}}</a>\n          </td>\n          <td>\n            <button class=\"button\"\n                    (click)=\"deleteCollection(collection.id)\">\n              <i class=\"fas fa-trash\"></i>\n            </button>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <input type=\"text\" [(ngModel)]=\"newCollectionName\" placeholder=\"Nazwa kolekcji: \">\n          </td>\n          <td>\n            <button (click)=\"addCollection(newCollectionName)\">\n              <i class=\"fas fa-plus\"></i>\n            </button>\n          </td>\n        </tr>\n      </table>\n    </section>\n    <section class=\"settings\" *ngIf=\"visibleSection == 3\">\n      <h2>Opcje: </h2>\n      <input type=\"button\" class=\"button\" value=\"Wyloguj\" (click)=\"logOut()\">\n      <input type=\"button\"\n             class=\"button\"\n             value=\"Usuń konto\"\n             (click)=\"deleteUser()\"\n             [disabled]=\"userDetails.nick === 'test'\">\n      <div class=\"info\" *ngIf=\"userDetails.nick === 'test'\">\n        Konto testowe posiada wyłączoną możliwość usunięcia konta\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard {\n  margin: 100px 0 0 0;\n  padding: 20px 40px 40px 40px; }\n\nsection {\n  padding: 0 50px 0 50px;\n  min-height: 350px; }\n\ntable {\n  margin: 0 auto 0 auto;\n  min-width: 400px; }\n\nform {\n  display: block; }\n\n.button {\n  width: 100%;\n  -webkit-appearance: button;\n  -moz-appearance: button;\n  appearance: button; }\n\ninput, textarea {\n  width: 100%; }\n\ntd {\n  padding-left: 10px; }\n\nnav {\n  margin: 10px 0 10px 0; }\n\nnav ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\nnav ul li {\n      width: 33%; }\n\nnav ul li button {\n        width: 100%; }\n\n@media only screen and (max-width: 600px) {\n  section {\n    padding: 0 10px 0 10px; }\n  .dashboard {\n    padding: 20px 10px 20px 10px; }\n  table {\n    min-width: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_dialog_service__ = __webpack_require__("../../../../../src/app/Services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__ = __webpack_require__("../../../../../src/app/Enums/EDialogType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserComponent = /** @class */ (function () {
    function UserComponent(userService, formBuilder, router, dialog, route) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.dialog = dialog;
        this.route = route;
        this.destroyComponent = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.userForm = formBuilder.group({
            'name': [null],
            'surname': [null],
            'description': [null]
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getRouteParams();
        this.getUserDetails();
        this.getUsersCollections();
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.destroyComponent.next();
        this.destroyComponent.complete();
    };
    UserComponent.prototype.getRouteParams = function () {
        var _this = this;
        this.route.params.takeUntil(this.destroyComponent).subscribe(function (params) {
            _this.visibleSection = params['section'];
        });
    };
    UserComponent.prototype.showSection = function (number) {
        this.visibleSection = number;
    };
    UserComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.userService.getUserDetails().takeUntil(this.destroyComponent).subscribe(function (res) {
            _this.userDetails = res;
        });
    };
    UserComponent.prototype.getUsersCollections = function () {
        var _this = this;
        this.userService.getUserCollections(this.userService.getUserId()).subscribe(function (collections) {
            _this.collections = collections;
        });
    };
    UserComponent.prototype.changeUserDetails = function (form, id) {
        var _this = this;
        this.userService.saveUserDetails(form, id).takeUntil(this.destroyComponent).subscribe(function (res) {
            if (res) {
                _this.dialog.showDialog('Zapisano!', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Information);
            }
        });
    };
    UserComponent.prototype.logOut = function () {
        this.userService.setUserLogout();
        this.router.navigate(['/login']);
        this.dialog.showDialog('Wylogowano', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Warning);
    };
    UserComponent.prototype.addCollection = function (name) {
        var _this = this;
        if (!name) {
            name = 'Brak nazwy';
        }
        this.userService.addUserCollection(name).takeUntil(this.destroyComponent).subscribe(function (res) {
            _this.getUsersCollections();
            _this.dialog.showDialog('Dodano', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Information);
        }, function (err) {
            _this.dialog.showDialog('Błąd', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Error);
        });
    };
    UserComponent.prototype.deleteCollection = function (id) {
        var _this = this;
        this.userService.deleteUserCollection(id).takeUntil(this.destroyComponent).subscribe(function (res) {
            if (res) {
                _this.dialog.showDialog('Usunięto kolekcje', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Warning);
                _this.getUsersCollections();
            }
            else {
                _this.dialog.showDialog('Błąd', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Error);
            }
        });
    };
    UserComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.delete(this.userService.getUserId()).takeUntil(this.destroyComponent).subscribe(function (res) {
            if (res) {
                _this.dialog.showDialog('Użytkownik usunięty', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Warning);
                _this.userService.setUserLogout();
                _this.router.navigate(['/login']);
            }
            else {
                _this.dialog.showDialog('Błąd', __WEBPACK_IMPORTED_MODULE_5__Enums_EDialogType__["a" /* EDialogType */].Error);
            }
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__Services_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map