import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import store from "@/store";
import Cookies from "js-cookie";

@Module({ name: "auth", dynamic: true, namespaced: true, store })
class Auth extends VuexModule {
  auths: Array<string> | null = null;

  @Mutation
  SET_AUTHS(auths: Array<string> | null) {
    this.auths = auths;
  }

  @Action
  async getAuth() {
    const auths: string[] = await new Promise((resolve) => {
      setTimeout(() => {
        if (Cookies.get("vue_admin_token") === "admin") {
          resolve(["authPage", "authDirective"]);
        } else {
          resolve([]);
        }
      }, 1000);
    });
    this.SET_AUTHS(auths);
    return auths;
  }

  @Action
  clearAuth() {
    this.SET_AUTHS(null);
  }
}

export default getModule(Auth);
