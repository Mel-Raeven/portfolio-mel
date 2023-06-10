import { _ as __nuxt_component_0$1 } from './nuxt-link-0d39ff03.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/vue/index.mjs';
import { _ as _export_sfc, u as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  name: "Navbar",
  setup() {
    useRoute();
  },
  data() {
    return {
      hamburgerOpen: false
    };
  },
  methods: {
    hamburgerMenu() {
      const navBar = document.querySelector(".navbar");
      const navList = document.querySelector(".nav-list");
      const hamburger = document.querySelector(".hamburgermenu");
      if (this.hamburgerOpen == false) {
        navBar.classList.toggle("active");
        navList.classList.toggle("active");
        hamburger.classList.toggle("active");
        return this.hamburgerOpen = true;
      } else if (this.hamburgerOpen == true) {
        navBar.classList.remove("active");
        navList.classList.remove("active");
        hamburger.classList.remove("active");
        return this.hamburgerOpen = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-cc52d03b>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "nav-name"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Mel Raeven`);
      } else {
        return [
          createTextVNode("Mel Raeven")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="nav-list" data-v-cc52d03b><li class="nav-item" data-v-cc52d03b>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "nav-text"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Portfolio`);
      } else {
        return [
          createTextVNode("Portfolio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-cc52d03b>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/#contact",
    class: "nav-text"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><button class="hamburgermenu" data-v-cc52d03b><span class="line" data-v-cc52d03b></span><span class="line" data-v-cc52d03b></span><span class="line" data-v-cc52d03b></span></button></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cc52d03b"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Navbar-d7845a96.mjs.map
