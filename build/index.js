/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _app_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.styles.scss */ "./src/app.styles.scss");
/* harmony import */ var _components_MegaMenuContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MegaMenuContainer */ "./src/components/MegaMenuContainer.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



// Data passed from PHP

const App = () => {
  const {
    languages,
    defaultLanguage,
    data,
    ...rest
  } = devmceeMegaMenuInitData;
  console.log('devmceeMegaMenuInitData', devmceeMegaMenuInitData);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-container"
  }, /*#__PURE__*/React.createElement(_components_MegaMenuContainer__WEBPACK_IMPORTED_MODULE_1__.MegaMenuContainer, _extends({
    defaultLanguage: defaultLanguage || 'en',
    languages: !languages?.length ? ['en'] : languages,
    data: data || {
      menuItemsMap: {},
      menuItemsListToLocaleMap: {},
      subMenuItemsMap: {},
      subMenuItemsColumnsMap: {}
    }
  }, rest))), /*#__PURE__*/React.createElement("pre", null, JSON.stringify({
    subMenuItemsMap: data.subMenuItemsMap,
    menuItemsMap: data.menuItemsMap,
    menuItemsListToLocaleMap: data.menuItemsListToLocaleMap,
    subMenuItemsColumnsMap: data.subMenuItemsColumnsMap
  }, null, 2)));
};

/***/ }),

/***/ "./src/app.types.ts":
/*!**************************!*\
  !*** ./src/app.types.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointName: () => (/* binding */ EndpointName)
/* harmony export */ });
const EndpointName = {
  SAVE: 'save'
};

/***/ }),

/***/ "./src/components/LanguagesTabsBar.tsx":
/*!*********************************************!*\
  !*** ./src/components/LanguagesTabsBar.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguagesTabsBar: () => (/* binding */ LanguagesTabsBar)
/* harmony export */ });
/* harmony import */ var _LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LanguagesTabsBar.scss */ "./src/components/LanguagesTabsBar.scss");

const LanguagesTabsBar = ({
  languages,
  activeLanguageTab,
  setActiveLanguageTab
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-languages-tabs-bar-container"
  }, languages.map(language => {
    return /*#__PURE__*/React.createElement("button", {
      key: language,
      className: `devmcee-mega-menu-languages-tabs-tab ${activeLanguageTab === language ? 'devmcee-mega-menu-languages-tabs-tab--active' : ''}`,
      onClick: () => setActiveLanguageTab(language),
      type: "button"
    }, language);
  }));
};

/***/ }),

/***/ "./src/components/MegaMenuContainer.tsx":
/*!**********************************************!*\
  !*** ./src/components/MegaMenuContainer.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MegaMenuContainer: () => (/* binding */ MegaMenuContainer)
/* harmony export */ });
/* harmony import */ var _MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MegaMenuContainer.scss */ "./src/components/MegaMenuContainer.scss");
/* harmony import */ var _hooks_useMegaMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useMegaMenu */ "./src/hooks/useMegaMenu.ts");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./src/components/MenuItem.tsx");
/* harmony import */ var _MenuItemForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItemForm */ "./src/components/MenuItemForm.tsx");
/* harmony import */ var _LanguagesTabsBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LanguagesTabsBar */ "./src/components/LanguagesTabsBar.tsx");
/* harmony import */ var _hooks_useLanguagesTabsBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useLanguagesTabsBar */ "./src/hooks/useLanguagesTabsBar.ts");
/* harmony import */ var _SubMenuItemsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubMenuItemsContainer */ "./src/components/SubMenuItemsContainer.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }







const MegaMenuContainer = ({
  languages,
  defaultLanguage,
  data,
  endpoints,
  customNonce,
  postID
}) => {
  const {
    activeLanguageTab,
    setActiveLanguageTab
  } = (0,_hooks_useLanguagesTabsBar__WEBPACK_IMPORTED_MODULE_5__.useLanguagesTabsBar)({
    defaultLanguage
  });
  const {
    menuItemsListToLocaleMap,
    menuItemsMap,
    subMenuItemsMap,
    subMenuItemsColumnsMap,
    newMenuItem,
    activeFormUuid,
    setActiveFormUuid,
    addNewMenuItem,
    saveMenuItem,
    deletMenuItem,
    createSubItemsColumns,
    deleteSubItemsColumns,
    saveSubItem,
    deleteSubItem
  } = (0,_hooks_useMegaMenu__WEBPACK_IMPORTED_MODULE_1__.useMegaMenu)({
    languages,
    selectedLanguage: activeLanguageTab,
    data,
    endpoints,
    customNonce,
    postID
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, languages.length && /*#__PURE__*/React.createElement(_LanguagesTabsBar__WEBPACK_IMPORTED_MODULE_4__.LanguagesTabsBar, {
    languages: languages,
    activeLanguageTab: activeLanguageTab,
    setActiveLanguageTab: setActiveLanguageTab
  }), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__root-menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content-action-bar"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--add",
    onClick: addNewMenuItem
  }, "Add menu item"), /*#__PURE__*/React.createElement("button", {
    disabled: true,
    type: "button",
    className: "devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--import"
  }, "Import")), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content-menu-container"
  }, menuItemsListToLocaleMap[activeLanguageTab || defaultLanguage]?.values().map(uuid => {
    return /*#__PURE__*/React.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__.MenuItem, _extends({
      key: uuid,
      activeFormUuid: activeFormUuid,
      setActiveFormUuid: setActiveFormUuid
    }, menuItemsMap[uuid], {
      subMenuItemsMap: subMenuItemsMap,
      subMenuItemsColumns: menuItemsMap[uuid].subMenuItemsColumnsUuid && subMenuItemsColumnsMap[menuItemsMap[uuid].subMenuItemsColumnsUuid],
      onSave: saveMenuItem,
      onDelete: deletMenuItem
    }));
  }), newMenuItem && /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item"
  }, /*#__PURE__*/React.createElement(_MenuItemForm__WEBPACK_IMPORTED_MODULE_3__.MenuItemForm, _extends({
    onDelete: deletMenuItem
  }, newMenuItem, {
    onSave: saveMenuItem
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu"
  }, /*#__PURE__*/React.createElement(_SubMenuItemsContainer__WEBPACK_IMPORTED_MODULE_6__.SubMenuItemsContainer, {
    menuItemsMap: menuItemsMap,
    activeFormUuid: activeFormUuid,
    subMenuItemsMap: subMenuItemsMap,
    subMenuItemsColumnsMap: subMenuItemsColumnsMap,
    onCreateSubItemsColumns: createSubItemsColumns,
    onDeleteSubItemsColumns: deleteSubItemsColumns,
    onSaveSubItem: saveSubItem,
    onDeleteSubItem: deleteSubItem
  }))));
};

