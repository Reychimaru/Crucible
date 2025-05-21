import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/main-views/HomeView.vue'
import RegisterView from '../views/main-views/RegisterView.vue'
import RecoverView from '../views/main-views/RecoverView.vue'
import NotFoundView from '../views/main-views/NotFoundView.vue'

import FeedView from '../views/feed-views/FeedView.vue'
import FeedPostingView from '@/views/feed-views/FeedPostingView.vue'

import SettingsView from '../views/main-views/SettingsView.vue'

import ExploreView from '../views/main-views/ExploreView.vue'

import CommunityView from '@/views/community-views/CommunityView.vue'
import CommunitiesView from '@/views/community-views/CommunitiesView.vue'
import DashboardView from '@/views/community-views/DashboardView.vue'
import MembersView from '@/views/community-views/MembersView.vue'
import CommunityPostingView from '@/views/community-views/CommunityPostingView.vue'
import CreateView from '@/views/community-views/CreateView.vue'

import ProfileView from '../views/profile-views/ProfileView.vue'
import PersonalizeView from '../views/profile-views/PersonalizeView.vue'

import NotificationsView from '../views/main-views/NotificationsView.vue'

import MessagesView from '../views/main-views/MessagesView.vue'
import ChatView from '../views/main-views/ChatView.vue'
import PostView from '../views/feed-views/PostView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* ----- Home ----- */
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/recover',
      name: 'recover',
      component: RecoverView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView,
    },

    /* ----- Feed ----- */

    {
      path: '/feed',
      name: 'Feed',
      component: FeedView,
    },
    {
      path: '/feed/posting',
      name: 'FeedPosting',
      component: FeedPostingView,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsView,
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: PostView,
    },

    /* ----- Explore ----- */

    {
      path: '/explore',
      name: 'Explore',
      component: ExploreView,
    },

    /* ----- Community ----- */
    {
      path: '/communities',
      name: 'Communities',
      component: CommunitiesView,
    },
    {
      path: '/communities/create',
      name: 'CreateCommunity',
      component: CreateView,
    },
    {
      path: '/community/:id',
      name: 'Community',
      component: CommunityView,
    },
    {
      path: '/community/:id/posting',
      name: 'CommunityPosting',
      component: CommunityPostingView,
    },
    {
      path: '/community/:id/dashboard',
      name: 'CommunityDashboard',
      component: DashboardView,
    },
    {
      path: '/community/:id/members',
      name: 'Members',
      component: MembersView,
    },


    /* ----- Profile ----- */

    {
      path: '/user/:username',
      name: 'Profile',
      component: ProfileView,
    },
    {
      path: '/personalize',
      name: 'Personalize',
      component: PersonalizeView,
    },

    /* ----- Notifications ----- */

    {
      path: '/notifications',
      name: 'Notifications',
      component: NotificationsView,
    },

    /* ----- Messages ----- */

    {
      path: '/messages',
      name: 'Messages',
      component: MessagesView,
    },
    {
      path: '/chat/:username',
      name: 'Chat',
      component: ChatView,
    },

    /* ----- Other ----- */
  ],
})

export default router