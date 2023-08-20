import { defineStore } from "pinia";

export const UPDATE_ENTRY = "UPDATE_ENTRY";
export const CREATE_NEW_STORY = "CREATE_NEW_STORY";
export const GET_GESCHICHTE = "GET_GESCHICHTE";

export interface Overview {
  id?: number;
  title?: string;
  date?: Date;
  pointsReached?: number;
  hasPlayed?: boolean;
  story?: string;
}

export const useOverviewStore = defineStore("overView", {
  state: (): Overview[] => ({
    overViews: [],
  }),
  getters: {
    points(): number {
      return this.overViews.reduce((acc, cur) => acc + cur.pointsReached, 0);
    },
    latestStory(): Overview {
      return this.overViews[this.overViews.length - 1];
    },
  },
  actions: {
    async [GET_GESCHICHTE](): void {
      this.overViews = await useFetch(`/api/geschichten`).data;
    },
    async [UPDATE_ENTRY](entry: Overview): void {
      await $fetch(`/api/geschichten`, {
        method: "put",
        body: entry,
      });

      this.GET_GESCHICHTE();
    },
    async [CREATE_NEW_STORY](): void {
      const newEntry: Overview = {
        title: "New Entry",
        story: "New Story",
      };

      await $fetch(`/api/geschichten`, {
        method: "post",
        body: newEntry,
      });
      newEntry.id = result.id;
      this.GET_GESCHICHTE();
    },
  },
});