/***/ }),

/***/ "./src/components/MenuItem.tsx":
/*!*************************************!*\
  !*** ./src/components/MenuItem.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuItem: () => (/* binding */ MenuItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItemForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItemForm */ "./src/components/MenuItemForm.tsx");
/* harmony import */ var _MenuItem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem.scss */ "./src/components/MenuItem.scss");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



const MenuItem = ({
  activeFormUuid,
  setActiveFormUuid: setFormActive,
  onDelete,
  onSave,
  title,
  subMenuItemsMap,
  subMenuItemsColumns,
  subMenuItemsColumnsUuid,
  ...rest
}) => {
  const [isEditMode, setIsEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const subMenuItemsAmount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => subMenuItemsColumns?.reduce((acc, column) => acc + column.length, 0) || 0, [subMenuItemsColumns]);
  return /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item"
  }, !isEditMode ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item-title-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "devmcee-mega-menu-builder-menu-item-title"
  }, title), /*#__PURE__*/React.createElement("button", {
    disabled: activeFormUuid !== null && activeFormUuid !== rest.uuid,
    type: "button",
    className: "devmcee-mega-menu-builder-content-action-button",
    onClick: () => {
      setIsEditMode(true);
      setFormActive(rest.uuid);
    }
  }, "Edit")), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item__sub-title-container"
  }, subMenuItemsColumnsUuid && `Sub items amount: ${subMenuItemsAmount}`)) : /*#__PURE__*/React.createElement(_MenuItemForm__WEBPACK_IMPORTED_MODULE_1__.MenuItemForm, _extends({
    title: title,
    subMenuItemsColumnsUuid: subMenuItemsColumnsUuid
  }, rest, {
    onSave: props => {
      onSave(props);
      setIsEditMode(false);
    },
    onDelete: onDelete
  })));
};

/***/ }),

/***/ "./src/components/MenuItemForm.tsx":
/*!*****************************************!*\
  !*** ./src/components/MenuItemForm.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuItemForm: () => (/* binding */ MenuItemForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMenuItemForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useMenuItemForm */ "./src/hooks/useMenuItemForm.ts");
/* harmony import */ var _MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItemForm.scss */ "./src/components/MenuItemForm.scss");



const MenuItemForm = ({
  onSave,
  onDelete,
  columnIndex,
  ...rest
}) => {
  const isSubMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => typeof columnIndex === 'number', [columnIndex]);
  const {
    headerTitle,
    canSubmit,
    form,
    save,
    changeField,
    deleteItem
  } = (0,_hooks_useMenuItemForm__WEBPACK_IMPORTED_MODULE_1__.useMenuItemForm)({
    onSave,
    onDelete,
    columnIndex,
    ...rest
  });
  return /*#__PURE__*/React.createElement("form", {
    autoComplete: "off",
    onSubmit: save,
    className: "devmcee-mega-menu-builder-menu-item-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item-form-title-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "devmcee-mega-menu-builder-menu-item-form-title"
  }, headerTitle), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item-form__fields-container"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "text",
    name: "title",
    placeholder: "title",
    value: form.title,
    onChange: changeField
  }), isSubMenu && /*#__PURE__*/React.createElement("textarea", {
    required: true,
    name: "description",
    placeholder: "description",
    value: form.description,
    onChange: changeField
  }), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "text",
    name: "url",
    placeholder: "url",
    value: form.url,
    onChange: changeField
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "classes",
    placeholder: "classes",
    value: form.classes,
    onChange: changeField
  })), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item-form__footer-actions-container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: deleteItem,
    type: "button",
    className: "devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--delete"
  }, "Delete"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: !canSubmit,
    className: "devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-menu-item-action-button",
    onSubmit: save
  }, "Save")));
};

/***/ }),

/***/ "./src/components/SubMenuItem.tsx":
/*!****************************************!*\
  !*** ./src/components/SubMenuItem.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubMenuItem: () => (/* binding */ SubMenuItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItemForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItemForm */ "./src/components/MenuItemForm.tsx");


const SubMenuItem = ({
  uuid,
  title,
  url,
  classes,
  activeSubItemFormUuid,
  columnIndex,
  setFormActive,
  onSave,
  onDelete
}) => {
  const [isEditMode, setIsEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return !isEditMode ? /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "devmcee-mega-menu-builder-content__sub-menu-item-title"
  }, title), /*#__PURE__*/React.createElement("button", {
    disabled: activeSubItemFormUuid !== null && activeSubItemFormUuid !== uuid,
    type: "button",
    className: "devmcee-mega-menu-builder-content-action-button",
    onClick: () => {
      setIsEditMode(true);
      setFormActive(uuid);
    }
  }, "Edit")) : /*#__PURE__*/React.createElement(_MenuItemForm__WEBPACK_IMPORTED_MODULE_1__.MenuItemForm, {
    title: title,
    columnIndex: columnIndex,
    url: url,
    classes: classes,
    uuid: uuid,
    onSave: props => {
      onSave(props);
      setIsEditMode(false);
    },
    onDelete: onDelete
  });
};

