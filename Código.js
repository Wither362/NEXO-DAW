// Learn more about Web apps at https://developers.google.com/apps-script/guides/web

/**
 * Serves HTML of the application for HTTP GET requests.
 * If folderId is provided as a URL parameter, the web app will list
 * the contents of that folder (if permissions allow). Otherwise
 * the web app will list the contents of the root folder.
 *
 * @param {Object} e - event parameter that can contain information
 *     about any URL parameters provided.
 */
function doGet(e) {
	if (e.parameter.page === 'editor') {
		return HtmlService.createHtmlOutputFromFile('editor').setTitle('GD Level Editor');
	}
	if (e.parameter.page === 'player')
		return HtmlService.createHtmlOutputFromFile('index').setTitle('Geometry Dash');
	if (e.parameter.page === 'daw')
		return HtmlService.createHtmlOutputFromFile('daw').setTitle('GD D.A.W.').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);;
	// Si vas a la URL con ?page=editor, carga el creador. Si no, carga el juego.
	return HtmlService.createHtmlOutputFromFile('main').setTitle("GD Help Menu");
}