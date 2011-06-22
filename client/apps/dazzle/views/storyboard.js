// ==========================================================================
// Project:   Dazzle.StoryboardView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Dazzle */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Dazzle.StoryboardView = SC.ScrollView.extend(
/** @scope Dazzle.StoryboardView.prototype */ {

    hasHorizontalScroller: NO,
    layout: { top: 36, bottom: 32, left: 0, right: 0 },

    contentView: SC.GridView.design({
        selectionBinding: 'Dazzle.slidesController.selection',
        contentBinding: 'Dazzle.slidesController.arrangedObjects',
        contentValueKey: 'text',
        columnWidth: 200,
        rowHeight: 150,
        borderStyle: SC.BORDER_GRAY,
        allowsMultipleSelection: NO,
        selectOnMouseDown: YES
    })

});
