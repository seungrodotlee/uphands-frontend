import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AnnounceList from "../views/AnnounceList.vue";
import AnnounceDetail from "../views/AnnounceDetail.vue";
import Auth from "../views/Auth.vue";
import BidDetail from "../views/BidDetail.vue";
import Bids from "../views/Bids.vue";
import ParticipateBid from "../views/ParticipateBid.vue";
import Login from "../views/Login.vue";
import Member from "../views/Member.vue";
import MemberList from "../views/MemberList.vue";
import NewBid from "../views/NewBid.vue";
import Profile from "../views/Profile.vue";
import QnA from "../views/QnA.vue";
import Questions from "../views/Questions.vue";
import Join from "../views/Join.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/join",
    name: "Join",
    component: Join,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/members",
    name: "Members",
    component: MemberList,
  },
  {
    path: "/member/:memberNo",
    name: "Member",
    component: Member,
  },
  {
    path: "/member/:memberName",
    name: "Member",
    component: Member,
  },
  {
    path: "/annos",
    name: "AnnounceList",
    component: AnnounceList,
  },
  {
    path: "/anno/:annoNo",
    name: "AnnounceDetail",
    component: AnnounceDetail,
  },
  {
    path: "/qna",
    name: "QnA",
    component: QnA,
  },
  {
    path: "/questions",
    name: "Questions",
    component: Questions,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/bids",
    name: "Bids",
    component: Bids,
  },
  {
    path: "/bid/:bidNo",
    name: "BidDetail",
    component: BidDetail,
  },
  {
    path: "/participate/:bidNo",
    name: "ParticipateBid",
    component: ParticipateBid,
  },
  {
    path: "/newbid",
    name: "NewBid",
    component: NewBid,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
