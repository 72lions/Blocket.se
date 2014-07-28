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

      var $thumbs = data.thumbs;

      var body = '<h2><a href="' + data.url + '">' + data.title + '</a></h2>';
      body += (data.image !== null ? data.image + '<br/>' : '');
      body += '<h3>' + data.price + '</h3>';
      body += '<ul style="clear:both">';
      $thumbs.each(function(index) {
        if (index != 0) {
          $(this).attr('style', 'width: 100px');
          body += '<li style="list-style:none; float:left">' + this + '</li>';
        }
      });
      body += '</ul>';
      body += '<p style="clear:both">' + data.description + '</p>';
      body += '<hr size="1" />';

      return body;
    };

  };

  return Formatter;

});
