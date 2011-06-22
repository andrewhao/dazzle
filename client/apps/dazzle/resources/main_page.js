// ==========================================================================
// Project:   Dazzle - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Dazzle */

// This page describes the main user interface for your application.  
Dazzle.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
      childViews: 'toolbarView storyboardView statusView'.w(),

      toolbarView: SC.ToolbarView.design({
          layout: { top: 0, left: 0, right: 0, height: 36 },
          anchorLocation: SC.ANCHOR_TOP
      }),

      storyboardView: Dazzle.StoryboardView,

      statusView: SC.ToolbarView.design({
          layout: { bottom: 0, left: 0, right: 0, height: 32 },
          anchorLocation: SC.ANCHOR_BOTTOM
      })
  })

});
