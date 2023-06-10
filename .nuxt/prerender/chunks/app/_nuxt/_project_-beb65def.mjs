import { _ as __nuxt_component_0 } from './Navbar-d7845a96.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-0d39ff03.mjs';
import { withCtx, createVNode, useSSRContext } from 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/vue/index.mjs';
import { _ as _export_sfc, u as useRoute } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/ufo/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/ofetch/dist/node.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/hookable/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/unctx/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/h3/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/unhead/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/destr/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/scule/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/klona/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/ohash/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/unstorage/dist/index.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/radix3/dist/index.mjs';

const _sfc_main = {
  setup() {
    useRoute();
  },
  data() {
    return {
      pageName: "",
      ProjectName: "",
      ProjectIntro: "",
      detailimg1: "",
      detailtext1: "",
      detailimg2: "",
      detailtext2: "",
      link: ""
    };
  },
  methods: {
    checkSlug() {
      this.pageName = this.$route.params.project;
      this.getData(this.pageName);
    },
    async getData(pageName) {
      const JsonFile = await import('./projects-225ff2c3.mjs');
      const myArray = JsonFile.projects;
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].pagename == pageName) {
          this.ProjectName = myArray[i].name;
          this.ProjectIntro = myArray[i].intro;
          this.detailimg1 = myArray[i].detailimg1;
          this.detailtext1 = myArray[i].detailtext1;
          this.detailimg2 = myArray[i].detailimg2;
          this.detailtext2 = myArray[i].detailtext2;
          this.link = myArray[i].link;
        }
      }
    }
  },
  mounted() {
    this.checkSlug();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<div class="details" data-v-1e16b491><h1 class="detail-name" data-v-1e16b491>${ssrInterpolate(this.ProjectName)}</h1><p class="detail-intro" data-v-1e16b491>${ssrInterpolate(this.ProjectIntro)}</p><section class="detail-sections" data-v-1e16b491><article class="detail-section-1" data-v-1e16b491><img class="detail-img"${ssrRenderAttr("src", this.detailimg1)} data-v-1e16b491><p class="detail-text" data-v-1e16b491>${ssrInterpolate(this.detailtext1)}</p></article><article class="detail-section-2" data-v-1e16b491><img class="detail-img"${ssrRenderAttr("src", this.detailimg1)} data-v-1e16b491><p class="detail-text" data-v-1e16b491>${ssrInterpolate(this.detailtext1)}</p></article></section><div class="detail-links" data-v-1e16b491>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "projects-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="red-arrow" data-v-1e16b491${_scopeId}>\u2190</span><span class="red-underline" data-v-1e16b491${_scopeId}> See more projects </span>`);
      } else {
        return [
          createVNode("span", { class: "red-arrow" }, "\u2190"),
          createVNode("span", { class: "red-underline" }, " See more projects ")
        ];
      }
    }),
    _: 1
  }, _parent));
  if (this.link != null) {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: this.link,
      class: "code-link",
      target: "_blank"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="red-underline" data-v-1e16b491${_scopeId}> See code </span><span class="red-arrow" data-v-1e16b491${_scopeId}> \u2192</span>`);
        } else {
          return [
            createVNode("span", { class: "red-underline" }, " See code "),
            createVNode("span", { class: "red-arrow" }, " \u2192")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/[project].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _project_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1e16b491"]]);

export { _project_ as default };
//# sourceMappingURL=_project_-beb65def.mjs.map
