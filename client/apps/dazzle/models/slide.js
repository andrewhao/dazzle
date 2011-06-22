// ==========================================================================
// Project:   Dazzle.Slide
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Dazzle */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Dazzle.Slide = SC.Record.extend(
/** @scope Dazzle.Slide.prototype */ {

    /* Slide title, often song/verse title */
    title: SC.Record.attr(String),
    /* Body text */
    text: SC.Record.attr(String),

}) ;
