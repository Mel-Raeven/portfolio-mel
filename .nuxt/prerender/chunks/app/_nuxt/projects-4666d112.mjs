import { _ as __nuxt_component_0 } from './Navbar-d7845a96.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-0d39ff03.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/vue/index.mjs';
import { _ as _export_sfc, u as useRoute } from '../server.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'file:///home/schultenbrau/Repos/portfolio-mel/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main$1 = {
  name: "ProjectCard",
  setup() {
    useRoute();
  },
  props: {
    IMG: String,
    projectcolor: String,
    ProjectName: String,
    ProjectIntro: String,
    sluglink: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: $props.sluglink,
    class: "project-card"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="information-section"${_scopeId}><img class="project-img"${ssrRenderAttr("src", $props.IMG)}${_scopeId}><div class="project-info"${_scopeId}><section class="project-name-section"${_scopeId}><span class="projectColor" style="${ssrRenderStyle({ "--projectcolor": $props.projectcolor })}"${_scopeId}></span><h1 class="project-name"${_scopeId}>${ssrInterpolate($props.ProjectName)}</h1></section><p class="project-intro"${_scopeId}>${ssrInterpolate($props.ProjectIntro)}</p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "information-section" }, [
            createVNode("img", {
              class: "project-img",
              src: $props.IMG
            }, null, 8, ["src"]),
            createVNode("div", { class: "project-info" }, [
              createVNode("section", { class: "project-name-section" }, [
                createVNode("span", {
                  class: "projectColor",
                  style: { "--projectcolor": $props.projectcolor }
                }, null, 4),
                createVNode("h1", { class: "project-name" }, toDisplayString($props.ProjectName), 1)
              ]),
              createVNode("p", { class: "project-intro" }, toDisplayString($props.ProjectIntro), 1)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      projectList: []
    };
  },
  methods: {
    async getData() {
      const JsonFile = await import('./projects-225ff2c3.mjs');
      this.projectList = JsonFile.projects;
    }
  },
  mounted() {
    this.getData();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = __nuxt_component_0;
  const _component_ProjectCard = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<section class="projects" data-v-0ea64c49><h1 class="projects-h1" data-v-0ea64c49> Projects </h1><div class="project-list" data-v-0ea64c49><!--[-->`);
  ssrRenderList($data.projectList, (p) => {
    _push(ssrRenderComponent(_component_ProjectCard, {
      key: p.id,
      ProjectName: p.name,
      IMG: p.img,
      ProjectIntro: p.intro,
      projectcolor: p.color,
      sluglink: p.slug
    }, null, _parent));
  });
  _push(`<!--]--></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0ea64c49"]]);

export { projects as default };
//# sourceMappingURL=projects-4666d112.mjs.map
