// ==========================================================================
// Project:   Dazzle.StoryboardSlideView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Dazzle */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Dazzle.StoryboardSlideView = SC.View.extend(
/** @scope Dazzle.StoryboardSlideView.prototype */ {

  // TODO: Add your own code here.

    childViews: 'thumbnailView nameLabel'.w(),

    thumbnailView: SC.View.design({
    }),

    nameLabel: SC.Label.design({
        layout: { left: 14, height: 18, width: 200 },
        textAlign: SC.ALIGN_CENTER,
        contentBinding: '.parentView.title',
        //valueBinding: '.parentView*content.description' XXX what is this?
    })

});
