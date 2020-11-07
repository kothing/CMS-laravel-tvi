/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue';

import { store } from './store/admin'

Vue.use(plugin);
Vue.use(require('vue-cookies'));

require('./plugins/inertia-progress');
require('./plugins/toasted');

// Add ziggy route helper
Vue.prototype.$route = (...args) => route(...args).url();
Vue.prototype.$routeCheck = (...args) => route().check(...args);
Vue.prototype.$routeCurrent = (...args) => route().current(...args);

Vue.mixin({
    methods: {
        /**
         * Check whether a user has a given permission
         * @param permission - dot notation permission e.g. users.view
         * @returns {boolean}
         */
        userCan(permission = '') {
            try {
                if (this.$page.props.auth.user.super) {
                    return true;
                }

                // Get the value of the permission - if set
                let result =  permission.split('.').reduce(function(prev, curr) {
                    return prev ? prev[curr] : null
                }, this.$page.props.auth.user.permissions || self);

                // Parse the result as a bool
                return !!result;
            } catch (e) {
                return false;
            }
        },

        /**
         * Check whether a user has all of the given permissions
         * @param {array} permissions - array of dot notation permissions e.g. [users.view]
         * @returns {boolean}
         */
        userCanAll(permissions= []) {
            try {
                if (permissions.length === 0) {
                    return true;
                }

                let hasAllPermissions = true;

                permissions.forEach(permission => {
                    if (!this.userCan(permission)) {
                        hasAllPermissions = false;
                    }
                });

                return hasAllPermissions;
            } catch (e) {
                return false;
            }
        },

        /**
         * Check whether a user has any of the given permissions
         * @param {array} permissions - array of dot notation permissions e.g. [users.view]
         * @returns {boolean}
         */
        userCanAny(permissions= []) {
            try {
                if (permissions.length === 0) {
                    return true;
                }

                let hasAnyPermission = false;

                permissions.forEach(permission => {
                    if (this.userCan(permission)) {
                        hasAnyPermission = true;
                    }
                });

                return hasAnyPermission;
            } catch (e) {
                return false;
            }
        }
    }
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Global component imports
 */

// Layouts
Vue.component('admin-layout', require('./layouts/admin/AdminLayout.vue').default);
Vue.component('auth-layout', require('./layouts/auth/AuthLayout.vue').default);
Vue.component('website-layout', require('./layouts/website/WebsiteLayout.vue').default);

// Admin
Vue.component('side-menu', require('./components/admin/menus/SideMenu.vue').default);
Vue.component('top-menu', require('./components/admin/menus/TopMenu.vue').default);

// Icons
// Autoload any icons inside /components/core/icons
const iconFiles = require.context('./components/core/icons', true, /\.vue$/i);
iconFiles.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], iconFiles(key).default));

// Core
Vue.component('pagination', require('./components/core/pagination/Pagination.vue').default);

// Global Mixins
Vue.mixin({
    methods: {
        getPageErrorMessage(field) {
            try {
                let error = this.$page.props.errors[field];

                if (!error) {
                    return '';
                }

                if (Array.isArray(error)) {
                    return error[0];
                }

                return error;
            } catch (e) {
                return '';
            }
        }
    }
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const el = document.getElementById('app');

new Vue({
    store,
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`./pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(el);
