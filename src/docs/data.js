const searchValues = [
  {
    label: 'Accordion',
    template: 'result',
    keywords: 'show, hide, Collapse, Expand, expandable, vertical, panels',
    url: 'design-system/components/accordion/index.html',
  },
  {
    label: 'Breadcrumbs',
    template: 'result',
    keywords: 'navigation, information architecture, IA',
    url: 'design-system/components/breadcrumbs/index.html',
  },
  {
    label: 'Buttons',
    template: 'result',
    keywords: 'blue diamond, links, submit, call to action, transaction',
    url: 'design-system/components/button/index.html',
  },
  {
    label: 'Callout',
    template: 'result',
    keywords: 'action, highlight, attention',
    url: 'design-system/components/callout/index.html',
  },
  {
    label: 'Cards',
    template: 'result',
    keywords: 'Highlight, Content, images, links, summary, related content, navigation',
    url: 'design-system/components/card/index.html',
  },
  {
    label: 'Content blocks',
    template: 'result',
    keywords: 'columns, links, content',
    url: 'design-system/components/content-block/index.html',
  },
  {
    label: 'Dialog',
    template: 'result',
    keywords: 'modal, window, alert, message, action, information, notification, required, response, Transactional, single, call to action, Danger, Dismissible',
    url: 'design-system/components/dialog/index.html',
  },
  {
    label: 'Filters',
    template: 'result',
    keywords: 'results, data, refine',
    url: 'design-system/components/filters/index.html',
  },
  {
    label: 'Footer',
    template: 'result',
    keywords: 'links, copyright, blue diamond, social, privacy, contact',
    url: 'design-system/components/footer/index.html',
  },
  {
    label: 'Forms',
    template: 'result',
    keywords: 'data, input, field, Freeform, Selection, label, checkbox, Dropdown, radio, list, Validation, help text, placeholder, autofill, autocorrect, blue diamond',
    url: 'design-system/components/form/index.html',
  },
  {
    label: 'Global alert',
    template: 'result',
    keywords: 'attention, important, critical',
    url: 'design-system/components/global-alert/index.html',
  },
  {
    label: 'Header',
    template: 'result',
    keywords: 'logo, site descriptors, Search, masthead, blue diamond',
    url: 'design-system/components/header/index.html',
  },
  {
    label: 'Hero banner',
    template: 'result',
    keywords: 'landing page, homepage',
    url: 'design-system/components/hero-banner/index.html',
  },
  {
    label: 'Hero search',
    template: 'result',
    keywords: '',
    url: 'design-system/components/hero-search/index.html',
  },
  {
    label: 'In-page alert',
    template: 'result',
    keywords: '',
    url: 'design-system/components/in-page-alert/index.html',
  },
  {
    label: 'In-page navigation',
    template: 'result',
    keywords: 'table of contents, anchor, links',
    url: 'design-system/components/in-page-nav/index.html',
  },
  {
    label: 'Link list',
    template: 'result',
    keywords: '',
    url: 'design-system/components/link-list/index.html',
  },
  {
    label: 'List items',
    template: 'result',
    keywords: '',
    url: 'design-system/components/list-item/index.html',
  },
  {
    label: 'Main navigation',
    template: 'result',
    keywords: 'information, architecture, IA, orientate, Mega, menu, navigation, top level, Search, off-canvas, animation, slide-in, Offcanvas',
    url: 'design-system/components/main-nav/index.html',
  },
  {
    label: 'Masthead',
    template: 'result',
    keywords: 'topbar, Top, bar, blue diamond, alert',
    url: 'design-system/components/masthead/index.html',
  },
  {
    label: 'Media',
    template: 'result',
    keywords: 'visual, elements, images, video, Captions, figure, figcaption',
    url: 'design-system/components/media/index.html',
  },
  {
    label: 'Pagination',
    template: 'result',
    keywords: 'total, navigation, listing',
    url: 'design-system/components/pagination/index.html',
  },
  {
    label: 'Progress Indicator',
    template: 'result',
    keywords: 'step',
    url: 'design-system/components/progress-indicator/index.html',
  },
  {
    label: 'Results bar',
    template: 'result',
    keywords: 'list, sort, counter, filter',
    url: 'design-system/components/results-bar/index.html',
  },
  {
    label: 'Side navigation',
    template: 'result',
    keywords: 'hierarchy, Single, Multiple, level, nesting, nav',
    url: 'design-system/components/side-nav/index.html',
  },
  {
    label: 'Steps',
    template: 'result',
    keywords: 'Steps, stages, timeline, wizard, sequences, Sequential',
    url: 'design-system/components/steps/index.html',
  },
  {
    label: 'Tables',
    template: 'result',
    keywords: 'data, rows, columns, scan, sort, compare, information, Horizontal lined, Stripped, Bordered, Stripe, Border',
    url: 'design-system/components/table/index.html',
  },
  {
    label: 'Tabs',
    template: 'result',
    keywords: 'ui, design, Toolbar',
    url: 'design-system/components/tabs/index.html',
  },
  {
    label: 'Tags',
    template: 'result',
    keywords: 'badge, button, chip, marker, mark, identification, label, categorise',
    url: 'design-system/components/tag/index.html',
  },
  {
    label: 'Logo',
    template: 'result',
    keywords: 'Branding, visual, representation, Primary Logo, Usage and placement, Clear space, Sizing, Masterbrand, Co-brand, Endorsed, Independent, blue diamond',
    url: 'design-system/core/logo/index.html',
  },
  {
    label: 'Colour',
    template: 'result',
    keywords: 'consistent, visual, identify, digital, base, theme, Brand, colours, Grey, Text, Status, palette, dark, light, brand, supplementary, accent, blue diamond',
    url: 'design-system/core/colour/index.html',
  },
  {
    label: 'Typography',
    template: 'result',
    keywords: 'font, headings, body text, lists, paragraphs, styles, Public Sans, font stack, CSS, Links, Blockquote, Unordered, Ordered, Definition, blue diamond',
    url: 'design-system/core/typography/index.html',
  },
  {
    label: 'Iconography',
    template: 'result',
    keywords: 'Icons, illustrate, actions, communicate, status, interaction, attention, information, Usage, Styling, Application, Designing, Accessibility, Text, Button, Colour, Sizing, Spacing, Material Design, SVG, scalable vector graphics, rotation, blue diamond',
    url: 'design-system/core/iconography/index.html',
  },
  {
    label: 'Pictograms',
    template: 'result',
    keywords: 'word, simple, clean, illustration, idea, Usage, Styling, Designing, SVG, utility classes, Styling, Brand, blue diamond',
    url: 'design-system/core/pictograms/index.html',
  },
  {
    label: 'Grid',
    template: 'result',
    keywords: 'Breakpoints, Content, 12 column, responsive, viewport, Token, Container, fixed, Gutters, Max active content, area, layouts, Whole, Half, Third, Quarter, Offset, grids',
    url: 'design-system/core/grid/index.html',
  },
  {
    label: 'Layout',
    template: 'result',
    keywords: 'Page, layouts, standard, Full width, Two column, Left, Right, Usage, Main, content, desktop, viewport',
    url: 'design-system/core/layout/index.html',
  },
  {
    label: 'Section',
    template: 'result',
    keywords: 'Flexible, layout, component, content, consistent, vertical, spacing, Usage, style, container, Image, Box, Colour, Inverted, colours, dark background',
    url: 'design-system/core/section/index.html',
  },
  {
    label: 'Graphic elements',
    template: 'result',
    keywords: 'Logo positioning, details, hierarchy, interactions, digital branding, brand, Border radius, Drop shadow, Application, Line System, Examples,  tabs, card, in-page navigation, blue diamond',
    url: 'design-system/core/graphic-elements/index.html',
  },
  {
    label: 'Search & Filters',
    template: 'result',
    keywords: 'explore, keywords, phrases, find, results, Predictive, suggestions, autocomplete',
    url: 'design-system/docs/content/methods/search.html',
  },
  {
    label: 'Maps',
    template: 'result',
    keywords: 'Markers, Mapbox, MapMarker.io, leaflet.js, location, pin',
    url: 'design-system/docs/content/methods/maps.html',
  },
  {
    label: 'Data visualisation',
    template: 'result',
    keywords: 'Comparison, data, trends, Display, statistics, Processes, workflows, Mapping, diagramming, Colours, theming, charts.js, charts, graphs, Screen readers',
    url: 'design-system/docs/content/methods/data-visualisation.html',
  },
  {
    label: 'You are here',
    template: 'result',
    keywords: 'Where am I, Where can I go, Who is speaking, orientate, Breadcrumbs, Hero banner, Typography, hierarchy, navigation, Main navigation, Side navigation',
    url: 'design-system/docs/content/methods/you-are-here.html',
  },
  {
    label: 'Templates',
    template: 'result',
    keywords: 'Homepage, Content, Search, Sample, Example, Hero banner, Featured list, Hero search, Simple, Filters, No results, Side navigation, Article, Filters, Form, Maps, Location, primary, sub filters, Equal value filters, Theming, Masterbrand,Full page, Content, Partial',
    url: 'design-system/templates/index.html',
  },
  {
    label: 'What is Design System',
    template: 'result',
    keywords: 'Benefits, Build faster and at scale, brand and accessibility compliance, Consistent code and design language, Quality across all layers, Support, Questions, Report issues, Issues tracker, Report a bug',
    url: 'design-system/docs/content/about/what-is-design-system.html',
  },
  {
    label: 'Supporting different roles',
    template: 'result',
    keywords: 'Product Managers, Designers, Developers, UI, UX',
    url: 'design-system/docs/content/about/supporting-different-roles.html',
  },
  {
    label: 'Our ecosystem',
    template: 'result',
    keywords: 'Digital Visual Identity, Core styles and components, Digital NSW Community, Built in accessibility, UX, content guidance, UI, code starter kits',
    url: 'design-system/docs/content/about/our-ecosystem.html',
  },
  {
    label: "What's happening",
    template: 'result',
    keywords: 'Releases, Work in progress, Consulting with community, Backlog, Changelog, changed, Version, Change logs',
    url: 'design-system/docs/content/about/whats-happening.html',
  },
  {
    label: 'Getting Started',
    template: 'result',
    keywords: 'Core styles, Base components, UX Guidance, First steps',
    url: 'design-system/docs/content/design/getting-started.html',
  },
  {
    label: 'Figma UI Kit',
    template: 'result',
    keywords: 'guides, video tutorials, file, UI, Design',
    url: 'design-system/docs/content/design/figma-ui-kit.html',
  },
  {
    label: 'Extending',
    template: 'result',
    keywords: 'core elements, create, consistent, building, accessible, Core styles, Components, UX Guidance, Contributing, customise, custom, unique, adapt, adapting',
    url: 'design-system/docs/content/design/extending.html',
  },
  {
    label: 'Design Theming',
    template: 'result',
    keywords: 'colours, consistent, branding, colour palette, Dark, Light, Brand, Supplementary, Accent, non corporate, cobrand, Masterbrand corporate, non-corporate, co-brand, independent',
    url: 'design-system/docs/content/design/theming.html',
  },
  {
    label: 'Guides',
    template: 'result',
    keywords: 'Using the design system, Designing, Collaborating, Prototyping, Guidance, ',
    url: 'design-system/docs/content/design/guides.html',
  },
  {
    label: 'Getting Started',
    template: 'result',
    keywords: 'npm, CDN, starter kit, Installing, Import styles, Core and selected components, Public Sans, Material Icons, Node, SASS, base theme, typography, mixins, functions, javascript, JSDelivr, Browser support, starter kit',
    url: 'design-system/docs/content/develop/getting-started.html',
  },
  {
    label: 'Develop Theming',
    template: 'result',
    keywords: 'customisation, branding, CSS Variables, Full page, Content only, Partial, brand',
    url: 'design-system/docs/content/develop/theming.html',
  },
  {
    label: 'Background Utility Classes',
    template: 'result',
    keywords: 'Background colour, Opacity, Hover state, color',
    url: 'design-system/docs/content/utilities/background.html',
  },
  {
    label: 'Border Utility Classes',
    template: 'result',
    keywords: 'Border radius, width, style, color, borders',
    url: 'design-system/docs/content/utilities/borders.html',
  },
  {
    label: 'Box Shadow Utility Class',
    template: 'result',
    keywords: 'Box Shadow, box-shadow, shadow',
    url: 'design-system/docs/content/utilities/box-shadow.html',
  },
  {
    label: 'Display Utility Classes',
    template: 'result',
    keywords: 'display, inline, inline-block, block, grid, inline-grid, flex, inline-flex, hide, show',
    url: 'design-system/docs/content/utilities/displayu.html',
  },
  {
    label: 'Flex Utility Classes',
    template: 'result',
    keywords: 'Flex, Direction, Justify content, Align items, Align self, Fill, Grow, shrink, Wrap, Order, content',
    url: 'design-system/docs/content/utilities/flex.html',
  },
  {
    label: 'Float Utility Classes',
    template: 'result',
    keywords: 'Float, wrapping, ',
    url: 'design-system/docs/content/utilities/float.html',
  },
  {
    label: 'Overflow Utility Classes',
    template: 'result',
    keywords: 'Overflow, auto, hidden, visible, scroll',
    url: 'design-system/docs/content/utilities/overflow.html',
  },
  {
    label: 'Position Utility Classes',
    template: 'result',
    keywords: 'Position, static, relative, absolute, fixed, sticky',
    url: 'design-system/docs/content/utilities/position.html',
  },
  {
    label: 'Spacing',
    template: 'result',
    keywords: 'Responsive, units, alignment, consistent, 8-pixel grid, Spacing token, Helper classes, margin, padding, banner',
    url: 'design-system/docs/content/utilities/spacing.html',
  },
  {
    label: 'SVG Utility Classes',
    template: 'result',
    keywords: 'SVG, fill, stroke, stroke width, icons, pictograms',
    url: 'design-system/docs/content/utilities/svg.html',
  },
  {
    label: 'Text Utility Classes',
    template: 'result',
    keywords: 'Text, alignment, wrapping, font, weight, overflow, colour',
    url: 'design-system/docs/content/utilities/text.html',
  },
  {
    label: 'Vertical alignment Utility Classes',
    template: 'result',
    keywords: 'Vertical align, alignment, inline, inline-block, inline-table, table, baseline, top, middle, bottom, text-bottom, text-top',
    url: 'design-system/docs/content/utilities/vertical-align.html',
  },
  {
    label: 'Visibility Utility Classes',
    template: 'result',
    keywords: 'Visibility, show, hide',
    url: 'design-system/docs/content/utilities/visibility.html',
  },
  {
    label: 'Z-index Classes',
    template: 'result',
    keywords: 'Z-index, stack order, three-dimensional, positioning, 3D',
    url: 'design-system/docs/content/utilities/z-index.html',
  },
  {
    label: 'Close button',
    template: 'result',
    keywords: 'Dialog, Global Alert, dismiss, icon, button',
    url: 'design-system/components/close-button/index.html',
  },
  {
    label: 'Popover',
    template: 'result',
    keywords: 'tooltips, toggletip, dropdown, menu',
    url: 'design-system/components/popover/index.html',
  },
]

export default searchValues