/***/ }),

/***/ "./src/components/SubMenuItemColumn.tsx":
/*!**********************************************!*\
  !*** ./src/components/SubMenuItemColumn.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubMenuItemColumn: () => (/* binding */ SubMenuItemColumn)
/* harmony export */ });
/* harmony import */ var _MenuItemForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItemForm */ "./src/components/MenuItemForm.tsx");
/* harmony import */ var _SubMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubMenuItem */ "./src/components/SubMenuItem.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }


const SubMenuItemColumn = ({
  newSubItem,
  subItemUuidList,
  columnIndex,
  activeColumnIndex,
  subMenuItemsMap,
  activeSubMenuItemUuid,
  addNewSubItem,
  saveSubMenuItem,
  onDeleteSubItem,
  setActiveSubMenuItemUuid
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-column-header"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--add",
    onClick: () => addNewSubItem(columnIndex)
  }, "Add sub item")), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-column-content"
  }, !newSubItem && subItemUuidList.length === 0 && 'No sub items', subItemUuidList.map(uuid => {
    return /*#__PURE__*/React.createElement(_SubMenuItem__WEBPACK_IMPORTED_MODULE_1__.SubMenuItem, _extends({
      activeSubItemFormUuid: activeSubMenuItemUuid,
      key: uuid,
      columnIndex: columnIndex
    }, subMenuItemsMap[uuid], {
      onSave: saveSubMenuItem,
      onDelete: () => onDeleteSubItem(columnIndex, uuid),
      setFormActive: setActiveSubMenuItemUuid
    }));
  }), newSubItem && activeColumnIndex === columnIndex && /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-item"
  }, /*#__PURE__*/React.createElement(_MenuItemForm__WEBPACK_IMPORTED_MODULE_0__.MenuItemForm, {
    onSave: saveSubMenuItem,
    onDelete: () => onDeleteSubItem(columnIndex, newSubItem.uuid),
    title: newSubItem.title,
    url: newSubItem.url,
    columnIndex: columnIndex,
    classes: newSubItem.classes,
    uuid: newSubItem.uuid,
    subMenuItemsColumnsUuid: null
  }))));
};

/***/ }),

/***/ "./src/components/SubMenuItemsContainer.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubMenuItemsContainer.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubMenuItemsContainer: () => (/* binding */ SubMenuItemsContainer)
/* harmony export */ });
/* harmony import */ var _hooks_useSubMenuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useSubMenuItems */ "./src/hooks/useSubMenuItems.ts");
/* harmony import */ var _SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubMenuItemsContainer.scss */ "./src/components/SubMenuItemsContainer.scss");
/* harmony import */ var _SubMenuItemColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubMenuItemColumn */ "./src/components/SubMenuItemColumn.tsx");



const SubMenuItemsContainer = ({
  menuItemsMap,
  activeFormUuid,
  subMenuItemsMap,
  subMenuItemsColumnsMap,
  onCreateSubItemsColumns,
  onSaveSubItem,
  onDeleteSubItem
}) => {
  const {
    activeSubMenuItemUuid,
    activeMenuItem,
    columnsData,
    newSubItem,
    activeColumnIndex,
    addNewSubItem,
    deleteNewSubItem,
    setActiveSubMenuItemUuid
  } = (0,_hooks_useSubMenuItems__WEBPACK_IMPORTED_MODULE_0__.useSubMenuItems)({
    menuItemsMap,
    activeFormUuid,
    subMenuItemsMap,
    subMenuItemsColumnsMap
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-container"
  }, !activeMenuItem && /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-placeholder"
  }, "Start editing a menu item to see it's sub items"), activeMenuItem && !activeMenuItem?.subMenuItemsColumnsUuid && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--add",
    onClick: onCreateSubItemsColumns
  }, "Add sub items"), activeMenuItem && columnsData?.length && columnsData.map((subItemUuidList, i) => {
    return /*#__PURE__*/React.createElement(_SubMenuItemColumn__WEBPACK_IMPORTED_MODULE_2__.SubMenuItemColumn, {
      key: i,
      columnIndex: i,
      activeSubMenuItemUuid: activeSubMenuItemUuid,
      activeColumnIndex: activeColumnIndex,
      subItemUuidList: subItemUuidList,
      newSubItem: newSubItem,
      subMenuItemsMap: subMenuItemsMap,
      setActiveSubMenuItemUuid: setActiveSubMenuItemUuid,
      saveSubMenuItem: (...props) => {
        deleteNewSubItem();
        onSaveSubItem(...props);
      },
      addNewSubItem: addNewSubItem,
      onDeleteSubItem: (...props) => {
        deleteNewSubItem();
        onDeleteSubItem(...props);
      }
    });
  }));
};

/***/ }),

/***/ "./src/hooks/useLanguagesTabsBar.ts":
/*!******************************************!*\
  !*** ./src/hooks/useLanguagesTabsBar.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLanguagesTabsBar: () => (/* binding */ useLanguagesTabsBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useLanguagesTabsBar = ({
  defaultLanguage
}) => {
  const [activeLanguageTab, setActiveLanguageTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultLanguage);
  return {
    activeLanguageTab,
    setActiveLanguageTab
  };
};

/***/ }),

/***/ "./src/hooks/useMegaMenu.ts":
/*!**********************************!*\
  !*** ./src/hooks/useMegaMenu.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMegaMenu: () => (/* binding */ useMegaMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.types */ "./src/app.types.ts");


