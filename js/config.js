(function () {

  var location_protocol = "https:"; //location.protocol;
  var location_host = "javierabadia.maps.arcgis.com"; //location.host;
  /***************************************
   * Modify this path based on your setup
   ***************************************/
  var DEPLOY_ROOT = location_protocol + '//' + location_host + '/home/';

  window.esriGeowConfig = {

    /***************************************
     * Basics
     ***************************************/
    baseUrl: DEPLOY_ROOT,
    webmapViewerPath: 'webmap/viewer.html',
    dojoBaseUrl: DEPLOY_ROOT + '/js/dojo/',
    proxyUrl: '',
    proxyServer: location_protocol + '//' + location_host + '/sharing/proxy',
    restBaseUrl: location_protocol + '//' + location_host + '/sharing/rest/',
    reflectorUrl: location_protocol + '//' + location_host + '/sharing/tools/reflect',
    bridgeUrl: location_protocol + '//' + location_host + '/sharing/tools/bridge',
    marketplaceUrl: location_protocol + '//' + 'marketplace.arcgis.com',
    openDataUrl: location_protocol + '//' + 'opendata.arcgis.com/sites',
    kmlService: location_protocol + '//utility.arcgis.com/sharing/kml',
    geoRSSService: location_protocol + '//utility.arcgis.com/sharing/rss',
    geoIPService: location_protocol + '//' + location_host + '/sharing/geoip.jsp',
    legend: location_protocol + '//utility.arcgis.com/sharing/tools/legend',
    isRightToLeft: false,
    cdnServerUrl: ".",

    // services with these domains will be switched to https if the map viewer is running under https and also count as federated servers with AGOL
    httpsDomains: ["arcgis.com", "arcgisonline.com", "esrikr.com", "premiumservices.blackbridge.com", "esripremium.accuweather.com", "gbm.digitalglobe.com", "firstlook.digitalglobe.com", "msi.digitalglobe.com"],
    // these AGOL services can be used for Offline
    agolServicesWithExportTilesAllowed: ["NatGeo_World_Map", "Ocean_Basemap", "USA_Topo_Maps", "World_Imagery", "World_Street_Map", "World_Terrain_Base", "World_Topo_Map", "Canvas/World_Light_Gray_Base", "Canvas/World_Light_Gray_Reference", "Ocean/World_Ocean_Base", "Ocean/World_Ocean_Reference", "Reference/World_Boundaries_and_Places", "Reference/World_Reference_Overlay", "Reference/World_Transportation"],

    /***************************************
     * ArcGIS portal settings
     ***************************************/
    portalHeaderImage: null,
    explorerName: null,
    tokenExpiration: 120,
    longTokenExpiration: 20160,
    esriGlobalAccount: null,
    useDefaultIdentityStore: false,
    signin: 'signin.html',
    signup: 'signup.html',
    join: 'join.html',
    setup: 'setup.html',
    createAccount: 'createaccount.html',
    showSignUp: true,
    webSearchEnabled: true,
    showSocialMediaLinks: true,
    showHelpLink: true,
    showForumsLink: true,
    showBlogLink: true,
    showCoachMarksTours: true,
    addContentSecurityText: null,
    classificationBanner: false,
    bingMapsKey: 'AkK7SfcWPN7GHw6PGK3n4C4TGXB6AiwNwsmtlZWP7Ew16iWSyaUiAPZzZOdlvFCu',
    contentPageHiddenTypes: null,
    showOrganizationInviteUsers: true,
    showForgotUsername: true,
    isMultiTenant: true,
    publishTilesFromFeaturesEnabled: true,
    federatedServerConfigEnabled: false,
    hostedServerConfigEnabled: false,
    enterpriseLoginConfigEnabled: true,
    openDataConfigEnabled: true,
    manageLicensesEnabled: true,
    findFeaturesWebMapEnabled: true,
    webAppBuilderEnabled: false,
    sceneViewerEnabled: false,
    restrictOrganizationPageToAdmin: false,
    geocodeAutoComplete: true, // enable suggest [true|false]

    //*** parameters for new account creation via ECAS REST API
    //*** to turn on: comment out account_registration and uncomment accountApi, accountApiKey, and accountAppKey
    accountApi: "https://ecasapi.esri.com/1.0/accounts",
    accountApiKey: "54czglhz",
    accountAppKey: "RC10SB959G",

    /***************************************
     * Links
     ***************************************/
    bitlyUrl: 'http://api.bit.ly/v3/shorten?login=arcgis&apiKey=R_b8a169f3a8b978b9697f64613bf1db6d',
    bitlyUrlSSL: 'https://api-ssl.bitly.com/v3/shorten?login=arcgis&apiKey=R_b8a169f3a8b978b9697f64613bf1db6d',
    gcsBasemapService: location_protocol + "//services.arcgisonline.com/ArcGIS/rest/services/ESRI_Imagery_World_2D/MapServer",
    extentService: location_protocol + "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer", //"//server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer",
    explorerOnline: location_protocol + '//' + location_host + '/explorer',
    resourceCenter: "http://resources.arcgis.com",
    //account_registration: "https://webaccounts.esri.com/cas/index.cfm?fuseaction=Registration.ShowForm&ReturnURL=https%3A%2F%2Fwww.arcgis.com%2Fhome%2Fsignup.html&FailURL=http%3A%2F%2Fwww.arcgis.com&appId=RC10SB959G",
    account_edit: "https://webaccounts.esri.com/CAS/index.cfm?fuseaction=Profile.showForm",
    forgotPwd: "https://webaccounts.esri.com/cas/index.cfm?fuseaction=Login.ForgotPwd.ShowForm&appId=RC10SB959G&FailURL=http%3A%2F%2Fwww.arcgis.com&ReturnURL=https%3A%2F%2Fwww.arcgis.com%2Fhome%2Fsignin.html",
    forums: "http://forums.arcgis.com/forums/30-ArcGIS-Online",
    blog: "http://blogs.esri.com/esri/arcgis/category/arcgis-online/",
    esriCommunityLink: "https://community.esri.com",
    myEsriLink: "https://my.esri.com",
    footerLinks: [
      {
        title: "Esri.com",
        url: "http://www.esri.com"
      },
      {
        title: "ArcGIS Marketplace", // product name, don't localize
        url: "http://marketplace.arcgis.com" // replaced with esriGeowConfig.marketplaceUrl in footer code
      },
      {
        title: "${i18n.help}",
        url: "support.html"
      },
      {
        title: "${i18n.termsOfUse}",
        url: "http://www.esri.com/legal/licensing/software-license.html"
      },
      {
        title: "${i18n.privacy}",
        url: "http://www.esri.com/legal/privacy-arcgis"
      },
      {
        title: "${i18n.contactUs}",
        email: "arcgisonline_feedback@esri.com",
        type: "contactUs"
      },
      {
        title: "${i18n.reportAbuse}",
        email: "arcgisonline_feedback@esri.com",
        type: "reportAbuse"
      }
    ],

    /***************************************
     * Specific groups and owners
     ***************************************/
    //*** Esri user names
    publisherESRI: "(owner:esri OR owner:esri_webapi OR owner:arcgis_explorer OR owner:SLDevTeam OR owner:ArcGISMobileDevTeam OR owner:iOSDevelopmentTeam)",

    /*******************************************************************************
     * The following parameters come from the /sharing/accounts/self resource and
     * are no longer defined in this file:
     *******************************************************************************
     * portalName
     * rotatorPanels
     * homePageFeaturedContentCount
     * homePageFeaturedContent
     * featuredItemsGroupQuery
     * basemapGalleryGroupQuery
     * templatesGroupQuery
     * layerTemplatesGroupQuery
     * symbolSetsGroupQuery
     * colorSetsGroupQuery
     * featuredGroups
     * defaultBasemap
     * defaultExtent
     * help (helpBase)
     * helpBase
     ******************************************************************************/

    /*******************************************************************************
     *******************************************************************************
     * DO NOT MODIFY these following parameters
     *******************************************************************************
     *******************************************************************************/
    userInfo: "",

    googleServiceSearchString: 'inurl:rest inurl:services "Supported Interfaces" -"Folders" -"KMZ" -"GlobeServer" -"NAServer" -"GPServer" -"GeocodeServer" -"GeoDataServer" -"GeometryServer"',

    contentModeCookieName: "contentModePrefs",

    esriMapLayersGroupQuery: 'title:"Esri Map Layers" AND owner:esri',

    //*** search modes (all content, web content only)
    viewQueries: {
      web: " -type:\"Layer\" -type: \"Map Document\" -type:\"Map Package\" -type:\"ArcPad Package\" -type:\"Project Package\" -type:\"Pro Map\" -type:\"Layout\" -type:\"Explorer Map\" -type:\"Globe Document\" -type:\"Scene Document\" -type:\"Published Map\" -type:\"Map Template\" -type:\"Windows Mobile Package\" -type:\"Layer Package\" -type:\"Explorer Layer\" -type:\"Geoprocessing Package\" -type:\"Application Template\" -type:\"Code Sample\" -type:\"Geoprocessing Package\" -type:\"Geoprocessing Sample\" -type:\"Locator Package\" -type:\"Workflow Manager Package\" -type:\"Windows Mobile Package\" -type:\"Explorer Add In\" -type:\"Desktop Add In\" -type:\"File Geodatabase\" -type:\"Feature Collection Template\"",
      gis: " -type:\"Code Attachment\" -type:\"Featured Items\" -type:\"Symbol Set\" -type:\"Color Set\" -type:\"Windows Viewer Add In\" -type:\"Windows Viewer Configuration\" ",
      none: " -type:\"Code Attachment\" -type:\"Featured Items\" -type:\"Symbol Set\" -type:\"Color Set\" -type:\"Windows Viewer Add In\" -type:\"Windows Viewer Configuration\" "
    },

    //*** key-value pairs or pre-defined query filters on search results page
    filterQueries: {
      "all": {
        focus: null,
        t: "content",
        f: ""
      },
      "maps": {
        focus: "maps",
        t: "content",
        f: "-type:\"web mapping application\" -type:\"Layer Package\" (type:\"Project Package\" OR type:\"Windows Mobile Package\" OR type:\"Map Package\" OR type:\"Pro Map\" OR type:\"Project Package\" OR type:\"Web Map\" OR type:\"CityEngine Web Scene\" OR type:\"Map Document\" OR type:\"Globe Document\" OR type:\"Scene Document\" OR type:\"Published Map\" OR type:\"Explorer Map\" OR type:\"ArcPad Package\" OR type:\"Map Template\")"
      },
      "layers": {
        focus: "layers",
        t: "content",
        f: "-type:\"web mapping application\" -type:\"Geodata Service\" (type: \"Feature Collection\" OR type:\"Layer\" OR type: \"Explorer Layer\" OR type: \"Tile Package\" OR type:\"Layer Package\" OR type:\"Feature Service\" OR type:\"Map Service\" OR type:\"Image Service\" OR type:\"WMS\" OR type:\"KML\" OR typekeywords:\"OGC\" OR typekeywords:\"Geodata Service\" OR type:\"Globe Service\" OR type:\"CSV\" OR type: \"Shapefile\" OR type: \"Service Definition\" OR type: \"File Geodatabase\" OR type: \"CAD Drawing\")"
      },
      "applications": {
        focus: "applications",
        t: "content",
        f: "(type:\"Code Sample\" OR type:\"Web Mapping Application\" OR type:\"Mobile Application\" OR type:\"Application\" OR type:\"Desktop Application Template\" OR type:\"Desktop Application\" OR type:\"Operation View\")"
      },
      "tools": {
        focus: "tools",
        t: "content",
        f: "-type:\"KML\" (typekeywords:\"tool\" OR type:\"Geodata Service\" OR type: \"Workflow Manager Package\" OR type:\"Rule Package\" OR type:\"Operations Dashboard Add In\" OR type:\"Workflow Manager Service\")"
      },
      "files": {
        focus: "files",
        t: "content",
        f: "(typekeywords:\"Document\" OR type:\"Image\" OR type:\"Layout\") -type:\"Map Document\" -type:\"Image Service\" -type:\"Explorer Document\" -type:\"Explorer Map\" -type:\"Globe Document\" -type:\"Scene Document\""
      },
      "maps-webmaps": {
        focus: "maps",
        t: "content",
        f: "(type:\"Web Map\" OR type:\"CityEngine Web Scene\") -type:\"Web Mapping Application\" -(owner:\"esri\" tags:\"basemap\")"
      },
      "maps-mapfiles": {
        focus: "maps",
        t: "content",
        f: "(type:\"Map Document\" OR type:\"Windows Mobile Package\" OR type:\"Globe Document\" OR type:\"Scene Document\"  OR type:\"Published Map\" OR type:\"Explorer Map\" OR type:\"ArcPad Package\" OR type:\"Map Package\" OR type:\"Pro Map\" OR type:\"Project Package\" OR type:\"Map Template\")"
      },
      "maps-mapservices": {
        focus: "maps",
        t: "content",
        f: "(type:\"WMS\" OR type:\"KML\" OR type:\"Map Service\" OR type:\"Image Service\" OR type:\"Feature Service\" OR type:\"Globe Service\")"
      },
      "maps-packages": {
        focus: "maps",
        t: "content",
        f: "(type:\"Layer Package\" OR type:\"Map Package\" OR type:\"Project Package\" OR type:\"Tile Package\")"
      },
      "maps-others": {
        focus: "maps",
        t: "content",
        f: "(type:\"Shapefile\" OR type:\"CSV\" OR type:\"Explorer Map\" OR type:\"Map Document\" OR type:\"Globe Document\" OR type:\"Scene Document\" OR type:\"Layer\" OR type:\"Explorer Layer\" OR type:\"Explorer Map\" OR type:\"Published Map\" OR type:\"CAD Drawing\") -type:\"Layer Package\""
      },
      "maps-packages-layer": {
        focus: "maps",
        t: "content",
        f: "type:\"Layer Package\""
      },
      "maps-packages-map": {
        focus: "maps",
        t: "content",
        f: "type:\"Map Package\""
      },
      "layers-weblayers": {
        focus: "layers",
        t: "content",
        f: "(type:\"Feature Collection\" OR type:\"Feature Service\" OR type:\"Image Service\" OR type:\"Map Service\" OR type: \"WMS\") -type:\"Web Map\" -type:\"Web Mapping Application\" -type:\"Shapefile\""
      },
      "layers-weblayers-features": {
        focus: "layers",
        t: "content",
        f: "(type:\"Feature Collection\" OR type:\"Feature Service\")"
      },
      "layers-weblayers-imagery": {
        focus: "layers",
        t: "content",
        f: "(type:\"Image Service\")"
      },
      "layers-weblayers-tiles": {
        focus: "layers",
        t: "content",
        f: "(type:\"Map Service\" AND typekeywords:\"Hosted\")"
      },
      "layers-weblayers-mapimage": {
        focus: "layers",
        t: "content",
        f: "(type:\"Map Service\"  OR type: \"WMS\") -typekeywords:\"Hosted\" -type:\"Web Map\" -type:\"Web Mapping Application\" -type:\"Shapefile\""
      },
      "layers-layerfiles": {
        focus: "layers",
        t: "content",
        f: "(type: \"Layer\" OR type: \"Explorer Layer\" OR type: \"Tile Package\" OR type:\"Layer Package\" OR type:\"CSV\" OR type: \"Shapefile\" OR type: \"Service Definition\" OR type: \"File Geodatabase\" OR type: \"CAD Drawing\") -type:\"Explorer Maps\" -type:\"Map Documents\""
      },
      "applications-web": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\")"
      },

      "applications-web-flex": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" typekeywords:\"Flex\")"
      },
      "applications-web-flex-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-web-flex-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Configurable\")"
      },
      "applications-web-flex-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Code Sample\")"
      },

      "applications-web-javascript": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\")"
      },
      "applications-web-javascript-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-web-javascript-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\" AND typekeywords:\"Configurable\")"
      },
      "applications-web-javascript-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\" AND typekeywords:\"Code Sample\")"
      },

      "applications-web-silverlight": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\")"
      },
      "applications-web-silverlight-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-web-silverlight-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\" AND typekeywords:\"Configurable\")"
      },
      "applications-web-silverlight-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile": {
        focus: "applications",
        t: "content",
        f: "type:\"Mobile Application\""
      },

      "applications-mobile-iphone": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\")"
      },
      "applications-mobile-iphone-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-iphone-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-iphone-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-windowsmobile": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\")"
      },
      "applications-mobile-windowsmobile-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-windowsmobile-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-windowsmobile-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-windowsphone": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\")"
      },
      "applications-mobile-windowsphone-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-windowsphone-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-windowsphone-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-android": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\")"
      },
      "applications-mobile-android-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-android-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-android-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-javascript": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\")"
      },
      "applications-mobile-javascript-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-javascript-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-javascript-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-flex": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\")"
      },
      "applications-mobile-flex-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-flex-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-flex-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Code Sample\")"
      },

      "applications-desktop": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" -type:\"Desktop Application Template\")"
      },

      "applications-desktop-java": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"Java\")"
      },

      "applications-desktop-dotnet": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\".NET-Windows Desktop\")"
      },

      "applications-desktop-osx": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"OS X\")"
      },

      "applications-desktop-qt": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"Qt\")"
      },

      "applications-desktop-wpf": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"WPF\")"
      },

      "tools-locators": {
        focus: "tools",
        t: "content",
        f: "(type:\"Geocoding Service\" OR type:\"Locator Package\")"
      },
      "tools-geodatabase": {
        focus: "tools",
        t: "content",
        f: "type:\"Geodata Service\""
      },
      "tools-geometric": {
        focus: "tools",
        t: "content",
        f: "type:\"Geometry Service\""
      },
      "tools-geoprocessing": {
        focus: "tools",
        t: "content",
        f: "(type:\"Geoprocessing Service\" OR type:\"Geoprocessing Package\" OR type:\"Geoprocessing Sample\")"
      },
      "tools-network": {
        focus: "tools",
        t: "content",
        f: "type:\"Network Analysis Service\""
      },
      "files-document": {
        focus: "files",
        t: "content",
        f: "(typekeywords:\"Document\") -type:\"PDF\""
      },
      "files-pdf": {
        focus: "files",
        t: "content",
        f: "(type:\"PDF\")"
      },
      "files-image": {
        focus: "files",
        t: "content",
        f: "(type:\"Image\") -type:\"Image Service\""
      }
    }
  };

  window.dojoConfig = {
    parseOnLoad: true,
    isDebug: false,
    addOnLoad: function () {
      esriGeowConfig.cdnServerUrl = dojo.baseUrl.substring(0, dojo.baseUrl.indexOf("/js"));
      console.log("cdn server url: ", esriGeowConfig.cdnServerUrl);
    },
    packages: [
      {
        name: "esri",
        location: "../../esri"
      },
      {
        name: "dgrid",
        location: "../../dgrid"
      },
      {
        name: "put-selector",
        location: "../../put-selector"
      },
      {
        name: "xstyle",
        location: "../../xstyle"
      }
    ]

  };

}());



