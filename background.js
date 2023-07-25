/*

	scope:

	- set up filter as seen in ao3 (minus specific filters for characters, fandoms, etc. because that's shit to do)
	- different profiles for filters (public viewing, smut, etc.)
	- add button to filter to acquire filter that is currently selected and create a new filter from it in the add-on

	- intercept http request and apply filter as needed



	- NEW actually, maybe use the AO3 filter to setup and edit the filter directly instead (ehehehe)


  <dt><select>
    <option>RWBY - Public</option>
  <option>RWBY - Smut</option>
  <option>Add New</option>

  </select>
  <input type="button" style="background: url(&quot;https://64.media.tumblr.com/c408f6bee08c92f7efcc8919faf342ab/76b6b6887858c9df-59/s64x64u_c1/68a972bd73691b01f754481f66b1a5b2334b0126.pnj&quot;) no-repeat;margin-bottom: 50px;" value="save this filter">
  </dt>
*/



function grabCurrentFilter(){

}

function buildNewUrl(oldUrl){
  
  var filter = grabCurrentFilter();

  console.log("ao3_filter -> poof")
  var params = new URLSearchParams(oldUrl.search);
  console.log("ao3_filter -> "+params)
}



function redirect(requestDetails) {

	//build new url from filter and return the new url

  var newUrl = buildNewUrl(new URL(requestDetails.url));



  return {
    redirectUrl: newUrl
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls: [
    "https://archiveofourown.org/tags/*/works*",
    "https://archiveofourown.org/works",
    "https://archiveofourown.org/works?*",
    "https://archiveofourown.org/users/*bookmarks",
    "https://archiveofourown.org/users/*works"
]},
  ["blocking"]
);

