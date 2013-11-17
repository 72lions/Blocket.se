define(['cheerio'], function($) {

  /**
   * Responsible for formatting the results from the pages.
   *
   * @class Formatter
   * @constructor
   */
  var Formatter = function() {

    /**
     * It formats the data and creates a beautiful html template for each item
     *
     * @private
     * @function
     * @param  {Object} data The object containing all the data needed for the email.
     * @return {String} The formatted string.
     */
    this.formatForEmail = function(data) {
      var $thumbs = $(data.thumbs);
      $thumbs.find('li').attr('style', 'list-style:none; margin:0 10px 0 0; float:left;');
      $thumbs.find('li:last-child').remove();

      var thumbs = $thumbs.html();
      var description = data.description;

      var body = '<h2><a href="' + data.url + '">' + data.title + '</a></h2>';
      body += (data.image !== null ? data.image + '<br/>' : '');
      body += '<p>' + description + '</p>';
      body += '<hr size="1" />';

      return body;
    };

  };

  return Formatter;

});