//anonymous function call for reading locale cookie and setting rtl logic
(function () {

  //esriGeowConfig.testLocale = "ar"; // this is the test locale response from self resource call

  //reading locale
  var nameEQ = "arcgisLocale" + "=";
  var sessionCookie = "esri_auth" + "=";
  var ca = document.cookie.split(';');
  var locale = navigator.language ? navigator.language : navigator.userLanguage;  //default dojoConfig.locale to browser language when no cookie present
  var rtlLocales = ["ar", "he"];
  var i = 0;

  if (locale) {
    window.dojoConfig.locale = locale.toLowerCase();
  }
  loop1:
    for (i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(sessionCookie) == 0) {
        var sValue = unescape(c.substring(sessionCookie.length, c.length));
        var userObj = eval('(' + sValue + ')');
        locale = userObj.culture;
        if (locale) {
          window.dojoConfig.locale = locale; // change dojoConfig.locale to the cookie locale when cookie is present
        }
        break loop1;
      }
      if (c.indexOf(nameEQ) == 0) {
        locale = c.substring(nameEQ.length, c.length);
        if (locale) {
          window.dojoConfig.locale = locale; // change dojoConfig.locale to the cookie locale when cookie is present
        }
      }
    }

  for (i = 0; i < rtlLocales.length; i++) {
    var rLocale = rtlLocales[i];
    if (window.dojoConfig.locale && window.dojoConfig.locale.indexOf(rLocale) !== -1) {
      if (window.dojoConfig.locale.indexOf("-") !== -1) {
        if (window.dojoConfig.locale.indexOf(rLocale + "-") !== -1) {
          esriGeowConfig.isRightToLeft = true;
        }
      }
      else {
        esriGeowConfig.isRightToLeft = true; // esriGeowConfig.isRightToLeft property setting to true when the locale is 'ar'
      }
    }
  }
  ;

  //setting the document dir type to RTL when esriGeowConfig.isRightToLeft is true
  var dirNode = document.getElementsByTagName("html")[0];
  if (esriGeowConfig.isRightToLeft) {
    dirNode.setAttribute("dir", "rtl");
    dirNode.className += " esriRtl";
    dirNode.className += " " + window.dojoConfig.locale + " " + (window.dojoConfig.locale.indexOf("-") !== -1 ? window.dojoConfig.locale.split("-")[0] : "");
  }
  else {
    dirNode.setAttribute("dir", "ltr");
    dirNode.className += " esriLtr";
    dirNode.className += " " + window.dojoConfig.locale + " " + (window.dojoConfig.locale.indexOf("-") !== -1 ? window.dojoConfig.locale.split("-")[0] : "");
  }
})();