const useMegaMenu = ({
  languages,
  selectedLanguage,
  endpoints,
  customNonce,
  postID,
  data
}) => {
  const [newMenuItem, setNewMenuItem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [menuItemsMap, setMenuItemsMap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.menuItemsMap || {});
  const [menuItemsListToLocaleMap, setMenuItemsListToLocaleMap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.menuItemsListToLocaleMap || {});
  const [subMenuItemsMap, setSubMenuItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data?.subMenuItemsMap || {});
  const [subMenuItemsColumnsMap, setSubMenuItemsColumnsMap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data?.subMenuItemsColumnsMap || {});
  const [activeFormUuid, setActiveFormUuid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const addNewMenuItem = () => {
    setNewMenuItem({
      title: '',
      url: '',
      subMenuItemsColumnsUuid: null
    });
  };
  const sendRequest = ({
    menuItemsListToLocaleMap,
    menuItemsMap,
    subMenuItemsMap,
    subMenuItemsColumnsMap,
    onSuccess
  }) => {
    fetch(endpoints[_app_types__WEBPACK_IMPORTED_MODULE_1__.EndpointName.SAVE], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': customNonce
      },
      body: JSON.stringify({
        data: {
          menuItemsListToLocaleMap,
          menuItemsMap,
          subMenuItemsMap,
          subMenuItemsColumnsMap
        },
        postID
      })
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    }).then(data => {
      console.log(data);
      onSuccess();
    }).catch(error => console.error(error));
  };
  const saveMenuItem = menuItem => {
    const uuid = menuItem.uuid || crypto.randomUUID();
    const newMenuItemsListToLocaleMap = updateMenuItemsListToLocaleMap(menuItemsListToLocaleMap, uuid);
    const newMenuItemsMap = updateMenuItemsMap(menuItemsMap, menuItem, uuid);
    sendRequest({
      menuItemsListToLocaleMap: newMenuItemsListToLocaleMap,
      menuItemsMap: newMenuItemsMap,
      subMenuItemsMap,
      subMenuItemsColumnsMap: subMenuItemsColumnsMap,
      onSuccess: () => {
        setMenuItemsListToLocaleMap(newMenuItemsListToLocaleMap);
        setMenuItemsMap(newMenuItemsMap);
        setNewMenuItem(null);
        setActiveFormUuid(null);
      }
    });
  };
  const updateMenuItemsListToLocaleMap = (prev, uuid) => {
    const prevItems = new Set(prev[selectedLanguage]);
    prevItems.add(uuid);
    return {
      ...prev,
      [selectedLanguage]: [...prevItems]
    };
  };
  const updateMenuItemsMap = (prev, menuItem, uuid) => ({
    ...prev,
    [uuid]: {
      ...menuItem,
      uuid
    }
  });
  const deleteItemInMenuItemsListToLocaleMap = (prev, uuid) => {
    const prevItems = new Set(prev[selectedLanguage]);
    prevItems.delete(uuid);
    return {
      ...prev,
      [selectedLanguage]: [...prevItems]
    };
  };
  const deleteItemInMenuItemsMap = (prev, uuid) => {
    const {
      [uuid]: _,
      ...rest
    } = prev;
    return rest;
  };
  const deleteSubMenuItemsColumnsMapItem = (prev, uuid) => {
    if (!uuid) return prev;
    const {
      [uuid]: _,
      ...rest
    } = prev;
    return rest;
  };
  const deletMenuItem = uuid => {
    setActiveFormUuid(null);
    if (!uuid) {
      setNewMenuItem(null);
      return;
    }
    const newMenuItemsListToLocaleMap = deleteItemInMenuItemsListToLocaleMap(menuItemsListToLocaleMap, uuid);
    const newMenuItemsMap = deleteItemInMenuItemsMap(menuItemsMap, uuid);
    const newSubMenuItemsColumnsMap = deleteSubMenuItemsColumnsMapItem(subMenuItemsColumnsMap, menuItemsMap[uuid].subMenuItemsColumnsUuid);
    sendRequest({
      menuItemsListToLocaleMap: newMenuItemsListToLocaleMap,
      menuItemsMap: newMenuItemsMap,
      subMenuItemsMap: subMenuItemsMap,
      subMenuItemsColumnsMap: newSubMenuItemsColumnsMap,
      onSuccess: () => {
        setMenuItemsListToLocaleMap(newMenuItemsListToLocaleMap);
        setMenuItemsMap(newMenuItemsMap);
        setSubMenuItemsColumnsMap(newSubMenuItemsColumnsMap);
      }
    });
  };
  const createSubItemsColumns = () => {
    const uuid = crypto.randomUUID();
    setSubMenuItemsColumnsMap(prev => ({
      ...prev,
      [uuid]: [[], [], []]
    }));
    if (activeFormUuid) {
      setMenuItemsMap(prev => ({
        ...prev,
        [activeFormUuid]: {
          ...prev[activeFormUuid],
          subMenuItemsColumnsUuid: uuid
        }
      }));
    }
  };
  const deleteSubItemsColumns = () => {};
  const updateSubMenuItemsMap = (prev, subMenuItem) => {
    const {
      uuid
    } = subMenuItem;
    return {
      ...prev,
      [uuid]: {
        ...subMenuItem
      }
    };
  };
  const updateSubMenuItemsColumnsMap = (prev, subMenuItem) => {
    const {
      uuid,
      columnIndex
    } = subMenuItem;
    const activeFormColumnsUuid = menuItemsMap[activeFormUuid].subMenuItemsColumnsUuid;
    prev[activeFormColumnsUuid][columnIndex].push(uuid);
    return {
      ...prev,
      [activeFormColumnsUuid]: [...prev[activeFormColumnsUuid]]
    };
  };
  const saveSubItem = subMenuItem => {
    subMenuItem.uuid = subMenuItem.uuid || crypto.randomUUID();
    const newSubMenuItemsMap = updateSubMenuItemsMap(subMenuItemsMap, subMenuItem);
    const newSubMenuItemsColumnsMap = updateSubMenuItemsColumnsMap(subMenuItemsColumnsMap, subMenuItem);
    sendRequest({
      menuItemsListToLocaleMap,
      menuItemsMap,
      subMenuItemsMap: newSubMenuItemsMap,
      subMenuItemsColumnsMap: subMenuItemsColumnsMap,
      onSuccess: () => {
        setSubMenuItems(newSubMenuItemsMap);
        setSubMenuItemsColumnsMap(newSubMenuItemsColumnsMap);
      }
    });
  };
  const deleteSubMenuItemsMapItem = (prev, uuid) => {
    const {
      [uuid]: _,
      ...rest
    } = prev;
    return {
      ...rest
    };
  };
  const deleteSubMenuItemFromColoumn = (prev, uuid, columnIndex) => {
    const activeFormColumnsUuid = menuItemsMap[activeFormUuid].subMenuItemsColumnsUuid;
    const newSubMenuItemsList = prev[activeFormColumnsUuid][columnIndex].filter(_uuid => _uuid !== uuid);
    return {
      ...prev,
      [activeFormColumnsUuid]: [...newSubMenuItemsList]
    };
  };
  const deleteSubItem = (columnIndex, uuid) => {
    if (!uuid) return;
    const newSubMenuItemsMap = deleteSubMenuItemsMapItem(subMenuItemsMap, uuid);
    const newSubMenuItemsColumnsMap = deleteSubMenuItemFromColoumn(subMenuItemsColumnsMap, uuid, columnIndex);
    sendRequest({
      menuItemsListToLocaleMap,
      menuItemsMap,
      subMenuItemsMap: newSubMenuItemsMap,
      subMenuItemsColumnsMap: subMenuItemsColumnsMap,
      onSuccess: () => {
        setSubMenuItems(newSubMenuItemsMap);
        setSubMenuItemsColumnsMap(newSubMenuItemsColumnsMap);
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (languages.length) {
      const menuItemsListToLocalEntities = languages.map(lang => [lang, data?.menuItemsListToLocaleMap[lang] || []]);
      setMenuItemsListToLocaleMap(Object.fromEntries(menuItemsListToLocalEntities));
    }
  }, [languages, data.menuItemsListToLocaleMap]);
  return {
    menuItemsMap,
    menuItemsListToLocaleMap,
    subMenuItemsMap: subMenuItemsMap,
    subMenuItemsColumnsMap,
    newMenuItem,
    activeFormUuid,
    createSubItemsColumns,
    deleteSubItemsColumns,
    saveSubItem,
    deleteSubItem,
    addNewMenuItem,
    saveMenuItem,
    deletMenuItem,
    setActiveFormUuid
  };
};

/***/ }),

