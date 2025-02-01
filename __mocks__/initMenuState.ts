import { EndpointName } from "../src/app.types";
import { MenuState } from "../src/reducers/menuState.types";

export const initState: MenuState = {
  menuItemForm: null,
  subMenuItemForm: null,
  subMenuItems: {
    "8351bcb3-1946-42a4-9c27-ffcafc214d14": {
      languageCode: "en",
      title: "asf",
      url: "asdf",
      uuid: "8351bcb3-1946-42a4-9c27-ffcafc214d14",
      description: "asdf",
      columnIndex: 0
    },
    "d5d2ef3e-fff5-4050-8033-ec2c04873d07": {
      languageCode: "en",
      title: "asfd",
      url: "sdaf",
      uuid: "d5d2ef3e-fff5-4050-8033-ec2c04873d07",
      description: "asdf",
      columnIndex: 2
    }
  },
  menuItems: {
    "31431793-5815-4aff-a17e-d17a064eb255": {
      languageCode: "en",
      title: "item",
      url: "/item",
      uuid: "31431793-5815-4aff-a17e-d17a064eb255",
      subMenuItemsColumnsUuid: "ea91b400-9388-47be-99d8-ef60ae16bfcf"
    },
    "f6436f77-1ba9-412a-8d5a-6607010f0cb7": {
      languageCode: "en",
      title: "item et",
      url: "/item-et",
      uuid: "f6436f77-1ba9-412a-8d5a-6607010f0cb7",
      subMenuItemsColumnsUuid: null
    }
  },
  localMenu: {
    en: [
      "31431793-5815-4aff-a17e-d17a064eb255"
    ],
    et: [
      "f6436f77-1ba9-412a-8d5a-6607010f0cb7"
    ],
    fi: [],
    de: [],
    pl: []
  },
  subMenuItemsColumns: {
    "ea91b400-9388-47be-99d8-ef60ae16bfcf": [
      [
        "8351bcb3-1946-42a4-9c27-ffcafc214d14"
      ],
      [],
      [
        "d5d2ef3e-fff5-4050-8033-ec2c04873d07"
      ]
    ]
  }
};

export var devmceeMegaMenuInitData = {
  languages: [],
  defaultLanguage: 'en',
  activeLanguageTab: 'en',
  endpoints: {
    [EndpointName.SAVE]: '',
  },
  data: initState,
  customNonce: "",
  postID: 0
}