(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-form-module-ngfactory"],{

/***/ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js ***!
  \***************************************************************/
/*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLikeObject", function() { return FileLikeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function() { return FileSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploader", function() { return FileUploader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = /** @class */ (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        /** @type {?} */
        var isInput = isElement(fileOrInput);
        /** @type {?} */
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */
        var method = '_createFrom' + postfix;
        ((/** @type {?} */ (this)))[method](fakePathOrObject);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    FileLikeObject.prototype._createFromFakePath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    /**
     * @param {?} object
     * @return {?}
     */
    FileLikeObject.prototype._createFromObject = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileItem = /** @class */ (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    /**
     * @return {?}
     */
    FileItem.prototype.upload = /**
     * @return {?}
     */
    function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    /**
     * @return {?}
     */
    FileItem.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.uploader.cancelItem(this);
    };
    /**
     * @return {?}
     */
    FileItem.prototype.remove = /**
     * @return {?}
     */
    function () {
        this.uploader.removeFromQueue(this);
    };
    /**
     * @return {?}
     */
    FileItem.prototype.onBeforeUpload = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FileItem.prototype.onBuildForm = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        return { form: form };
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileItem.prototype.onProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        return { progress: progress };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onSuccess = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onError = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onCancel = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onComplete = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @return {?}
     */
    FileItem.prototype._onBeforeUpload = /**
     * @return {?}
     */
    function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FileItem.prototype._onBuildForm = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        this.onBuildForm(form);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileItem.prototype._onProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onSuccess = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onError = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onCancel = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onComplete = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    FileItem.prototype._prepareToUploading = /**
     * @return {?}
     */
    function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileType = /** @class */ (function () {
    function FileType() {
    }
    /**
     * @param {?} file
     * @return {?}
     */
    FileType.getMimeClass = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    /**
     * @param {?} inputFilename
     * @return {?}
     */
    FileType.fileTypeDetection = /**
     * @param {?} inputFilename
     * @return {?}
     */
    function (inputFilename) {
        /** @type {?} */
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        /** @type {?} */
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        /** @type {?} */
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    /*  MS office  */
    FileType.mime_doc = [
        'application/msword',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        'application/vnd.ms-word.document.macroEnabled.12',
        'application/vnd.ms-word.template.macroEnabled.12'
    ];
    FileType.mime_xsl = [
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        'application/vnd.ms-excel.sheet.macroEnabled.12',
        'application/vnd.ms-excel.template.macroEnabled.12',
        'application/vnd.ms-excel.addin.macroEnabled.12',
        'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
    ];
    FileType.mime_ppt = [
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.presentationml.template',
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        'application/vnd.ms-powerpoint.addin.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
    ];
    /* PSD */
    FileType.mime_psd = [
        'image/photoshop',
        'image/x-photoshop',
        'image/psd',
        'application/photoshop',
        'application/psd',
        'zz-application/zz-winassoc-psd'
    ];
    /* Compressed files */
    FileType.mime_compress = [
        'application/x-gtar',
        'application/x-gcompress',
        'application/compress',
        'application/x-tar',
        'application/x-rar-compressed',
        'application/octet-stream',
        'application/x-zip-compressed',
        'application/zip-compressed',
        'application/x-7z-compressed',
        'application/gzip',
        'application/x-bzip2'
    ];
    return FileType;
}());
if (false) {}

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @param {?} value
 * @return {?}
 */
function isFile(value) {
    return (File && value instanceof File);
}
/**
 * @record
 */
function Headers() { }
if (false) {}
/**
 * @record
 */
function FileUploaderOptions() { }
if (false) {}
var FileUploader = /** @class */ (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item._file; }),
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    FileUploader.prototype.addToQueue = /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    function (files, options, filters) {
        var e_1, _a;
        var _this = this;
        /** @type {?} */
        var list = [];
        try {
            for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                list.push(file);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var arrayOfFilters = this._getFilters(filters);
        /** @type {?} */
        var count = this.queue.length;
        /** @type {?} */
        var addedFileItems = [];
        list.map((/**
         * @param {?} some
         * @return {?}
         */
        function (some) {
            if (!options) {
                options = _this.options;
            }
            /** @type {?} */
            var temp = new FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                var fileItem = new FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                /** @type {?} */
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        }));
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.removeFromQueue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.clearQueue = /**
     * @return {?}
     */
    function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.uploadItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        /** @type {?} */
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        ((/** @type {?} */ (this)))[transport](item);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.cancelItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        /** @type {?} */
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.uploadAll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var items = this.getNotUploadedItems().filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.isUploading; }));
        if (!items.length) {
            return;
        }
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._prepareToUploading(); }));
        items[0].upload();
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.cancelAll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var items = this.getNotUploadedItems();
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.cancel(); }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.isFile = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isFile(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.isFileLikeObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof FileLikeObject;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.getIndexOfItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.getNotUploadedItems = /**
     * @return {?}
     */
    function () {
        return this.queue.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.isUploaded; }));
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.getReadyItems = /**
     * @return {?}
     */
    function () {
        return this.queue
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (item.isReady && !item.isUploading); }))
            .sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        function (item1, item2) { return item1.index - item2.index; }));
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.destroy = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} fileItems
     * @return {?}
     */
    FileUploader.prototype.onAfterAddingAll = /**
     * @param {?} fileItems
     * @return {?}
     */
    function (fileItems) {
        return { fileItems: fileItems };
    };
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    FileUploader.prototype.onBuildItemForm = /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    /**
     * @param {?} fileItem
     * @return {?}
     */
    FileUploader.prototype.onAfterAddingFile = /**
     * @param {?} fileItem
     * @return {?}
     */
    function (fileItem) {
        return { fileItem: fileItem };
    };
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype.onWhenAddingFileFailed = /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    /**
     * @param {?} fileItem
     * @return {?}
     */
    FileUploader.prototype.onBeforeUploadItem = /**
     * @param {?} fileItem
     * @return {?}
     */
    function (fileItem) {
        return { fileItem: fileItem };
    };
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype.onProgressItem = /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype.onProgressAll = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        return { progress: progress };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onSuccessItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onErrorItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onCancelItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onCompleteItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.onCompleteAll = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._mimeTypeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._fileSizeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._fileTypeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onErrorItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onCompleteItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        /** @type {?} */
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    FileUploader.prototype._headersGetter = /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    function (parsedHeaders) {
        return (/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        });
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._xhrTransport = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_2, _a, e_3, _b;
        var _this = this;
        /** @type {?} */
        var that = this;
        /** @type {?} */
        var xhr = item._xhr = new XMLHttpRequest();
        /** @type {?} */
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            /** @type {?} */
            var appendFile = (/**
             * @return {?}
             */
            function () { return sendable.append(item.alias, item._file, item.file.name); });
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                }));
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        });
        xhr.onload = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            /** @type {?} */
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */
            var method = '_on' + gist + 'Item';
            ((/** @type {?} */ (_this)))[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onerror = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onabort = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            try {
                for (var _c = __values(this.options.headers), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var header = _d.value;
                    xhr.setRequestHeader(header.name, header.value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (item.headers.length) {
            try {
                for (var _e = __values(item.headers), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var header = _f.value;
                    xhr.setRequestHeader(header.name, header.value);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = (/**
         * @return {?}
         */
        function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        });
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return xhr.send(JSON.stringify(result)); }));
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    FileUploader.prototype._getTotalProgress = /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        /** @type {?} */
        var notUploaded = this.getNotUploadedItems().length;
        /** @type {?} */
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        /** @type {?} */
        var ratio = 100 / this.queue.length;
        /** @type {?} */
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    FileUploader.prototype._getFilters = /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            /** @type {?} */
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) { return names_1.indexOf(filter.name) !== -1; }));
        }
        return this.options.filters;
    };
    /**
     * @protected
     * @return {?}
     */
    FileUploader.prototype._render = /**
     * @protected
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @protected
     * @return {?}
     */
    FileUploader.prototype._queueLimitFilter = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype._isValidFile = /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        }));
    };
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    FileUploader.prototype._isSuccessCode = /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._transformResponse = /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    function (response, headers) {
        return response;
    };
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._parseHeaders = /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    function (headers) {
        /** @type {?} */
        var parsed = {};
        /** @type {?} */
        var key;
        /** @type {?} */
        var val;
        /** @type {?} */
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }));
        return parsed;
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype._onWhenAddingFileFailed = /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._onAfterAddingFile = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.onAfterAddingFile(item);
    };
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    FileUploader.prototype._onAfterAddingAll = /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.onAfterAddingAll(items);
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._onBeforeUploadItem = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    FileUploader.prototype._onBuildItemForm = /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype._onProgressItem = /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    function (item, progress) {
        /** @type {?} */
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onSuccessItem = /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onCancelItem = /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileSelectDirective = /** @class */ (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.uploader.options;
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.getFilters = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.isEmptyAfterSelection = /**
     * @return {?}
     */
    function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.onChange = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var files = this.element.nativeElement.files;
        /** @type {?} */
        var options = this.getOptions();
        /** @type {?} */
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    FileSelectDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileSelect]' },] }
    ];
    /** @nocollapse */
    FileSelectDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    FileSelectDirective.propDecorators = {
        uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onFileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] }]
    };
    return FileSelectDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileDropDirective = /** @class */ (function () {
    function FileDropDirective(element) {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    FileDropDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.uploader.options;
    };
    /**
     * @return {?}
     */
    FileDropDirective.prototype.getFilters = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        var options = this.getOptions();
        /** @type {?} */
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype._getTransfer = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype._preventAndStop = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    FileDropDirective.prototype._haveFiles = /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    FileDropDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileDrop]' },] }
    ];
    /** @nocollapse */
    FileDropDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    FileDropDirective.propDecorators = {
        uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
        onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }]
    };
    return FileDropDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [FileDropDirective, FileSelectDirective],
                    exports: [FileDropDirective, FileSelectDirective]
                },] }
    ];
    return FileUploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-file-upload.js.map


/***/ }),

/***/ "./node_modules/ng2-select/select/common.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-select/select/common.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;


/***/ }),