/***/ "./src/hooks/useMenuItemForm.ts":
/*!**************************************!*\
  !*** ./src/hooks/useMenuItemForm.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMenuItemForm: () => (/* binding */ useMenuItemForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useMenuItemForm = ({
  title,
  url,
  classes,
  uuid,
  subMenuItemsColumnsUuid,
  description,
  columnIndex,
  onSave,
  onDelete
}) => {
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title,
    url,
    classes,
    uuid,
    description,
    subMenuItemsColumnsUuid: subMenuItemsColumnsUuid || null,
    columnIndex
  });
  const isSubMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => typeof columnIndex === 'number', [columnIndex]);
  const canSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => !isSubMenu ? !!form.title && !!form.url : !!form.title && !!form.url && !!form.description, [form.title, form.url, form.description]);
  const headerTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => uuid ? form.title : `${form.title || 'New item'}`, [uuid, form.title]);
  const save = event => {
    event.preventDefault();
    if (!form.title || !form.url || isSubMenu && !form.description) {
      return;
    }
    onSave(form);
  };
  const changeField = event => {
    const {
      name,
      value
    } = event.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const deleteItem = () => {
    onDelete(form.uuid);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setForm(prev => ({
      ...prev,
      subMenuItemsColumnsUuid: subMenuItemsColumnsUuid || null
    }));
  }, [subMenuItemsColumnsUuid]);
  return {
    form,
    headerTitle,
    canSubmit,
    save,
    changeField,
    deleteItem
  };
};

/***/ }),

