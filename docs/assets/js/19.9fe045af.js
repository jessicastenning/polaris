(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{375:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"custom-checks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-checks"}},[t._v("#")]),t._v(" Custom Checks")]),t._v(" "),e("p",[t._v("If you'd like to create your own checks, you can use "),e("a",{attrs:{href:"https://json-schema.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Schema"),e("OutboundLink")],1),t._v(". For example,\nto disallow images from quay.io:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("checks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imageRegistry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" warning\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("customChecks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imageRegistry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("successMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Image comes from allowed registries\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("failureMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Image should not be from disallowed registry\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("category")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Images\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Container "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# target can be "Container" or "Pod"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schema")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'$schema'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("schema.org/draft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("07/schema\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" object\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("properties")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("not")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^quay.io\n")])])]),e("p",[t._v("Schemas can also be specified as JSON strings instead of YAML, for easier copy/pasting:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("customChecks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jsonSchema")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n      {\n        "$schema": "http://json-schema.org/draft-07/schema",\n        "type": "object"\n      }')]),t._v("\n")])])]),e("p",[t._v("We extend JSON Schema with "),e("code",[t._v("resourceMinimum")]),t._v(" and "),e("code",[t._v("resourceMaximum")]),t._v(" fields to help compare memory and CPU resource\nstrings like "),e("code",[t._v("1000m")]),t._v(" and "),e("code",[t._v("1G")]),t._v(". You can see an example in "),e("a",{attrs:{href:"https://github.com/FairwindsOps/polaris/tree/master/examples/config-full.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("the extended config"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("There are additional examples in the "),e("a",{attrs:{href:"https://github.com/FairwindsOps/polaris/tree/master/checks",target:"_blank",rel:"noopener noreferrer"}},[t._v("checks folder"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);