/***/ "./node_modules/ng2-select/select/off-click.js":
/*!*****************************************************!*\
  !*** ./node_modules/ng2-select/select/off-click.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { if (typeof document !== 'undefined') {
            document.addEventListener('click', _this.offClickHandler);
        } }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.offClickHandler);
        }
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[offClick]'
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = function () { return []; };
    OffClickDirective.propDecorators = {
        'offClickHandler': [{ type: core_1.Input, args: ['offClick',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;


/***/ }),

/***/ "./node_modules/ng2-select/select/select-item.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-select/select/select-item.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectItem = (function () {
    function SelectItem(source) {
        var _this = this;
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id || source.text;
            this.text = source.text;
            if (source.children && source.text) {
                this.children = source.children.map(function (c) {
                    var r = new SelectItem(c);
                    r.parent = _this;
                    return r;
                });
                this.text = source.text;
            }
        }
    }
    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
        var i = startIndex;
        this.children.map(function (child) {
            optionsMap.set(child.id, i++);
        });
        return i;
    };
    SelectItem.prototype.hasChildren = function () {
        return this.children && this.children.length > 0;
    };
    SelectItem.prototype.getSimilar = function () {
        var r = new SelectItem(false);
        r.id = this.id;
        r.text = this.text;
        r.parent = this.parent;
        return r;
    };
    return SelectItem;
}());
exports.SelectItem = SelectItem;


/***/ }),

/***/ "./node_modules/ng2-select/select/select-pipes.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-select/select/select-pipes.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! ./common */ "./node_modules/ng2-select/select/common.js");
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        if (query) {
            var tagRE = new RegExp('<[^<>]*>', 'ig');
            // get ist of tags
            var tagList = value.match(tagRE);
            // Replace tags with token
            var tmpValue = value.replace(tagRE, '$!$');
            // Replace search words
            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
            // Reinsert HTML
            for (var i = 0; value.indexOf('$!$') > -1; i++) {
                value = value.replace('$!$', tagList[i]);
            }
        }
        return value;
    };
    HighlightPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'highlight' },] },
    ];
    /** @nocollapse */
    HighlightPipe.ctorParameters = function () { return []; };
    return HighlightPipe;
}());
exports.HighlightPipe = HighlightPipe;
function stripTags(input) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
exports.stripTags = stripTags;


/***/ }),

/***/ "./node_modules/ng2-select/select/select.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-select/select/select.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var select_item_1 = __webpack_require__(/*! ./select-item */ "./node_modules/ng2-select/select/select-item.js");
var select_pipes_1 = __webpack_require__(/*! ./select-pipes */ "./node_modules/ng2-select/select/select-pipes.js");
var common_1 = __webpack_require__(/*! ./common */ "./node_modules/ng2-select/select/common.js");
var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n\n  /* Fix caret going into new line in Firefox */\n  .ui-select-placeholder {\n    float: left;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
var SelectComponent = (function () {
    function SelectComponent(element, sanitizer) {
        this.sanitizer = sanitizer;
        this.allowClear = false;
        this.placeholder = '';
        this.idField = 'id';
        this.textField = 'text';
        this.childrenField = 'children';
        this.multiple = false;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
        this.options = [];
        this.itemObjects = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inputMode = false;
        this._optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this._active = [];
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._items = this.itemObjects = [];
            }
            else {
                this._items = value.filter(function (item) {
                    if ((typeof item === 'string') || (typeof item === 'object' && item && item[_this.textField] && item[_this.idField])) {
                        return item;
                    }
                });
                this.itemObjects = this._items.map(function (item) { return (typeof item === 'string' ? new select_item_1.SelectItem(item) : new select_item_1.SelectItem({ id: item[_this.idField], text: item[_this.textField], children: item[_this.childrenField] })); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled === true) {
                this.hideOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (selectedItems) {
            var _this = this;
            if (!selectedItems || selectedItems.length === 0) {
                this._active = [];
            }
            else {
                var areItemsStrings_1 = typeof selectedItems[0] === 'string';
                this._active = selectedItems.map(function (item) {
                    var data = areItemsStrings_1
                        ? item
                        : { id: item[_this.idField], text: item[_this.textField] };
                    return new select_item_1.SelectItem(data);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "optionsOpened", {
        get: function () {
            return this._optionsOpened;
        },
        set: function (value) {
            this._optionsOpened = value;
            this.opened.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
        if (isUpMode === void 0) { isUpMode = false; }
        // tab
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        // backspace
        if (!isUpMode && e.keyCode === 8) {
            var el = this.element.nativeElement
                .querySelector('div.ui-select-container > input');
            if (!el.value || el.value.length <= 0) {
                if (this.active.length > 0) {
                    this.remove(this.active[this.active.length - 1]);
                }
                e.preventDefault();
            }
        }
        // esc
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // del
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        // left
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            this.behavior.first();
            e.preventDefault();
            return;
        }
        // right
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            this.behavior.last();
            e.preventDefault();
            return;
        }
        // up
        if (!isUpMode && e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (!isUpMode && e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
                this.behavior.next();
            }
            e.preventDefault();
            return;
        }
        var target = e.target || e.srcElement;
        if (target && target.value) {
            this.inputValue = target.value;
            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
            this.doEvent('typed', this.inputValue);
        }
        else {
            this.open();
        }
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.behavior = (this.firstItemHasChildren) ?
            new ChildrenBehavior(this) : new GenericBehavior(this);
    };
    SelectComponent.prototype.remove = function (item) {
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            var index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
    };
    SelectComponent.prototype.doEvent = function (type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
        this.onTouched();
        if (type === 'selected' || type === 'removed') {
            this.onChange(this.active);
        }
    };
    SelectComponent.prototype.clickedOutside = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
        get: function () {
            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.writeValue = function (val) {
        this.active = val;
        this.data.emit(this.active);
    };
    SelectComponent.prototype.validate = function (c) {
        var controlValue = c ? c.value : [];
        if (!controlValue) {
            controlValue = [];
        }
        return (controlValue.length > 0) ? null : {
            ng2SelectEmptyError: {
                valid: false
            }
        };
    };
    SelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    SelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectComponent.prototype.matchClick = function (e) {
        if (this._disabled === true) {
            return;
        }
        this.inputMode = !this.inputMode;
        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
    };
    SelectComponent.prototype.mainClick = function (event) {
        if (this.inputMode === true || this._disabled === true) {
            return;
        }
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        this.inputMode = true;
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    SelectComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    SelectComponent.prototype.isActive = function (value) {
        return this.activeOption.id === value.id;
    };
    SelectComponent.prototype.removeClick = function (value, event) {
        event.stopPropagation();
        this.remove(value);
    };
    SelectComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    };
    SelectComponent.prototype.open = function () {
        var _this = this;
        this.options = this.itemObjects
            .filter(function (option) { return (_this.multiple === false ||
            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
        if (this.options.length > 0) {
            this.behavior.first();
        }
        this.optionsOpened = true;
    };
    SelectComponent.prototype.hideOptions = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    SelectComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    SelectComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.data.next(this.active);
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.data.next(this.active[0]);
        }
        this.doEvent('selected', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
        else {
            this.focusToInput(select_pipes_1.stripTags(value.text));
            this.element.nativeElement.querySelector('.ui-select-container').focus();
        }
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-select',
                    styles: [styles],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            /* tslint:disable */
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            /* tslint:enable */
                            multi: true
                        },
                        {
                            provide: forms_1.NG_VALIDATORS,
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            multi: true,
                        }
                    ],
                    template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"sanitize(active[0].text)\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ngIf=\"allowClear && active.length>0\" class=\"btn btn-xs btn-link pull-right\" style=\"margin-right: 10px; padding: 0;\" (click)=\"removeClick(active[0], $event)\">\n           <i class=\"glyphicon glyphicon-remove\"></i>\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 5px; padding: 0;\"\n                  (click)=\"removeClick(a, $event)\">&times;</a>\n               <span [innerHtml]=\"sanitize(a.text)\"></span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    SelectComponent.propDecorators = {
        'allowClear': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'idField': [{ type: core_1.Input },],
        'textField': [{ type: core_1.Input },],
        'childrenField': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
        'data': [{ type: core_1.Output },],
        'selected': [{ type: core_1.Output },],
        'removed': [{ type: core_1.Output },],
        'typed': [{ type: core_1.Output },],
        'opened': [{ type: core_1.Output },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
var Behavior = (function () {
    function Behavior(actor) {
        this.optionsMap = new Map();
        this.actor = actor;
    }
    Behavior.prototype.fillOptionsMap = function () {
        var _this = this;
        this.optionsMap.clear();
        var startPos = 0;
        this.actor.itemObjects
            .map(function (item) {
            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
        });
    };
    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        var activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        var highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    Behavior.prototype.getActiveIndex = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var ai = this.actor.options.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    };
    return Behavior;
}());
exports.Behavior = Behavior;
var GenericBehavior = (function (_super) {
    __extends(GenericBehavior, _super);
    function GenericBehavior(actor) {
        return _super.call(this, actor) || this;
    }
    GenericBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.last = function () {
        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.prev = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.next = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.filter = function (query) {
        var _this = this;
        var options = this.actor.itemObjects
            .filter(function (option) {
            return select_pipes_1.stripTags(option.text).match(query) &&
                (_this.actor.multiple === false ||
                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
        });
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0];
            _super.prototype.ensureHighlightVisible.call(this);
        }
    };
    return GenericBehavior;
}(Behavior));
exports.GenericBehavior = GenericBehavior;
var ChildrenBehavior = (function (_super) {
    __extends(ChildrenBehavior, _super);
    function ChildrenBehavior(actor) {
        return _super.call(this, actor) || this;
    }
    ChildrenBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0].children[0];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.last = function () {
        this.actor.activeOption =
            this.actor
                .options[this.actor.options.length - 1]
                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.prev = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent - 1]) {
                this.actor.activeOption = this.actor
                    .options[indexParent - 1]
                    .children[this.actor.options[indexParent - 1].children.length - 1];
            }
        }
        if (!this.actor.activeOption) {
            this.last();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.next = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent + 1]) {
                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
            }
        }
        if (!this.actor.activeOption) {
            this.first();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.filter = function (query) {
        var options = [];
        var optionsMap = new Map();
        var startPos = 0;
        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
            var si = _a[_i];
            var children = si.children.filter(function (option) { return query.test(option.text); });
            startPos = si.fillChildrenHash(optionsMap, startPos);
            if (children.length > 0) {
                var newSi = si.getSimilar();
                newSi.children = children;
                options.push(newSi);
            }
        }
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0].children[0];
            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
        }
    };
    return ChildrenBehavior;
}(Behavior));
exports.ChildrenBehavior = ChildrenBehavior;


/***/ }),

/***/ "./node_modules/ng2-select/select/select.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-select/select/select.module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var select_1 = __webpack_require__(/*! ./select */ "./node_modules/ng2-select/select/select.js");
var select_pipes_1 = __webpack_require__(/*! ./select-pipes */ "./node_modules/ng2-select/select/select-pipes.js");
var off_click_1 = __webpack_require__(/*! ./off-click */ "./node_modules/ng2-select/select/off-click.js");
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
                    exports: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective]
                },] },
    ];
    /** @nocollapse */
    SelectModule.ctorParameters = function () { return []; };
    return SelectModule;
}());
exports.SelectModule = SelectModule;