/***/ "./src/hooks/useSubMenuItems.ts":
/*!**************************************!*\
  !*** ./src/hooks/useSubMenuItems.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSubMenuItems: () => (/* binding */ useSubMenuItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSubMenuItems = ({
  menuItemsMap,
  activeFormUuid,
  subMenuItemsMap,
  subMenuItemsColumnsMap
}) => {
  const [newSubItem, setNewSubItem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activeColumnIndex, setActiveColumnIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activeSubMenuItemUuid, setActiveSubMenuItemUuid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const activeMenuItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => activeFormUuid ? menuItemsMap[activeFormUuid] : null, [activeFormUuid, menuItemsMap]);
  const columnsData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!activeMenuItem || !subMenuItemsColumnsMap) return null;
    if (!activeMenuItem.subMenuItemsColumnsUuid) return null;
    return subMenuItemsColumnsMap[activeMenuItem.subMenuItemsColumnsUuid];
  }, [activeMenuItem?.subMenuItemsColumnsUuid, subMenuItemsColumnsMap]);
  const addNewSubItem = columnIndex => {
    setActiveColumnIndex(columnIndex);
    setNewSubItem({
      title: '',
      url: '',
      description: ''
    });
  };
  const deleteNewSubItem = () => {
    setNewSubItem(null);
    setActiveColumnIndex(null);
  };
  return {
    activeSubMenuItemUuid,
    activeColumnIndex,
    newSubItem,
    addNewSubItem,
    activeMenuItem,
    columnsData,
    deleteNewSubItem,
    setActiveSubMenuItemUuid
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app.styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app.styles.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --devmcee-mega-menu-admin-primary-color: #000;
  --devmcee-mega-menu-admin-primary-contrast-color: #fff;
  --devmcee-mega-menu-admin-secondary-color: #f8f9fa;
  --devmcee-mega-menu-admin-button-primary-color: #3a3a3a;
  --devmcee-mega-menu-admin-button-secondary-color: #F5F6FA;
  --devmcee-mega-menu-admin-button-secondary-hover-color: #D9DADF;
  --devmcee-mega-menu-admin-action-button-primary-color: #2782ad;
  --devmcee-mega-menu-admin-action-button-primary-color-hover: #1f6789;
  --devmcee-mega-menu-admin-action-button-primary-color-disabled: #BABABA;
  --devmcee-mega-menu-admin-action-button-primary-color-delete: #b32d2e;
  --devmcee-mega-menu-admin-action-button-primary-color-delete-hover: #721d1d;
  --devmcee-mega-menu-admin-background-secondary-color: #F5F6FA;
  --devmcee-mega-menu-admin-border-secondary-color: #dcdcde;
  --devmcee-mega-menu-admin-builder-container-root-column-width: 300px;
  --devmcee-mega-menu-admin-builder-secondary-font-size: 10px;
  --devmcee-mega-menu-primary-color: #4462ff;
  --devmcee-mega-menu-secondary-color: #f8f9fa;
  --devmcee-mega-menu-font-primary-color: #000;
  --devmcee-mega-menu-font-secondary-color: #5B6073;
  --devmcee-mega-menu-button-primary-color: #4462ff;
  --devmcee-mega-menu-button-primary-hover-color: #3650d1;
  --devmcee-mega-menu-button-secondary-color: #F5F6FA;
  --devmcee-mega-menu-button-secondary-hover-color: #D9DADF;
  --devmcee-mega-menu-mobile-menu-button-secondary-color: #fff;
  --devmcee-mega-menu-column-background-color: #1EA52317;
  --devmcee-mega-menu-border-color: #c3c4c7;
  --devmcee-mega-menu-border-secondary-color: #d3d5e6;
}

