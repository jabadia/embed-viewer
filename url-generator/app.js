$(function()
{
	"use strict";

	console.log("inicializando");

	/* helper functions */

	function getUIState()
	{
		var uiState = {};

		uiState.webmapid = $('[name=webmapid]').val();

		var mapSize = $('[name=map-size]:checked').val();
		switch(mapSize)
		{
			case 'small':  uiState.width = 400; uiState.height = 300; break;
			case 'medium': uiState.width = 500; uiState.height = 500; break;
			case 'large':  uiState.width = 800; uiState.height = 600; break;
			case 'custom': 
				uiState.width  = parseInt($('#map-custom-width').val()); if(isNaN(uiState.width)) uiState.width = 400;
				uiState.height = parseInt($('#map-custom-height').val());if(isNaN(uiState.height)) uiState.height = 300;
				break;
		}

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
		var viewerUrl = "../viewer/embedViewer.html?webmap=" + uiState.webmapid +
			(uiState.home? "&home=true" : "") +
			(uiState.zoom? "&zoom=true" : "") +
			(uiState.scale? "&scale=true" : "") +
			(uiState.showPopup? "&showPopup=true" : "") +
			"&layerId=" + uiState.layerId +
			"&fieldId=" + uiState.fieldId +
			"&featureId=" + uiState.featureId;

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

	function loadWebmap()
	{
		console.log("loadWebmap()");
	}

	function refreshIframe()
	{
		console.log("refreshIframe()");
	}

	function copyEmbedCode()
	{
		console.log("copyEmbedCode()");
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

		updateUI();
	}

	initUI();
});