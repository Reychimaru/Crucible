import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/signing-views/LoginView.vue'
import RegisterView from '../views/signing-views/RegisterView.vue'
import RecoverView from '../views/signing-views/RecoverView.vue'
import NotFoundView from '../views/home-views/NotFoundView.vue'

import HomeView from '../views/home-views/HomeView.vue'
import PostingView from '@/views/home-views/PostingView.vue'

import SettingsView from '../views/profile-views/SettingsView.vue'

import ExploreView from '../views/explore-views/ExploreView.vue'
import interestsView from '../views/explore-views/InterestsView.vue'

import CommunityView from '@/views/community-views/CommunityView.vue'
import CommunitiesView from '@/views/community-views/CommunitiesView.vue'
import DashboardView from '@/views/community-views/DashboardView.vue'
import MembersView from '@/views/community-views/MembersView.vue'
import CommunityPostingView from '@/views/community-views/CommunityPostingView.vue'
import CreateView from '@/views/community-views/CreateView.vue'

import ProfileView from '../views/profile-views/ProfileView.vue'
import PersonalizeView from '../views/profile-views/PersonalizeView.vue'

import NotificationsView from '../views/notifications-views/NotificationsView.vue'

import MessagesView from '../views/chat-views/MessagesView.vue'
import ChatView from '../views/chat-views/ChatView.vue'
import PostView from '../views/home-views/PostView.vue'
import FollowersView from '@/views/profile-views/FollowersView.vue'




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
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView,
    },
    {
      path: '/posting',
      name: 'Posting',
      component: PostingView,
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

    /* ----- Signing ----- */
    {
      path: '/login',
      name: 'login',
      component: LoginView,
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

    /* ----- Explore ----- */
    {
      path: '/explore',
      name: 'Explore',
      component: ExploreView,
    },
      {
      path: '/interests',
      name: 'interests',
      component: interestsView,
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
    {
      path: '/user/:username/followers',
      name: 'Followers',
      component: FollowersView,
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