/***/ }),

/***/ "./node_modules/ng2-select/select/select.ngfactory.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-select/select/select.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_SelectComponent, View_SelectComponent_0, View_SelectComponent_Host_0, SelectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SelectComponent", function() { return RenderType_SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SelectComponent_0", function() { return View_SelectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SelectComponent_Host_0", function() { return View_SelectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponentNgFactory", function() { return SelectComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _off_click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./off-click */ "./node_modules/ng2-select/select/off-click.js");
/* harmony import */ var _off_click__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_off_click__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _select_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-pipes */ "./node_modules/ng2-select/select/select-pipes.js");
/* harmony import */ var _select_pipes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_select_pipes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select */ "./node_modules/ng2-select/select/select.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_SelectComponent = [".ui-select-toggle[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  \n  .ui-select-placeholder[_ngcontent-%COMP%] {\n    float: left;\n  }\n  \n  \n  .input-group[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%] {\n    \n    position: static;\n  }\n  \n  .ui-select-match[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n    \n    text-align: left !important;\n  }\n  \n  .ui-select-match[_ngcontent-%COMP%]    > .caret[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled[_ngcontent-%COMP%] {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple[_ngcontent-%COMP%]   .ui-select-choices[_ngcontent-%COMP%] {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple[_ngcontent-%COMP%] {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple[_ngcontent-%COMP%]   input.ui-select-search[_ngcontent-%COMP%] {\n    background-color: transparent !important; \n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple[_ngcontent-%COMP%]   .ui-select-match-item[_ngcontent-%COMP%] {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle[_ngcontent-%COMP%]    > .caret[_ngcontent-%COMP%] {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }"];
var RenderType_SelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_SelectComponent, data: {} });

function View_SelectComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "ui-select-placeholder text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.placeholder; _ck(_v, 1, 0, currVal_0); }); }
function View_SelectComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["class", "ui-select-match-text pull-left"]], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "ui-select-allow-clear": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = "ui-select-match-text pull-left"; var currVal_2 = _ck(_v, 2, 0, (_co.allowClear && (_co.active.length > 0))); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.sanitize(_co.active[0].text); _ck(_v, 0, 0, currVal_0); }); }
function View_SelectComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "a", [["class", "btn btn-xs btn-link pull-right"], ["style", "margin-right: 10px; padding: 0;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeClick(_co.active[0], $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n           "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "i", [["class", "glyphicon glyphicon-remove"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "]))], null, null); }
function View_SelectComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 17, "div", [["class", "ui-select-match"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 14, "span", [["class", "btn btn-default btn-secondary form-control ui-select-toggle"], ["style", "outline: 0;"], ["tabindex", "-1"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.matchClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, "i", [["class", "dropdown-toggle pull-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "i", [["class", "caret pull-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.active.length <= 0); _ck(_v, 5, 0, currVal_0); var currVal_1 = (_co.active.length > 0); _ck(_v, 8, 0, currVal_1); var currVal_2 = (_co.allowClear && (_co.active.length > 0)); _ck(_v, 15, 0, currVal_2); }, null); }
function View_SelectComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "input", [["autocomplete", "false"], ["class", "form-control ui-select-search"], ["tabindex", "-1"], ["type", "text"]], [[8, "disabled", 0], [8, "placeholder", 0]], [[null, "keydown"], [null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_co.inputEvent($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup" === en)) {
        var pd_1 = (_co.inputEvent($event, true) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.disabled; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_co.active.length <= 0) ? _co.placeholder : ""), ""); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_SelectComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "li", [["role", "menuitem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 7, "div", [["class", "ui-select-choices-row"]], [[2, "active", null]], [[null, "mouseenter"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_co.selectActive(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.selectMatch(_v.context.$implicit, $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 4, "a", [["class", "dropdown-item"], ["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isActive(_v.context.$implicit); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.text, _co.inputValue))); _ck(_v, 6, 0, currVal_1); }); }
function View_SelectComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "ul", [["class", "ui-select-choices dropdown-menu"], ["role", "menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.options; _ck(_v, 3, 0, currVal_0); }, null); }
function View_SelectComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "divider dropdown-divider"]], null, null, null, null, null))], null, null); }
function View_SelectComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "div", [["class", "ui-select-choices-row"]], [[2, "active", null]], [[null, "mouseenter"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_co.selectActive(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.selectMatch(_v.context.$implicit, $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 4, "a", [["class", "dropdown-item"], ["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n          "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "ui-select-choices-row"; var currVal_2 = _ck(_v, 2, 0, _co.isActive(_v.context.$implicit)); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isActive(_v.context.$implicit); _ck(_v, 0, 0, currVal_0); var currVal_3 = _co.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent.parent, 0), _v.context.$implicit.text, _co.inputValue))); _ck(_v, 6, 0, currVal_3); }); }
function View_SelectComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "li", [["role", "menuitem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "dropdown-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  \n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = (_v.context.index > 0); _ck(_v, 3, 0, currVal_0); var currVal_2 = _v.context.$implicit.children; _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.text; _ck(_v, 6, 0, currVal_1); }); }
function View_SelectComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "ul", [["class", "ui-select-choices dropdown-menu"], ["role", "menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.options; _ck(_v, 3, 0, currVal_0); }, null); }
function View_SelectComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 19, "div", [["class", "ui-select-container dropdown open"], ["tabindex", "0"]], null, [[null, "keyup"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup" === en)) {
        var pd_1 = (_co.mainClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _off_click__WEBPACK_IMPORTED_MODULE_2__["OffClickDirective"], [], { offClickHandler: [0, "offClickHandler"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](5, { "ui-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  \n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.clickedOutside; _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 5, 0, _co.disabled); _ck(_v, 4, 0, currVal_1); var currVal_2 = !_co.inputMode; _ck(_v, 8, 0, currVal_2); var currVal_3 = _co.inputMode; _ck(_v, 11, 0, currVal_3); var currVal_4 = (((_co.optionsOpened && _co.options) && (_co.options.length > 0)) && !_co.firstItemHasChildren); _ck(_v, 15, 0, currVal_4); var currVal_5 = (((_co.optionsOpened && _co.options) && (_co.options.length > 0)) && _co.firstItemHasChildren); _ck(_v, 18, 0, currVal_5); }, null); }
function View_SelectComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 8, "span", [["class", "ui-select-match-item btn btn-default btn-secondary btn-xs"], ["tabindex", "-1"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, { "btn-default": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "a", [["class", "close"], ["style", "margin-left: 5px; padding: 0;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeClick(_v.context.$implicit, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n           "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = "ui-select-match-item btn btn-default btn-secondary btn-xs"; var currVal_1 = _ck(_v, 4, 0, true); _ck(_v, 3, 0, currVal_0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.sanitize(_v.context.$implicit.text); _ck(_v, 9, 0, currVal_2); }); }
function View_SelectComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "li", [["role", "menuitem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 7, "div", [["class", "ui-select-choices-row"]], [[2, "active", null]], [[null, "mouseenter"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_co.selectActive(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.selectMatch(_v.context.$implicit, $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 4, "a", [["class", "dropdown-item"], ["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isActive(_v.context.$implicit); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.text, _co.inputValue))); _ck(_v, 6, 0, currVal_1); }); }
function View_SelectComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "ul", [["class", "ui-select-choices dropdown-menu"], ["role", "menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.options; _ck(_v, 3, 0, currVal_0); }, null); }
function View_SelectComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "divider dropdown-divider"]], null, null, null, null, null))], null, null); }
function View_SelectComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "div", [["class", "ui-select-choices-row"]], [[2, "active", null]], [[null, "mouseenter"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_co.selectActive(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.selectMatch(_v.context.$implicit, $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 4, "a", [["class", "dropdown-item"], ["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n          "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "ui-select-choices-row"; var currVal_2 = _ck(_v, 2, 0, _co.isActive(_v.context.$implicit)); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isActive(_v.context.$implicit); _ck(_v, 0, 0, currVal_0); var currVal_3 = _co.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent.parent, 0), _v.context.$implicit.text, _co.inputValue))); _ck(_v, 6, 0, currVal_3); }); }
function View_SelectComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "li", [["role", "menuitem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "dropdown-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  \n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = (_v.context.index > 0); _ck(_v, 3, 0, currVal_0); var currVal_2 = _v.context.$implicit.children; _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.text; _ck(_v, 6, 0, currVal_1); }); }
function View_SelectComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "ul", [["class", "ui-select-choices dropdown-menu"], ["role", "menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.options; _ck(_v, 3, 0, currVal_0); }, null); }
function View_SelectComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 21, "div", [["class", "ui-select-container ui-select-multiple dropdown form-control open"], ["tabindex", "0"]], null, [[null, "keyup"], [null, "focus"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup" === en)) {
        var pd_1 = (_co.mainClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = (_co.focusToInput("") !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _off_click__WEBPACK_IMPORTED_MODULE_2__["OffClickDirective"], [], { offClickHandler: [0, "offClickHandler"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](5, { "ui-disabled": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 4, "span", [["class", "ui-select-match"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 0, "input", [["autocapitalize", "off"], ["autocomplete", "false"], ["autocorrect", "off"], ["class", "form-control ui-select-search"], ["role", "combobox"], ["spellcheck", "false"], ["type", "text"]], [[8, "disabled", 0], [8, "placeholder", 0]], [[null, "keydown"], [null, "keyup"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_co.inputEvent($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup" === en)) {
        var pd_1 = (_co.inputEvent($event, true) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.matchClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  \n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.clickedOutside; _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 5, 0, _co.disabled); _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.active; _ck(_v, 10, 0, currVal_2); var currVal_5 = (((_co.optionsOpened && _co.options) && (_co.options.length > 0)) && !_co.firstItemHasChildren); _ck(_v, 17, 0, currVal_5); var currVal_6 = (((_co.optionsOpened && _co.options) && (_co.options.length > 0)) && _co.firstItemHasChildren); _ck(_v, 20, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.disabled; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_co.active.length <= 0) ? _co.placeholder : ""), ""); _ck(_v, 13, 0, currVal_3, currVal_4); }); }
function View_SelectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _select_pipes__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.multiple === false); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.multiple === true); _ck(_v, 6, 0, currVal_1); }, null); }
function View_SelectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "ng-select", [], null, null, null, View_SelectComponent_0, RenderType_SelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_select__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_select__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _select__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
var SelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-select", _select__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"], View_SelectComponent_Host_0, { allowClear: "allowClear", placeholder: "placeholder", idField: "idField", textField: "textField", childrenField: "childrenField", multiple: "multiple", items: "items", disabled: "disabled", active: "active" }, { data: "data", selected: "selected", removed: "removed", typed: "typed", opened: "opened" }, []);



/***/ }),