.devmcee-mega-menu-builder-container {
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 600px;
}`, "",{"version":3,"sources":["webpack://./src/app.styles.scss"],"names":[],"mappings":"AAAA;EACE,6CAAA;EACA,sDAAA;EACA,kDAAA;EACA,uDAAA;EACA,yDAAA;EACA,+DAAA;EACA,8DAAA;EACA,oEAAA;EACA,uEAAA;EACA,qEAAA;EACA,2EAAA;EACA,6DAAA;EACA,yDAAA;EAEA,oEAAA;EACA,2DAAA;EAEA,0CAAA;EACA,4CAAA;EACA,4CAAA;EACA,iDAAA;EACA,iDAAA;EACA,uDAAA;EACA,mDAAA;EACA,yDAAA;EACA,4DAAA;EACA,sDAAA;EACA,yCAAA;EACA,mDAAA;AADF;;AAKE;EACE,cAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,iBAAA;AAFJ","sourcesContent":[":root {\n  --devmcee-mega-menu-admin-primary-color: #000;\n  --devmcee-mega-menu-admin-primary-contrast-color: #fff;\n  --devmcee-mega-menu-admin-secondary-color: #f8f9fa;\n  --devmcee-mega-menu-admin-button-primary-color: #3a3a3a;\n  --devmcee-mega-menu-admin-button-secondary-color: #F5F6FA;\n  --devmcee-mega-menu-admin-button-secondary-hover-color: #D9DADF;\n  --devmcee-mega-menu-admin-action-button-primary-color: #2782ad;\n  --devmcee-mega-menu-admin-action-button-primary-color-hover: #1f6789;\n  --devmcee-mega-menu-admin-action-button-primary-color-disabled: #BABABA;\n  --devmcee-mega-menu-admin-action-button-primary-color-delete: #b32d2e;\n  --devmcee-mega-menu-admin-action-button-primary-color-delete-hover: #721d1d;\n  --devmcee-mega-menu-admin-background-secondary-color: #F5F6FA;\n  --devmcee-mega-menu-admin-border-secondary-color: #dcdcde;\n\n  --devmcee-mega-menu-admin-builder-container-root-column-width: 300px;\n  --devmcee-mega-menu-admin-builder-secondary-font-size: 10px;\n\n  --devmcee-mega-menu-primary-color: #4462ff;\n  --devmcee-mega-menu-secondary-color: #f8f9fa;\n  --devmcee-mega-menu-font-primary-color: #000;\n  --devmcee-mega-menu-font-secondary-color: #5B6073;\n  --devmcee-mega-menu-button-primary-color: #4462ff;\n  --devmcee-mega-menu-button-primary-hover-color: #3650d1;\n  --devmcee-mega-menu-button-secondary-color: #F5F6FA;\n  --devmcee-mega-menu-button-secondary-hover-color: #D9DADF;\n  --devmcee-mega-menu-mobile-menu-button-secondary-color: #fff;\n  --devmcee-mega-menu-column-background-color: #1EA52317;\n  --devmcee-mega-menu-border-color: #c3c4c7;\n  --devmcee-mega-menu-border-secondary-color: #d3d5e6;\n}\n\n.devmcee-mega-menu-builder {\n  &-container {\n    margin: 16px 0;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    min-height: 600px;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/LanguagesTabsBar.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/LanguagesTabsBar.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.devmcee-mega-menu-languages-tabs-bar-container {
  display: flex;
}
.devmcee-mega-menu-languages-tabs-tab {
  padding: 8px 24px;
  cursor: pointer;
  background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);
  border: 1px solid var(--devmcee-mega-menu-border-color);
  border-left: none;
  text-transform: uppercase;
}
.devmcee-mega-menu-languages-tabs-tab--active {
  background-color: var(--devmcee-mega-menu-admin-primary-color);
  color: var(--devmcee-mega-menu-admin-primary-contrast-color);
}
.devmcee-mega-menu-languages-tabs-tab--add {
  border: none;
  background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);
}
.devmcee-mega-menu-languages-tabs-tab:first-child {
  border-left: 1px solid var(--devmcee-mega-menu-border-color);
}`, "",{"version":3,"sources":["webpack://./src/components/LanguagesTabsBar.scss"],"names":[],"mappings":"AACE;EACE,aAAA;AAAJ;AAEE;EACE,iBAAA;EACA,eAAA;EACA,uEAAA;EACA,uDAAA;EACA,iBAAA;EACA,yBAAA;AAAJ;AAEI;EACE,8DAAA;EACA,4DAAA;AAAN;AAII;EACE,YAAA;EACA,uEAAA;AAFN;AAKE;EACE,4DAAA;AAHJ","sourcesContent":[".devmcee-mega-menu-languages-tabs {\n  &-bar-container {\n    display: flex;\n  }\n  &-tab {\n    padding: 8px 24px;\n    cursor: pointer;\n    background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);\n    border: 1px solid var(--devmcee-mega-menu-border-color); \n    border-left: none;\n    text-transform: uppercase;\n\n    &--active {\n      background-color: var(--devmcee-mega-menu-admin-primary-color);\n      color: var(--devmcee-mega-menu-admin-primary-contrast-color)\n\n    }\n\n    &--add {\n      border: none;\n      background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);\n    }\n  }\n  &-tab:first-child {\n    border-left: 1px solid var(--devmcee-mega-menu-border-color);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MegaMenuContainer.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MegaMenuContainer.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.devmcee-mega-menu-builder-content-container {
  display: flex;
  flex-grow: 1;
  height: 100%;
  background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);
  min-width: var(--devmcee-mega-menu-admin-builder-container-root-column-width);
}
.devmcee-mega-menu-builder-content__root-menu {
  display: flex;
  flex-direction: column;
}
.devmcee-mega-menu-builder-content-action-bar {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  border-left: 1px solid var(--devmcee-mega-menu-border-color);
  border-right: 1px solid var(--devmcee-mega-menu-border-color);
}
.devmcee-mega-menu-builder-content-action-button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  color: var(--devmcee-mega-menu-admin-action-button-primary-color);
}
.devmcee-mega-menu-builder-content-action-button:hover {
  color: var(--devmcee-mega-menu-admin-action-button-primary-color-hover);
}
.devmcee-mega-menu-builder-content-action-button:disabled {
  color: var(--devmcee-mega-menu-admin-action-button-primary-color-disabled);
  cursor: not-allowed;
}
.devmcee-mega-menu-builder-content-action-button--delete {
  color: var(--devmcee-mega-menu-admin-action-button-primary-color-delete);
}
.devmcee-mega-menu-builder-content-action-button--delete:hover {
  color: var(--devmcee-mega-menu-admin-action-button-primary-color-delete-hover);
}
.devmcee-mega-menu-builder-content-menu-container {
  border: 1px solid var(--devmcee-mega-menu-border-color);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  width: var(--devmcee-mega-menu-admin-builder-container-root-column-width);
}`, "",{"version":3,"sources":["webpack://./src/components/MegaMenuContainer.scss"],"names":[],"mappings":"AACE;EACE,aAAA;EACA,YAAA;EACA,YAAA;EACA,uEAAA;EACA,6EAAA;AAAJ;AAGE;EACE,aAAA;EACA,sBAAA;AADJ;AAIE;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,4DAAA;EACA,6DAAA;AAFJ;AAKE;EACE,eAAA;EACA,YAAA;EACA,6BAAA;EACA,0BAAA;EACA,iEAAA;AAHJ;AAKI;EACE,uEAAA;AAHN;AAMI;EACE,0EAAA;EACA,mBAAA;AAJN;AAOI;EACE,wEAAA;AALN;AAQI;EACE,8EAAA;AANN;AAUE;EACE,uDAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;EACA,yEAAA;AARJ","sourcesContent":[".devmcee-mega-menu-builder-content {\n  &-container {\n    display: flex;\n    flex-grow: 1;\n    height: 100%;\n    background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);\n    min-width: var(--devmcee-mega-menu-admin-builder-container-root-column-width);\n  }\n\n  &__root-menu {\n    display: flex;\n    flex-direction: column;\n  }\n\n  &-action-bar {\n    padding: 8px;\n    display: flex;\n    justify-content: space-between;\n    border-left: 1px solid var(--devmcee-mega-menu-border-color);\n    border-right: 1px solid var(--devmcee-mega-menu-border-color);\n  }\n\n  &-action-button {\n    cursor: pointer;\n    border: none;\n    background-color: transparent;\n    text-decoration: underline;\n    color: var(--devmcee-mega-menu-admin-action-button-primary-color);\n\n    &:hover {\n      color: var(--devmcee-mega-menu-admin-action-button-primary-color-hover);\n    }\n\n    &:disabled {\n      color: var(--devmcee-mega-menu-admin-action-button-primary-color-disabled);\n      cursor: not-allowed;\n    }\n\n    &--delete {\n      color: var(--devmcee-mega-menu-admin-action-button-primary-color-delete);\n    }\n\n    &--delete:hover {\n      color: var(--devmcee-mega-menu-admin-action-button-primary-color-delete-hover);\n    }\n  }\n\n  &-menu-container {\n    border: 1px solid var(--devmcee-mega-menu-border-color);\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    height: 100%;\n    width: var(--devmcee-mega-menu-admin-builder-container-root-column-width);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuItem.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuItem.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.devmcee-mega-menu-builder-menu-item {
  border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);
}
.devmcee-mega-menu-builder-menu-item-title-container {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}
.devmcee-mega-menu-builder-menu-item-form-title-bar {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  background-color: var(--devmcee-mega-menu-admin-background-secondary-color);
}
.devmcee-mega-menu-builder-menu-item-form__fields-container {
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
.devmcee-mega-menu-builder-menu-item-form__fields-container input {
  width: 100%;
}
.devmcee-mega-menu-builder-menu-item__sub-title-container {
  padding: 0 8px 8px;
  font-size: var(--devmcee-mega-menu-admin-builder-secondary-font-size);
}`, "",{"version":3,"sources":["webpack://./src/components/MenuItem.scss"],"names":[],"mappings":"AAAA;EACE,8EAAA;AACF;AAEI;EACE,aAAA;EACA,8BAAA;EACA,YAAA;AAAN;AAMM;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,2EAAA;AAJR;AAQI;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AANN;AAQM;EACE,WAAA;AANR;AAYI;EACE,kBAAA;EACA,qEAAA;AAVN","sourcesContent":[".devmcee-mega-menu-builder-menu-item {\n  border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);\n\n  &-title {\n    &-container {\n      display: flex;\n      justify-content: space-between;\n      padding: 8px;\n    }\n  }\n\n  &-form {\n    &-title {\n      &-bar {\n        padding: 8px;\n        display: flex;\n        justify-content: space-between;\n        background-color: var(--devmcee-mega-menu-admin-background-secondary-color);\n      }\n    }\n\n    &__fields-container {\n      padding: 8px;\n      display: flex;\n      flex-direction: column;\n      row-gap: 8px;\n\n      & input {\n        width: 100%;\n      }\n    }\n  }\n\n  &__sub-title {\n    &-container {\n      padding: 0 8px 8px;\n      font-size: var(--devmcee-mega-menu-admin-builder-secondary-font-size);\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuItemForm.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuItemForm.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.devmcee-mega-menu-builder-menu-item-form-title-bar {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  background-color: var(--devmcee-mega-menu-admin-background-secondary-color);
}
.devmcee-mega-menu-builder-menu-item-form__fields-container {
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
.devmcee-mega-menu-builder-menu-item-form__fields-container textarea, .devmcee-mega-menu-builder-menu-item-form__fields-container input {
  width: 100%;
  border-color: var(--devmcee-mega-menu-admin-border-secondary-color);
}
.devmcee-mega-menu-builder-menu-item-form__footer-actions-container {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}`, "",{"version":3,"sources":["webpack://./src/components/MenuItemForm.scss"],"names":[],"mappings":"AAEI;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,2EAAA;AADN;AAKE;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AAHJ;AAKI;EAEE,WAAA;EACA,mEAAA;AAJN;AAQE;EACE,aAAA;EACA,8BAAA;EACA,YAAA;AANJ","sourcesContent":[".devmcee-mega-menu-builder-menu-item-form {\n  &-title {\n    &-bar {\n      padding: 8px;\n      display: flex;\n      justify-content: space-between;\n      background-color: var(--devmcee-mega-menu-admin-background-secondary-color);\n    }\n  }\n\n  &__fields-container {\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 8px;\n\n    & textarea,\n    & input {\n      width: 100%;\n      border-color: var(--devmcee-mega-menu-admin-border-secondary-color);\n    }\n  }\n\n  &__footer-actions-container {\n    display: flex;\n    justify-content: space-between;\n    padding: 8px;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SubMenuItemsContainer.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SubMenuItemsContainer.scss ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.devmcee-mega-menu-builder-content__sub-menu {
  display: flex;
  width: 100%;
}
.devmcee-mega-menu-builder-content__sub-menu-container {
  padding: 8px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  column-gap: 8px;
  align-items: flex-start;
}
.devmcee-mega-menu-builder-content__sub-menu-column {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);
  width: 33.33%;
  height: 100%;
}
.devmcee-mega-menu-builder-content__sub-menu-column-header {
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);
}
.devmcee-mega-menu-builder-content__sub-menu-column-content {
  padding: 8px;
}`, "",{"version":3,"sources":["webpack://./src/components/SubMenuItemsContainer.scss"],"names":[],"mappings":"AACE;EACE,aAAA;EACA,WAAA;AAAJ;AACI;EACE,YAAA;EACA,aAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;EACA,uBAAA;AACN;AACI;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,uEAAA;EACA,aAAA;EACA,YAAA;AACN;AACM;EACE,aAAA;EACA,mBAAA;EACA,YAAA;EACA,8EAAA;AACR;AAEM;EACE,YAAA;AAAR","sourcesContent":[".devmcee-mega-menu-builder-content {\n  &__sub-menu {\n    display: flex;\n    width: 100%;\n    &-container {\n      padding: 8px;\n      display: flex;\n      flex-grow: 1;\n      justify-content: space-between;\n      column-gap: 8px;\n      align-items: flex-start;\n    }\n    &-column {\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      border: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);\n      width: 33.33%;\n      height: 100%;\n      \n      &-header {\n        display: flex;\n        align-items: center;\n        padding: 8px;\n        border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);\n      }\n\n      &-content {\n        padding: 8px;\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/app.styles.scss":
/*!*****************************!*\
  !*** ./src/app.styles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./app.styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app.styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/LanguagesTabsBar.scss":
/*!**********************************************!*\
  !*** ./src/components/LanguagesTabsBar.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./LanguagesTabsBar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/LanguagesTabsBar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MegaMenuContainer.scss":
/*!***********************************************!*\
  !*** ./src/components/MegaMenuContainer.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./MegaMenuContainer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MegaMenuContainer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MenuItem.scss":
/*!**************************************!*\
  !*** ./src/components/MenuItem.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./MenuItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuItem.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MenuItemForm.scss":
/*!******************************************!*\
  !*** ./src/components/MenuItemForm.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./MenuItemForm.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuItemForm.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SubMenuItemsContainer.scss":
/*!***************************************************!*\
  !*** ./src/components/SubMenuItemsContainer.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./SubMenuItemsContainer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SubMenuItemsContainer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.tsx");


document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('devmcee-mega-menu-root');
  if (rootElement) {
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(rootElement);
    root.render(/*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_1__.App, null));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map