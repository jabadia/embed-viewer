$(function()
{
	"use strict";

	var currentWebmapid = null;

	console.log("inicializando");

	/* helper functions */

	function getUIState()
	{
		var uiState = {};

		uiState.webmapid = $('[name=webmapid]').val();

		var mapSize = $('[name=map-size]:checked').val();
		switch(mapSize)
		{
			case 'small':  uiState.width = 300; uiState.height = 200; break;
			case 'medium': uiState.width = 400; uiState.height = 300; break;
			case 'large':  uiState.width = 600; uiState.height = 400; break;
			case 'custom': 
				uiState.width  = parseInt($('#map-custom-width').val()); if(isNaN(uiState.width)) uiState.width = 400;
				uiState.height = parseInt($('#map-custom-height').val());if(isNaN(uiState.height)) uiState.height = 300;
				break;
		}

		uiState.selectFeature = $('[name=select-feature]').prop('checked');
		uiState.layerId   = $('[name=selected-layer').val();
		uiState.fieldId   = $('[name=selected-field').val();
		uiState.featureId = $('[name=selected-feature').val();

		uiState.showPopup = $('[name=show-popup-check]').prop('checked');
		uiState.home = $('[name=home-check]').prop('checked');
		uiState.zoom = $('[name=zoom-check]').prop('checked');
		uiState.scale = $('[name=scale-check]').prop('checked');
		return uiState;
	}

	function buildViewerUrl(uiState)
	{
		var currentLocation = window.location.protocol + "//" + window.location.host + window.location.pathname;
		var viewerUrl = currentLocation + "../viewer/embedViewer.html?webmap=" + uiState.webmapid +
			(uiState.home? "&home=true" : "") +
			(uiState.zoom? "&zoom=true" : "") +
			(uiState.scale? "&scale=true" : "") +
			(uiState.showPopup? "&showPopup=true" : "");

		if( uiState.selectFeature )
		{
			viewerUrl +=	
				"&layerId=" + uiState.layerId +
				"&fieldId=" + uiState.fieldId +
				"&featureId=" + uiState.featureId;
		}

		return viewerUrl;
	}

	function buildIframeCode(uiState)
	{
		var viewerUrl = buildViewerUrl(uiState);

		var newLine = '\n';
		var indent = '    ';
		var iframeCode = "<iframe " + newLine + 
			indent + "width='" + uiState.width + "' " +	"height='" + uiState.height + "' " + newLine + 
			indent + "frameborder='0' scrolling='no'" + newLine + 
			indent +  "marginheight='0' marginwidth='0' " + newLine + 
			indent + "src='" + viewerUrl + "'>" + newLine + 
			"</iframe>";

		return iframeCode;
	}

	/* event handlers */

	function loadWebmap(webmapid)
	{
		if( webmapid == currentWebmapid)
			return;

		console.log("loadWebmap()");
		var webmapurl = "http://www.arcgis.com/sharing/rest/content/items/" + webmapid;
		$.ajax({
			url:webmapurl, 
			data: {f: "json"},
			dataType: "json"
		})
		.done(function(data)
		{
			console.log(data);
			$('#map-title').html(data.title);
			$('#map-description').html(data.snippet);
		});
	}

	function cleanCode(code)
	{
		return code.replace(/[\t\n ]+/g," ").replace(/'/g,'"');
	}

	function refreshIframe(newIframeCode)
	{
		console.log("refreshIframe()");

		var mapPreview = $("#map-preview");
		var currentCode = mapPreview.html();
		if( cleanCode(currentCode) != cleanCode(newIframeCode) )
		{
			mapPreview.html(newIframeCode);
		}
	}

	function copyEmbedCode()
	{
		console.log("copyEmbedCode()");
		var embedCode = $('#embed-code').text();
		console.log(embedCode);
		window.prompt("Para copiar el texto pulse Ctrl+C, Enter", embedCode);
	}

	function updateUI()
	{
		console.log("updateUI()");

		/* size */
		var mapSize = $('[name=map-size]:checked').val();
		( mapSize == 'custom' )? $('#map-custom-size').show() : $('#map-custom-size').hide();
		console.log(mapSize);

		var uiState = getUIState();
		var iframeCode = buildIframeCode(uiState);

		$('#embed-code').text(iframeCode);

		loadWebmap(uiState.webmapid);
		refreshIframe(iframeCode);
	}

	function processIframeEvent(evt)
	{
		console.log(evt.originalEvent.data);
		var clickLocation = JSON.parse(evt.originalEvent.data);

		$('#click-x').html("<b>x:</b> " + clickLocation.x);
		$('#click-y').html("<b>y:</b> " + clickLocation.y);
	}

	/* init */

	function initUI()
	{
		console.log("initUI()");

		$('[type=checkbox]').change(updateUI);
		$('[type=radio]').change(updateUI);
		$('[type=text]').change(updateUI);

		/* initial values */
		$('#map-size-medium').prop('checked',true);

		$('#copy-embed-code-button').click(copyEmbedCode);

		$(window).on('message', processIframeEvent);

		updateUI();
	}

	/* begin here */

	if(window.location.search == "?colera")
	{
		$('#webmapid').val("6e5721d80f3340d08e7ec24a798e6639");
		$('#selected-layer').val("Fuentes");
		$('#selected-field').val("id");
		$('#selected-feature').val("1");
		$('[name=select-feature]').prop('checked',true);
	}
	else if(window.location.search)
	{
		/* sample data */
		$('#webmapid').val("bb7dd214060a4d97a1fead003ad1af37");
		$('#selected-layer').val("Locales");
		$('#selected-field').val("id_local");
		$('#selected-feature').val("280048981");
		$('#select-feature').prop('checked',true);
		$('[name=select-feature]').prop('checked',true);
	}
	initUI();
});