/***/ "./src/app/pages/form/components/file-upload/file-upload.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/form/components/file-upload/file-upload.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_FileUploadComponent, View_FileUploadComponent_0, View_FileUploadComponent_Host_0, FileUploadComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FileUploadComponent", function() { return RenderType_FileUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FileUploadComponent_0", function() { return View_FileUploadComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FileUploadComponent_Host_0", function() { return View_FileUploadComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponentNgFactory", function() { return FileUploadComponentNgFactory; });
/* harmony import */ var _file_upload_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload.component.scss.shim.ngstyle */ "./src/app/pages/form/components/file-upload/file-upload.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _shared_components_progress_bar_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/progress-bar/progress-bar.component.ngfactory */ "./src/app/shared/components/progress-bar/progress-bar.component.ngfactory.js");
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/progress-bar/progress-bar.component */ "./src/app/shared/components/progress-bar/progress-bar.component.ts");
/* harmony import */ var _file_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-upload.component */ "./src/app/pages/form/components/file-upload/file-upload.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_FileUploadComponent = [_file_upload_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FileUploadComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FileUploadComponent, data: {} });

function View_FileUploadComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "glyphicon glyphicon-ok"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], null, null); }
function View_FileUploadComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "glyphicon glyphicon-ban-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], null, null); }
function View_FileUploadComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "glyphicon glyphicon-remove"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], null, null); }
function View_FileUploadComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 37, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 10, "td", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FileUploadComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FileUploadComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FileUploadComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 16, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 3, "button", [["class", "btn btn-success btn-xs"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.upload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "span", [["class", "glyphicon glyphicon-upload"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Upload\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "button", [["class", "btn btn-warning btn-xs"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.cancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "span", [["class", "glyphicon glyphicon-ban-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Cancel\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 3, "button", [["class", "btn btn-danger btn-xs"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.remove() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "span", [["class", "glyphicon glyphicon-trash"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Remove\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.isSuccess; _ck(_v, 11, 0, currVal_1); var currVal_2 = _v.context.$implicit.isCancel; _ck(_v, 14, 0, currVal_2); var currVal_3 = _v.context.$implicit.isError; _ck(_v, 17, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.file == null) ? null : _v.context.$implicit.file.name)); _ck(_v, 5, 0, currVal_0); var currVal_4 = ((_v.context.$implicit.isReady || _v.context.$implicit.isUploading) || _v.context.$implicit.isSuccess); _ck(_v, 22, 0, currVal_4); var currVal_5 = !_v.context.$implicit.isUploading; _ck(_v, 27, 0, currVal_5); }); }
function View_FileUploadComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 87, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h2", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Angular2 File Upload"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 24, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Select files"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "div", [["class", "well my-drop-zone"], ["ng2FileDrop", ""]], null, [[null, "fileOver"], [null, "drop"], [null, "dragover"], [null, "dragleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("drop" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onDrop($event) !== false);
        ad = (pd_0 && ad);
    } if (("dragover" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onDragOver($event) !== false);
        ad = (pd_1 && ad);
    } if (("dragleave" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onDragLeave($event) !== false);
        ad = (pd_2 && ad);
    } if (("fileOver" === en)) {
        var pd_3 = (_co.fileOverBase($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](12, { "nv-file-over": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileDropDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { uploader: [0, "uploader"] }, { fileOver: "fileOver" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      Base drop zone\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "div", [["class", "well my-drop-zone"], ["ng2FileDrop", ""]], null, [[null, "fileOver"], [null, "drop"], [null, "dragover"], [null, "dragleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("drop" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onDrop($event) !== false);
        ad = (pd_0 && ad);
    } if (("dragover" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onDragOver($event) !== false);
        ad = (pd_1 && ad);
    } if (("dragleave" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onDragLeave($event) !== false);
        ad = (pd_2 && ad);
    } if (("fileOver" === en)) {
        var pd_3 = (_co.fileOverAnother($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](18, { "another-file-over-class": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileDropDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { uploader: [0, "uploader"] }, { fileOver: "fileOver" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      Another drop zone\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    Multiple\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "input", [["multiple", ""], ["ng2FileSelect", ""], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onChange() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileSelectDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { uploader: [0, "uploader"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Single\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "input", [["ng2FileSelect", ""], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onChange() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileSelectDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { uploader: [0, "uploader"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 55, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upload queue"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](37, null, ["Queue length: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 22, "table", [["class", "table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 13, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "th", [["width", "50%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FileUploadComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 22, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        Queue progress:\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "progress-bar", [["theme", "success"]], null, null, null, _shared_components_progress_bar_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ProgressBarComponent_0"], _shared_components_progress_bar_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ProgressBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 114688, null, 0, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__["ProgressBarComponent"], [], { percent: [0, "percent"], theme: [1, "theme"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 3, "button", [["class", "btn btn-success btn-s"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.uploader.uploadAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 0, "span", [["class", "glyphicon glyphicon-upload"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Upload all\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 3, "button", [["class", "btn btn-warning btn-s"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.uploader.cancelAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 0, "span", [["class", "glyphicon glyphicon-ban-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Cancel all\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 3, "button", [["class", "btn btn-danger btn-s"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.uploader.clearQueue() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 0, "span", [["class", "glyphicon glyphicon-trash"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Remove all\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "well my-drop-zone"; var currVal_1 = _ck(_v, 12, 0, _co.hasBaseDropZoneOver); _ck(_v, 11, 0, currVal_0, currVal_1); var currVal_2 = _co.uploader; _ck(_v, 13, 0, currVal_2); var currVal_3 = "well my-drop-zone"; var currVal_4 = _ck(_v, 18, 0, _co.hasAnotherDropZoneOver); _ck(_v, 17, 0, currVal_3, currVal_4); var currVal_5 = _co.uploader; _ck(_v, 19, 0, currVal_5); var currVal_6 = _co.uploader; _ck(_v, 23, 0, currVal_6); var currVal_7 = _co.uploader; _ck(_v, 28, 0, currVal_7); var currVal_9 = _co.uploader.queue; _ck(_v, 59, 0, currVal_9); var currVal_10 = _co.uploader.progress; var currVal_11 = "success"; _ck(_v, 68, 0, currVal_10, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_8 = ((_co.uploader == null) ? null : ((_co.uploader.queue == null) ? null : _co.uploader.queue.length)); _ck(_v, 37, 0, currVal_8); var currVal_12 = !_co.uploader.getNotUploadedItems().length; _ck(_v, 71, 0, currVal_12); var currVal_13 = !_co.uploader.isUploading; _ck(_v, 76, 0, currVal_13); var currVal_14 = !_co.uploader.queue.length; _ck(_v, 81, 0, currVal_14); }); }
function View_FileUploadComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-file-upload", [], null, null, null, View_FileUploadComponent_0, RenderType_FileUploadComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _file_upload_component__WEBPACK_IMPORTED_MODULE_6__["FileUploadComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FileUploadComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-file-upload", _file_upload_component__WEBPACK_IMPORTED_MODULE_6__["FileUploadComponent"], View_FileUploadComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/form/components/file-upload/file-upload.component.scss.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/form/components/file-upload/file-upload.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".my-drop-zone[_ngcontent-%COMP%] {\n  border: dotted 3px lightgray; }\n\n.nv-file-over[_ngcontent-%COMP%] {\n  border: dotted 3px red; }\n\n.another-file-over-class[_ngcontent-%COMP%] {\n  border: dotted 3px green; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS9jb21wb25lbnRzL2ZpbGUtdXBsb2FkL0Q6XFxmcmVlbG5jZXJcXGRhc2hib2FyZC1uZXctY29kZS1hcnQvc3JjXFxhcHBcXHBhZ2VzXFxmb3JtXFxjb21wb25lbnRzXFxmaWxlLXVwbG9hZFxcZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0vY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLm15LWRyb3Atem9uZSB7XHJcbiAgICAgIGJvcmRlcjogZG90dGVkIDNweCBsaWdodGdyYXk7XHJcbiAgfVxyXG5cclxuICAubnYtZmlsZS1vdmVyIHtcclxuICAgICAgYm9yZGVyOiBkb3R0ZWQgM3B4IHJlZDtcclxuICB9XHJcblxyXG4gIC5hbm90aGVyLWZpbGUtb3Zlci1jbGFzcyB7XHJcbiAgICAgIGJvcmRlcjogZG90dGVkIDNweCBncmVlbjtcclxuICB9Il19 */"];



/***/ }),

/***/ "./src/app/pages/form/components/file-upload/file-upload.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/form/components/file-upload/file-upload.component.ts ***!
  \****************************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");


var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    FileUploadComponent.prototype.ngOnInit = function () { };
    FileUploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/pages/form/components/form-inputs/form-inputs.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/form/components/form-inputs/form-inputs.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_FormInputsComponent, View_FormInputsComponent_0, View_FormInputsComponent_Host_0, FormInputsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FormInputsComponent", function() { return RenderType_FormInputsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormInputsComponent_0", function() { return View_FormInputsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormInputsComponent_Host_0", function() { return View_FormInputsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputsComponentNgFactory", function() { return FormInputsComponentNgFactory; });
/* harmony import */ var _form_inputs_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-inputs.component.scss.shim.ngstyle */ "./src/app/pages/form/components/form-inputs/form-inputs.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/card/card.component.ngfactory */ "./src/app/shared/components/card/card.component.ngfactory.js");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/switch/switch.component.ngfactory */ "./src/app/shared/components/switch/switch.component.ngfactory.js");
/* harmony import */ var _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/switch/switch.component */ "./src/app/shared/components/switch/switch.component.ts");
/* harmony import */ var _form_inputs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-inputs.component */ "./src/app/pages/form/components/form-inputs/form-inputs.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_FormInputsComponent = [_form_inputs_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FormInputsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FormInputsComponent, data: {} });

function View_FormInputsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 341, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 123, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 48, "card", [["cardTitle", "Input Types"], ["isCollapse", "true"]], null, null, null, _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], { cardTitle: [0, "cardTitle"], isCollapse: [1, "isCollapse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 44, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Text Input"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Password Input"], ["type", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["With Help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "With Help"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "span", [["class", "help-block sub-little-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["A block of help text that breaks onto a new line and may extend beyond one line."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Small Input"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "input", [["class", "form-control form-control-sm"], ["placeholder", "Small Input"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Large Input"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "input", [["class", "form-control form-control-lg"], ["placeholder", "Large Input"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Disabled"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 0, "input", [["class", "form-control"], ["disabled", ""], ["placeholder", "Disabled Input"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Readonly"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Readonly Input"], ["readonly", ""], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Textarea"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 0, "textarea", [["class", "form-control"], ["cols", "0"], ["placeholder", "Textarea"], ["rows", "10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 69, "card", [["cardTitle", "Input Group"]], null, null, null, _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 49152, null, 0, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], { cardTitle: [0, "cardTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, 0, 29, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 26, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 21, "div", [["class", "input-group-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 3, "button", [["aria-expanded", "false"], ["aria-haspopup", "true"], ["class", "btn btn-success dropdown-toggle"], ["data-toggle", "dropdown"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              Action\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 0, "span", [["class", "caret"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 13, "ul", [["class", "dropdown-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Action"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Another action"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 0, "input", [["class", "form-control form-control-sm with-success-addon"], ["placeholder", "With button group"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, 0, 9, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 6, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 1, "span", [["class", "input-group-addon input-group-addon-primary addon-left"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["@"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 0, "input", [["class", "form-control with-primary-addon"], ["placeholder", "Username"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, 0, 9, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 6, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 0, "input", [["class", "form-control with-success-addon"], ["placeholder", "Mail"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 1, "span", [["class", "input-group-addon input-group-addon-success addon-right"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["@mail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, 0, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 9, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 1, "span", [["class", "input-group-addon input-group-addon-warning addon-left"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["www."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 0, "input", [["class", "form-control with-warning-addon"], ["placeholder", "Sitename"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 1, "span", [["class", "input-group-addon input-group-addon-warning addon-right"], ["id", "basic-addon1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [".com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](128, 0, null, null, 212, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 56, "card", [["cardTitle", "Checkbox&Radio"]], null, null, null, _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](131, 49152, null, 0, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], { cardTitle: [0, "cardTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, 0, 25, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](135, 0, null, null, 6, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](137, 0, null, null, 0, "input", [["checked", ""], ["class", "checkbox"], ["id", "default-checkbox1"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 1, "label", [["class", "check-label"], ["for", "default-checkbox1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Checkbox1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 0, null, null, 6, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, null, 0, "input", [["class", "checkbox"], ["id", "default-checkbox2"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 1, "label", [["class", "check-label"], ["for", "default-checkbox2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Checkbox2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, null, 6, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, null, 0, "input", [["class", "checkbox"], ["id", "default-checkbox3"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 1, "label", [["class", "check-label"], ["for", "default-checkbox3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Checkbox3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, 0, 25, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](162, 0, null, null, 6, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, null, 0, "input", [["checked", ""], ["class", "radio"], ["id", "default-radio1"], ["name", "radio"], ["type", "radio"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, null, 1, "label", [["class", "radio-label"], ["for", "default-radio1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Radio1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](170, 0, null, null, 6, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](172, 0, null, null, 0, "input", [["class", "radio"], ["id", "default-radio2"], ["name", "radio"], ["type", "radio"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 0, null, null, 1, "label", [["class", "radio-label"], ["for", "default-radio2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Radio2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](178, 0, null, null, 6, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](180, 0, null, null, 0, "input", [["class", "radio"], ["id", "default-radio3"], ["name", "radio"], ["type", "radio"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](182, 0, null, null, 1, "label", [["class", "radio-label"], ["for", "default-radio3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Radio3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](188, 0, null, null, 53, "card", [["cardTitle", "Color&State"]], null, null, null, _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](189, 49152, null, 0, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], { cardTitle: [0, "cardTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](191, 0, null, 0, 49, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](193, 0, null, null, 6, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](195, 0, null, null, 0, "input", [["checked", ""], ["class", "checkbox"], ["id", "color-checkbox1"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](197, 0, null, null, 1, "label", [["class", "check-label"], ["for", "color-checkbox1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Default"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](201, 0, null, null, 6, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, null, 0, "input", [["checked", ""], ["class", "checkbox checkbox-primary"], ["id", "color-checkbox2"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](205, 0, null, null, 1, "label", [["class", "check-label"], ["for", "color-checkbox2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Primary"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](209, 0, null, null, 6, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](211, 0, null, null, 0, "input", [["checked", ""], ["class", "checkbox checkbox-success"], ["id", "color-checkbox3"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, null, 1, "label", [["class", "check-label"], ["for", "color-checkbox3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Success"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](217, 0, null, null, 6, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](219, 0, null, null, 0, "input", [["checked", ""], ["class", "checkbox checkbox-warning"], ["id", "color-checkbox4"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](221, 0, null, null, 1, "label", [["class", "check-label"], ["for", "color-checkbox4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Warning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](225, 0, null, null, 6, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](227, 0, null, null, 0, "input", [["checked", ""], ["class", "checkbox checkbox-danger"], ["id", "color-checkbox5"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](229, 0, null, null, 1, "label", [["class", "check-label"], ["for", "color-checkbox5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Danger"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](233, 0, null, null, 6, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](235, 0, null, null, 0, "input", [["checked", ""], ["class", "checkbox checkbox-info"], ["id", "color-checkbox6"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](237, 0, null, null, 1, "label", [["class", "check-label"], ["for", "color-checkbox6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Info"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](243, 0, null, null, 44, "card", [["cardTitle", "Switch"]], null, null, null, _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](244, 49152, null, 0, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], { cardTitle: [0, "cardTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](246, 0, null, 0, 19, "div", [["class", "switch-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](248, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Multiple Switch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](251, 0, null, null, 1, "switch", [["multiple", ""], ["switchId", "multiple1"], ["switchName", "multiple"]], null, null, null, _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SwitchComponent_0"], _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](252, 114688, null, 0, _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"], [], { switchName: [0, "switchName"], switchId: [1, "switchId"], multiple: [2, "multiple"], checked: [3, "checked"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](254, 0, null, null, 1, "switch", [["multiple", ""], ["switchId", "multiple2"], ["switchName", "multiple"], ["theme", "success"]], null, null, null, _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SwitchComponent_0"], _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](255, 114688, null, 0, _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"], [], { switchName: [0, "switchName"], switchId: [1, "switchId"], theme: [2, "theme"], multiple: [3, "multiple"], checked: [4, "checked"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](257, 0, null, null, 1, "switch", [["multiple", ""], ["switchId", "multiple3"], ["switchName", "multiple"], ["theme", "warning"]], null, null, null, _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SwitchComponent_0"], _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](258, 114688, null, 0, _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"], [], { switchName: [0, "switchName"], switchId: [1, "switchId"], theme: [2, "theme"], multiple: [3, "multiple"], checked: [4, "checked"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](260, 0, null, null, 1, "switch", [["multiple", ""], ["switchId", "multiple4"], ["switchName", "multiple"], ["theme", "danger"]], null, null, null, _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SwitchComponent_0"], _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](261, 114688, null, 0, _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"], [], { switchName: [0, "switchName"], switchId: [1, "switchId"], theme: [2, "theme"], multiple: [3, "multiple"], checked: [4, "checked"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](263, 0, null, null, 1, "switch", [["multiple", ""], ["switchId", "multiple5"], ["switchName", "multiple"], ["theme", "info"]], null, null, null, _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SwitchComponent_0"], _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](264, 114688, null, 0, _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"], [], { switchName: [0, "switchName"], switchId: [1, "switchId"], theme: [2, "theme"], multiple: [3, "multiple"], checked: [4, "checked"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](267, 0, null, 0, 19, "div", [["class", "switch-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](269, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Single Switch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](272, 0, null, null, 1, "switch", [["switchId", "single1"], ["switchName", "single"]], null, null, null, _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SwitchComponent_0"], _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](273, 114688, null, 0, _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"], [], { switchName: [0, "switchName"], switchId: [1, "switchId"], checked: [2, "checked"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](275, 0, null, null, 1, "switch", [["switchId", "single2"], ["switchName", "single"], ["theme", "success"]], null, null, null, _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SwitchComponent_0"], _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](276, 114688, null, 0, _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"], [], { switchName: [0, "switchName"], switchId: [1, "switchId"], theme: [2, "theme"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](278, 0, null, null, 1, "switch", [["switchId", "single3"], ["switchName", "single"], ["theme", "warning"]], null, null, null, _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SwitchComponent_0"], _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](279, 114688, null, 0, _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"], [], { switchName: [0, "switchName"], switchId: [1, "switchId"], theme: [2, "theme"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](281, 0, null, null, 1, "switch", [["switchId", "single4"], ["switchName", "single"], ["theme", "danger"]], null, null, null, _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SwitchComponent_0"], _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](282, 114688, null, 0, _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"], [], { switchName: [0, "switchName"], switchId: [1, "switchId"], theme: [2, "theme"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](284, 0, null, null, 1, "switch", [["switchId", "single5"], ["switchName", "single"], ["theme", "info"]], null, null, null, _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SwitchComponent_0"], _shared_components_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](285, 114688, null, 0, _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"], [], { switchName: [0, "switchName"], switchId: [1, "switchId"], theme: [2, "theme"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](289, 0, null, null, 50, "card", [["cardTitle", "Select&Multiple Select"]], null, null, null, _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](290, 49152, null, 0, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], { cardTitle: [0, "cardTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](292, 0, null, 0, 46, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](294, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Select"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](297, 0, null, null, 13, "select", [["class", "form-control"], ["id", "select1"], ["name", "select"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](299, 0, null, null, 1, "option", [["value", "option1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["option1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](302, 0, null, null, 1, "option", [["value", "option2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["option2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](305, 0, null, null, 1, "option", [["value", "option3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["option3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](308, 0, null, null, 1, "option", [["value", "option4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["option4"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](312, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Multiple Select"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](315, 0, null, null, 22, "select", [["class", "form-control"], ["id", "select1"], ["multiple", ""], ["name", "select"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](317, 0, null, null, 1, "option", [["value", "option1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["option1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](320, 0, null, null, 1, "option", [["value", "option2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["option2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](323, 0, null, null, 1, "option", [["value", "option3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["option3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](326, 0, null, null, 1, "option", [["value", "option4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["option4"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](329, 0, null, null, 1, "option", [["value", "option5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["option4"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](332, 0, null, null, 1, "option", [["value", "option6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["option4"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](335, 0, null, null, 1, "option", [["value", "option7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["option4"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_0 = "Input Types"; var currVal_1 = "true"; _ck(_v, 6, 0, currVal_0, currVal_1); var currVal_2 = "Input Group"; _ck(_v, 56, 0, currVal_2); var currVal_3 = "Checkbox&Radio"; _ck(_v, 131, 0, currVal_3); var currVal_4 = "Color&State"; _ck(_v, 189, 0, currVal_4); var currVal_5 = "Switch"; _ck(_v, 244, 0, currVal_5); var currVal_6 = "multiple"; var currVal_7 = "multiple1"; var currVal_8 = ""; var currVal_9 = true; _ck(_v, 252, 0, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_10 = "multiple"; var currVal_11 = "multiple2"; var currVal_12 = "success"; var currVal_13 = ""; var currVal_14 = true; _ck(_v, 255, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = "multiple"; var currVal_16 = "multiple3"; var currVal_17 = "warning"; var currVal_18 = ""; var currVal_19 = true; _ck(_v, 258, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = "multiple"; var currVal_21 = "multiple4"; var currVal_22 = "danger"; var currVal_23 = ""; var currVal_24 = true; _ck(_v, 261, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_25 = "multiple"; var currVal_26 = "multiple5"; var currVal_27 = "info"; var currVal_28 = ""; var currVal_29 = true; _ck(_v, 264, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29); var currVal_30 = "single"; var currVal_31 = "single1"; var currVal_32 = true; _ck(_v, 273, 0, currVal_30, currVal_31, currVal_32); var currVal_33 = "single"; var currVal_34 = "single2"; var currVal_35 = "success"; _ck(_v, 276, 0, currVal_33, currVal_34, currVal_35); var currVal_36 = "single"; var currVal_37 = "single3"; var currVal_38 = "warning"; _ck(_v, 279, 0, currVal_36, currVal_37, currVal_38); var currVal_39 = "single"; var currVal_40 = "single4"; var currVal_41 = "danger"; _ck(_v, 282, 0, currVal_39, currVal_40, currVal_41); var currVal_42 = "single"; var currVal_43 = "single5"; var currVal_44 = "info"; _ck(_v, 285, 0, currVal_42, currVal_43, currVal_44); var currVal_45 = "Select&Multiple Select"; _ck(_v, 290, 0, currVal_45); }, null); }
function View_FormInputsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-form-inputs", [], null, null, null, View_FormInputsComponent_0, RenderType_FormInputsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _form_inputs_component__WEBPACK_IMPORTED_MODULE_6__["FormInputsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FormInputsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-form-inputs", _form_inputs_component__WEBPACK_IMPORTED_MODULE_6__["FormInputsComponent"], View_FormInputsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/form/components/form-inputs/form-inputs.component.scss.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/form/components/form-inputs/form-inputs.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["body[_ngcontent-%COMP%] {\n  background: #fff; }\n\n.bg-default[_ngcontent-%COMP%] {\n  background: -webkit-gradient(linear, left bottom, right top, from(#999999), to(#b3b2b2));\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary[_ngcontent-%COMP%] {\n  background: -webkit-gradient(linear, left bottom, right top, from(#fca400), to(#ffd17c));\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success[_ngcontent-%COMP%] {\n  background: -webkit-gradient(linear, left bottom, right top, from(#16be9a), to(#42e697));\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger[_ngcontent-%COMP%] {\n  background: -webkit-gradient(linear, left bottom, right top, from(#fa5167), to(#fda09c));\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning[_ngcontent-%COMP%] {\n  background: -webkit-gradient(linear, left bottom, right top, from(#ff7403), to(#fac980));\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info[_ngcontent-%COMP%] {\n  background: -webkit-gradient(linear, left bottom, right top, from(#2cc3ff), to(#15f8bf));\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.check-label[_ngcontent-%COMP%], .radio-label[_ngcontent-%COMP%] {\n  margin-bottom: 20px; }\n\n.form-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n  margin-bottom: 10px; }\n\n.form-group[_ngcontent-%COMP%]    > .help-block[_ngcontent-%COMP%] {\n  margin-top: -10px; }\n\n.switch-group[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap; }\n\n.switch-group[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%] {\n    width: 100%; }\n\n.switch-group[_ngcontent-%COMP%]   switch[_ngcontent-%COMP%] {\n    -webkit-box-flex: 1;\n            flex: 1; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS9jb21wb25lbnRzL2Zvcm0taW5wdXRzL0Q6XFxmcmVlbG5jZXJcXGRhc2hib2FyZC1uZXctY29kZS1hcnQvc3JjXFxhcHBcXHNoYXJlZFxcdGhlbWVcXGNvbG9yLXNjaGVtZXNcXF9kZWZhdWx0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Zvcm0vY29tcG9uZW50cy9mb3JtLWlucHV0cy9EOlxcZnJlZWxuY2VyXFxkYXNoYm9hcmQtbmV3LWNvZGUtYXJ0L3NyY1xcYXBwXFxzaGFyZWRcXHRoZW1lXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb3JtL2NvbXBvbmVudHMvZm9ybS1pbnB1dHMvRDpcXGZyZWVsbmNlclxcZGFzaGJvYXJkLW5ldy1jb2RlLWFydC9zcmNcXGFwcFxccGFnZXNcXGZvcm1cXGNvbXBvbmVudHNcXGZvcm0taW5wdXRzXFxmb3JtLWlucHV0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQkFoQlMsRUFBQTs7QUFtQmI7RUNNSSx3RkFBbUM7RUFBbkMsMkRBQW1DO0VBR25DLG1FQUEyQyxFQUFBOztBREwvQztFQ0VJLHdGQUFtQztFQUFuQywyREFBbUM7RUFHbkMsbUVBQTJDLEVBQUE7O0FERC9DO0VDRkksd0ZBQW1DO0VBQW5DLDJEQUFtQztFQUduQyxtRUFBMkMsRUFBQTs7QURHL0M7RUNOSSx3RkFBbUM7RUFBbkMsMkRBQW1DO0VBR25DLG1FQUEyQyxFQUFBOztBRE8vQztFQ1ZJLHdGQUFtQztFQUFuQywyREFBbUM7RUFHbkMsbUVBQTJDLEVBQUE7O0FEVy9DO0VDZEksd0ZBQW1DO0VBQW5DLDJEQUFtQztFQUduQyxtRUFBMkMsRUFBQTs7QUMvQi9DOztFQUVJLG1CQUFtQixFQUFBOztBQUd2QjtFQUVRLG1CQUFtQixFQUFBOztBQUYzQjtFQUtRLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUxuQjtJQU9RLFdBQVcsRUFBQTs7QUFQbkI7SUFVUSxtQkFBTztZQUFQLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0vY29tcG9uZW50cy9mb3JtLWlucHV0cy9mb3JtLWlucHV0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL21peGluJztcclxuJGRlZmF1bHQtdGV4dDoxNHB4O1xyXG4kc20tdGV4dDoxMnB4O1xyXG4kbGctdGV4dDoxNnB4O1xyXG4kYm9keS1iZzojZmZmO1xyXG4kc2lkZWJhci1iZzojNDY1Mjk0O1xyXG4kc2lkZWJhci1mb250cy1jb2xvcjojZmZmO1xyXG4kY2FyZC1iZzojZmZmO1xyXG4kY2FyZC1ib3JkZXI6I2U0ZTNlMztcclxuJHdoaXRlOiNmZmY7XHJcbiRibGFjazojMDAwO1xyXG4kYm9yZGVyLWNvbG9yOnJnYmEoJGJsYWNrLCAuMSk7XHJcbiR0YWJsZS1ib3JkZXItY29sb3I6I2U2ZTZlNjtcclxuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XHJcbiRwcmltYXJ5OiNmY2E0MDA7XHJcbiRzdWNjZXNzOiMxNmJlOWE7XHJcbiRkYW5nZXI6I2ZhNTE2NztcclxuJHdhcm5pbmc6I2ZmNzQwMztcclxuJGluZm86IzJjYzNmZjtcclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcclxufVxyXG5cclxuLmJnLWRlZmF1bHQge1xyXG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgZGFya2VuKCRjYXJkLWJnLCA0MCUpLCBkYXJrZW4oJGNhcmQtYmcsIDMwJSkpO1xyXG59XHJcblxyXG4uYmctcHJpbWFyeSB7XHJcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XHJcbn1cclxuXHJcbi5iZy1zdWNjZXNzIHtcclxuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRzdWNjZXNzLCAjNDJlNjk3KTtcclxufVxyXG5cclxuLmJnLWRhbmdlciB7XHJcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkZGFuZ2VyLCAjZmRhMDljKTtcclxufVxyXG5cclxuLmJnLXdhcm5pbmcge1xyXG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xyXG59XHJcblxyXG4uYmctaW5mbyB7XHJcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkaW5mbywgIzE1ZjhiZik7XHJcbn0iLCJAbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xyXG4gICAgLW8tYm94LXNoYWRvdzogJHNoYWRvdztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcclxufVxyXG5cclxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcclxuICAgIHRleHQtc2hhZG93OiAkc2hhZG93O1xyXG4gICAgLW8tdGV4dC1zaGFkb3c6ICRzaGFkb3c7XHJcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xyXG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHNoYWRvdztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtLi4uKSB7XHJcbiAgICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xyXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLWdyYWRpZW50KCRjb2xvci4uLikge1xyXG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcikgMiAzO1xyXG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XHJcbiAgICBib3JkZXItaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IpIDMgMztcclxufVxyXG5cclxuQG1peGluIGNlbnRlcigkd2lkdGgsICRoZWlnaHQpIHtcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogJGhlaWdodDtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zaGFyZWQvdGhlbWUvY29sb3Itc2NoZW1lcy9fZGVmYXVsdC5zY3NzXCI7XHJcbi5jaGVjay1sYWJlbCxcclxuLnJhZGlvLWxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgID4uZm9ybS1jb250cm9sIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgPi5oZWxwLWJsb2NrIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnN3aXRjaC1ncm91cCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5jb250cm9sLWxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIHN3aXRjaCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgIH1cclxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/pages/form/components/form-inputs/form-inputs.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/form/components/form-inputs/form-inputs.component.ts ***!
  \****************************************************************************/
/*! exports provided: FormInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputsComponent", function() { return FormInputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var FormInputsComponent = /** @class */ (function () {
    function FormInputsComponent() {
    }
    FormInputsComponent.prototype.ngOnInit = function () { };
    return FormInputsComponent;
}());



/***/ }),

/***/ "./src/app/pages/form/components/form-layouts/form-layouts.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/form/components/form-layouts/form-layouts.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_FormLayoutsComponent, View_FormLayoutsComponent_0, View_FormLayoutsComponent_Host_0, FormLayoutsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FormLayoutsComponent", function() { return RenderType_FormLayoutsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormLayoutsComponent_0", function() { return View_FormLayoutsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormLayoutsComponent_Host_0", function() { return View_FormLayoutsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutsComponentNgFactory", function() { return FormLayoutsComponentNgFactory; });
/* harmony import */ var _form_layouts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-layouts.component.scss.shim.ngstyle */ "./src/app/pages/form/components/form-layouts/form-layouts.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/card/card.component.ngfactory */ "./src/app/shared/components/card/card.component.ngfactory.js");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _form_layouts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-layouts.component */ "./src/app/pages/form/components/form-layouts/form-layouts.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_FormLayoutsComponent = [_form_layouts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FormLayoutsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FormLayoutsComponent, data: {} });

function View_FormLayoutsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 62, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 21, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 18, "card", [["cardTitle", "Inline Form"]], null, null, null, _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], { cardTitle: [0, "cardTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 14, "form", [["class", "form-inline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "label", [["class", "form-label"], ["for", "example1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "input", [["class", "form-control"], ["id", "example1"], ["placeholder", "Jane Doe"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "label", [["class", "form-label"], ["for", "example2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "input", [["class", "form-control"], ["id", "example2"], ["placeholder", "jane.doe@example.com"], ["type", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Send Invitation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 36, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 33, "card", [["cardTitle", "Basic Form"]], null, null, null, _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_components_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 49152, null, 0, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], { cardTitle: [0, "cardTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 0, 29, "form", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Name"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Surname"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Surname"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Password"], ["type", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "label", [["class", "control-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 0, "textarea", [["class", "form-control"], ["placeholder", "Description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 0, "input", [["checked", ""], ["class", "checkbox"], ["id", "remember"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "label", [["class", "check-label"], ["for", "remember"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Remember Me"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Submit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_0 = "Inline Form"; _ck(_v, 5, 0, currVal_0); var currVal_1 = "Basic Form"; _ck(_v, 28, 0, currVal_1); }, null); }
function View_FormLayoutsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-form-layouts", [], null, null, null, View_FormLayoutsComponent_0, RenderType_FormLayoutsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _form_layouts_component__WEBPACK_IMPORTED_MODULE_4__["FormLayoutsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FormLayoutsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-form-layouts", _form_layouts_component__WEBPACK_IMPORTED_MODULE_4__["FormLayoutsComponent"], View_FormLayoutsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/form/components/form-layouts/form-layouts.component.scss.shim.ngstyle.js":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/form/components/form-layouts/form-layouts.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .check-label[_ngcontent-%COMP%] {\n  margin: 10px 0; }\n\n.form-inline[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%], .form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .form-inline[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: auto 5px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS9jb21wb25lbnRzL2Zvcm0tbGF5b3V0cy9EOlxcZnJlZWxuY2VyXFxkYXNoYm9hcmQtbmV3LWNvZGUtYXJ0L3NyY1xcYXBwXFxwYWdlc1xcZm9ybVxcY29tcG9uZW50c1xcZm9ybS1sYXlvdXRzXFxmb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBR1EsY0FBYyxFQUFBOztBQUl0Qjs7O0VBSVEsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3JtL2NvbXBvbmVudHMvZm9ybS1sYXlvdXRzL2Zvcm0tbGF5b3V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICAgIC5mb3JtLWNvbnRyb2wsXHJcbiAgICAuY2hlY2stbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUge1xyXG4gICAgLmNvbnRyb2wtbGFiZWwsXHJcbiAgICAuZm9ybS1jb250cm9sLFxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDVweDtcclxuICAgIH1cclxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/pages/form/components/form-layouts/form-layouts.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/form/components/form-layouts/form-layouts.component.ts ***!
  \******************************************************************************/
/*! exports provided: FormLayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutsComponent", function() { return FormLayoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var FormLayoutsComponent = /** @class */ (function () {
    function FormLayoutsComponent() {
    }
    FormLayoutsComponent.prototype.ngOnInit = function () {
    };
    return FormLayoutsComponent;
}());



/***/ }),

/***/ "./src/app/pages/form/components/ng2-select/multiple-select/multiple-select.component.ngfactory.js":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/form/components/ng2-select/multiple-select/multiple-select.component.ngfactory.js ***!
  \*********************************************************************************************************/
/*! exports provided: RenderType_MultipleSelectComponent, View_MultipleSelectComponent_0, View_MultipleSelectComponent_Host_0, MultipleSelectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MultipleSelectComponent", function() { return RenderType_MultipleSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MultipleSelectComponent_0", function() { return View_MultipleSelectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MultipleSelectComponent_Host_0", function() { return View_MultipleSelectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleSelectComponentNgFactory", function() { return MultipleSelectComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng2_select_select_select_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/ng2-select/select/select.ngfactory */ "./node_modules/ng2-select/select/select.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-select/select/select */ "./node_modules/ng2-select/select/select.js");
/* harmony import */ var ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _multiple_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multiple-select.component */ "./src/app/pages/form/components/ng2-select/multiple-select/multiple-select.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_MultipleSelectComponent = [];
var RenderType_MultipleSelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_MultipleSelectComponent, data: {} });

function View_MultipleSelectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 18, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h3", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Select multiple cities"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 6, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 3, "ng-select", [["placeholder", "No city selected"]], null, [[null, "data"], [null, "selected"], [null, "removed"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("data" === en)) {
        var pd_0 = (_co.refreshValue($event) !== false);
        ad = (pd_0 && ad);
    } if (("selected" === en)) {
        var pd_1 = (_co.selected($event) !== false);
        ad = (pd_1 && ad);
    } if (("removed" === en)) {
        var pd_2 = (_co.removed($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_ng2_select_select_select_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SelectComponent_0"], _node_modules_ng2_select_select_select_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 114688, null, 0, ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], { placeholder: [0, "placeholder"], multiple: [1, "multiple"], items: [2, "items"], disabled: [3, "disabled"] }, { data: "data", selected: "selected", removed: "removed" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 4, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](16, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "No city selected"; var currVal_1 = true; var currVal_2 = _co.items; var currVal_3 = _co.disabled; _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.itemsToString(_co.value); _ck(_v, 16, 0, currVal_4); }); }
function View_MultipleSelectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-multiple-select", [], null, null, null, View_MultipleSelectComponent_0, RenderType_MultipleSelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _multiple_select_component__WEBPACK_IMPORTED_MODULE_5__["MultipleSelectComponent"], [], null, null)], null, null); }
var MultipleSelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-multiple-select", _multiple_select_component__WEBPACK_IMPORTED_MODULE_5__["MultipleSelectComponent"], View_MultipleSelectComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/form/components/ng2-select/multiple-select/multiple-select.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/form/components/ng2-select/multiple-select/multiple-select.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MultipleSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleSelectComponent", function() { return MultipleSelectComponent; });
var MultipleSelectComponent = /** @class */ (function () {
    function MultipleSelectComponent() {
        this.items = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
            'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
            'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
            'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
            'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
            'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
            'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
            'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
            'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];
        this.value = ['Athens'];
        this._disabledV = '0';
        this.disabled = false;
    }
    MultipleSelectComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    MultipleSelectComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    MultipleSelectComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    MultipleSelectComponent.prototype.itemsToString = function (value) {
        if (value === void 0) { value = []; }
        return value
            .map(function (item) {
            return item.text;
        }).join(',');
    };
    return MultipleSelectComponent;
}());



/***/ }),

/***/ "./src/app/pages/form/components/ng2-select/ng2-select.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/pages/form/components/ng2-select/ng2-select.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_Ng2SelectComponent, View_Ng2SelectComponent_0, View_Ng2SelectComponent_Host_0, Ng2SelectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_Ng2SelectComponent", function() { return RenderType_Ng2SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Ng2SelectComponent_0", function() { return View_Ng2SelectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Ng2SelectComponent_Host_0", function() { return View_Ng2SelectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SelectComponentNgFactory", function() { return Ng2SelectComponentNgFactory; });
/* harmony import */ var _ng2_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng2-select.component.scss.shim.ngstyle */ "./src/app/pages/form/components/ng2-select/ng2-select.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _single_select_single_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-select/single-select.component.ngfactory */ "./src/app/pages/form/components/ng2-select/single-select/single-select.component.ngfactory.js");
/* harmony import */ var _single_select_single_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-select/single-select.component */ "./src/app/pages/form/components/ng2-select/single-select/single-select.component.ts");
/* harmony import */ var _multiple_select_multiple_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiple-select/multiple-select.component.ngfactory */ "./src/app/pages/form/components/ng2-select/multiple-select/multiple-select.component.ngfactory.js");
/* harmony import */ var _multiple_select_multiple_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multiple-select/multiple-select.component */ "./src/app/pages/form/components/ng2-select/multiple-select/multiple-select.component.ts");
/* harmony import */ var _ng2_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng2-select.component */ "./src/app/pages/form/components/ng2-select/ng2-select.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_Ng2SelectComponent = [_ng2_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_Ng2SelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_Ng2SelectComponent, data: {} });

function View_Ng2SelectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "card card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-single-select", [], null, null, null, _single_select_single_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SingleSelectComponent_0"], _single_select_single_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SingleSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _single_select_single_select_component__WEBPACK_IMPORTED_MODULE_3__["SingleSelectComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-multiple-select", [], null, null, null, _multiple_select_multiple_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MultipleSelectComponent_0"], _multiple_select_multiple_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MultipleSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _multiple_select_multiple_select_component__WEBPACK_IMPORTED_MODULE_5__["MultipleSelectComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_Ng2SelectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-ng2-select", [], null, null, null, View_Ng2SelectComponent_0, RenderType_Ng2SelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _ng2_select_component__WEBPACK_IMPORTED_MODULE_6__["Ng2SelectComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var Ng2SelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-ng2-select", _ng2_select_component__WEBPACK_IMPORTED_MODULE_6__["Ng2SelectComponent"], View_Ng2SelectComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/form/components/ng2-select/ng2-select.component.scss.shim.ngstyle.js":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/form/components/ng2-select/ng2-select.component.scss.shim.ngstyle.js ***!
  \********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0vY29tcG9uZW50cy9uZzItc2VsZWN0L25nMi1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"];



/***/ }),

/***/ "./src/app/pages/form/components/ng2-select/ng2-select.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/form/components/ng2-select/ng2-select.component.ts ***!
  \**************************************************************************/
/*! exports provided: Ng2SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SelectComponent", function() { return Ng2SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Ng2SelectComponent = /** @class */ (function () {
    function Ng2SelectComponent() {
    }
    Ng2SelectComponent.prototype.ngOnInit = function () {
    };
    return Ng2SelectComponent;
}());



/***/ }),

/***/ "./src/app/pages/form/components/ng2-select/single-select/single-select.component.ngfactory.js":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/form/components/ng2-select/single-select/single-select.component.ngfactory.js ***!
  \*****************************************************************************************************/
/*! exports provided: RenderType_SingleSelectComponent, View_SingleSelectComponent_0, View_SingleSelectComponent_Host_0, SingleSelectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SingleSelectComponent", function() { return RenderType_SingleSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SingleSelectComponent_0", function() { return View_SingleSelectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SingleSelectComponent_Host_0", function() { return View_SingleSelectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSelectComponentNgFactory", function() { return SingleSelectComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng2_select_select_select_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/ng2-select/select/select.ngfactory */ "./node_modules/ng2-select/select/select.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-select/select/select */ "./node_modules/ng2-select/select/select.js");
/* harmony import */ var ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _single_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-select.component */ "./src/app/pages/form/components/ng2-select/single-select/single-select.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_SingleSelectComponent = [];
var RenderType_SingleSelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_SingleSelectComponent, data: {} });

function View_SingleSelectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 19, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h3", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Select a single city"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 4, "ng-select", [["placeholder", "No city selected"]], null, [[null, "data"], [null, "selected"], [null, "removed"], [null, "typed"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("data" === en)) {
        var pd_0 = (_co.refreshValue($event) !== false);
        ad = (pd_0 && ad);
    } if (("selected" === en)) {
        var pd_1 = (_co.selected($event) !== false);
        ad = (pd_1 && ad);
    } if (("removed" === en)) {
        var pd_2 = (_co.removed($event) !== false);
        ad = (pd_2 && ad);
    } if (("typed" === en)) {
        var pd_3 = (_co.typed($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_ng2_select_select_select_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SelectComponent_0"], _node_modules_ng2_select_select_select_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 114688, null, 0, ng2_select_select_select__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], { allowClear: [0, "allowClear"], placeholder: [1, "placeholder"], items: [2, "items"], disabled: [3, "disabled"] }, { data: "data", selected: "selected", removed: "removed", typed: "typed" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 4, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = "No city selected"; var currVal_2 = _co.items; var currVal_3 = _co.disabled; _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.value.text; _ck(_v, 17, 0, currVal_4); }); }
function View_SingleSelectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-single-select", [], null, null, null, View_SingleSelectComponent_0, RenderType_SingleSelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _single_select_component__WEBPACK_IMPORTED_MODULE_5__["SingleSelectComponent"], [], null, null)], null, null); }
var SingleSelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-single-select", _single_select_component__WEBPACK_IMPORTED_MODULE_5__["SingleSelectComponent"], View_SingleSelectComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/form/components/ng2-select/single-select/single-select.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/form/components/ng2-select/single-select/single-select.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SingleSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSelectComponent", function() { return SingleSelectComponent; });
var SingleSelectComponent = /** @class */ (function () {
    function SingleSelectComponent() {
        this.items = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
            'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
            'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
            'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
            'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
            'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
            'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
            'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
            'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
            'Zagreb', 'Zaragoza', 'Łódź'];
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
    }
    SingleSelectComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    SingleSelectComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    SingleSelectComponent.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    SingleSelectComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    return SingleSelectComponent;
}());



/***/ }),

/***/ "./src/app/pages/form/form.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/pages/form/form.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_FormComponent, View_FormComponent_0, View_FormComponent_Host_0, FormComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FormComponent", function() { return RenderType_FormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormComponent_0", function() { return View_FormComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormComponent_Host_0", function() { return View_FormComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponentNgFactory", function() { return FormComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component */ "./src/app/pages/form/form.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_FormComponent = [];
var RenderType_FormComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_FormComponent, data: {} });

function View_FormComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_FormComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-form", [], null, null, null, View_FormComponent_0, RenderType_FormComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FormComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-form", _form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"], View_FormComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/form/form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/form/form.component.ts ***!
  \**********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/pages/form/form.module.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/pages/form/form.module.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: FormModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModuleNgFactory", function() { return FormModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.module */ "./src/app/pages/form/form.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _form_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.component.ngfactory */ "./src/app/pages/form/form.component.ngfactory.js");
/* harmony import */ var _components_form_inputs_form_inputs_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/form-inputs/form-inputs.component.ngfactory */ "./src/app/pages/form/components/form-inputs/form-inputs.component.ngfactory.js");
/* harmony import */ var _components_form_layouts_form_layouts_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form-layouts/form-layouts.component.ngfactory */ "./src/app/pages/form/components/form-layouts/form-layouts.component.ngfactory.js");
/* harmony import */ var _components_file_upload_file_upload_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/file-upload/file-upload.component.ngfactory */ "./src/app/pages/form/components/file-upload/file-upload.component.ngfactory.js");
/* harmony import */ var _components_ng2_select_ng2_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ng2-select/ng2-select.component.ngfactory */ "./src/app/pages/form/components/ng2-select/ng2-select.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var ng2_select_select_select_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-select/select/select.module */ "./node_modules/ng2-select/select/select.module.js");
/* harmony import */ var ng2_select_select_select_module__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_select_select_select_module__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form.component */ "./src/app/pages/form/form.component.ts");
/* harmony import */ var _components_form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/form-inputs/form-inputs.component */ "./src/app/pages/form/components/form-inputs/form-inputs.component.ts");
/* harmony import */ var _components_form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/form-layouts/form-layouts.component */ "./src/app/pages/form/components/form-layouts/form-layouts.component.ts");
/* harmony import */ var _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/file-upload/file-upload.component */ "./src/app/pages/form/components/file-upload/file-upload.component.ts");
/* harmony import */ var _components_ng2_select_ng2_select_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ng2-select/ng2-select.component */ "./src/app/pages/form/components/ng2-select/ng2-select.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var FormModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_form_module__WEBPACK_IMPORTED_MODULE_1__["FormModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _form_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["FormComponentNgFactory"], _components_form_inputs_form_inputs_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["FormInputsComponentNgFactory"], _components_form_layouts_form_layouts_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["FormLayoutsComponentNgFactory"], _components_file_upload_file_upload_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["FileUploadComponentNgFactory"], _components_ng2_select_ng2_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["Ng2SelectComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_http_http_e"], _angular_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_http_http_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_11__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_11__["BaseResponseOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_11__["JSONPBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_11__["JSONPBackend"], [_angular_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_http_http_e"], _angular_http__WEBPACK_IMPORTED_MODULE_11__["ResponseOptions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_11__["RequestOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_11__["BaseRequestOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_http__WEBPACK_IMPORTED_MODULE_11__["Jsonp"], _angular_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_http_http_c"], [_angular_http__WEBPACK_IMPORTED_MODULE_11__["JSONPBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_11__["RequestOptions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_http__WEBPACK_IMPORTED_MODULE_11__["JsonpModule"], _angular_http__WEBPACK_IMPORTED_MODULE_11__["JsonpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_select_select_select_module__WEBPACK_IMPORTED_MODULE_14__["SelectModule"], ng2_select_select_select_module__WEBPACK_IMPORTED_MODULE_14__["SelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _form_module__WEBPACK_IMPORTED_MODULE_1__["FormModule"], _form_module__WEBPACK_IMPORTED_MODULE_1__["FormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () { return [[{ path: "", component: _form_component__WEBPACK_IMPORTED_MODULE_16__["FormComponent"], children: [{ path: "", redirectTo: "inputs", pathMatch: "full" }, { path: "form-inputs", component: _components_form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_17__["FormInputsComponent"] }, { path: "form-layouts", component: _components_form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_18__["FormLayoutsComponent"] }, { path: "file-upload", component: _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_19__["FileUploadComponent"] }, { path: "ng2-select", component: _components_ng2_select_ng2_select_component__WEBPACK_IMPORTED_MODULE_20__["Ng2SelectComponent"] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/pages/form/form.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.module.ts ***!
  \*******************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    return FormModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-form-module-ngfactory.js.map